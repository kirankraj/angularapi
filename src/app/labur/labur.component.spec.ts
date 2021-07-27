import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaburComponent } from './labur.component';

describe('LaburComponent', () => {
  let component: LaburComponent;
  let fixture: ComponentFixture<LaburComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaburComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaburComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
