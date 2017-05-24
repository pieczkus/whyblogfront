import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AnimationState, LoaderState } from './loader';

@Injectable()
export class LoaderService {

  loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();
  animationSubject = new Subject<AnimationState>();
  animationState = this.animationSubject.asObservable();

  show() {
    this.loaderSubject.next(<LoaderState>{show: true});
  }

  hide() {
    this.loaderSubject.next(<LoaderState>{show: false});
  }

  animationFinished() {
    this.animationSubject.next(<AnimationState> {finished: true});
  }
}
