"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4500],{4500:($,d,a)=>{a.r(d),a.d(d,{AuthModule:()=>B});var c=a(9808),r=a(2382),s=a(4929),u=a(5030),T=a(1552),e=a(1223);let v=(()=>{class t{constructor(){this.title=T.N.title}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-auth"]],decls:8,vars:2,consts:[[1,"ion-text-center"],["type","indeterminate","color","secondary"],[1,""],[3,"fixed"]],template:function(n,o){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",0),e._uU(3),e.qZA(),e._UZ(4,"ion-progress-bar",1),e.qZA()(),e.TgZ(5,"ion-content",2)(6,"ion-grid",3),e._UZ(7,"router-outlet"),e.qZA()()),2&n&&(e.xp6(3),e.Oqu(o.title),e.xp6(3),e.Q6J("fixed",!0))},dependencies:[s.W2,s.jY,s.Gu,s.X7,s.wd,s.sr,u.lC]}),t})();var g=a(6979),f=a(165);function A(t,i){1&t&&(e.TgZ(0,"small"),e._uU(1,"Darf nicht leer sein!"),e.qZA())}function C(t,i){if(1&t&&(e.TgZ(0,"ion-text",15),e.YNc(1,A,2,0,"small",16),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.formGroup.controls.username.hasError("required"))}}function w(t,i){1&t&&(e.TgZ(0,"small"),e._uU(1,"Darf nicht leer sein!"),e.qZA())}function U(t,i){if(1&t&&(e.TgZ(0,"ion-text",17),e.YNc(1,w,2,0,"small",16),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.formGroup.controls.password.hasError("required"))}}function y(t,i){1&t&&(e.TgZ(0,"div",18),e._uU(1,"Falsche Anmeldedaten"),e.qZA())}let b=(()=>{class t{constructor(n,o,l){this.authService=n,this.router=o,this.loadingCtrl=l,this.hide=!0,this.wrongCredentials=!1,this.formGroup=new r.cw({username:new r.NI,password:new r.NI})}loginClicked(){this.wrongCredentials=!1,this.loadingCtrl.isLoading=!0,this.authService.login({username:this.formGroup.controls.username.value,password:this.formGroup.controls.password.value}).then(()=>{this.router.navigateByUrl("/")}).catch(o=>{401==o.status&&(this.wrongCredentials=!0)}).finally(()=>this.loadingCtrl.isLoading=!1)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.$),e.Y36(u.F0),e.Y36(f.U))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:25,vars:8,consts:[[1,"d-flex","justify-content-center","fit-content","mb-5",3,"ngSubmit"],[1,"d-inline-grid",3,"formGroup"],[1,"d-inline-grid","py-4","display-3","ion-padding-horizontal"],[1,"pt-4","h4"],["routerLink","../register"],[1,"ion-padding-horizontal","ion-padding-top","h5"],["placeholder","Username eingeben...","formControlName","username","required","true"],[1,"ion-margin-bottom","ion-padding-start","d-inline"],["color","danger","class","",4,"ngIf"],["placeholder","Passwort eingeben...","formControlName","password","required","true",3,"clearOnEdit","type"],["slot","end","fill","clear",3,"click"],["size","large",3,"name"],["color","danger",4,"ngIf"],["class","my-alert",4,"ngIf"],["color","success","type","submit",1,"mt-5",3,"disabled"],["color","danger",1,""],[4,"ngIf"],["color","danger"],[1,"my-alert"]],template:function(n,o){1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return o.loginClicked()}),e.TgZ(1,"div",1)(2,"span",2),e._uU(3," Willkommen! "),e.TgZ(4,"span",3),e._uU(5," Noch keinen Account? "),e.TgZ(6,"a",4),e._uU(7,"Registrieren"),e.qZA()()(),e.TgZ(8,"label",5),e._uU(9,"Username"),e.qZA(),e.TgZ(10,"ion-item"),e._UZ(11,"ion-input",6),e.qZA(),e.TgZ(12,"div",7),e.YNc(13,C,2,1,"ion-text",8),e.qZA(),e.TgZ(14,"label",5),e._uU(15,"Passwort"),e.qZA(),e.TgZ(16,"ion-item"),e._UZ(17,"ion-input",9),e.TgZ(18,"ion-button",10),e.NdJ("click",function(){return o.hide=!o.hide}),e._UZ(19,"ion-icon",11),e.qZA()(),e.TgZ(20,"div",7),e.YNc(21,U,2,1,"ion-text",12),e.qZA(),e.YNc(22,y,2,0,"div",13),e.TgZ(23,"ion-button",14),e._uU(24," Anmelden "),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("formGroup",o.formGroup),e.xp6(12),e.Q6J("ngIf",o.formGroup.controls.username.dirty),e.xp6(4),e.Q6J("clearOnEdit",!1)("type",o.hide?"password":"text"),e.xp6(2),e.Q6J("name",o.hide?"eye-outline":"eye-off-outline"),e.xp6(2),e.Q6J("ngIf",o.formGroup.controls.password.dirty),e.xp6(1),e.Q6J("ngIf",o.wrongCredentials),e.xp6(1),e.Q6J("disabled",o.formGroup.invalid))},dependencies:[c.O5,r._Y,r.JJ,r.JL,r.Q7,r.F,s.YG,s.gu,s.pK,s.Ie,s.yW,s.j9,s.Fo,u.yS,r.sg,r.u]}),t})();var G=a(8675),I=a(4004),h=a(8505),q=a(1566),J=a(4482),N=a(5403),Q=a(1884);function Y(t,i){1&t&&(e.TgZ(0,"small",20),e._uU(1,"Darf nicht leer sein!"),e.qZA())}function L(t,i){if(1&t&&(e.TgZ(0,"ion-text",18),e.YNc(1,Y,2,0,"small",19),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.formGroup.controls.name.invalid)}}function P(t,i){1&t&&(e.TgZ(0,"small",22),e._uU(1,"Darf nicht leer sein!"),e.qZA())}function S(t,i){1&t&&(e.TgZ(0,"small",22),e._uU(1,"Erlaubte Zeichen: a-z 0-9 . - _"),e.qZA())}function E(t,i){1&t&&(e.TgZ(0,"small",22),e._uU(1,"Username bereits vergeben!"),e.qZA())}function O(t,i){if(1&t&&(e.TgZ(0,"ion-text",18),e.YNc(1,P,2,0,"small",21),e.YNc(2,S,2,0,"small",21),e.YNc(3,E,2,0,"small",21),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.formGroup.controls.username.hasError("required")),e.xp6(1),e.Q6J("ngIf",n.formGroup.controls.username.hasError("pattern")),e.xp6(1),e.Q6J("ngIf",!n.userAvailable)}}function F(t,i){1&t&&(e.TgZ(0,"small",22),e._uU(1,"Darf nicht leer sein!"),e.qZA())}function z(t,i){1&t&&(e.TgZ(0,"small",22),e._uU(1,"Mind. 8 Zeichen"),e.qZA())}function M(t,i){if(1&t&&(e.TgZ(0,"ion-text",18),e.YNc(1,F,2,0,"small",21),e.YNc(2,z,2,0,"small",21),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.formGroup.controls.password.hasError("required")),e.xp6(1),e.Q6J("ngIf",n.formGroup.controls.password.hasError("pattern"))}}function k(t,i){1&t&&(e.TgZ(0,"small",22),e._uU(1,"Darf nicht leer sein!"),e.qZA())}function D(t,i){1&t&&(e.TgZ(0,"small",22),e._uU(1,"Passwort stimmt nicht \xfcberein"),e.qZA())}function V(t,i){if(1&t&&(e.TgZ(0,"ion-text",18),e.YNc(1,k,2,0,"small",21),e.YNc(2,D,2,0,"small",21),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.formGroup.controls.passwordRepeat.hasError("required")),e.xp6(1),e.Q6J("ngIf",n.formGroup.controls.passwordRepeat.hasError("wrongRepeat"))}}const j=[{path:"",component:v,children:[{path:"login",component:b},{path:"register",component:(()=>{class t{constructor(n,o,l){this.authService=n,this.router=o,this.loadingCtrl=l,this.hide=!0,this.userAvailable=!0,this.pwdRegex={name:"min. 8 Zeichen",regex:"^.{8,}$"},this.formGroup=new r.cw({name:new r.NI,username:new r.NI("",{validators:[r.kI.pattern(/^[a-z0-9.\-_]+$/),r.kI.pattern(/^(?!.*[._\-]{2}).+$/)]}),password:new r.NI("",[r.kI.pattern(this.pwdRegex.regex)]),passwordRepeat:new r.NI}),this.formGroup.controls.passwordRepeat.addValidators(this.repeatedPwdValidator())}isInvalid(){}registerClicked(){this.loadingCtrl.isLoading=!0;const n={name:this.formGroup.controls.name.value,password:this.formGroup.controls.password.value,username:this.formGroup.controls.username.value};this.authService.register(n).then(()=>{this.authService.login({username:n.username,password:n.password}).then(()=>this.router.navigateByUrl("/"))}).finally(()=>this.loadingCtrl.isLoading=!1)}ngOnInit(){this.formGroup.controls.password.valueChanges.subscribe(()=>this.formGroup.controls.passwordRepeat.updateValueAndValidity()),this.formGroup.controls.username.valueChanges.pipe((0,G.O)(""),(0,I.U)(n=>n.toLowerCase().trim()),(0,h.b)(n=>this.formGroup.controls.username.setValue(n,{emitEvent:!1})),function R(t,i=q.z){return(0,J.e)((n,o)=>{let l=null,m=null,Z=null;const _=()=>{if(l){l.unsubscribe(),l=null;const p=m;m=null,o.next(p)}};function X(){const p=Z+t,x=i.now();if(x<p)return l=this.schedule(void 0,p-x),void o.add(l);_()}n.subscribe((0,N.x)(o,p=>{m=p,Z=i.now(),l||(l=i.schedule(X,t),o.add(l))},()=>{_(),o.complete()},void 0,()=>{m=l=null}))})}(400),(0,Q.x)(),(0,h.b)(n=>{""!=n&&this.authService.isUsernameAvailable(n).then(o=>this.userAvailable=o.available).catch(o=>console.log(o))})).subscribe(n=>console.log(n))}repeatedPwdValidator(){return n=>{const o=this.formGroup.controls.password.value===n.value;return console.log(n.value+this.formGroup.controls.password.value),o?null:{wrongRepeat:{error:1}}}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.$),e.Y36(u.F0),e.Y36(f.U))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:36,vars:9,consts:[[1,"d-flex","justify-content-center","fit-content","mb-5",3,"ngSubmit"],[1,"d-inline-grid",3,"formGroup"],[1,"d-inline-grid","py-4","display-3","ion-padding-horizontal"],[1,"pt-4","h4"],["routerLink","../login"],[1,"ion-padding-horizontal","ion-padding-top","h5"],[1,""],["placeholder","Namen eingeben...","formControlName","name","required","true"],[1,"ion-margin-bottom","ion-padding-start","d-inline"],["color","danger",4,"ngIf"],[1,"ion-padding-start","ion-padding-top","h5"],["counter","true",1,""],["placeholder","Username eingeben...","formControlName","username","maxlength","20","required","true"],["placeholder","Passwort eingeben...","formControlName","password","required","true",3,"clearOnEdit","type"],["slot","end","fill","clear",3,"click"],["size","large",3,"name"],["type","password","placeholder","Passwort wiederholen...","formControlName","passwordRepeat","required","true"],["color","success","type","submit",1,"mt-5",3,"disabled"],["color","danger"],["class","small",4,"ngIf"],[1,"small"],["class","d-block",4,"ngIf"],[1,"d-block"]],template:function(n,o){1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return o.registerClicked()}),e.TgZ(1,"div",1)(2,"h1",2),e._uU(3," Willkommen! "),e.TgZ(4,"h4",3),e._uU(5," Hast Du bereits einen Account? "),e.TgZ(6,"a",4),e._uU(7,"Anmelden"),e.qZA()()(),e.TgZ(8,"label",5),e._uU(9,"Name"),e.qZA(),e.TgZ(10,"ion-item",6),e._UZ(11,"ion-input",7),e.qZA(),e.TgZ(12,"div",8),e.YNc(13,L,2,1,"ion-text",9),e.qZA(),e.TgZ(14,"label",10),e._uU(15,"Username"),e.qZA(),e.TgZ(16,"ion-item",11),e._UZ(17,"ion-input",12),e.qZA(),e.TgZ(18,"div",8),e.YNc(19,O,4,3,"ion-text",9),e.qZA(),e.TgZ(20,"label",5),e._uU(21,"Passwort"),e.qZA(),e.TgZ(22,"ion-item",6),e._UZ(23,"ion-input",13),e.TgZ(24,"ion-button",14),e.NdJ("click",function(){return o.hide=!o.hide}),e._UZ(25,"ion-icon",15),e.qZA()(),e.TgZ(26,"div",8),e.YNc(27,M,3,2,"ion-text",9),e.qZA(),e.TgZ(28,"label",5),e._uU(29,"Passwort wiederholen"),e.qZA(),e.TgZ(30,"ion-item",6),e._UZ(31,"ion-input",16),e.qZA(),e.TgZ(32,"div",8),e.YNc(33,V,3,2,"ion-text",9),e.qZA(),e.TgZ(34,"ion-button",17),e._uU(35," Registrieren "),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("formGroup",o.formGroup),e.xp6(12),e.Q6J("ngIf",o.formGroup.controls.name.dirty),e.xp6(6),e.Q6J("ngIf",o.formGroup.controls.username.dirty),e.xp6(4),e.Q6J("clearOnEdit",!1)("type",o.hide?"password":"text"),e.xp6(2),e.Q6J("name",o.hide?"eye-outline":"eye-off-outline"),e.xp6(2),e.Q6J("ngIf",o.formGroup.controls.password.dirty),e.xp6(6),e.Q6J("ngIf",o.formGroup.controls.passwordRepeat.dirty),e.xp6(1),e.Q6J("disabled",o.formGroup.invalid))},dependencies:[c.O5,r._Y,r.JJ,r.JL,r.Q7,r.nD,r.F,s.YG,s.gu,s.pK,s.Ie,s.yW,s.j9,s.Fo,u.yS,r.sg,r.u],styles:[".pt-4[_ngcontent-%COMP%]{padding-top:1.5vh!important}.pt-5[_ngcontent-%COMP%]{padding-top:3vh!important}.pb-5[_ngcontent-%COMP%]{padding-bottom:3vh!important}"]}),t})()}]}];let W=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(j),u.Bz]}),t})(),B=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,r.u5,s.Pc,W,r.UX]}),t})()}}]);