import { Component, OnInit } from '@angular/core';
import { faCalendar, faLightbulb } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-work-examples',
  templateUrl: './work-examples.component.html',
  styleUrls: ['./work-examples.component.scss']
})
export class WorkExamplesComponent implements OnInit {

  faCalendar = faCalendar;
  faLightbulb = faLightbulb;

  constructor() { }

  ngOnInit(): void {
  }

}
