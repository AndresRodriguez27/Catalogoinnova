import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KfrutComponent } from './kfrut.component';

describe('KfrutComponent', () => {
  let component: KfrutComponent;
  let fixture: ComponentFixture<KfrutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KfrutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KfrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});