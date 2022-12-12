import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule }  from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { UsersComponent } from './components/users/users.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { CreateComponent } from './components/users/create/create.component';
import { EditComponent } from './components/users/edit/edit.component';
import { DialogEditComponent } from './components/users/edit/dialog-edit/dialog-edit.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { EditDepartmentComponent } from './components/departments/edit-department/edit-department.component';
import { CreateDepartmentComponent } from './components/departments/create-department/create-department.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { ServicesComponent } from './components/services/services.component';
import { DialogEditDepartmentComponent } from './components/departments/edit-department/dialog-edit-department/dialog-edit-department.component';
import { CreateServicesComponent } from './components/services/create-services/create-services.component';
import {MatCheckboxModule} from '@angular/material/checkbox';









@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DepartmentsComponent,
    UsersComponent,
    CheckInComponent,
    CheckOutComponent,
    LoginComponent,
    MenuComponent,
    CreateComponent,
    EditComponent,
    DialogEditComponent,
    EditDepartmentComponent,
    CreateDepartmentComponent,
    WaitingComponent,
    ServicesComponent,
    DialogEditDepartmentComponent,
    CreateServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
