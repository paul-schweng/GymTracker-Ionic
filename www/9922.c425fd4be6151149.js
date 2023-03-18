"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9922],{9922:(z,p,c)=>{c.r(p),c.d(p,{ion_checkbox:()=>r});var e=c(9816),m=c(6406),u=c(2509),l=c(9397),g=c(1178),h=c(2854);const r=class{constructor(a){(0,e.r)(this,a),this.ionChange=(0,e.d)(this,"ionChange",7),this.ionFocus=(0,e.d)(this,"ionFocus",7),this.ionBlur=(0,e.d)(this,"ionBlur",7),this.ionStyle=(0,e.d)(this,"ionStyle",7),this.inputId="ion-cb-"+n++,this.inheritedAttributes={},this.hasLoggedDeprecationWarning=!1,this.setChecked=t=>{const i=this.checked=t;this.ionChange.emit({checked:i,value:this.value})},this.toggleChecked=t=>{t.preventDefault(),this.setFocus(),this.setChecked(!this.checked),this.indeterminate=!1},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.color=void 0,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.labelPlacement="start",this.justify="space-between",this.legacy=void 0}connectedCallback(){this.legacyFormController=(0,u.c)(this.el)}componentWillLoad(){this.emitStyle(),this.legacyFormController.hasLegacyControl()||(this.inheritedAttributes=Object.assign({},(0,l.i)(this.el)))}checkedChanged(){this.emitStyle()}disabledChanged(){this.emitStyle()}emitStyle(){this.legacyFormController.hasLegacyControl()&&this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}setFocus(){this.focusEl&&this.focusEl.focus()}render(){const{legacyFormController:a}=this;return a.hasLegacyControl()?this.renderLegacyCheckbox():this.renderCheckbox()}renderCheckbox(){const{color:a,checked:t,disabled:i,el:s,getSVGPath:w,indeterminate:b,inheritedAttributes:d,inputId:y,justify:v,labelPlacement:x,name:_,value:C}=this,k=(0,m.b)(this),E=w(k,b);return(0,l.d)(!0,s,_,t?C:"",i),(0,e.h)(e.H,{class:(0,h.c)(a,{[k]:!0,"in-item":(0,h.h)("ion-item",s),"checkbox-checked":t,"checkbox-disabled":i,"checkbox-indeterminate":b,interactive:!0,[`checkbox-justify-${v}`]:!0,[`checkbox-label-placement-${x}`]:!0})},(0,e.h)("label",{class:"checkbox-wrapper"},(0,e.h)("input",Object.assign({type:"checkbox",checked:!!t||void 0,disabled:i,id:y,onChange:this.toggleChecked,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:j=>this.focusEl=j},d)),(0,e.h)("div",{class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":""===s.textContent}},(0,e.h)("slot",null)),(0,e.h)("div",{class:"native-wrapper"},(0,e.h)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24",part:"container"},E))))}renderLegacyCheckbox(){this.hasLoggedDeprecationWarning||((0,g.p)('ion-checkbox now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.\n\nExample: <ion-checkbox>Label</ion-checkbox>\nExample with aria-label: <ion-checkbox aria-label="Label"></ion-checkbox>\n\nDevelopers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.',this.el),this.legacy&&(0,g.p)('ion-checkbox is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.\nDevelopers can dismiss this warning by removing their usage of the "legacy" property and using the new checkbox syntax.',this.el),this.hasLoggedDeprecationWarning=!0);const{color:a,checked:t,disabled:i,el:s,getSVGPath:w,indeterminate:b,inputId:d,name:y,value:v}=this,x=(0,m.b)(this),{label:_,labelId:C,labelText:k}=(0,l.e)(s,d),E=w(x,b);return(0,l.d)(!0,s,y,t?v:"",i),(0,e.h)(e.H,{"aria-labelledby":_?C:null,"aria-checked":`${t}`,"aria-hidden":i?"true":null,role:"checkbox",class:(0,h.c)(a,{[x]:!0,"in-item":(0,h.h)("ion-item",s),"checkbox-checked":t,"checkbox-disabled":i,"checkbox-indeterminate":b,"legacy-checkbox":!0,interactive:!0})},(0,e.h)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24",part:"container"},E),(0,e.h)("label",{htmlFor:d},k),(0,e.h)("input",{type:"checkbox","aria-checked":`${t}`,disabled:i,id:d,onChange:this.toggleChecked,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:j=>this.focusEl=j}))}getSVGPath(a,t){let i=(0,e.h)("path",t?{d:"M6 12L18 12",part:"mark"}:{d:"M5.9,12.5l3.8,3.8l8.8-8.8",part:"mark"});return"md"===a&&(i=(0,e.h)("path",t?{d:"M2 12H22",part:"mark"}:{d:"M1.73,12.91 8.1,19.28 22.79,4.59",part:"mark"})),i}get el(){return(0,e.f)(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}};let n=0;r.style={ios:":host{--checkbox-background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item){width:100%;height:100%}:host(.in-item[slot=start]:not(.legacy-checkbox)),:host(.in-item[slot=end]:not(.legacy-checkbox)){width:auto}:host(.legacy-checkbox){width:var(--size);height:var(--size)}:host(.ion-color){--checkbox-background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}:host(.legacy-checkbox) label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}:host-context([dir=rtl]):host(.legacy-checkbox) label,:host-context([dir=rtl]).legacy-checkbox label{left:unset;right:unset;right:0}:host(.legacy-checkbox) label::-moz-focus-inner{border:0}.checkbox-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-icon{border-radius:var(--border-radius);position:relative;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--checkbox-background);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-checkbox) .checkbox-icon{display:block;width:100%;height:100%}:host(:not(.legacy-checkbox)) .checkbox-icon{width:var(--size);height:var(--size)}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-justify-space-between) .checkbox-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.checkbox-justify-start) .checkbox-wrapper{-ms-flex-pack:start;justify-content:start}:host(.checkbox-justify-end) .checkbox-wrapper{-ms-flex-pack:end;justify-content:end}:host(.checkbox-label-placement-start) .checkbox-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.checkbox-label-placement-start) .label-text-wrapper{margin-left:0;margin-right:8px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.checkbox-label-placement-start) .label-text-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.checkbox-label-placement-end) .checkbox-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.checkbox-label-placement-end) .label-text-wrapper{margin-left:8px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.checkbox-label-placement-end) .label-text-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}}:host(.checkbox-label-placement-fixed) .label-text-wrapper{margin-left:0;margin-right:8px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.checkbox-label-placement-fixed) .label-text-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--checkbox-background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.23);--checkbox-background:var(--ion-item-background, var(--ion-background-color, #fff));--size:26px}:host(.checkbox-disabled){opacity:0.3}:host(.in-item.legacy-checkbox){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item.legacy-checkbox){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item.legacy-checkbox[slot=start]){margin-left:2px;margin-right:16px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item.legacy-checkbox[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:16px;margin-inline-end:16px}}",md:":host{--checkbox-background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item){width:100%;height:100%}:host(.in-item[slot=start]:not(.legacy-checkbox)),:host(.in-item[slot=end]:not(.legacy-checkbox)){width:auto}:host(.legacy-checkbox){width:var(--size);height:var(--size)}:host(.ion-color){--checkbox-background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}:host(.legacy-checkbox) label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}:host-context([dir=rtl]):host(.legacy-checkbox) label,:host-context([dir=rtl]).legacy-checkbox label{left:unset;right:unset;right:0}:host(.legacy-checkbox) label::-moz-focus-inner{border:0}.checkbox-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-icon{border-radius:var(--border-radius);position:relative;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--checkbox-background);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-checkbox) .checkbox-icon{display:block;width:100%;height:100%}:host(:not(.legacy-checkbox)) .checkbox-icon{width:var(--size);height:var(--size)}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-justify-space-between) .checkbox-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.checkbox-justify-start) .checkbox-wrapper{-ms-flex-pack:start;justify-content:start}:host(.checkbox-justify-end) .checkbox-wrapper{-ms-flex-pack:end;justify-content:end}:host(.checkbox-label-placement-start) .checkbox-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.checkbox-label-placement-start) .label-text-wrapper{margin-left:0;margin-right:8px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.checkbox-label-placement-start) .label-text-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.checkbox-label-placement-end) .checkbox-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.checkbox-label-placement-end) .label-text-wrapper{margin-left:8px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.checkbox-label-placement-end) .label-text-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}}:host(.checkbox-label-placement-fixed) .label-text-wrapper{margin-left:0;margin-right:8px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.checkbox-label-placement-fixed) .label-text-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--checkbox-background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.51);--checkmark-width:3;--checkbox-background:var(--ion-item-background, var(--ion-background-color, #fff));--transition:background 180ms cubic-bezier(0.4, 0, 0.2, 1);--size:18px}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:0.3}:host(.in-item.legacy-checkbox){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item.legacy-checkbox[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item.legacy-checkbox[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"}},2854:(z,p,c)=>{c.d(p,{c:()=>u,g:()=>g,h:()=>m,o:()=>f});var e=c(5861);const m=(o,r)=>null!==r.closest(o),u=(o,r)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},r):r,g=o=>{const r={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(o).forEach(n=>r[n]=!0),r},h=/^[a-z][a-z0-9+\-.]*:/,f=function(){var o=(0,e.Z)(function*(r,n,a,t){if(null!=r&&"#"!==r[0]&&!h.test(r)){const i=document.querySelector("ion-router");if(i)return null!=n&&n.preventDefault(),i.push(r,a,t)}return!1});return function(n,a,t,i){return o.apply(this,arguments)}}()}}]);