import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '@angular/material';
import { PostService } from './post/post.service';
import { PostListComponent } from './post-list/post-list.component';
import { PostTileComponent } from './post-list/post-tile/post-tile.component';
import { ReadPostButtonComponent } from './read-post-button/read-post-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { PostComponentService } from './component/post-component.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, BrowserAnimationsModule, FormsModule],
  declarations: [ToolbarComponent, NavbarComponent, SidenavComponent, PostListComponent, PostTileComponent,
    ReadPostButtonComponent, LoginComponent],
  exports: [ToolbarComponent, NavbarComponent, SidenavComponent, PostListComponent, PostTileComponent,
    ReadPostButtonComponent, CommonModule, FormsModule, RouterModule, MaterialModule, BrowserAnimationsModule,
    LoginComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [PostService, AuthenticationService, AuthGuard, PostComponentService]
    };
  }
}
