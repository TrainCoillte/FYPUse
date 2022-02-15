import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IrisHomeComponent } from './iris-home/iris-home.component';
import { IrishNavbarComponent } from './irish-navbar/irish-navbar.component';
import { TestMapComponent } from './test-map/test-map.component';
import { ScholarSearchComponent } from './scholar-search/scholar-search.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IrisHomeComponent,
    IrishNavbarComponent,
    TestMapComponent,
    ScholarSearchComponent,
    CaseStudiesComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
