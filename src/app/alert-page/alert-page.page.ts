import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Cases, Country, CovidService, IndiaData, RegionData } from './services/covid.service';
import { CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement, Title } from 'chart.js';
import { DatePipe } from '@angular/common';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-alert-page',
  templateUrl: './alert-page.page.html',
  styleUrls: ['./alert-page.page.scss'],
})
export class AlertPagePage implements OnInit {
  selectedMainOption = 'India';

  constructor() {}

  ngOnInit() {
  }
  getMainOptions(ev: any) {
    this.selectedMainOption = ev.detail.value;
  }
}

