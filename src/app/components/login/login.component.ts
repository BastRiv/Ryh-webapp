import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData = {"username": "", "password": ""} ;
  responseData: any;
  showError: boolean = false;
  token:any;
  

  constructor(private routes: Router,
              private authService: AuthserviceService,
              private snackBar: MatSnackBar,
              ) { }


  ngOnInit() {
    const token = localStorage.getItem('userData'); 
    if(token != null) {
      this.routes.navigate(['/menu/usuarios'])
      console.log('OK',token)
    }
  }

  login(){

    this.authService.postData(this.userData).then((result) => {
     this.responseData = result;
     console.log(this.responseData);
     localStorage.setItem('userData', JSON.stringify(this.responseData));
     this.token = JSON.parse(localStorage.getItem('userData')|| '{}').token; 
     this.authService.getData(this.token).then((result) => {
      localStorage.setItem('profileData', JSON.stringify(result));
      }, (error) => {
          console.log(error);
      });
       
     this.routes.navigate(['/menu/usuarios']);
    
     
      

    }, (error) => {
      console.log(error);
      this.snackBarRed('Usuario y/o contraseña incorrecto', 'Descartar');
      this.showError = true;
   });

}

snackBarRed(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration:5000,
    panelClass: ['red-snackbar']
  });
}

}



