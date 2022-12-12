import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirectoryService } from 'src/app/services/directory.service';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {

token:any;
userpk:any;
  constructor(private routes: Router,
              private directoryService: DirectoryService,) {

    this.token = JSON.parse(localStorage.getItem('userData')!).token;
    this.userpk = JSON.parse(localStorage.getItem('userpk')!);

   }

  ngOnInit(): void {
  }

 
  

  
    deleteUser() {
      this.directoryService.DeleteUser(this.token, this.userpk)
      .then( data => { 
        console.log(data);
        this.routes.navigate(['/menu/usuarios']).then ( ()=>{
          window.location.reload();
        });
      } )
      .catch( error => {
        console.log(error);
      } )
    }
  

}
