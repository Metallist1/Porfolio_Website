import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewNavComponent } from './new-nav/new-nav.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { WorkExamplesComponent } from './work-examples/work-examples.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EducationComponent } from './about-me/education/education.component';
import { SkillSetComponent } from './about-me/skill-set/skill-set.component';
import { NgxParticlesModule } from '@tsparticles/angular';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAnalyticsModule} from '@angular/fire/compat/analytics';
import {environment} from '../enviroments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    NewNavComponent,
    ContactMeComponent,
    IntroPageComponent,
    WorkExamplesComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillSetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    NgxParticlesModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
