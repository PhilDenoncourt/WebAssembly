import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsWasmComponent } from './what-is-wasm.component';

describe('WhatIsWasmComponent', () => {
  let component: WhatIsWasmComponent;
  let fixture: ComponentFixture<WhatIsWasmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsWasmComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsWasmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
