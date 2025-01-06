import { Component } from "@angular/core";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { NgParticlesService } from "@tsparticles/angular";
import {AngularFireAnalytics} from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nedas-portfolio';
  id = "tsparticles";
  fire = 0;

  particlesOptions: ISourceOptions = {
      background: {
        color: {
          value: '#232741'
        },
        position: '50% 50%',
        repeat: 'no-repeat',
        size: '20%'
      },
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'repulse'
          },
          onHover: {
            enable: true,
            mode: 'bubble'
          }
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            opacity: 0,
            size: 0
          },
          grab: {
            distance: 400
          },
          repulse: {
            distance: 400
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: {
            value: '#ffffff'
          },
          distance: 150,
          opacity: 0.4
        },
        move: {
          attract: {
            rotate: {
              x: 600,
              y: 600
            }
          },
          enable: true,
          random: true,
          speed: 1
        },
        number: {
          density: {
            enable: true
          },
          value: 160
        },
        opacity: {
          value: {
            min: 0,
            max: 1
          },
          animation: {
            enable: true,
            speed: 1
          }
        },
        size: {
          value: {
            min: 1,
            max: 3
          },
          animation: {
            speed: 4,
          }
        }
      }
    };
  constructor(private ngParticlesService: NgParticlesService, analytics: AngularFireAnalytics) {
    analytics.logEvent('app_open', {"component": "AppComponent"});
  }

  ngOnInit(): void {
    void this.ngParticlesService.init(async (engine: Engine) => {

      await loadFull(engine);
    });
  }

  public particlesLoaded(container: Container): void {

  }
}
