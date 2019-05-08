import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatIsWasmComponent } from './what-is-wasm.component';
import { BulletComponentModule} from '../bullet/bullet.module';
import { SlideBulletComponentModule} from '../slide-bullet/slide-bullet.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, BulletComponentModule, SlideBulletComponentModule],
  declarations: [WhatIsWasmComponent],
  exports: [WhatIsWasmComponent]
})
export class WhatIsWasmComponentModule {}
