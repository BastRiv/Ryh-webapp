import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { CreateComponent } from './components/users/create/create.component';

const routes: Routes = [ 
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},

  {path: 'menu',
    loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule)},

  {path:'**', redirectTo:'login'},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
