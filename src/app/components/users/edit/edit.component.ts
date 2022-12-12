import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DirectoryService } from 'src/app/services/directory.service';

import { DialogEditComponent } from './dialog-edit/dialog-edit.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
userDataProfile = {
email: "", 
first_name: "", 
last_name: "",  
join_date: "",
type_user: "",
password: ""
}

token:any;
password2:any;
userpk:any;
userInfo:any;

constructor(private routes: Router,
            public dialog: MatDialog,
            private directoryService: DirectoryService,
            private route:ActivatedRoute,
            private snackBar: MatSnackBar) { 

    this.token = JSON.parse(localStorage.getItem('userData')!).token;

    this.route.queryParams.subscribe( params => { 
      this.userpk = params;
      console.log(this.userpk.userId)
      localStorage.setItem('userpk', this.userpk.userId)
     } )

  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() { 
    this.directoryService.getDataUser(this.token, this.userpk.userId)
    .then( data => {
      this.userInfo = data; 
      this.preProfile();
      console.log(this.userInfo)
    } )
    .catch( error => {
      console.log(error);
    } )
  }

  preProfile(){
  	this.userDataProfile["email"] = this.userInfo.email
  	this.userDataProfile["first_name"] = this.userInfo.first_name
  	this.userDataProfile["last_name"] = this.userInfo.last_name
    this.userDataProfile["type_user"] = this.userInfo.type_user
    this.userDataProfile["join_date"] = this.userInfo.join_date
    this.userDataProfile["password"] = this.userInfo.password

}

  

updateUser() {
    this.directoryService.updateUser(this.token, this.userDataProfile, this.userpk.userId)
    .then( data => {
      this.SnackBarGreen('Guardado correctamente', 'Descartar')
      console.log(data);
      this.routes.navigate(['/menu/usuarios'])
      
    })
    .catch( error => {
      console.log(error);
      this.SnackBarRed('No se pudieron guardar los cambios', 'Descartar'); 
    } )
  }


  SnackBarRed(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration:5000,
      panelClass: ['red-snackbar']
    });
  }
  
  SnackBarGreen(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration:5000,
      panelClass: ['green-snackbar']
    });
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogEditComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

