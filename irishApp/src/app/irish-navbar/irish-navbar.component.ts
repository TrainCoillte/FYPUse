import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-irish-navbar',
  templateUrl: './irish-navbar.component.html',
  styleUrls: ['./irish-navbar.component.css']
})
export class IrishNavbarComponent implements OnInit {
  state:Number=0;
  constructor() { }

  ngOnInit(): void {
  }

  function(){
    console.log("hi");
    this.state =1;
  }

  function2()
  {
    console.log("hi2");

    this.state = 2;
  }

  function3()
  {
    console.log("hi3");
    this.state = 3;
  }
}
