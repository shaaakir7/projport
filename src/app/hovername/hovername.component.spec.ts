import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HovernameComponent } from './hovername.component';

describe('HovernameComponent', () => {
  let component: HovernameComponent;
  let fixture: ComponentFixture<HovernameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HovernameComponent]
    });
    fixture = TestBed.createComponent(HovernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
