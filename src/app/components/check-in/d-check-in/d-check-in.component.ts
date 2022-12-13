import { Component, OnInit } from '@angular/core';
import { DirectoryService } from 'src/app/services/directory.service';

@Component({
  selector: 'app-d-check-in',
  templateUrl: './d-check-in.component.html',
  styleUrls: ['./d-check-in.component.css']
})
export class DCheckInComponent implements OnInit {

token:any;
propertyPk:any;
propertyInfo:any;
propertyReservation:any;
price:any;
total:any;
  constructor(private directoryService: DirectoryService) { 

    this.token = JSON.parse(localStorage.getItem('userData')!).token;
    this,this.propertyPk = JSON.parse(localStorage.getItem('propertypk')!);
  }

  ngOnInit(): void {
    this.getProperty();
    this.getReservationProperty();

  }
  

getProperty() {
  this.directoryService.getDataProperty(this.token, this.propertyPk)
  .then( data => {
    this.propertyInfo = data;
    console.log(this.propertyInfo);
   
  } )
  .catch( error => {
    console.log(error);
  } )
}

getPrice(reservationPk:any) {
  this.getProperty();
  let startDate = new Date(this.propertyReservation[0].start_date).getTime();
  let endDate = new Date(this.propertyReservation[0].end_date).getTime();

  let diff = endDate - startDate; 
  console.log(diff);
  let price = diff/(1000*60*60*24) 
  this.price = price; 
  this.total = (this.propertyInfo.price * this.price) * 0.80 ;
  console.log(this.total)

}

getReservationProperty() { 
  this.directoryService.getReservationProperty(this.token, this.propertyPk)
  .then( data => {
    this.propertyReservation = data;
    console.log(this.propertyReservation);
    this.getPrice(this.propertyReservation[0].pk)
  })
  .catch( error => {
    console.log(error);
  } )
}

print() {
  window.print();
}

}
