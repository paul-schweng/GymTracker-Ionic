import {Inject, Injectable, Renderer2, RendererFactory2} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class LoadingControllerService {

  private renderer;

  set isLoading(isLoading: boolean) {
    const body = document.querySelector('body');

    isLoading ?
      this.renderer.removeClass(body, 'is-not-loading') :
      this.renderer.addClass(body, 'is-not-loading');

  }

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.isLoading = false;
  }




}
