import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {EufaDemoComponent} from '../eufa-demo/eufa-demo.component';

@Component({
  selector: 'app-whats-it-look-like',
  templateUrl: './whats-it-look-like.component.html',
  styleUrls: ['./whats-it-look-like.component.scss'],
})
export class WhatsItLookLikeComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async showTheDialog() {
    const modal = await this.modalController.create({
      component: EufaDemoComponent
    });

    return await modal.present();
  }

}
