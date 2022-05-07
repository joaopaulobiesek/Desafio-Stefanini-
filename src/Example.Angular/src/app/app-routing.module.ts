import { CityComponent } from './city/list/city.component';
import { PeopleComponent } from './people/list/people.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCityComponent } from './city/register/registerCity.component';
import { EditCityComponent } from './city/edit/editCity.component';
import { DeleteCityComponent } from './city/delete/deleteCity.component';
import { RegisterPeopleComponent } from './people/register/registerPeople.component';
import { EditPeopleComponent } from './people/edit/editPeople.component';
import { DeletePeopleComponent } from './people/delete/deletePeople.component';

const routes: Routes = [
  { path: '', redirectTo: 'People', pathMatch: 'full' },
  { path: 'People', component: PeopleComponent },
  { path: 'PeopleRegister', component: RegisterPeopleComponent },
  { path: 'PeopleEdit/:id', component: EditPeopleComponent },
  { path: 'PeopleDelete/:id', component: DeletePeopleComponent },
  { path: 'City', component: CityComponent },
  { path: 'CityRegister', component: RegisterCityComponent },
  { path: 'CityEdit/:id', component: EditCityComponent },
  { path: 'CityDelete/:id', component: DeleteCityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
