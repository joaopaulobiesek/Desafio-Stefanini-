import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/services/City.service';
import { CityDto, CityObject } from 'src/app/services/Dtos/CityDto';
import { PeopleDelete, PeopleOneObject } from 'src/app/services/Dtos/PeopleDto';
import { PeopleService } from 'src/app/services/People.service';

@Component({
  selector: 'app-deletePeople',
  templateUrl: './deletePeople.component.html',
  styleUrls: ['./deletePeople.component.scss']
})
export class DeletePeopleComponent implements OnInit {
  id: number;
  cities: CityDto[];
  city: CityDto;
  name: string;
  cpf: string;
  age: number;

  constructor(private service: PeopleService, private serviceCity: CityService, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    await this.serviceCity.getAll().subscribe((city: CityObject) => {
      this.cities = city.cities;
    });

    await this.service.getById(this.id).subscribe((people: PeopleOneObject) => {
      this.city = people.people.city;
      this.name = people.people.name;
      this.cpf = people.people.cpf;
      this.age = people.people.age;
    })
  }

  async  Delete() {
    await this.service.deletePeople(this.id).subscribe((people: PeopleDelete) => {
      if(people.success) this.router.navigateByUrl('People');
    });
  }
}
