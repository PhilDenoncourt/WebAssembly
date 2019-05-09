import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EufaDemoComponent } from './eufa-demo.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ],
  declarations: [EufaDemoComponent],
  exports: [EufaDemoComponent],
  entryComponents: [ EufaDemoComponent]
})
export class EufaDemoComponentModule {}
