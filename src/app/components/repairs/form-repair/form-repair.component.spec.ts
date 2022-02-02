import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRepairComponent } from './form-repair.component';

describe('FormRepairComponent', () => {
  let component: FormRepairComponent;
  let fixture: ComponentFixture<FormRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRepairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
