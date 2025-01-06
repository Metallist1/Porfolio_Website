import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { WorkExamplesComponent } from './work-examples/work-examples.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  {
    path: '',
    component: IntroPageComponent,
    title: 'Nedas Introduction'
  },
  {
    path: 'about',
    component: AboutMeComponent,
    title: 'About Me'
  },
  {
    path: 'work',
    component: WorkExperienceComponent,
    title: 'Work Experience'
  },
  {
    path: 'examples',
    component: WorkExamplesComponent,
    title: 'Work Examples'
  },
  {
    path: 'contact',
    component: ContactMeComponent,
    title: 'Contact Me'
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
