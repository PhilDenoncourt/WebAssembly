import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatsItLookLikeComponent } from './whats-it-look-like.component';
import { EufaDemoComponentModule } from '../eufa-demo/eufa-demo.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, EufaDemoComponentModule],
  declarations: [WhatsItLookLikeComponent],
  exports: [WhatsItLookLikeComponent]
})
export class WhatsItLookLikeComponentModule {}
