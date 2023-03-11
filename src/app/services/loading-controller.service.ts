import { Injectable, RendererFactory2} from "@angular/core";
import {
  timer,
  Subject,
  Observable,
  combineLatest, map
} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoadingControllerService {

  private renderer;
  private MIN_LOADING_MILLS = 1000;

  private _isLoading = new Subject<boolean>();
  private isLoading$: Observable<boolean> = this._isLoading.asObservable();
  private interrupter: Subject<boolean> = new Subject<boolean>();
  private waitMillis$: any;

  set isLoading(isLoading: boolean) {
    if(isLoading){
      this.init();
    }
    this._isLoading.next(isLoading);
  }

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    const body = document.querySelector('body');

    this.renderer.addClass(body, 'is-not-loading');
    this.isLoading$.subscribe(isLoading => {
      if(!isLoading)
        setTimeout(() => this.interrupt(), 10)
      else
        this.renderer.removeClass(body, 'is-not-loading');
    })

  }



  init() {
    this.interrupt();
    this.waitMillis$?.unsubscribe();
    this.waitMillis$ = combineLatest([this.isLoading$.pipe(takeUntil(this.interrupter)),timer(this.MIN_LOADING_MILLS)]).pipe(
      map(val => val[0])
    ).subscribe(isLoading => {
      const body = document.querySelector('body');
      if (isLoading) {

      } else {
        this.renderer.addClass(body, 'is-not-loading');
      }
    })

  }



  private interrupt(): void {
    this.interrupter.next(true);
    this.interrupter.complete();
    this.interrupter = new Subject<boolean>();
  }



}
