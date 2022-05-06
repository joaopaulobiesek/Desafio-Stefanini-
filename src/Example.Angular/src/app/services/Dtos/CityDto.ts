  export interface CityDto {
      id?: number;
      name: string;
      uf: string;
  }

  export interface CityObject {
      cities: CityDto[];
      success: boolean;
      error?: any;
  }

  export interface CityOneObject {
    city: CityDto;
    success: boolean;
    error?: any;
}



