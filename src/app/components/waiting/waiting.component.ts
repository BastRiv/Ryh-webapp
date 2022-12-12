import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirectoryService } from 'src/app/services/directory.service';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit {

  token:any;
  properties:any;
    constructor( private directoryService: DirectoryService,
                 private route: Router ) {
  
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

  confirmReservation(property:any) {
   let  data = {
			status: 2,
    }
    this.directoryService.updateProperty(this.token, data, property.pk)
    .then( data => {
      console.log(data);
      this.route.navigateByUrl('/menu/check-in')
    })
    .catch( error =>{ 
      console.log(error); 
    } )
  }

}
