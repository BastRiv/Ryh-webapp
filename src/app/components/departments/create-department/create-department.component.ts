import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DirectoryService } from 'src/app/services/directory.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  data = {
    name:'',
    image_front_page:'',
    image_1: '',
    image_2: '',
    image_3: '',
    image_4: '',
    image_5: '',
    image_6: '',
    description: '',
    address: '',
    price: '',
    status: '',
}
image:any; 
token:any;
imageFront:any;
image1:any;
image2:any;
image3:any;
image4:any;
image5:any;
image6:any;
servicesInfo:any;
checked = false;
indeterminate = false;
disabled = false;
servicePk:any;
quantity={
  value:""
}
propertyInfo:any;

  constructor( private directoryService: DirectoryService,
              private snackBar: MatSnackBar, 
              private route: Router,
              private sanitizer: DomSanitizer) {

    this.token = JSON.parse(localStorage.getItem('userData')!).token;
   }

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.directoryService.getServices(this.token)
    .then( data => {
      this.servicesInfo = data;
      console.log(this.servicesInfo)
    } )
    .catch( error => {
      console.log(error);
    } )
  }
  
  valueCheckbox($event:any){
    this.servicePk = $event.source.value;
  }

  createPropertyService(propertyPk:any){
    let data={
      property:propertyPk,
      service: this.servicePk,
      quantity: this.quantity["value"]
    }
    console.log(data); 
    this.directoryService.createPropertyService(this.token, data)
    .then( data => {
      console.log(data);
    } )
    .catch( error => {
      console.log(error);
    } )
  }

  imagenFront($event:any){
    this.imageFront = $event.target.files[0];
    this.extraerBase64(this.imageFront).then
    ((imagen:any)=> {
      this.data.image_front_page = imagen.base;
    });
  }

  imagen1($event:any){
    this.image1 = $event.target.files[0];
    this.extraerBase64(this.image1).then
    ((imagen:any)=> {
      this.data.image_1 = imagen.base;
    });

  }

  imagen2($event:any){
    this.image2 = $event.target.files[0];
    this.extraerBase64(this.image2).then
    ((imagen:any)=> {
      this.data.image_2 = imagen.base;
    });

  }
  imagen3($event:any){
    this.image3 = $event.target.files[0];
    this.extraerBase64(this.image3).then
    ((imagen:any)=> {
      this.data.image_3 = imagen.base;
    });

  }
  imagen4($event:any){
    this.image4 = $event.target.files[0];
    this.extraerBase64(this.image4).then
    ((imagen:any)=> {
      this.data.image_4 = imagen.base;
    });

  }
  imagen5($event:any){
    this.image5 = $event.target.files[0];
    this.extraerBase64(this.image5).then
    ((imagen:any)=> {
      this.data.image_5 = imagen.base;
    });

  }
  imagen6($event:any){
    this.image6 = $event.target.files[0];
    this.extraerBase64(this.image6).then
    ((imagen:any)=> {
      console.log(imagen)
      this.data.image_6 = imagen.base;
    });

  }

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

createProperty() {
  this.directoryService.createProperty(this.token, this.data)
  .then( data => {
    console.log(data);
    this.propertyInfo = data;
    this.createPropertyService(this.propertyInfo.pk)
    this.route.navigateByUrl('/menu/departamentos')
    this.SnackBarGreen('Departamento creado correctamente', 'Descartar')
    
  } )
  .catch( error => {
    console.log(error);
    this.SnackBarRed('Ocurrió un error al intentar crear el departamento','Descartar')
  })
}

SnackBarGreen(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration:5000,
    panelClass: ['green-snackbar']
  });
}

SnackBarRed(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration:5000,
    panelClass: ['red-snackbar']
  });
}

}
