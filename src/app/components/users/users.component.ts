import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DirectoryService } from 'src/app/services/directory.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  token:any;
  users:any;
  displayedColumns: string[] = ['id', 'name', 'last_name', 'email', 'type_user', 'edit'];
  type_user:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private directoryService: DirectoryService,
              private router: Router) {
       

    this.token = JSON.parse(localStorage.getItem('userData')!).token;
    
  }

  ngOnInit(): void {
    this.getUsers();
  }

  goEdit(userId:any){
    this.router.navigate(['/menu/editar'], { queryParams: { userId: userId  } });
  }

  ngAfterViewInit() {
    this.users.paginator = this.paginator;
    this.users.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users.filter = filterValue.trim().toLowerCase();
    if (this.users.paginator) {
      this.users.paginator.firstPage();
    }
  }

  getUsers() {
    this.directoryService.getUsers(this.token)
    .then( data => {
      this.users = data;
      for(let i = 0; i < this.users.length; i++){
        if (this.users[i].type_user == 0){
          this.type_user = 'Administrador'
        }
      else if ( this.users[i].type_user == 1 ){
        this.type_user = 'Funcionario'
      }
      else if ( this.users[i].type_user == 2 ){
        this.type_user = 'Cliente'
      }
      }
      console.log(this.users)
      this.users = new MatTableDataSource(this.users)
    } )
    .catch( error => {
      console.log(error)
    } )
  }



}
