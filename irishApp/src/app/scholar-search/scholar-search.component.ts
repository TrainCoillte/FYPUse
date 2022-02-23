import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { FormControl, FormGroup } from "@angular/forms";
@Component({
  selector: "app-scholar-search",
  templateUrl: "./scholar-search.component.html",
  styleUrls: ["./scholar-search.component.css"],
})
export class ScholarSearchComponent implements OnInit {
  public profileForm = new FormGroup({
    //name
    Ainm: new FormControl(""),
    //DOB
    // DataBreithe: new FormControl(""),
    DataBreitheó: new FormControl(""),
    DataBreithechun: new FormControl(""),
    //DOD
    DataBaisó: new FormControl(""),
    DataBaischun: new FormControl(""),
    //topic
    Patrun: new FormControl(""),
    //manuscripts
    Lamhscribhinni: new FormControl(""),
    //start and end of active
    FloruitStartó: new FormControl(""),
    FloruitStartchun: new FormControl(""),
    FloruitEndó: new FormControl(""),
    FloruitEndchun: new FormControl(""),
    //topic
    SliBheatha: new FormControl(""),
    //county
    Contae: new FormControl(""),
  });
  bool: boolean = false;
  showStringbool: boolean = false;
  title = "Header";
  username: string;
  password: string;
  scribes: any[] = [];
  temp : any[] = [];
  public scribe: any[] = [];
  public show: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data: any) => {
      for (var i = 0; i < data.arrayOfScribes.length; i++) {
        this.scribe[i] = data.arrayOfScribes[i];
        if (this.scribe[i].Patrun == "") {
          this.scribe[i].Patrun = "N/A";
        }
        if (this.scribe[i].FeachFosta == "") {
          this.scribe[i].FeachFosta = "N/A";
        }
        if (this.scribe[i].SliBheatha == "") {
          this.scribe[i].SliBheatha = "N/A";
        }
        if (this.scribe[i].DataBreithe == "0000-00-00") {
          this.scribe[i].DataBreithe = "N/A";
        }
        if (this.scribe[i].DataBais == "0000-00-00") {
          this.scribe[i].DataBais = "N/A";
        }
        if (this.scribe[i].FloruitStart == "0000-00-00") {
          this.scribe[i].FloruitStart = "N/A";
        }
        if (this.scribe[i].FloruitEnd == "0000-00-00") {
          this.scribe[i].FloruitEnd = "N/A";
        }
        if (this.scribe[i].Seoladh1 == "") {
          this.scribe[i].Seoladh1 = "N/A";
        }
        if (this.scribe[i].Seoladh2 == "") {
          this.scribe[i].Seoladh2 = "N/A";
        }
        if (this.scribe[i].Seoladh3 == "") {
          this.scribe[i].Seoladh3 = "N/A";
        }
        if (this.scribe[i].Seoladh4 == "") {
          this.scribe[i].Seoladh4 = "N/A";
        }
        if (this.scribe[i].Seoladh5 == "") {
          this.scribe[i].Seoladh5 = "N/A";
        }
        if (this.scribe[i].Seoladh6 == "") {
          this.scribe[i].Seoladh6 = "N/A";
        }
        if (this.scribe[i].Seoladh7 == "") {
          this.scribe[i].Seoladh7 = "N/A";
        }
        if (this.scribe[i].Seoladh8 == "") {
          this.scribe[i].Seoladh8 = "N/A";
        }
        if (this.scribe[i].Seoladh9 == "") {
          this.scribe[i].Seoladh9 = "N/A";
        }
      }
      this.scribes = this.scribe;
    });
  }
  onSubmit() {
    this.showStringbool = false;
    console.log(this.profileForm.value);
    if (
      (this.profileForm.value.Ainm == "" &&
        this.profileForm.value.DataBreitheó == "" &&
        this.profileForm.value.DataBreithechun == "" &&
        this.profileForm.value.DataBaisó == "" &&
        this.profileForm.value.DataBaischun == "" &&
        this.profileForm.value.Patrun == "" &&
        this.profileForm.value.Lamhscribhinni == "" &&
        this.profileForm.value.FloruitStartó === "" &&
        this.profileForm.value.FloruitStartchun === "" &&
        this.profileForm.value.FloruitEndchun === "" &&
        this.profileForm.value.FloruitEndó === "" &&
        this.profileForm.value.SliBheatha == "" &&
        this.profileForm.value.Contae == "") ||
      (this.profileForm.value.Ainm === null &&
        this.profileForm.value.DataBreitheó == null &&
        this.profileForm.value.DataBreithechun == null &&
        this.profileForm.value.DataBaisó == null &&
        this.profileForm.value.DataBaischun == null &&
        this.profileForm.value.Patrun === null &&
        this.profileForm.value.Lamhscribhinni === null &&
        this.profileForm.value.FloruitStartó === null &&
        this.profileForm.value.FloruitStartchun === null &&
        this.profileForm.value.FloruitEndchun === null &&
        this.profileForm.value.FloruitEndó === null &&
        this.profileForm.value.SliBheatha === null &&
        this.profileForm.value.Contae === null)
    ) {
      console.log("£");
      this.scribe = this.scribes;
      this.show = [];
    } else {
      this.scribe = this.scribes;
      this.temp = [];
      console.log(this.scribe);
      //go in here if the show variable is empty
      while(this.show.length<1)
      {
        //check form has entry for name
        if(this.profileForm.value.Ainm != "" && this.profileForm.value.Ainm != null)
        {
          console.log("hi");
          for(var i=0; i <this.scribe.length;i++)
          {
            if (this.scribe[i].Ainm.toLowerCase().includes(this.profileForm.value.Ainm.toLowerCase())) 
            {
              //if all matches etc push object into show array
              this.show.push(this.scribe[i]);
            }
          }
          if(this.show.length != 0)
          {
            break;
          }
        }
        //show length has gone up but rest of the loops 
        if(this.profileForm.value.DataBreitheó != "" &&this.profileForm.value.DataBreitheó != null)
        {
          for(var i=0; i <this.scribe.length;i++)
          {
          
            var subString = 0;
            if(this.scribe[i].DataBreithe != "N/A")
            {
              subString = parseInt(this.scribe[i].DataBreithe.substring(0,4));
            }
            console.log(subString);
            console.log(this.profileForm.value.DataBreitheó);
            if (subString >=this.profileForm.value.DataBreitheó ) 
              {
              this.show.push(this.scribe[i]);
              }
          }
          if(this.show.length != 0)
          {
            break;
          }
        }
        if(this.profileForm.value.DataBreithechun != "" &&this.profileForm.value.DataBreithechun != null)
        {
          for(var i=0; i <this.scribe.length;i++)
          {
          
            var subString = 0;
            if(this.scribe[i].DataBreithe != "N/A")
            {
              subString = parseInt(this.scribe[i].DataBreithe.substring(0,4));
            }
            if (subString <=this.profileForm.value.DataBreithechun && subString >=1640) 
              {
              this.show.push(this.scribe[i]);
              }
          }
          if(this.show.length != 0)
          {
            break;
          }
        }
        if(this.profileForm.value.DataBaisó != "" &&this.profileForm.value.DataBaisó!= null)
        {
          for(var i=0; i <this.scribe.length;i++)
          {
          
            var subString = 0;
            if(this.scribe[i].DataBais != "N/A")
            {
              subString = parseInt(this.scribe[i].DataBais.substring(0,4));
            }
            if (subString >=this.profileForm.value.DataBaisó) 
              {
              this.show.push(this.scribe[i]);
              }
          }
          if(this.show.length != 0)
          {
            break;
          }
        }
        if(this.profileForm.value.DataBaischun != "" &&this.profileForm.value.DataBaischun != null)
        {
          for(var i=0; i <this.scribe.length;i++)
          {
          
            var subString = 0;
            if(this.scribe[i].DataBaischun!= "N/A")
            {
              subString = parseInt(this.scribe[i].DataBais.substring(0,4));
            }
            if (subString <=this.profileForm.value.DataBaischun && subString >=1640) 
              {
              this.show.push(this.scribe[i]);
              }
          }
          if(this.show.length != 0)
          {
            break;
          }
        }
        if(this.profileForm.value.Patrun != "" && this.profileForm.value.Patrun != null)
        {
          for(var i=0; i <this.scribe.length;i++)
          {
            if (this.scribe[i].Patrun.toLowerCase().includes(this.profileForm.value.Patrun.toLowerCase())) 
            {
              this.show.push(this.scribe[i]);
            }
          }
          if(this.show.length != 0)
          {
            break;
          }
        }
        if(this.profileForm.value.Lamhscribhinni != "" && this.profileForm.value.Lamhscribhinni != null)
        {
          for(var i=0; i <this.scribe.length;i++)
          {
            if (this.scribe[i].Lamhscribhinni.toLowerCase().includes(this.profileForm.value.Lamhscribhinni.toLowerCase())) 
            {
              this.show.push(this.scribe[i]);
            }
          }
          if(this.show.length != 0)
          {
            break;
          }
        }
        if(this.profileForm.value.FloruitStartó != "" &&this.profileForm.value.FloruitStartó!= null)
        {
          for(var i=0; i <this.scribe.length;i++)
          {
          
            var subString = 0;
            if(this.scribe[i].FloruitStart != "N/A")
            {
              subString = parseInt(this.scribe[i].FloruitStart.substring(0,4));
            }
            if (subString >=this.profileForm.value.FloruitStartó) 
              {
              this.show.push(this.scribe[i]);
              }
          }
          if(this.show.length != 0)
          {
            break;
          }
        }
        if(this.profileForm.value.FloruitStartchun != "" &&this.profileForm.value.FloruitStartchun != null)
        {
          for(var i=0; i <this.scribe.length;i++)
          {
          
            var subString = 0;
            if(this.scribe[i].FloruitStart!= "N/A")
            {
              subString = parseInt(this.scribe[i].FloruitStart.substring(0,4));
            }
            if (subString <=this.profileForm.value.FloruitStartchun && subString >=1640) 
              {
              this.show.push(this.scribe[i]);
              }
          }
          if(this.show.length != 0)
          {
            break;
          }
        }
        if(this.profileForm.value.FloruitEndó != "" &&this.profileForm.value.FloruitEndó!= null)
        {
          for(var i=0; i <this.scribe.length;i++)
          {
          
            var subString = 0;
            if(this.scribe[i].FloruitEnd != "N/A")
            {
              subString = parseInt(this.scribe[i].FloruitEnd.substring(0,4));
            }
            if (subString >=this.profileForm.value.FloruitEndó) 
              {
              this.show.push(this.scribe[i]);
              }
          }
          if(this.show.length != 0)
          {
            break;
          }
        }
        if(this.profileForm.value.FloruitEndchun != "" &&this.profileForm.value.FloruitEndchun != null)
        {
          for(var i=0; i <this.scribe.length;i++)
          {
          
            var subString = 0;
            if(this.scribe[i].FloruitEnd!= "N/A")
            {
              subString = parseInt(this.scribe[i].FloruitEnd.substring(0,4));
            }
            if (subString <=this.profileForm.value.FloruitEndchun && subString >=1640) 
              {
              this.show.push(this.scribe[i]);
              }
          }
          if(this.show.length != 0)
          {
            break;
          }
        }
        if(this.profileForm.value.SliBheatha != "" && this.profileForm.value.SliBheatha != null)
        {
          console.log("hi");
          for(var i=0; i <this.scribe.length;i++)
          {
            if (this.scribe[i].SliBheatha.toLowerCase().includes(this.profileForm.value.SliBheatha.toLowerCase())) 
            {
              //if all matches etc push object into show array
              this.show.push(this.scribe[i]);
            }
          }
          if(this.show.length != 0)
          {
            break;
          }
        }
        if (this.profileForm.value.Contae != ""&&this.profileForm.value.Contae !=null) 
        {
          for(var i=0; i <this.scribe.length;i++)
          {
            if (this.scribe[i].Seoladh1.includes(this.profileForm.value.Contae) ||
              this.scribe[i].Seoladh2.includes(this.profileForm.value.Contae) ||
              this.scribe[i].Seoladh3.includes(this.profileForm.value.Contae) ||
              this.scribe[i].Seoladh4.includes(this.profileForm.value.Contae) ||
              this.scribe[i].Seoladh5.includes(this.profileForm.value.Contae) ||
              this.scribe[i].Seoladh6.includes(this.profileForm.value.Contae) ||
              this.scribe[i].Seoladh7.includes(this.profileForm.value.Contae) ||
              this.scribe[i].Seoladh8.includes(this.profileForm.value.Contae) ||
              this.scribe[i].Seoladh9.includes(this.profileForm.value.Contae)) 
            {
              if (!this.show.includes(this.scribe[i])) 
              {
                this.show.push(this.scribe[i]);
              }
            }
          }
          if(this.show.length != 0)
          {
            break;
          }
        }
        break;
      }

      if(this.show.length>0)
      {
        if(this.profileForm.value.Ainm != "" && this.profileForm.value.Ainm != null)
        {
          console.log("hi");
          console.log(this.show);
          for(var i=0; i <this.show.length;i++)
          {
            if (this.show[i].Ainm.toLowerCase().includes(this.profileForm.value.Ainm.toLowerCase())) 
            {
              //if all matches etc push object into show array
              this.temp.push(this.show[i]);
            }
          }
          console.log(this.temp);
          this.show = this.temp;
          this.temp=[];
        }
        if(this.profileForm.value.DataBreitheó != "" &&this.profileForm.value.DataBreitheó != null)
        {
          for(var i=0; i <this.show.length;i++)
          {
            var subString = 0;
            if(this.show[i].DataBreithe != "N/A")
            {
              subString = parseInt(this.show[i].DataBreithe.substring(0,4));
            }
            if (subString >=this.profileForm.value.DataBreitheó) 
              {
              this.temp.push(this.show[i]);
              }
          }
          this.show = this.temp;
          this.temp=[];
        }
        if(this.profileForm.value.DataBreithechun != "" &&this.profileForm.value.DataBreithechun != null)
        {
          for(var i=0; i <this.show.length;i++)
          {
            var subString = 0;
            if(this.show[i].DataBreithe != "N/A")
            {
              subString = parseInt(this.show[i].DataBreithe.substring(0,4));
            }
            if (subString <=this.profileForm.value.DataBreithechun && subString >=1640) 
              {
              this.temp.push(this.show[i]);
              }
          }
          this.show = this.temp;
          this.temp=[];
        }
        if(this.profileForm.value.DataBaisó != "" &&this.profileForm.value.DataBaisó!= null)
        {
          for(var i=0; i <this.show.length;i++)
          {
          
            var subString = 0;
            if(this.show[i].DataBais != "N/A")
            {
              subString = parseInt(this.show[i].DataBais.substring(0,4));
            }
            if (subString >=this.profileForm.value.DataBaisó) 
              {
              this.temp.push(this.show[i]);
              }
          }
          this.show = this.temp;
          this.temp=[];
        }
        if(this.profileForm.value.DataBaischun != "" &&this.profileForm.value.DataBaischun != null)
        {
          for(var i=0; i <this.show.length;i++)
          {
          
            var subString = 0;
            if(this.show[i].DataBaischun!= "N/A")
            {
              subString = parseInt(this.show[i].DataBais.substring(0,4));
            }
            if (subString <=this.profileForm.value.DataBaischun && subString >=1640) 
              {
              this.temp.push(this.show[i]);
              }
          }
          this.show = this.temp;
          this.temp=[];
        }
        if(this.profileForm.value.Patrun != "" && this.profileForm.value.Patrun != null)
        {
          for(var i=0; i <this.show.length;i++)
          {
            if (this.show[i].Patrun.toLowerCase().includes(this.profileForm.value.Patrun.toLowerCase())) 
            {
              this.temp.push(this.show[i]);
            }
          }
          this.show = this.temp;
          this.temp=[];
        }
        if(this.profileForm.value.Lamhscribhinni != "" && this.profileForm.value.Lamhscribhinni != null)
        {
          for(var i=0; i <this.show.length;i++)
          {
            if (this.show[i].Lamhscribhinni.toLowerCase().includes(this.profileForm.value.Lamhscribhinni.toLowerCase())) 
            {
              this.temp.push(this.show[i]);
            }
          }
          this.show = this.temp;
          this.temp=[];
        }
        if(this.profileForm.value.FloruitStartó != "" &&this.profileForm.value.FloruitStartó!= null)
        {
          for(var i=0; i <this.show.length;i++)
          {
          
            var subString = 0;
            if(this.show[i].FloruitStart != "N/A")
            {
              subString = parseInt(this.show[i].FloruitStart.substring(0,4));
            }
            if (subString >=this.profileForm.value.FloruitStartó) 
              {
              this.temp.push(this.show[i]);
              }
          }
          this.show = this.temp;
          this.temp=[];
        }
        if(this.profileForm.value.FloruitStartchun != "" &&this.profileForm.value.FloruitStartchun != null)
        {
          for(var i=0; i <this.show.length;i++)
          {
          
            var subString = 0;
            if(this.show[i].FloruitStart!= "N/A")
            {
              subString = parseInt(this.show[i].FloruitStart.substring(0,4));
            }
            if (subString <=this.profileForm.value.FloruitStartchun && subString >=1640) 
              {
              this.temp.push(this.show[i]);
              }
          }
          this.show = this.temp;
          this.temp=[];
        }
        if(this.profileForm.value.FloruitEndó != "" &&this.profileForm.value.FloruitEndó!= null)
        {
          for(var i=0; i <this.show.length;i++)
          {
          
            var subString = 0;
            if(this.show[i].FloruitEnd != "N/A")
            {
              subString = parseInt(this.show[i].FloruitEnd.substring(0,4));
            }
            if (subString >=this.profileForm.value.FloruitEndó) 
              {
              this.temp.push(this.show[i]);
              }
          }
          this.show = this.temp;
          this.temp=[];
        }
        if(this.profileForm.value.FloruitEndchun != "" &&this.profileForm.value.FloruitEndchun != null)
        {
          for(var i=0; i <this.show.length;i++)
          {
          
            var subString = 0;
            if(this.show[i].FloruitEnd!= "N/A")
            {
              subString = parseInt(this.show[i].FloruitEnd.substring(0,4));
            }
            if (subString <=this.profileForm.value.FloruitEndchun && subString >=1640) 
              {
              this.temp.push(this.show[i]);
              }
          }
          this.show = this.temp;
          this.temp=[];
        }
        if(this.profileForm.value.SliBheatha != "" && this.profileForm.value.SliBheatha != null)
        {
          for(var i=0; i <this.show.length;i++)
          {
            if (this.show[i].SliBheatha.toLowerCase().includes(this.profileForm.value.SliBheatha.toLowerCase())) 
            {
              //if all matches etc push object into show array
              this.temp.push(this.show[i]);
            }
          }
          this.show = this.temp;
          this.temp=[];
        }
        if (this.profileForm.value.Contae != ""&&this.profileForm.value.Contae !=null) 
        {
          for(var i=0; i <this.show.length;i++)
          {
            if (this.show[i].Seoladh1.includes(this.profileForm.value.Contae) ||
              this.show[i].Seoladh2.includes(this.profileForm.value.Contae) ||
              this.show[i].Seoladh3.includes(this.profileForm.value.Contae) ||
              this.show[i].Seoladh4.includes(this.profileForm.value.Contae) ||
              this.show[i].Seoladh5.includes(this.profileForm.value.Contae) ||
              this.show[i].Seoladh6.includes(this.profileForm.value.Contae) ||
              this.show[i].Seoladh7.includes(this.profileForm.value.Contae) ||
              this.show[i].Seoladh8.includes(this.profileForm.value.Contae) ||
              this.show[i].Seoladh9.includes(this.profileForm.value.Contae)) 
            {
                this.temp.push(this.show[i]);
            }
          }
          this.show = this.temp;
          this.temp=[];
        }
      }
      else if (this.show.length == 0) 
      {
        this.showStringbool = true;
      }
      this.scribe = this.show;
      this.show = [];
    }
    }

    showText()
    {
      
    }
  }
