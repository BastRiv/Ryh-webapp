import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DirectoryService } from 'src/app/services/directory.service';
import { DCheckInComponent } from './d-check-in/d-check-in.component';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  token:any;
  properties:any;
  
    constructor( private directoryService: DirectoryService,
                 private router: Router,
                 private dialog: MatDialog ) {
  
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

    openDialog(propertyPk:any) {
      localStorage.setItem('propertypk', propertyPk)
      const dialogRef = this.dialog.open(DCheckInComponent,{
        width:'75%',
        height:'100%',
      }
        );
        dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

}
