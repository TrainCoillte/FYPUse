import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { IrisHomeComponent } from './iris-home/iris-home.component';
import { ScholarSearchComponent } from './scholar-search/scholar-search.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '',   redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: IrisHomeComponent },
  {path: 'Map', component: MapComponent},
  {path: 'ScholarSearch', component: ScholarSearchComponent},
  {path: 'CaseStudies',component: CaseStudiesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
