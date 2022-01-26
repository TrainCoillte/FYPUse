import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-irish-map',
  templateUrl: './irish-map.component.html',
  styleUrls: ['./irish-map.component.css']
})
export class IrishMapComponent implements OnInit {
  State:boolean=true;
  Track: Number=0;
  constructor(
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.Track = params['Track'];
      console.log(this.Track);
    });
    if(this.Track=1){
      this.State =true;
    }
    else if(this.Track=2)
    {

    }

    else if (this.Track=3)
    {

    }
  }
  
}
