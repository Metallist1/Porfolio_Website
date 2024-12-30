import { Component } from '@angular/core';
import { faUser, faBriefcase, faDesktop, faEnvelope, faAngleDoubleRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-new-nav',
  standalone: false,

  templateUrl: './new-nav.component.html',
  styleUrl: './new-nav.component.scss'
})
export class NewNavComponent {
  faUser = faUser;
  faBriefcase = faBriefcase;
  faDesktop = faDesktop;
  faEnvelope = faEnvelope;
  faAngleDoubleRight = faAngleDoubleRight;
  faHome = faHome;

  size:SizeProp = '2x' ;

  constructor() { }

  ngOnInit(): void {
  }

}
