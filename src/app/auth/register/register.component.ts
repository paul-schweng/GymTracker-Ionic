import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  tap
} from "rxjs";
import {RegisterUser} from "../../models/registerUser";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  hide: boolean = true;
  userAvailable: boolean = true;
  user: RegisterUser = {
    name: "", password: "", username: ""
  };

  pwdRegex = {
    name: 'min. 8 Zeichen',
    regex: '^.{8,}$'
  };

  formGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    username: new FormControl('', {validators: [Validators.pattern(/^[a-z0-9.\-_]+$/), Validators.pattern(/^(?!.*[._\-]{2}).+$/)]}),
    password: new FormControl('', [Validators.pattern(this.pwdRegex.regex)]),
    passwordRepeat: new FormControl()
  });




  constructor(private readonly authService: AuthenticationService,
              private readonly router: Router) {
    this.formGroup.controls['passwordRepeat'].addValidators(this.repeatedPwdValidator())
  }


  isInvalid() {

  }



  registerClicked() {

    // this.isBusy = true;

    this.authService.register(this.user)
      .then(() => {
        this.authService.login({username: this.user.username, password: this.user.password})
          .then(() =>
              this.router.navigateByUrl('/')
          )
      })
      // .finally(() => this.isBusy = false);
  }


  ngOnInit(): void {
    this.formGroup.controls['name'].valueChanges.subscribe(value => this.user.name = value);
    this.formGroup.controls['password'].valueChanges.subscribe(
      () => this.formGroup.controls['passwordRepeat'].updateValueAndValidity()
    );

    this.formGroup.controls['username'].valueChanges.pipe(
      startWith(''),
      map(username => username.toLowerCase().trim()),
      tap(username => this.user.username = username),
      tap(username => this.formGroup.controls['username'].setValue(username, {emitEvent: false})),
      tap(u => console.log(u)),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((username) =>
        this.authService.isUsernameAvailable(username)
          .then(available => this.userAvailable = !!available)
          .catch(err => console.log(err))
      )
    ).subscribe(a => console.log(a));

  }


  repeatedPwdValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const repeatValid = this.formGroup.controls['password'].value === control.value;

      console.log(control.value + this.formGroup.controls['password'].value)
      return !repeatValid ? {wrongRepeat: {error: 1}} : null;

    };
  }



}
