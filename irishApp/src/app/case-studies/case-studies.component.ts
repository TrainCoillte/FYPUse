import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.css']
})
export class CaseStudiesComponent implements OnInit {
  isActive: boolean
  isActive1: boolean
  isActive2:boolean
  isActive3:boolean
  isActive4:boolean
  constructor() { }

  ngOnInit(): void {
  }

 showCase1(){
    this.isActive=true;
  }
  showCase2()
  {
    this.isActive1=true;
  }
  showCase3()
  {
    this.isActive2=true;
  }
  showCase4()
  {
    this.isActive3=true;
  }
  showCase5()
  {
    this.isActive4=true;
  }

  closeM()
  {
    this.isActive=false;
    this.isActive1=false;
    this.isActive2=false;
    this.isActive3=false;
    this.isActive4=false;
  }

}
