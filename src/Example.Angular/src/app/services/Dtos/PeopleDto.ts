import { CityDto } from './CityDto';

export interface PeopleDto {
  id: number;
  city: CityDto;
  name: string;
  cpf: string;
  age: number;
}

export interface PeopleRegisterDto {
  cityId: number;
  name: string;
  cpf: string;
  age: number;
}

export interface PeopleObject {
  peoples: PeopleDto[];
  success: boolean;
  error?: any;
}

export interface PeopleOneObject {
  people: PeopleDto;
  success: boolean;
  error?: any;
}

export interface PeopleDelete {
  success: boolean;
  error?: any;
}
