import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityDto } from './Dtos/CityDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private citys: CityDto[];
  private url = 'http://51.222.56.238:5012/api/City';

  constructor(private httpClient: HttpClient) {
    this.citys = [];
  }

  getAll(): Observable<CityDto[]>{
    return this.httpClient.get<CityDto[]>(this.url);
  }
}
