import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwowComponent } from './softwow.component';

describe('SoftwowComponent', () => {
  let component: SoftwowComponent;
  let fixture: ComponentFixture<SoftwowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
