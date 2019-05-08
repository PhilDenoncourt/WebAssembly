import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SandboxComponent } from './sandbox.component';
import { SlideBulletComponentModule } from '../slide-bullet/slide-bullet.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, SlideBulletComponentModule],
  declarations: [SandboxComponent],
  exports: [SandboxComponent]
})
export class SandboxComponentModule {}
