import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhyWasmComponent } from './why-wasm.component';
import { SlideBulletComponentModule } from '../slide-bullet/slide-bullet.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, SlideBulletComponentModule],
  declarations: [WhyWasmComponent],
  exports: [WhyWasmComponent]
})
export class WhyWasmComponentModule {}
