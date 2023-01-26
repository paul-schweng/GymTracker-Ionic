import {Animation, createAnimation} from "@ionic/angular";

export const toastEnter = (baseEl: HTMLElement, position: string): Animation => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();

  const root = baseEl.shadowRoot || baseEl;
  const wrapperEl = root.querySelector('.toast-wrapper') as HTMLElement;

  const bottom = `calc(8px + var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(20px + var(--ion-safe-area-top, 0px))`;

  wrapperAnimation.addElement(wrapperEl);

  switch (position) {
    case 'top':
      wrapperEl.style.top = top;
      wrapperAnimation
        .fromTo('opacity', 0.01, 1)
        .fromTo('transform', `translateY(-${baseEl.clientHeight}px`, 'translateY(0px)')
      break;
    case 'middle':
      const topPosition = Math.floor(baseEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    default:
      wrapperEl.style.bottom = bottom;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
  }
  return baseAnimation.easing('cubic-bezier(.97,1.37,.59,.91)').duration(400).addAnimation(wrapperAnimation);
}



export const toastLeave = (baseEl: HTMLElement): Animation => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();

  const root = baseEl.shadowRoot || baseEl;
  const wrapperEl = root.querySelector('.toast-wrapper') as HTMLElement;

  wrapperAnimation.addElement(wrapperEl)
    .fromTo('opacity', 0.9, 0)
    .fromTo('transform', 'translateX(0px)',`translateX(${baseEl.clientWidth - wrapperEl.offsetLeft}px`);

  return baseAnimation.easing('cubic-bezier(0,0,1,1)').duration(200).addAnimation(wrapperAnimation);
};
