import { Component, OnInit } from '@angular/core';
// import { , fa, faDesktop, faEnvelope, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  faFacebookF = faFacebookF;
  faGithub = faGithub;
  faLinkedin= faLinkedin;
  constructor() { }

  ngOnInit(): void {
  }

}
