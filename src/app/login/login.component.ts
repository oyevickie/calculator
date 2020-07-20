import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
first:any ='';
second:any='';

result:any='';



  data= new FormGroup({
    First: new FormControl(''),
    Second: new FormControl(''),
    // Display:new FormControl(''),

  })
  submit(){
    this.first=this.data.controls['First'].value;
    this.second=this.data.controls['Second'].value;
    // this.data.controls['Display'].setValue(this.first + "" + this.second);
    this.data.controls['First'].setValue('');
    this.data.controls['Second'].setValue('');

  }

  show(){
this.result=this.first + "" + this.second;
  }
  constructor() { }

  ngOnInit() {
  }

}
