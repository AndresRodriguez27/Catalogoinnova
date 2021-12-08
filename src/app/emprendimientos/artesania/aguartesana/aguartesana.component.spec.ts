import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguartesanaComponent } from './aguartesana.component';

describe('AguartesanaComponent', () => {
  let component: AguartesanaComponent;
  let fixture: ComponentFixture<AguartesanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AguartesanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AguartesanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});