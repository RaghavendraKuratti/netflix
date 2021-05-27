import { Component, OnInit } from '@angular/core';
import { CovidService, IndiaData, RegionData } from '../../services/covid.service';

@Component({
  selector: 'app-indian-state-wise',
  templateUrl: './indian-state-wise.component.html',
  styleUrls: ['./indian-state-wise.component.scss'],
})
export class IndianStateWiseComponent implements OnInit {

  indiaData: IndiaData;
  selectedStateIndex = 0;
  selectedState: RegionData;
  slideOpts2 = {
    slidesPerView: 1.2,
  };
  constructor(private cs: CovidService) { }

  ngOnInit() {
    this.getIndiaData();
  }


  getIndiaData() {
    this.cs.loadingPresent();
    this.cs.getStatewise().subscribe(data => {
      this.indiaData = data;
      this.cs.loadingDismiss();
      if (data) {
        this.getStateCases();
      }
    });
  }
  getStateCases() {
    this.selectedState = this.indiaData.regionData[this.selectedStateIndex];
  }
}
