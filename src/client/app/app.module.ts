import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { ManagerRoutingModule } from './manager/manager-routing.module';
import { ManagerModule } from './manager/manager.module';


@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AboutModule, MainModule, SharedModule.forRoot(),
    ManagerModule, ManagerRoutingModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule {
}
