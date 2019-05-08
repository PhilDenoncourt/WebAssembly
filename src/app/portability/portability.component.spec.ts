import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortabilityComponent } from './portability.component';

describe('PortabilityComponent', () => {
  let component: PortabilityComponent;
  let fixture: ComponentFixture<PortabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortabilityComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
