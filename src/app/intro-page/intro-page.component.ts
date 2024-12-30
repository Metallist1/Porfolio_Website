import { Component } from '@angular/core';
import { faUser, faBriefcase, faDesktop, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro-page',
  standalone: false,

  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.scss'
})
export class IntroPageComponent {
  faUser = faUser;
  faBriefcase = faBriefcase;
  faDesktop = faDesktop;
  faEnvelope = faEnvelope;
  faHome = faHome;
}
