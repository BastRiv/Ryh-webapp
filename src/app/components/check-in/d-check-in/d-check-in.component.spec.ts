import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCheckInComponent } from './d-check-in.component';

describe('DCheckInComponent', () => {
  let component: DCheckInComponent;
  let fixture: ComponentFixture<DCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DCheckInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
