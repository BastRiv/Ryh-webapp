import { Component, OnInit, ViewChild, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DirectoryService } from 'src/app/services/directory.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
displayedColumns: string[] = ['id', 'name', 'delete'];
token:any;
servicesInfo:any;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
  constructor( private directoryService: DirectoryService ) {

    this.token = JSON.parse(localStorage.getItem('userData')!).token;
   }

  ngOnInit(): void {
    this.getServices();
  }


  ngAfterViewInit() {
   this.servicesInfo.paginator = this.paginator;
    this.servicesInfo.sort = this.sort;
  }

  deleteService(servicepk:any) {
    this.directoryService.deleteService(this.token, servicepk)
    .then( data => {
      console.log(data);
      window.location.reload();
    })
    .catch( error => {
      console.log(error);
    } )
  }


  getServices() {
    this.directoryService.getServices(this.token)
    .then( data => {
      this.servicesInfo = data;
      console.log(this.servicesInfo)
      this.servicesInfo = new MatTableDataSource(this.servicesInfo)
    } )
    .catch( error => {
      console.log(error);
    } )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.servicesInfo.filter = filterValue.trim().toLowerCase();
    if (this.servicesInfo.paginator) {
      this.servicesInfo.paginator.firstPage();
    }
  }

}
