import { Component, OnInit } from '@angular/core';
import { BaseBodyComponent } from '../base-component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'wb-youtube-component',
  templateUrl: 'youtube.component.html',
  styleUrls: ['youtube.component.css']
})
export class YoutubeComponent implements BaseBodyComponent, OnInit {

  parameters: Map<string, string>;
  videoUrl: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.parameters.get('url'));
  }

}
