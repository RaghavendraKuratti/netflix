import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPagePageRoutingModule } from './alert-page-routing.module';

import { AlertPagePage } from './alert-page.page';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AlertPagePageRoutingModule
  ],
  declarations: [AlertPagePage, ModalpopupComponent],
  providers: [DatePipe]
})
export class AlertPagePageModule {}
