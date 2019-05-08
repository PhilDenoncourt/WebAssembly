import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBulletComponent } from './slide-bullet.component';

describe('SlideBulletComponent', () => {
  let component: SlideBulletComponent;
  let fixture: ComponentFixture<SlideBulletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideBulletComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
