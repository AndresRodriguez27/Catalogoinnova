import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtesaniaComponent } from './artesania.componet';

describe('ArtesaniaComponent', () => {
  let component: ArtesaniaComponent;
  let fixture: ComponentFixture<ArtesaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtesaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtesaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});