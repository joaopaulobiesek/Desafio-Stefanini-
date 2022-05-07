import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleObject, PeopleRegisterDto, PeopleOneObject, PeopleUpdateDto, PeopleDelete } from './Dtos/PeopleDto';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private url = 'http://51.222.56.238:5012/api/People';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<PeopleObject> {
    return this.httpClient.get<PeopleObject>(this.url);
  }

  getById(id: number): Observable<PeopleOneObject> {
    return this.httpClient.get<PeopleOneObject>(this.url + '/' + id);
  }

  postPeople(people: PeopleRegisterDto): Observable<PeopleRegisterDto> {
    return this.httpClient.post<PeopleRegisterDto>(this.url, people);
  }

  putPeople(people: PeopleUpdateDto): Observable<PeopleUpdateDto> {
    return this.httpClient.put<PeopleUpdateDto>(this.url + '/' + people.id, people);
  }

  deletePeople(id: number): Observable<PeopleDelete> {
    return this.httpClient.delete<PeopleDelete>(this.url + '/' + id);
  }
}
