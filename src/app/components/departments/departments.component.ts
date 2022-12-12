import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirectoryService } from 'src/app/services/directory.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

token:any;
properties:any;

  constructor( private directoryService: DirectoryService,
               private router: Router ) {

    this.token = JSON.parse(localStorage.getItem('userData')!).token;

   }

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(){
    this.directoryService.getProperties(this.token).
    then(data => { 
        this.properties = data;
        console.log(this.properties); 
       })
       .catch( error=> { 
        console.log(error);
        } )
  }

  goEdit(departmentId:any){
    this.router.navigate(['/menu/editar-departamento'], { queryParams: { departmentId: departmentId  } });
    console.log(departmentId);
  }

}
