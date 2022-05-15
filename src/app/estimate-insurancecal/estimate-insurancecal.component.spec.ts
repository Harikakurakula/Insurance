import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateInsurancecalComponent } from './estimate-insurancecal.component';

describe('EstimateInsurancecalComponent', () => {
  let component: EstimateInsurancecalComponent;
  let fixture: ComponentFixture<EstimateInsurancecalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateInsurancecalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateInsurancecalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
