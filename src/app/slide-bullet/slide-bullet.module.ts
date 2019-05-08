import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlideBulletComponent } from './slide-bullet.component';
import { BulletComponentModule } from '../bullet/bullet.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, BulletComponentModule],
  declarations: [SlideBulletComponent],
  exports: [SlideBulletComponent]
})
export class SlideBulletComponentModule {}
