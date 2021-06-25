import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutMeComponent} from "./about-me/about-me.component";
import {ContactMeComponent} from "./contact-me/contact-me.component";
import {SkillSetComponent} from "./skill-set/skill-set.component";
import {EducationComponent} from "./education/education.component";
import {WorkExperienceComponent} from "./work-experience/work-experience.component";

const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent,
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
    path: 'edu',
    component: EducationComponent,
  },
  {
    path: 'skill',
    component: SkillSetComponent,
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
