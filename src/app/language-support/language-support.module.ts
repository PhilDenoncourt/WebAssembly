import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguageSupportComponent } from './language-support.component';
import { SlideBulletComponentModule} from '../slide-bullet/slide-bullet.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, SlideBulletComponentModule],
  declarations: [LanguageSupportComponent],
  exports: [LanguageSupportComponent]
})
export class LanguageSupportComponentModule {}
