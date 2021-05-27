import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPagePageRoutingModule } from './alert-page-routing.module';

import { AlertPagePage } from './alert-page.page';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
import { HttpClientModule } from '@angular/common/http';
import { SafetyMeasuresComponent } from './components/safety-measures/safety-measures.component';
import { IndianStateWiseComponent } from './components/indian-state-wise/indian-state-wise.component';
import { CountryWiseComponent } from './components/country-wise/country-wise.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AlertPagePageRoutingModule
  ],
  declarations: [AlertPagePage,
    ModalpopupComponent,
    SafetyMeasuresComponent,
    CountryWiseComponent,
    IndianStateWiseComponent],
  providers: [DatePipe]
})
export class AlertPagePageModule {}
