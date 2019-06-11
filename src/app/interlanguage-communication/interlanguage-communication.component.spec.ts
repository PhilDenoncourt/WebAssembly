import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterlanguageCommunicationComponent } from './interlanguage-communication.component';

describe('InterlanguageCommunicationComponent', () => {
  let component: InterlanguageCommunicationComponent;
  let fixture: ComponentFixture<InterlanguageCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterlanguageCommunicationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterlanguageCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
