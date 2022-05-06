import { Component, OnInit } from '@angular/core';
import { PeopleObject, PeopleDto } from '../services/Dtos/PeopleDto';
import { PeopleService } from '../services/People.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  peoples: PeopleDto[];

  constructor(private service: PeopleService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((people: PeopleObject) => {
      this.peoples = people.peoples;
    });
  }
}
