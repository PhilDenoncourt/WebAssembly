import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebassemblyStudioComponent } from './webassembly-studio.component';

describe('WebassemblyStudioComponent', () => {
  let component: WebassemblyStudioComponent;
  let fixture: ComponentFixture<WebassemblyStudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebassemblyStudioComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebassemblyStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
