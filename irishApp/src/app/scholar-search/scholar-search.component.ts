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
    DataBreithe: new FormControl(""),
    //DOD
    DataBais: new FormControl(""),
    //topic
    Patrun: new FormControl(""),
    //manuscripts
    Lamhscribhinni: new FormControl(""),
    //start and end of active
    FloruitStart: new FormControl(""),
    FloruitEnd: new FormControl(""),
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
  public scribe: any[] = [];
  public show: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log("hiiminhere");
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
          console.log("hi");
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
      }
      console.log(this.scribe[1]);
      this.scribes = this.scribe;
    });
  }

  // dropdown(){
  //   if(this.bool == false)
  //   {
  //     this.bool=true;
  //   }
  //   else
  //   {
  //     this.bool = false;
  //   }
  // }

  onSubmit() {
    this.showStringbool = false;
    if (
      this.profileForm.value.Ainm == "" &&
      this.profileForm.value.DataBreithe == "" &&
      this.profileForm.value.DataBais == "" &&
      this.profileForm.value.Patrun == "" &&
      this.profileForm.value.Lamhscribhinni == "" &&
      this.profileForm.value.FloruitStart == "" &&
      this.profileForm.value.FloruitEnd == "" &&
      this.profileForm.value.SliBheatha == "" &&
      this.profileForm.value.Contae == ""
    ) {
      this.scribe = this.scribes;
    } else {
      this.scribe = this.scribes;
      for (var i = 0; i < this.scribe.length; i++) {
        if (this.profileForm.value.Ainm != "") {
          if (this.scribe[i].Ainm.includes(this.profileForm.value.Ainm)) {
            this.show.push(this.scribe[i]);
          }
        }
        if (this.profileForm.value.DataBreithe != "") {
          if (
            this.scribe[i].DataBreithe.includes(
              this.profileForm.value.DataBreithe
            )
          ) {
            this.show.push(this.scribe[i]);
          }
        }
        if (this.profileForm.value.DataBais != "") {
          if (
            this.scribe[i].DataBais.includes(this.profileForm.value.DataBais)
          ) {
            this.show.push(this.scribe[i]);
          }
        }
        if (this.profileForm.value.Patrun != "") {
          if (this.scribe[i].Patrun.includes(this.profileForm.value.Patrun)) {
            this.show.push(this.scribe[i]);
          }
        }
        if (this.profileForm.value.Lamhscribhinni != "") {
          console.log(this.profileForm.value.Lamhscribhinni);
          if (
            this.scribe[i].Lamhscribhinni.includes(
              this.profileForm.value.Lamhscribhinni
            )
          ) {
            this.show.push(this.scribe[i]);
          }
        }
        if (this.profileForm.value.FloruitStart != "") {
          if (
            this.scribe[i].FloruitStart.includes(
              this.profileForm.value.FloruitStart
            )
          ) {
            this.show.push(this.scribe[i]);
          }
        }
        if (this.profileForm.value.FloruitEnd != "") {
          if (
            this.scribe[i].FloruitEnd.includes(
              this.profileForm.value.FloruitEnd
            )
          ) {
            this.show.push(this.scribe[i]);
          }
        }
        if (this.profileForm.value.SliBheatha != "") {
          if (
            this.scribe[i].SliBheatha.includes(
              this.profileForm.value.SliBheatha
            )
          ) {
            this.show.push(this.scribe[i]);
          }
        }
        // this.profileForm.value.Contae !="" && this.profileForm.value.Contae !="Athshocraigh"
        if (this.profileForm.value.Contae != "") {
          if (this.scribe[i].Seoladh1.includes(this.profileForm.value.Contae)) {
            this.show.push(this.scribe[i]);
          }
        }
      }
      if (this.show.length == 0) {
        this.showStringbool = true;
      }
      this.scribe = this.show;
      this.show = [];
    }
  }
}
