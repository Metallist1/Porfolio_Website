import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillSetComponent } from './about-me/skill-set/skill-set.component';
import { EducationComponent } from './about-me/education/education.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { WorkExamplesComponent } from './work-examples/work-examples.component';
import { NewNavComponent } from './new-nav/new-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    SkillSetComponent,
    EducationComponent,
    ContactMeComponent,
    WorkExamplesComponent,
    NewNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
