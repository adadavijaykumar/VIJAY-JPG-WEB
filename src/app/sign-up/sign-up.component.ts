import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  loginuser: any []=[];
  signupForm: any= FormGroup;
  username: any ='';
  password: any = '';
  data:any;

  constructor(public route:Router) { }


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onclick() {
    this.data= {email: this.username, pass:this.password };
    this.loginuser= JSON.parse(<string>localStorage.getItem('logindetails')) || [];
    this.loginuser.push(this.data);
    console.log(this.loginuser);
    localStorage.setItem('logindetails',JSON.stringify(this.loginuser));
    this.route.navigateByUrl('');
  }

}
