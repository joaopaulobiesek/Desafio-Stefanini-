import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/services/City.service';
import { CityDto, CityObject } from 'src/app/services/Dtos/CityDto';
import { PeopleOneObject } from 'src/app/services/Dtos/PeopleDto';
import { PeopleService } from 'src/app/services/People.service';

@Component({
  selector: 'app-edit',
  templateUrl: './editPeople.component.html',
  styleUrls: ['./editPeople.component.scss']
})
export class EditPeopleComponent implements OnInit {
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
      console.log(people.people.city)
     this.city = people.people.city;
     this.name = people.people.name;
     this.cpf = people.people.cpf;
     this.age = people.people.age;
    })
  }
  Edit() {

  }

}
