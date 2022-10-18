import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users';
import { Product } from './Models/product';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  redirectUrl: string;

  baseUrl: string = "http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public getProducts(){
    return this.httpClient.get(this.baseUrl + '/getProducts');
  }

  public createProd(data:Product){
    return this.httpClient.post(this.baseUrl + '/createProd',data);
  }

}
