import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-scholar-search',
  templateUrl: './scholar-search.component.html',
  styleUrls: ['./scholar-search.component.css']
})
export class ScholarSearchComponent implements OnInit {
 public profileForm = new FormGroup({
    Name: new FormControl(''),
    Occupation: new FormControl(''),
    Patron: new FormControl(''),
    Manuscripts: new FormControl(''),
    ActiveFrom: new FormControl(''),
    ActiveUntil: new FormControl(''),
    Topic:new FormControl(''),
    county:new FormControl(''),
  });
  bool: boolean = false;
  showStringbool:boolean=false;
  title='Header';
  username:string;
  password:string;
  public person:any[] = [];
  public show:any[] = [];

  constructor() { 

    
  }

  ngOnInit(): void {
    console.log(this.bool)
    this.person = [{
      id: 3,
      name:"Nathan",
      manuscript:"string",
      patron:"string",
      activeFrom:"number",
      activeTill:"number",
      topic:"string",
      county:"string",
  },
  {
    id: 4,
    name:"Hananhe",
    manuscript:"string",
    patron:"string",
    activeFrom:"number",
    activeTill:"number",
    topic:"string",
    county:"string",
}]
    
  }

  doStuff(obj: any){
  }

  getRid(){
    
  }

  dropdown(){
    console.log("hi");
    console.log(event);
    if(this.bool == false)
    {
      this.bool=true;
      console.log(this.bool);
    }
    else
    {
      this.bool = false;
    }
   

  }

  onSubmit() {
    this.showStringbool=false;
    this.person = [{
      id: 3,
      name:"Nathan",
      manuscript:"string",
      patron:"string",
      activeFrom:"number",
      activeTill:"number",
      topic:"string",
      county:"string",
  },
  {
    id: 4,
    name:"Hannah",
    manuscript:"string",
    patron:"string",
    activeFrom:"number",
    activeTill:"number",
    topic:"string",
    county:"string",
}]
    // TODO: Use EventEmitter with form value
    //console.warn(this.profileForm.value);
     console.log(this.profileForm.value);
     console.log(this.profileForm.value.manuscript);
    
      this.show=[];
      for(var i =0; i<this.person.length;i++)
      {
        
        if(this.profileForm.value.Name ==  this.person[i].name)
        { 
          this.show.push(this.person[i]);
        }
    }

    console.log(this.show);
    if(this.show.length<1 &&this.profileForm.value.Name=="")
    {
      console.log("hi");
      this.show=this.person;
    }
    else if(this.show.length<1 && this.profileForm.value.Name!="")
    {
      console.log("return a string of no matches");
      this.showStringbool = true;
    }
    this.person = [];
    this.person = this.show;
    
  }

}
