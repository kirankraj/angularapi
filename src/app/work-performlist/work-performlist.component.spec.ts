import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPerformlistComponent } from './work-performlist.component';

describe('WorkPerformlistComponent', () => {
  let component: WorkPerformlistComponent;
  let fixture: ComponentFixture<WorkPerformlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPerformlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPerformlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
