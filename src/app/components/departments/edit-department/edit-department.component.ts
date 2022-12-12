import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DirectoryService } from 'src/app/services/directory.service';
import { DialogEditDepartmentComponent } from './dialog-edit-department/dialog-edit-department.component';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

propertyInfo:any;
token:any;
propertypk:any
serviceInfo:any;
userDataProperty = {
  name:'',
  description: '',
  address: '',
  price: '',
  status: '',
}

image:any; 
imageFront:any;
image1:any;
image2:any;
image3:any;
image4:any;
image5:any;
image6:any;

  constructor(private routes: Router,
    public dialog: MatDialog,
    private directoryService: DirectoryService,
    private route:ActivatedRoute,
    private snackBar: MatSnackBar,
    private sanitizer: DomSanitizer) { 

      this.token = JSON.parse(localStorage.getItem('userData')!).token;

      this.route.queryParams.subscribe( params => { 
        this.propertypk = params;
        console.log( this.propertypk.departmentId)
        localStorage.setItem('propertypk', this.propertypk.departmentId)
       } )
    }

  ngOnInit(): void {
    this.getServicesProperty();
    this.getPropertyInfo();
    this.preProfile();
   
  }


  preProfile(){
  	this.userDataProperty["name"] = this.propertyInfo.name
  	this.userDataProperty["description"] = this.propertyInfo.description
  	this.userDataProperty["address"] = this.propertyInfo.address
    this.userDataProperty["price"] = this.propertyInfo.price
    this.userDataProperty["status"] = this.propertyInfo.status
}

getServicesProperty() { 
  this.directoryService.getOneServicesProperty(this.token, this.propertypk.departmentId)
  .then(data => { 
     this.serviceInfo = data;
     console.log(this.serviceInfo);
   })
   .catch( error => { 
    console.log(error)
    } )
 }


  getPropertyInfo() { 
    this.directoryService.getDataProperty(this.token, this.propertypk.departmentId)
    .then( data => {
      this.propertyInfo = data; 
      this.preProfile();
      console.log(this.propertyInfo)
    } )
    .catch( error => {
      console.log(error);
    } )
  }

  updateProperty() {
    this.directoryService.updateProperty(this.token, this.userDataProperty, this.propertypk.departmentId)
    .then( data => {
      this.SnackBarGreen('Guardado correctamente', 'Descartar')
      console.log(data);
      this.routes.navigate(['/menu/departamentos'])
      
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
    const dialogRef = this.dialog.open(DialogEditDepartmentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // imagenFront($event:any){
  //   this.imageFront = $event.target.files[0];
  //   this.extraerBase64(this.imageFront).then
  //   ((imagen:any)=> {
  //     console.log(imagen)
  //     this.userDataProperty.image_front_page = imagen.base;
  //     console.log(this.userDataProperty.image_front_page)
  //   });
  // }

  // imagen1($event:any){
  //   this.image1 = $event.target.files[0];
  //   this.extraerBase64(this.image1).then
  //   ((imagen:any)=> {
  //     console.log(imagen)
  //     this.userDataProperty.image_1 = imagen.base;
  //     console.log(this.userDataProperty.image_1)
  //   });

  // }

  // imagen2($event:any){
  //   this.image2 = $event.target.files[0];
  //   this.extraerBase64(this.image2).then
  //   ((imagen:any)=> {
  //     console.log(imagen)
  //     this.userDataProperty.image_2 = imagen.base;
  //     console.log(this.userDataProperty.image_2)
  //   });

  // }
  // imagen3($event:any){
  //   this.image3 = $event.target.files[0];
  //   this.extraerBase64(this.image3).then
  //   ((imagen:any)=> {
  //     console.log(imagen)
  //     this.userDataProperty.image_3 = imagen.base;
  //     console.log(this.userDataProperty.image_3)
  //   });

  // }
  // imagen4($event:any){
  //   this.image4 = $event.target.files[0];
  //   this.extraerBase64(this.image4).then
  //   ((imagen:any)=> {
  //     console.log(imagen)
  //     this.userDataProperty.image_4 = imagen.base;
  //     console.log(this.userDataProperty.image_4)
  //   });

  // }
  // imagen5($event:any){
  //   this.image5 = $event.target.files[0];
  //   this.extraerBase64(this.image5).then
  //   ((imagen:any)=> {
  //     console.log(imagen)
  //     this.userDataProperty.image_5 = imagen.base;
  //     console.log(this.userDataProperty.image_5)
  //   });

  // }
  // imagen6($event:any){
  //   this.image6 = $event.target.files[0];
  //   this.extraerBase64(this.image6).then
  //   ((imagen:any)=> {
  //     console.log(imagen)
  //     this.userDataProperty.image_6 = imagen.base;
  //     console.log(this.userDataProperty.image_6)
  //   });

  // }

extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
  try {
    const unsafeImg = window.URL.createObjectURL($event);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () => {
      resolve({
        base: reader.result
      });
    };
    reader.onerror = error => {
      resolve({
        base: null
      });
    };
  }  catch(e) {
    return null
  }
  return 
})


}

