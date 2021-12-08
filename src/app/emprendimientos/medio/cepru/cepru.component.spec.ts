import { ComponentFixture, TestBed } from '@angular/core/testing';


import { CepruComponent } from './cepru.component';

describe('CeproComponent', () => {
  let component: CepruComponent;
  let fixture: ComponentFixture<CepruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
