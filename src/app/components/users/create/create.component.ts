import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DirectoryService } from 'src/app/services/directory.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

 data = {
    first_name: '',
    last_name: '',
    type_user: '',
    join_date: '',
    email:'',
    password:'',
    username:''
  }
token:any;
password2:any;
valueUser:any;

  constructor( private directoryService: DirectoryService,
               private snackBar: MatSnackBar,
               private route: Router ) {
            
    this.token = JSON.parse(localStorage.getItem('userData')!).token;
   }

  ngOnInit(): void {
  }

createUser() {


  let date = new Date();
  this.data.join_date = date.toLocaleDateString();
  this.data.type_user = this.valueUser;
  if(this.data.password == this.password2){
    this.directoryService.createUser(this.data, this.token)
    .then( data => {
      console.log('OK', data);
      this.SnackBarGreen('Usuario creado correctamente', 'Descartar')
      this.route.navigateByUrl('/menu/usuarios')
    } )
    .catch( error => {
      console.log(error);
      this.snackBarRed('Error, correo ya registrado', 'Descartar');
    } )
  }
  else if(this.data.password != this.password2) {
    this.snackBarRed('Error, las contraseñas no coinciden', 'Descartar');
  }
  else if(this.data.first_name == '' || this.data.last_name == '' || this.data.type_user == '' || this.data.email == '' || this.data.password == '') {
    this.snackBarRed('Debe ingresar todos los campos', 'Descartar');
  }
}

userValue($event:any) {
  this.valueUser = parseInt($event.value)
  console.log(this.valueUser)
}

snackBarRed(message: string, action: string) {
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


}
