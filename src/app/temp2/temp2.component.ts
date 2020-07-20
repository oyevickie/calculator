import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp2',
  templateUrl: './temp2.component.html',
  styleUrls: ['./temp2.component.scss']
})

export class Temp2Component implements OnInit {

    count:number=0;
    i:number=0;
    add:any={name:"",id:"",designation:""};

data(value: any){

//     this.count = this.count + 1;
//     this.i = this.i + 1;
// console.log(this.count);
// console.log(this.i);

  this.dataa.concat(this.add);
  console.log(this.dataa);


    this.add.name=value.Ename;
    this.add.id=value.Eid;
    this.add.designation=value.Edeg;

  
  

  
}

dataa:emppp[] = [];

  constructor() { }

  ngOnInit() {
  }

}


class emppp{
  
  name:any;
  id:any;
  designation:any;
  
  }