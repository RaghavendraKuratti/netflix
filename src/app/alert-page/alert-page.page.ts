import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Cases, Country, CovidService, IndiaData, RegionData } from './services/covid.service';
import { CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement, Title } from 'chart.js';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alert-page',
  templateUrl: './alert-page.page.html',
  styleUrls: ['./alert-page.page.scss'],
})
export class AlertPagePage implements OnInit {
  countries: Country[] = [];
  totalCases: Cases;
  cases: Cases[] = [];
  indiaData: IndiaData;
  selectedCountry = '';
  selectedOption = '';
  selectedMainOption = 'India';
  selectedStateIndex = 0;
  selectedState: RegionData;
  slideOpts = {
    slidesPerView: 2.2,
  };
  slideOpts2 = {
    slidesPerView: 1.2,
  };
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  lineChart: any;

  constructor(private alert: AlertController,
    public modalController: ModalController,
    private dp: DatePipe,
    private cs: CovidService) {
      Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
     }

  ngOnInit() {
    if (this.selectedMainOption === 'India') {
      this.getIndiaData();
    } else {
      this.getCountries();
    }
  }

  getIndiaData() {
    this.cs.getStatewise().subscribe(data => {
      this.indiaData = data;
      if (data) {
        this.getStateCases();
      }
    });
  }
  getCountries() {
    this.cs.getCountries().subscribe(data => {
      if (data) {
        this.countries = data;
        this.selectedCountry = 'india';
        this.selectedOption = 'Deaths';
        this.getCountryCases();
      }
    });
  }

  getCountryCases() {
    this.cs.getCountryWiseCase(this.selectedCountry).subscribe(data => {
      if (data) {
        this.totalCases = data[data.length - 1];
        this.cases = data;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.lineChartMethod(this.cases.map(({ Deaths }) => Deaths));
      }
    });
  }

  getMainOptions(ev: any) {
    this.selectedMainOption = ev.detail.value;
    switch (this.selectedMainOption) {
      case 'India':
        this.getIndiaData();
        break;
      default:
        this.getCountries();
        break;
    }
  }

  getOptionCases(ev: any) {
    this.selectedOption = ev.detail.value;
    switch (this.selectedOption) {
      case 'Active':
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.lineChartMethod(this.cases.map(({ Active }) => Active));
        break;
      case 'Recovered':
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.lineChartMethod(this.cases.map(({ Recovered }) => Recovered));
        break;
      case 'Confirmed':
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.lineChartMethod(this.cases.map(({ Confirmed }) => Confirmed));
        break;
      default:
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.lineChartMethod(this.cases.map(({ Deaths }) => Deaths));
        break;
    }
  }
  getStateCases() {
    this.selectedState = this.indiaData.regionData[this.selectedStateIndex];
  }
  updateChart(yAxis) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    this.lineChart.data.labels = this.cases.map(({ Date }) => this.dp.transform(Date, 'MMM-yy'));
    this.lineChart.data.datasets.data = yAxis;
    this.lineChart.options.plugins.title.text = this.selectedOption;
    this.lineChart.update();
  }

  lineChartMethod(yAxis) {
    if(this.lineChart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        labels: this.cases.map(({ Date }) => this.dp.transform(Date, 'MMM-yy')),
        datasets: [
          {
            label: 'cases per month',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            data: yAxis, //this.cases.map(({ Deaths }) => Deaths),
            spanGaps: false,
          }
        ]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: this.selectedOption,
              font: {
                size: 20
            }
          }
      }
      }
    });
  }
}

