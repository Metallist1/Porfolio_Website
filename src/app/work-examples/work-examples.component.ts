import { Component } from '@angular/core';
import { faCalendar, faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work-examples',
  standalone: false,

  templateUrl: './work-examples.component.html',
  styleUrl: './work-examples.component.scss'
})
export class WorkExamplesComponent {

  faCalendar = faCalendar;
  faLightbulb = faLightbulb;
}
