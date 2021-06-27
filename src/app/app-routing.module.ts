import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutMeComponent} from "./about-me/about-me.component";
import {ContactMeComponent} from "./contact-me/contact-me.component";
import {WorkExperienceComponent} from "./work-experience/work-experience.component";
import {WorkExamplesComponent} from "./work-examples/work-examples.component";
import {IntroPageComponent} from "./intro-page/intro-page.component";

const routes: Routes = [
  {
    path: '',
    component: IntroPageComponent,
  },
  {
    path: 'about',
    component: AboutMeComponent,
  },
  {
    path: 'work',
    component: WorkExperienceComponent,
  },
  {
    path: 'examples',
    component: WorkExamplesComponent,
  },
  {
    path: 'contact',
    component: ContactMeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
