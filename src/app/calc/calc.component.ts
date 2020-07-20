import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

data = new FormControl('')

store1:any='';

op:any='';

fno:any='';

sno:any='';

number(value){
this.store1=this.store1+value;
this.data.setValue(this.store1);
}

operator(v){
  this.op=v;
  this.data.setValue('');
  this.fno=this.store1;
  this.store1='';
}

result(){
  this.sno=this.store1
  this.data.setValue('');
  this.store1='';

  switch(this.op) {
    case '+':
      return this.data.setValue(parseInt(this.fno) + parseInt(this.sno))
    break;

    case '-':
      return this.data.setValue(parseInt(this.fno) - parseInt(this.sno))
    break;

    case '*':
      return this.data.setValue(parseInt(this.fno) * parseInt(this.sno))
    break;

    case '/':
      return this.data.setValue(parseInt(this.fno) / parseInt(this.sno))
    break;
  }
}

clear(){
  this.store1='';
  this.data.setValue('');
  this.fno='';
  this.sno='';
  this.op='';
}


  constructor() { }

  ngOnInit() {
  }

}
