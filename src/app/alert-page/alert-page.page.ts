import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';

@Component({
  selector: 'app-alert-page',
  templateUrl: './alert-page.page.html',
  styleUrls: ['./alert-page.page.scss'],
})
export class AlertPagePage implements OnInit {

  constructor(private alert: AlertController,
    public modalController: ModalController) { }

  ngOnInit() {
  }
  async showAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }
    ]
    });
    await alert.present();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalpopupComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        firstName: 'Douglas',
        lastName: 'Adams',
        middleInitial: 'N'
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
  }

}
