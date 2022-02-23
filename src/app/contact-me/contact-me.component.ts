import { Component, OnInit } from '@angular/core';
// import { , fa, faDesktop, faEnvelope, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import { faFacebookSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {FormBuilder, Validators} from "@angular/forms";
import {EmailService} from "../shared/email.service";
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {


  loading = false;
  faFacebook = faFacebookSquare;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  // @ts-ignore
  errorMsg: string;
  // @ts-ignore
  emailDetails: FormGroup;
  // @ts-ignore
  submitted = false;

  error = false;
  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.loadAnimation();
  }

  ngOnInit(): any {
    this.emailDetails = this.fb.group({
      email : ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100), Validators.email])],
      title : ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      contents : ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(200)])],
    });
  }

  get f(): any { return this.emailDetails.controls; }

  isDisabled = false;
  backendError = false;

  async sendEmail(){
    this.isDisabled = false;
    this.error = false;
    await this.sleep(500);
    if (this.emailDetails.invalid) {
      this.error = true;
      return;
    }
    this.isDisabled = true;
    console.log(this.emailDetails.value.email, this.emailDetails.value.title, this.emailDetails.value.contents)
    this.emailService.newEmail({
      email:this.emailDetails.value.email,
      title: this.emailDetails.value.title,
      contents: this.emailDetails.value.contents
    }).subscribe(
      response => {
        console.log(response);
        this.isDisabled = false;
        this.submitted = true;
      },
      error => {
        console.log(error);
        this.isDisabled = false;
        this.backendError = true;
      });
  }


  async loadAnimation() {
    await this.sleep(500);
    this.loading = true;
    await this.sleep(1000);
    this.loading = false;
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
