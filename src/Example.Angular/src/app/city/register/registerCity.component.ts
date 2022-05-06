import { CityDto } from './../../services/Dtos/CityDto';
import { CityService } from '../../services/City.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerCity',
  templateUrl: './registerCity.component.html',
  styleUrls: ['./registerCity.component.scss']
})
export class RegisterCityComponent {
  name: string;
  uf: string;

  constructor(private service: CityService, private router: Router) { }

  register() {
    const valorEmitir: CityDto = {
      name: this.name,
      uf: this.uf,
    };

    this.service.postCity(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.router.navigateByUrl('City')
      },
      (error) => console.error(error)
    );
  }
}
