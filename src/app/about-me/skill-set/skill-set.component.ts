import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";
import {AnimationService} from "../../shared/animation.service";

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent implements OnInit {

  htmlValue = 0;
  trueHTMLValue = 70;

  CSSValue = 0;
  trueCSSValue = 70;

  JSValue = 0;
  trueJSValue = 70;

  AngularValue = 0;
  trueAngularValue = 75;

  JavaValue = 0;
  trueJavaValue = 80;

  CValue = 0;
  trueCValue = 80;

  PythonValue = 0;
  truePythonValue = 80;

  NodeValue = 0;
  trueNodeValue = 85;

  SQLValue = 0;
  trueSQLValue = 90;

  FirebaseValue = 0;
  trueFirebaseValue = 90;

  curSec = 0;

  constructor(private animationHelper: AnimationService) {
      this.startTime();
  }

  ngOnInit(): void {

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async startTime(){
    await this.delay(200);
    this.animationHelper.countTime(this.trueHTMLValue,2, 35).subscribe((newWordArray) => {
      this.htmlValue = newWordArray;
    });
    this.animationHelper.countTime(this.trueCSSValue,2, 34).subscribe((newWordArray) => {
      this.CSSValue = newWordArray;
    });
    this.animationHelper.countTime(this.trueJSValue,2, 33).subscribe((newWordArray) => {
      this.JSValue = newWordArray;
    });
    this.animationHelper.countTime(this.trueAngularValue,2, 32).subscribe((newWordArray) => {
      this.AngularValue = newWordArray;
    });
    this.animationHelper.countTime(this.trueJavaValue,2, 31).subscribe((newWordArray) => {
      this.JavaValue = newWordArray;
    });
    this.animationHelper.countTime(this.trueCValue,2, 30).subscribe((newWordArray) => {
      this.CValue = newWordArray;
    });
    this.animationHelper.countTime(this.truePythonValue,2, 27).subscribe((newWordArray) => {
      this.PythonValue = newWordArray;
    });
    this.animationHelper.countTime(this.trueNodeValue,2, 29).subscribe((newWordArray) => {
      this.NodeValue = newWordArray;
    });
    this.animationHelper.countTime(this.trueSQLValue,2, 28).subscribe((newWordArray) => {
      this.SQLValue = newWordArray;
    });
    this.animationHelper.countTime(this.trueFirebaseValue,2, 27).subscribe((newWordArray) => {
      this.FirebaseValue = newWordArray;
    });
    //this.htmlValue = this.htmlValue + this.trueHTMLValue;
    //this.CSSValue = this.CSSValue + this.trueCSSValue;
    //this.JSValue = this.JSValue + this.trueJSValue;
    //this.AngularValue = this.AngularValue + this.trueAngularValue;
    //this.JavaValue = this.JavaValue + this.trueJavaValue;
    //this.CValue = this.CValue + this.trueCValue;
    //this.NodeValue = this.NodeValue + this.trueNodeValue;
    //this.SQLValue = this.SQLValue + this.trueSQLValue;
    //this.FirebaseValue = this.FirebaseValue + this.trueFirebaseValue;
  }
}
