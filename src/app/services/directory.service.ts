import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

let apiUrl = environment.url;


@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor(public http: HttpClient) { }


  getUsers(token:any) {
    return new Promise((resolve, reject)=>{
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
    this.http.get(apiUrl+'users/',{headers: headers})
    .subscribe(res => {
        resolve(res);
    }, (err) => {
        reject(err);
      });
    });
  }

  createUser(data:any, token:any){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' +token });
      this.http.post(apiUrl + 'users/', data,{headers: headers})
      .subscribe(res =>{
          resolve(res);
      }, (err)=>{
          reject(err);
      });
    });
  }

  updateUser(token:any, data:any, pk:any) {
    return new Promise((resolve, reject)=>{
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
    this.http.put(apiUrl+'users/' + pk , data, {headers: headers})
    .subscribe(res => {
        resolve(res);
    }, (err) => {
        reject(err);
      });
    });
  }

  DeleteUser(token:any, pk:any, ){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' +token });
      this.http.delete(apiUrl + 'users/'+ pk,{headers: headers})
      .subscribe(res =>{
          resolve(res);
      }, (err)=>{
          reject(err);
      });
    });
  }
  

  getDataUser(token:any, pk:any){
    return new Promise((resolve,reject)=>{
      let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': 'Token ' + token});
  
      this.http.get(apiUrl + 'users/' + pk, {headers:headers})
      .subscribe(res =>{
        resolve(res);
      }, (err)=>{
        reject(err);
      });
    });
  }

  getProperties(token:any) {
    return new Promise((resolve, reject)=>{
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
    this.http.get(apiUrl+'property/',{headers: headers})
    .subscribe(res => {
        resolve(res);
    }, (err) => {
        reject(err);
      });
    });
  }

  getDataProperty(token:any, pk:any){
    return new Promise((resolve,reject)=>{
      let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': 'Token ' + token});
  
      this.http.get(apiUrl + 'property/' + pk, {headers:headers})
      .subscribe(res =>{
        resolve(res);
      }, (err)=>{
        reject(err);
      });
    });
  }


  createProperty(token:any, data:any){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' +token });
      this.http.post(apiUrl + 'property/', data,{headers: headers})
      .subscribe(res =>{
          resolve(res);
      }, (err)=>{
          reject(err);
      });
    });
  }

  updateProperty(token:any, data:any, pk:any) {
    return new Promise((resolve, reject)=>{
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
    this.http.patch(apiUrl+'property/' + pk , data, {headers: headers})
    .subscribe(res => {
        resolve(res);
    }, (err) => {
        reject(err);
      });
    });
  }

  DeletProperty(token:any, pk:any, ){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' +token });
      this.http.delete(apiUrl + 'property/'+ pk,{headers: headers})
      .subscribe(res =>{
          resolve(res);
      }, (err)=>{
          reject(err);
      });
    });
  }


  getServices(token:any) {
    return new Promise((resolve, reject)=>{
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
    this.http.get(apiUrl+'service/',{headers: headers})
    .subscribe(res => {
        resolve(res);
    }, (err) => {
        reject(err);
      });
    });
  }


  createServices(token:any, data:any) {
    return new Promise((resolve, reject)=>{
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
    this.http.post(apiUrl+'service/', data, {headers: headers})
    .subscribe(res => {
        resolve(res);
    }, (err) => {
        reject(err);
      });
    });
  }

  deleteService(token:any, pk:any, ){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' +token });
      this.http.delete(apiUrl + 'service/'+ pk,{headers: headers})
      .subscribe(res =>{
          resolve(res);
      }, (err)=>{
          reject(err);
      });
    });
  }
  
  addServiceProperty(token:any, data:any) {
    return new Promise((resolve, reject)=>{
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
    this.http.post(apiUrl+'property/service/', data, {headers: headers})
    .subscribe(res => {
        resolve(res);
    }, (err) => {
        reject(err);
      });
    });
  }

  getOneServicesProperty(token:any, pk:any){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + token});
      this.http.get(apiUrl + 'property/service/read/?property='+ pk,  {headers: headers})
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        reject(err);
      });
    });
  }

  getServicesProperty(token:any){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + token});
      this.http.get(apiUrl + 'property/service/read/?property=',  {headers: headers})
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        reject(err);
      });
    });
  }

  createPropertyService(token:any, data:any){
    return new Promise ((resolve,reject)=>{
        let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + token});
        this.http.post(apiUrl+'property/service/', data, {headers:headers})
        .subscribe(res=>{
          resolve(res);
        },(err)=>{
          reject(err);
        });
      });
    }


    getReservationProperty(token:any, pk:any){
      return new Promise((resolve,reject)=>{
        let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': 'Token ' + token});
    
        this.http.get(apiUrl + 'property/reservation/?property=' + pk, {headers:headers})
        .subscribe(res =>{
          resolve(res);
        }, (err)=>{
          reject(err);
        });
      });
    }
  
  
  


}
