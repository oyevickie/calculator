import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss']
})
export class ReactComponent implements OnInit {

data = new FormControl('');

store:any='';

operatr:any='';

firstno:any='';

second:any='';

number(value){
  this.store= this.store + value;
  this.data.setValue(this.store)
}

operator(op){
this.firstno=this.store;
this.operatr=op;
this.store='';
this.data.setValue('');

}

submit(){
this.second=this.store;
this.store='';
this.data.setValue('');

switch(this.operatr){
  case '+':
    this.data.setValue(parseInt(this.firstno) + parseInt(this.second));
    break;
    
  case '-':
      this.data.setValue(parseInt(this.firstno) - parseInt(this.second));
      break;
      
  case '*':
      this.data.setValue(parseInt(this.firstno) * parseInt(this.second));
      break;
      
  case '/':
      this.data.setValue(parseInt(this.firstno) / parseInt(this.second));
      break;

}
}

clear(){
  this.second='';
  this.firstno='';
  this.data.setValue('');
  this.operatr='';
  this.store='';
}

  constructor() { }

  ngOnInit() {
  }

}
