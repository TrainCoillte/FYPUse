import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { HomeComponent } from './home/home.component';
import { IrisHomeComponent } from './iris-home/iris-home.component';
import { ScholarSearchComponent } from './scholar-search/scholar-search.component';
import { TestMapComponent } from './test-map/test-map.component';

const routes: Routes = [
  { path: '',   redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: IrisHomeComponent },
  {path: 'Map', component: TestMapComponent},
  {path: 'ScholarSearch', component: ScholarSearchComponent},
  {path: 'CaseStudies',component: CaseStudiesComponent},
  {path: 'Home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
