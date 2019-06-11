import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WasmPackageManagerComponent } from './wasm-package-manager.component';

describe('WasmPackageManagerComponent', () => {
  let component: WasmPackageManagerComponent;
  let fixture: ComponentFixture<WasmPackageManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WasmPackageManagerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WasmPackageManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
