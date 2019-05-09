import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TalkTitleComponentModule } from '../talk-title/talk-title.module';
import { WhatIsWasmComponentModule } from '../what-is-wasm/what-is-wasm.module';
import { WhyWasmComponentModule } from '../why-wasm/why-wasm.module';
import { AvailabilityComponentModule } from '../availability/availability.module';
import { PortabilityComponentModule } from '../portability/portability.module';
import { SandboxComponentModule } from '../sandbox/sandbox.module';
import { HistoryOfWasmComponentModule } from '../history-of-wasm/history-of-wasm.module';
import { WhatsItLookLikeComponentModule } from '../whats-it-look-like/whats-it-look-like.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    TalkTitleComponentModule,
    WhatIsWasmComponentModule,
    WhyWasmComponentModule,
    AvailabilityComponentModule,
    PortabilityComponentModule,
    SandboxComponentModule,
    HistoryOfWasmComponentModule,
    WhatsItLookLikeComponentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
