import { CityDto } from "./CityDto";

export interface PeopleDto {
  id: number;
  city: CityDto;
  name: string;
  cpf: string;
  age: number;
}