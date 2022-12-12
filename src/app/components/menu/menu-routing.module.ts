import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from '../check-in/check-in.component';
import { CheckOutComponent } from '../check-out/check-out.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CreateDepartmentComponent } from '../departments/create-department/create-department.component';
import { DepartmentsComponent } from '../departments/departments.component';
import { EditDepartmentComponent } from '../departments/edit-department/edit-department.component';
import { CreateServicesComponent } from '../services/create-services/create-services.component';
import { ServicesComponent } from '../services/services.component';
import { CreateComponent } from '../users/create/create.component';
import { EditComponent } from '../users/edit/edit.component';
import { UsersComponent } from '../users/users.component';
import { WaitingComponent } from '../waiting/waiting.component';

import { MenuComponent } from './menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [ 
      {
        path:'dashboard',
        component:DashboardComponent    
      },
      {
        path: 'usuarios',
        component:UsersComponent
      },
      {
        path: 'departamentos',
        component: DepartmentsComponent
      },

      {
        path: 'check-in', 
        component: CheckInComponent},
      {
        path: 'check-out', 
        component: CheckOutComponent
      },
      {
        path: 'crear', 
        component: CreateComponent
      },
      {
        path: 'editar', 
        component: EditComponent
      },
      {
        path: 'crear-departamento', 
        component: CreateDepartmentComponent
      },
      {
        path: 'editar-departamento', 
        component: EditDepartmentComponent
      },
      {
        path: 'en-espera', 
        component: WaitingComponent
      },
      {
        path: 'servicios', 
        component: ServicesComponent
      },
      {
        path: 'agregar-servicio', 
        component: CreateServicesComponent
      },
      
     ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
