import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPerformDetailsComponent } from './work-perform-details.component';

describe('WorkPerformDetailsComponent', () => {
  let component: WorkPerformDetailsComponent;
  let fixture: ComponentFixture<WorkPerformDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPerformDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPerformDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
