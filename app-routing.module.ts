import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './Employee/app.employee.component';
import { HomeComponent } from './home.component';
import { UsersComponent } from './Users';
// import { AppComponent } from './app.component';

const routes: Routes = [{path:"",component:HomeComponent},
{path:"users",component:UsersComponent},
{path:"users/users",component:UsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})



export class AppRoutingModule { }


