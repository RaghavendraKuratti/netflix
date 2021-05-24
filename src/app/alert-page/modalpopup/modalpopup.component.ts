import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.scss'],
})
export class ModalpopupComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;
  constructor(public modalController: ModalController) { }

  ngOnInit() {}
close() {
  this.modalController.dismiss({data: 'Raghu is Back'});
}
}
