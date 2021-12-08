import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubaSandwichComponent } from './cuba-sandwich.component';

describe('CubaSandwichComponent', () => {
  let component: CubaSandwichComponent;
  let fixture: ComponentFixture<CubaSandwichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubaSandwichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubaSandwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});