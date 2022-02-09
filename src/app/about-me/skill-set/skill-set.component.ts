import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent implements OnInit {

  htmlValue = 0;
  trueHTMLValue = 75;

  CSSValue = 0;
  trueCSSValue = 70;

  JSValue = 0;
  trueJSValue = 70;

  AngularValue = 0;
  trueAngularValue = 80;

  JavaValue = 0;
  trueJavaValue = 80;

  CValue = 0;
  trueCValue = 75;

  NodeValue = 0;
  trueNodeValue = 60;

  SQLValue = 0;
  trueSQLValue = 90;

  FirebaseValue = 0;
  trueFirebaseValue = 90 ;

  curSec = 0;

  constructor() {
      this.startTime();
  }

  ngOnInit(): void {

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async startTime(){
    await this.delay(200);
    this.htmlValue = this.htmlValue + this.trueHTMLValue;
    this.CSSValue = this.CSSValue + this.trueCSSValue;
    this.JSValue = this.JSValue + this.trueJSValue;
    this.AngularValue = this.AngularValue + this.trueAngularValue;
    this.JavaValue = this.JavaValue + this.trueJavaValue;
    this.CValue = this.CValue + this.trueCValue;
    this.NodeValue = this.NodeValue + this.trueNodeValue;
    this.SQLValue = this.SQLValue + this.trueSQLValue;
    this.FirebaseValue = this.FirebaseValue + this.trueFirebaseValue;
  }
}
