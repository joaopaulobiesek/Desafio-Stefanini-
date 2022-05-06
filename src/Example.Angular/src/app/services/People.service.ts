import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleObject } from './Dtos/PeopleDto';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private url = 'http://51.222.56.238:5012/api/People';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<PeopleObject> {
    return this.httpClient.get<PeopleObject>(this.url);
  }
}
