import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TalkTitleComponent } from './talk-title.component';

@NgModule({
  imports: [ CommonModule, FormsModule,IonicModule,],
  declarations: [TalkTitleComponent],
  exports: [TalkTitleComponent]
})
export class TalkTitleComponentModule {}
