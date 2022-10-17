import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users';

@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl: string;
baseUrl:string = "http://127.0.0.1:8000/api";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json'
  })
}

constructor(private httpClient : HttpClient) { }


public userlogin(email, password) {
// alert(username)
return this.httpClient.post<any>(this.baseUrl + '/login', { email , password })
// .pipe(map(Users => {
//   this.setToken(Users[0].name);
//   this.getLoggedInName.emit(true);
//   return Users;
// }));
}

public userregistration(name,email,pwd) {
return this.httpClient.post<any>(this.baseUrl + '/register', { name,email, pwd })
.pipe(map(Users => {
return Users;
}));
}

//token
setToken(token: string) {
localStorage.setItem('token', token);
}
getToken() {
return localStorage.getItem('token');
}
deleteToken() {
localStorage.removeItem('token');
}
isLoggedIn() {
const usertoken = this.getToken();
if (usertoken != null) {
return true
}
return false;
}
}
