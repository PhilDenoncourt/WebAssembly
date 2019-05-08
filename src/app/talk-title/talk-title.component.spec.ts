import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkTitleComponent } from './talk-title.component';

describe('TalkTitleComponent', () => {
  let component: TalkTitleComponent;
  let fixture: ComponentFixture<TalkTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkTitleComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
