import { Component } from '@angular/core';
import { AnimationService } from '../../shared/animation.service';

@Component({
  selector: 'app-skill-set',
  standalone: false,

  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  htmlValue = 0;
  trueHTMLValue = 70;
  htmltransitionBar = '1.5s';

  CSSValue = 0;
  trueCSSValue = 70;
  CSStransitionBar = '1.5s';

  JSValue = 0;
  trueJSValue = 80;
  JStransitionBar = '2.5s';

  AngularValue = 0;
  trueAngularValue = 75;
  AngularTransitionBar = '2.0s';

  JavaValue = 0;
  trueJavaValue = 70;
  JavaTransitionBar = '1.5s';

  CValue = 0;
  trueCValue = 70;
  CTransitionBar = '1.5s';

  PythonValue = 0;
  truePythonValue = 80;
  PythonTransitionBar = '2.5s';

  NodeValue = 0;
  trueNodeValue = 80;
  NodeTransitionBar = '2.5s';

  SQLValue = 0;
  trueSQLValue = 90;
  SQLTransitionBar = '3.5s';

  FirebaseValue = 0;
  trueFirebaseValue = 90;
  FirebaseTransitionBar = '3.5s';

  curSec = 0;

  constructor(private animationHelper: AnimationService) {
    this.startTime();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async startTime(){
    await this.delay(200);
    this.htmltransitionBar = `${Math.abs(this.trueHTMLValue - this.htmlValue) / 100}s`;
    this.htmlValue = this.trueHTMLValue;

    this.CSStransitionBar = `${Math.abs(this.trueCSSValue - this.CSSValue) / 100}s`;
    this.CSSValue = this.trueCSSValue;

    this.JStransitionBar = `${Math.abs(this.trueJSValue - this.JSValue) / 100}s`;
    this.JSValue = this.trueJSValue;

    this.AngularTransitionBar = `${Math.abs(this.trueAngularValue - this.AngularValue) / 100}s`;
    this.AngularValue = this.trueAngularValue;

    this.JavaTransitionBar = `${Math.abs(this.trueJavaValue - this.JavaValue) / 100}s`;
    this.JavaValue = this.trueJavaValue;

    this.CTransitionBar = `${Math.abs(this.trueCValue - this.CValue) / 100}s`;
    this.CValue = this.trueCValue;

    this.PythonTransitionBar = `${Math.abs(this.truePythonValue - this.PythonValue) / 100}s`;
    this.PythonValue = this.truePythonValue;

    this.NodeTransitionBar = `${Math.abs(this.trueNodeValue - this.NodeValue) / 100}s`;
    this.NodeValue = this.trueNodeValue;

    this.SQLTransitionBar = `${Math.abs(this.trueSQLValue - this.SQLValue) / 100}s`;
    this.SQLValue = this.trueSQLValue;

    this.FirebaseTransitionBar = `${Math.abs(this.trueFirebaseValue - this.FirebaseValue) / 100}s`;
    this.FirebaseValue = this.trueFirebaseValue;

  }
}
