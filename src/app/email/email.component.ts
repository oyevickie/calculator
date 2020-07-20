import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  // update:any='';
  // email = new FormControl('');

  // show(){
  //   this.update=this.email.value;
  // }

store:any='';

  data: FormGroup;


  constructor() { }

  ngOnInit() {
    this.data= new FormGroup({
      emailupdate:new FormControl('',[Validators.required,Validators.minLength(5)])
    })
  }
  submit(){
this.store=this.data.controls['emailupdate'].value;
}
}
