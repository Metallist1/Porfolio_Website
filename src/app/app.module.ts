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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroPageComponent } from './intro-page/intro-page.component';
import {NgParticlesModule} from "ng-particles";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    SkillSetComponent,
    EducationComponent,
    ContactMeComponent,
    WorkExamplesComponent,
    NewNavComponent,
    IntroPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
         HttpClientModule,
        NgbModule,
        NgParticlesModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
