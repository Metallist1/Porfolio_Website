import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent implements OnInit {

  htmlValue = 0;
  trueHTMLValue = 75 / 200;

  CSSValue = 0;
  trueCSSValue = 70 / 200;

  JSValue = 0;
  trueJSValue = 70 / 200;

  AngularValue = 0;
  trueAngularValue = 80 / 200;

  JavaValue = 0;
  trueJavaValue = 80 / 200;

  CValue = 0;
  trueCValue = 75 / 200;

  NodeValue = 0;
  trueNodeValue = 60 / 200;

  SQLValue = 0;
  trueSQLValue = 90 / 200;

  FirebaseValue = 0;
  trueFirebaseValue = 90 / 200;

  curSec = 0;

  constructor() {
    this.startTimer(200);
  }

  ngOnInit(): void {

  }

  startTimer(miliseconds: number) {
    const time = miliseconds;
    const timer$ = interval(1);

    const sub = timer$.subscribe((sec) => {
      this.htmlValue = this.htmlValue + this.trueHTMLValue;
      this.CSSValue = this.CSSValue + this.trueCSSValue;
      this.JSValue = this.JSValue + this.trueJSValue;
      this.AngularValue = this.AngularValue + this.trueAngularValue;
      this.JavaValue = this.JavaValue + this.trueJavaValue;
      this.CValue = this.CValue + this.trueCValue;
      this.NodeValue = this.NodeValue + this.trueNodeValue;
      this.SQLValue = this.SQLValue + this.trueSQLValue;
      this.FirebaseValue = this.FirebaseValue + this.trueFirebaseValue;

      this.curSec = sec;

      if (this.curSec === miliseconds) {
        sub.unsubscribe();
      }
    });
  }
}
