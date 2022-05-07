import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './people/list/people.component';
import { CityComponent } from './city/list/city.component';
import { RegisterCityComponent } from './city/register/registerCity.component';
import { EditCityComponent } from './city/edit/editCity.component';
import { DeleteCityComponent } from './city/delete/deleteCity.component';
import { RegisterPeopleComponent } from './people/register/registerPeople.component';
import { EditPeopleComponent } from './people/edit/editPeople.component';
import { DeletePeopleComponent } from './people/delete/deletePeople.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, PeopleComponent, CityComponent, RegisterCityComponent, EditCityComponent, DeleteCityComponent, RegisterPeopleComponent, EditPeopleComponent, DeletePeopleComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
