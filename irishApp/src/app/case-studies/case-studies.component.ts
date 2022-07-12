import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.css']
})
export class CaseStudiesComponent implements OnInit {
  isActive: boolean
  isActive2:boolean
  isActive3:boolean
  isActive4:boolean
  isActive5:boolean
  isActive6:boolean
  isActive7:boolean
  isActive8:boolean
  constructor() { }

  ngOnInit(): void {
  }

  turnOn1(){
    console.log("Hi");
    this.isActive=true;
    console.log(this.isActive)
  }

  closeM()
  {
    this.isActive=false;
    console.log(this.isActive)
  }

}
