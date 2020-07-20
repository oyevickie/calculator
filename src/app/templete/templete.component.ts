import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templete',
  templateUrl: './templete.component.html',
  styleUrls: ['./templete.component.scss']
})
export class TempleteComponent implements OnInit {

    name:any="";
    id:any="";
    desig:any="";


  data(value){
    this.name=value.Empname;
    this.id=value.Empid;
    this.desig=value.Empde;
  }

  

  constructor() { }

  ngOnInit() {
  }

}
