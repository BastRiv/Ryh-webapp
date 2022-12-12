import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirectoryService } from 'src/app/services/directory.service';

@Component({
  selector: 'app-dialog-edit-department',
  templateUrl: './dialog-edit-department.component.html',
  styleUrls: ['./dialog-edit-department.component.css']
})
export class DialogEditDepartmentComponent implements OnInit {

  token:any;
  propertypk:any;
    constructor(private routes: Router,
                private directoryService: DirectoryService,) {
  
      this.token = JSON.parse(localStorage.getItem('userData')!).token;
      this.propertypk = JSON.parse(localStorage.getItem('propertypk')!);
  
     }
  
    ngOnInit(): void {
    }
  
   
    
  
    
      deleteProperty() {
        this.directoryService.DeletProperty(this.token, this.propertypk)
        .then( data => { 
          console.log(data);
          this.routes.navigate(['/menu/departamentos']).then ( ()=>{
            window.location.reload();
          });
        } )
        .catch( error => {
          console.log(error);
        } )
      }
}
