import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePeopleComponent } from './deletePeople.component';

describe('DeletePeopleComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeletePeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletePeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
