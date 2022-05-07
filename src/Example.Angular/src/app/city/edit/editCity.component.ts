import { CityDto, CityOneObject } from './../../services/Dtos/CityDto';
import { CityService } from '../../services/City.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editCity',
  templateUrl: './editCity.component.html',
  styleUrls: ['./editCity.component.scss']
})
export class EditCityComponent implements OnInit{
  id: number;
  name: string = "";
  uf: string = "";

  constructor(private service: CityService, private router: Router,private route: ActivatedRoute) {}

  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    await this.service.getById(this.id).subscribe((city: CityOneObject) => {
      this.name = city.city.name;
      this.uf = city.city.uf;
    });
  }

  Edit() {
    const valorEmitir: CityDto = {
      id: this.id,
      name: this.name,
      uf: this.uf,
    };

    this.service.putCity(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.router.navigateByUrl('City')
      },
      (error) => console.error(error)
    );
  }

}
