import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillSetComponent } from './about-me/skill-set/skill-set.component';
import { EducationComponent } from './about-me/education/education.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SidebarContentComponent } from './nav/sidebar-content/sidebar-content.component';
import { SidebarHeaderComponent } from './nav/sidebar-header/sidebar-header.component';
import { HeaderComponent } from './nav/header/header.component';
import { WorkExamplesComponent } from './work-examples/work-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    SkillSetComponent,
    EducationComponent,
    ContactMeComponent,
    SidebarContentComponent,
    SidebarHeaderComponent,
    HeaderComponent,
    WorkExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
