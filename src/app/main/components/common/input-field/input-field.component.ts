import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent implements OnInit {

  @Input() label: string = "";
  @Input() endSlot: string = "";
  @Input() type: string = "";


  @Input() set model(val){
    this.formControl.setValue(val)
  };
  @Output() modelChange = new EventEmitter<any>();


  formControl = new FormControl()



  constructor() { }

  ngOnInit() {
    this.formControl.valueChanges.subscribe(val => this.modelChange.emit(val))
  }

}
