import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templetedriven',
  templateUrl: './templetedriven.component.html',
  styleUrls: ['./templetedriven.component.scss']
})
export class TempletedrivenComponent implements OnInit {

 user:any='';
 pass:any='';
 
 submit(value){
   this.user=value.Username;
   this.pass=value.password;

   
 }



  constructor() { }

  ngOnInit() {
  }

}
