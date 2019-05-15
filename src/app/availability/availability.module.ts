import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvailabilityComponent } from './availability.component';
import { SlideBulletComponentModule } from '../slide-bullet/slide-bullet.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, SlideBulletComponentModule],
  declarations: [AvailabilityComponent],
  exports: [AvailabilityComponent]
})
export class AvailabilityComponentModule {}
