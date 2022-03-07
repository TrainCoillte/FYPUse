import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IrisHomeComponent } from './iris-home/iris-home.component';
import { IrishNavbarComponent } from './irish-navbar/irish-navbar.component';
import { MapComponent } from './map/map.component';
import { ScholarSearchComponent } from './scholar-search/scholar-search.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    IrisHomeComponent,
    IrishNavbarComponent,
    MapComponent,
    ScholarSearchComponent,
    CaseStudiesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
