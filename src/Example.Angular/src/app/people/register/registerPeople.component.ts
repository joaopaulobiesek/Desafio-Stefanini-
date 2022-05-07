import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from 'src/app/services/City.service';
import { CityDto, CityObject } from 'src/app/services/Dtos/CityDto';
import { PeopleRegisterDto } from 'src/app/services/Dtos/PeopleDto';
import { PeopleService } from 'src/app/services/People.service';

@Component({
  selector: 'app-register',
  templateUrl: './registerPeople.component.html',
  styleUrls: ['./registerPeople.component.scss']
})
export class RegisterPeopleComponent implements OnInit {
  cities: CityDto[];
  city: CityDto;
  name: string;
  cpf: string;
  age: number;

  constructor(private service: PeopleService, private serviceCity: CityService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.serviceCity.getAll().subscribe((city: CityObject) => {
      this.cities = city.cities;
    });
  }

  register() {
    const valorEmitir: PeopleRegisterDto = {
      cityId: this.city.id,
      name: this.name,
      cpf: this.cpf,
      age: this.age,
    };

    this.service.postPeople(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.router.navigateByUrl('People')
      },
      (error) => console.error(error)
    );
  }
}
