import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {

  constructor(private routes: Router) {}

  ngOnInit(): void {
  }


  logout() {
    localStorage.clear();
    this.routes.navigate(['/login']).then ( ()=>{
      window.location.reload();
    });
  }

}
