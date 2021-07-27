import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPerformConstingComponent } from './work-perform-consting.component';

describe('WorkPerformConstingComponent', () => {
  let component: WorkPerformConstingComponent;
  let fixture: ComponentFixture<WorkPerformConstingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPerformConstingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPerformConstingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
