import { Component, OnInit } from '@angular/core';
import { faUser, faBriefcase, faDesktop, faEnvelope, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-new-nav',
  templateUrl: './new-nav.component.html',
  styleUrls: ['./new-nav.component.scss']
})
export class NewNavComponent implements OnInit {

  faUser = faUser;
  faBriefcase = faBriefcase;
  faDesktop = faDesktop;
  faEnvelope = faEnvelope;
  faAngleDoubleRight = faAngleDoubleRight;

  isActive = true;

  constructor() { }

  ngOnInit(): void {
  }

}