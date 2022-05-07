import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPeopleComponent } from './registerPeople.component';

describe('RegisterPeopleComponent', () => {
  let component: RegisterPeopleComponent;
  let fixture: ComponentFixture<RegisterPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
