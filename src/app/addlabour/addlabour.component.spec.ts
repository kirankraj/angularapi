import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlabourComponent } from './addlabour.component';

describe('AddlabourComponent', () => {
  let component: AddlabourComponent;
  let fixture: ComponentFixture<AddlabourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlabourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlabourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
