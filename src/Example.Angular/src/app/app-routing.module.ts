import { CityComponent } from './city/city.component';
import { PeopleComponent } from './people/people.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'People', pathMatch: 'full' },
  { path: 'People', component: PeopleComponent },
  { path: 'City', component: CityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
