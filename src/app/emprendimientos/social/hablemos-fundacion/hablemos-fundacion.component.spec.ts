import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HablemosFundacionComponent } from './hablemos-fundacion.component';

describe('HablemosFundacionComponent', () => {
  let component: HablemosFundacionComponent;
  let fixture: ComponentFixture<HablemosFundacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HablemosFundacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HablemosFundacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
