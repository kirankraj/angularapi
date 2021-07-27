import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmformsComponent } from './crmforms.component';

describe('CrmformsComponent', () => {
  let component: CrmformsComponent;
  let fixture: ComponentFixture<CrmformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
