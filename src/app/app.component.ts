import { Component } from '@angular/core';
import {Container, Main} from "ng-particles";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-project';

  id = "tsparticles";

  /* or the classic JavaScript object */
  particlesOptions = {
    "background": {
      "color": {
        "value": "#232741"
      },
      "position": "0 50%",
      "repeat": "no-repeat",
      "size": "60%"
    },
    "fullScreen": {
      "enable": true,
      "zIndex": -1
    },
    "interactivity": {
      "events": {
        "onClick": {
          "enable": true,
          "mode": "repulse"
        },
        "onHover": {
          "mode": "grab"
        }
      },
      "modes": {
        "bubble": {
          "distance": 400,
          "duration": 2,
          "opacity": 8,
          "size": 40
        },
        "grab": {
          "distance": 200
        }
      }
    },
    "particles": {
      "color": {
        "value": "#ffffff"
      },
      "links": {
        "color": {
          "value": "#ffffff"
        },
        "distance": 150,
        "opacity": 0.4
      },
      "move": {
        "attract": {
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "direction": "left",
        "enable": true,
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "speed": 1,
        "straight": true
      },
      "opacity": {
        "value": 0.5,
        "animation": {
          "speed": 1,
          "minimumValue": 0.1
        }
      },
      "shape": {
        "options": {
          "star": {
            "sides": 5
          }
        },
        "type": "star"
      },
      "size": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 1,
          "max": 4
        },
        "animation": {
          "speed": 40,
          "minimumValue": 0.1
        }
      }
    }
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
}
