import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfintroComponent } from './profintro.component';

describe('ProfintroComponent', () => {
  let component: ProfintroComponent;
  let fixture: ComponentFixture<ProfintroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfintroComponent]
    });
    fixture = TestBed.createComponent(ProfintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
