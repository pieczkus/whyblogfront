import { Component } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'wb-manager-toolbar',
  templateUrl: 'manager-toolbar.component.html',
  styleUrls: ['manager-toolbar.component.css']
})
export class ManagerToolbarComponent {


  constructor(private authenticationService: AuthenticationService) {
  }

  logout() {
    this.authenticationService.logout();
  }

  isLoggedIn(): boolean {
    return this.authenticationService.getCurrentUser() !== null;
  }

  loggedInAs(): string {
    if (this.isLoggedIn()) {
      return this.authenticationService.getCurrentUser().email;
    } else {
      return '';
    }
  }
}

