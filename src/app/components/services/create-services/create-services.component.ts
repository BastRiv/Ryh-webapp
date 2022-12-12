import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DirectoryService } from 'src/app/services/directory.service';

@Component({
  selector: 'app-create-services',
  templateUrl: './create-services.component.html',
  styleUrls: ['./create-services.component.css']
})
export class CreateServicesComponent implements OnInit {

name:any;
token:any;
  constructor( private snackBar: MatSnackBar,
               private directoryService: DirectoryService,
               private route: Router ) { 

                this.token = JSON.parse(localStorage.getItem('userData')!).token;
               }

  ngOnInit(): void {
  }


 createService() {
  let data= {
    name : this.name,
  }
  this.directoryService.createServices(this.token, data)
  .then( data => {
    console.log(data);
    this.SnackBarGreen('Servicio agregado correctamente','Descartar')
    this.route.navigateByUrl('/menu/servicios')
  })
  .catch( error => {
    console.log(error);
    this.snackBarRed('Ocurrío un problema al intentar agregar servicio', 'Descartar')
  } )
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
