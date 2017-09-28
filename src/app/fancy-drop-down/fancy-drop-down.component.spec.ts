import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyDropDownComponent } from './fancy-drop-down.component';

describe('FancyDropDownComponent', () => {
  let component: FancyDropDownComponent;
  let fixture: ComponentFixture<FancyDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
