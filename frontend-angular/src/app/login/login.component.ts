import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
password: ['', Validators.required]
});
}

ngOnInit() {
}
postdata(angForm1)
{
this.dataService.userlogin(angForm1.value.email,angForm1.value.password)
.pipe(first())
.subscribe(
data => {
  console.log('eba');
const redirect = '/dashboard';
this.router.navigate([redirect]);
},
error => {
alert("User name or password is incorrect")
});
}
get email() {
  let emaily = this.angForm.get('email');
  console.log(emaily);
  return emaily; }
get password() {
  let passy = this.angForm.get('password')
  return passy; }
}
