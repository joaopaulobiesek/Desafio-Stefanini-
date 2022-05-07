import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPeopleComponent } from './editPeople.component';

describe('EditPeopleComponent', () => {
  let component: EditPeopleComponent;
  let fixture: ComponentFixture<EditPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
