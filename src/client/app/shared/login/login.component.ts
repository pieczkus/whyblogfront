import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LoaderService } from '../loader/loader.service';


@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  animations: [
    trigger('spinnerVisibilityChanged', [
      state('inactive', style({opacity: 0})),
      state('active', style({opacity: 1})),
      transition('inactive => active', animate('600ms')),
      transition('active => inactive', animate('300ms')),
    ])
  ]
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  returnUrl: string;
  state = 'inactive';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private fb: FormBuilder,
              private loaderService: LoaderService) {
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.loginForm = this.fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required],
    });
    this.loaderService.hide();
  }

  onSubmit() {
    this.loading = true;
    this.state = 'active';
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loading = false;
          this.state = 'inactive';
        },
        () => {
          this.loading = false;
          this.state = 'inactive';
        });
  }
}
