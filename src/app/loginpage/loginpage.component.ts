import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { Router} from '@angular/router'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  hide=true;
  LoginForm: any= FormGroup;
  userName:any
  word:any
  newload:any []=[];
  newdata:any


  details:any[]=JSON.parse(<string>localStorage.getItem('logindetails')) || [];

  constructor( public route:Router) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    console.log(this.details);
   
  }

  onValue(){
    //console.log(this.LoginForm);
    //console.log(this.LoginForm.status);
    this.newdata= {mail: this.userName, pas:this.word };
    console.log(this.newdata);
    this.newload.push(this.newdata);
    console.log(this.newload);
    localStorage.setItem('details',JSON.stringify(this.newload));
    for (let i = 0; i < this.details.length; i++){
      console.log(this.details[i].email,this.details[i].pass);
      if(this.newload[0].mail === this.details[i].email && this.newload[0].pas === this.details[i].pass){
        console.log('success');
        this.route.navigateByUrl('/dashboard');
      }else{
        console.log('error');
      }
    }
    this.LoginForm.reset();
  }

}