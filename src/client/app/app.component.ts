import { Component, OnInit } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { LoaderService } from './shared/loader/index';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private loaderService: LoaderService) {
    console.log('Environment config', Config);
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      } else if (event instanceof NavigationError || event instanceof NavigationCancel) {
        this.loaderService.hide();
      }
    });
  }
}
