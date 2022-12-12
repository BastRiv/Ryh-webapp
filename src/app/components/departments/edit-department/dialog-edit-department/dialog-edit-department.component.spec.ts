import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditDepartmentComponent } from './dialog-edit-department.component';

describe('DialogEditDepartmentComponent', () => {
  let component: DialogEditDepartmentComponent;
  let fixture: ComponentFixture<DialogEditDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
