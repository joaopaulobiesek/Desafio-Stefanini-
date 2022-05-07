import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityObject, CityDto, CityOneObject,CityDelete } from './Dtos/CityDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private url = 'http://51.222.56.238:5012/api/City';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<CityObject> {
    return this.httpClient.get<CityObject>(this.url);
  }

  getById(id: number): Observable<CityOneObject> {
    return this.httpClient.get<CityOneObject>(this.url+ '/' + id);
  }

  postCity(city: CityDto): Observable<CityDto> {
    return this.httpClient.post<CityDto>(this.url, city);
  }

  putCity(city: CityDto): Observable<CityDto> {
    return this.httpClient.put<CityDto>(this.url + '/' + city.id, city);
  }

  deleteCity(id: number): Observable<CityDelete> {
   return this.httpClient.delete<CityDelete>(this.url + '/' + id);
  }
}
