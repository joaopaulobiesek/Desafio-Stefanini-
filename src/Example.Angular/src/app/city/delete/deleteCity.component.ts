import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/services/City.service';
import { CityOneObject, CityDelete } from 'src/app/services/Dtos/CityDto';

@Component({
  selector: 'app-deleteCity',
  templateUrl: './deleteCity.component.html',
  styleUrls: ['./deleteCity.component.scss'],
})
export class DeleteCityComponent implements OnInit {
  id: number;
  name: string = "";
  uf: string = "";

  constructor(
    private service: CityService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    await this.service.getById(this.id).subscribe((city: CityOneObject) => {
      this.name = city.city.name;
      this.uf = city.city.uf;
    });
  }

  async  Delete() {
    await this.service.deleteCity(this.id).subscribe((city: CityDelete) => {
      if(city.success) this.router.navigateByUrl('City');
    });
  }
}
