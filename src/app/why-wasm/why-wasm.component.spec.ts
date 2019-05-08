import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWasmComponent } from './why-wasm.component';

describe('WhyWasmComponent', () => {
  let component: WhyWasmComponent;
  let fixture: ComponentFixture<WhyWasmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyWasmComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyWasmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
