import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NHSFoundationTrustComponent } from './nhs-foundation-trust.component';

describe('NHSFoundationTrustComponent', () => {
  let component: NHSFoundationTrustComponent;
  let fixture: ComponentFixture<NHSFoundationTrustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NHSFoundationTrustComponent]
    });
    fixture = TestBed.createComponent(NHSFoundationTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
