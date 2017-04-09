import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'wb-post-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css'],
  animations: [
    trigger('coverState', [
      state('inactive', style({opacity: 0})),
      state('active', style({opacity: 1})),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class BodyComponent implements AfterViewInit {

  @Input() body: string;
  @ViewChild('bodyContainer') bodyContainer: ElementRef;

  ngAfterViewInit(): void {
    this.bodyContainer.nativeElement.innerHTML = this.body;
  }

}
