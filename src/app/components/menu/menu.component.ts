import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MatDialog} from '@angular/material/dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private routes: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    const token = localStorage.getItem('userData'); 
    if(token == null) {
      this.routes.navigate(['/login'])
      console.log('OK',token)
    }
  }

  openDialog() {
    this.dialog.open(DialogComponentComponent);
  }



}

