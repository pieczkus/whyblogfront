import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile/profile.service';
import { Profile } from '../../shared/profile/profile';

@Component({
  moduleId: module.id,
  selector: 'wb-post-author-component',
  templateUrl: 'post-author.component.html',
  styleUrls: ['post-author.component.css']
})
export class PostAuthorComponent implements OnInit {

  @Input() author: string;
  profile: Profile;
  loading: boolean;
  errorMessage: string;
  state: string = 'inactive';

  constructor(public profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.profileService.getProfile(this.author).subscribe(profile => {
        this.profile = profile;
      },
      error => this.errorMessage = error,
      () => {
        this.loading = false;
        setTimeout(() => {
          this.state = 'active';
        }, 200);
      });
  }

}
