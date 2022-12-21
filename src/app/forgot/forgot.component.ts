import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  back(){
    this.route.navigateByUrl('');
  }
}
