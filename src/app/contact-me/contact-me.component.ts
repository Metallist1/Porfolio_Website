import { Component } from '@angular/core';
import { faFacebookSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-contact-me',
  standalone: false,

  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  loading = false;
  faFacebook = faFacebookSquare;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  size:SizeProp = '3x' ;
}
