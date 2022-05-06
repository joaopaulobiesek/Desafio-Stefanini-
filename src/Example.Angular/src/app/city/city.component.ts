import { CityService } from './../services/City.service';
import { Component, OnInit } from '@angular/core';
import { CityDto } from '../services/Dtos/CityDto';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  cities: CityDto[];

  constructor(private service: CityService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((cities: CityDto[])=>{
      console.table(cities);
      this.cities = cities;
    })
  }

}
