import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from './loader.service';
import { LoaderState } from './loader';
import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'blog-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.css'],
  animations: [
    trigger('loaderVisibleChanged', [
      state('active', style({opacity: 1})),
      state('inactive', style({opacity: 0})),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('300ms ease-in')),
    ])
  ]
})
export class LoaderComponent implements OnInit, OnDestroy {

  state = 'inactive';

  private subscription: Subscription;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.state = state.show ? 'active' : 'inactive';
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadingCompleted($event: AnimationEvent) {
    if ($event.toState === 'inactive') {
      this.loaderService.animationFinished();
    }
  }
}
