import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirectoryService } from 'src/app/services/directory.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

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

}
