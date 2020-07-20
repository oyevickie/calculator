import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  // template:`<h1>hello angular</h1>`,
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

data=new FormControl('')

Datastore:any='';

opstore:any='';

fno:any='';

sno:any='';

getNumber(value){
  this.Datastore=this.Datastore+value;
  this.data.setValue(this.Datastore);
}

getOperation(op){
this.opstore=op;
this.data.setValue('');
this.fno=this.Datastore;
this.Datastore="";
}

result(){
this.sno=this.Datastore;
this.data.setValue('');
this.Datastore='';

switch(this.opstore){
  case '+':
    this.data.setValue(parseInt(this.fno)+ parseInt(this.sno))
    break;
    case '-':
    this.data.setValue(parseInt(this.fno)- parseInt(this.sno))
    break;
    case '/':
    this.data.setValue(parseInt(this.fno)/ parseInt(this.sno))
    break;
    case '*':
    this.data.setValue(parseInt(this.fno)* parseInt(this.sno))
    break;
}



}

clear(){
  this.Datastore='';
  this.opstore='';
  this.fno='';
  this.sno='';
  this.data.setValue('')
}



  constructor() { }

  ngOnInit() {
  }

}
