import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCityComponent } from './deleteCity.component';

describe('DeleteCityComponent', () => {
  let component: DeleteCityComponent;
  let fixture: ComponentFixture<DeleteCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
