import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private url = 'http://51.222.56.238:5012/api/People';

constructor() { }

}
