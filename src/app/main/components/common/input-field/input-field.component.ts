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
  @Input() type: string = 'number';


  @Input() set model(val){
    this.FormControl.setValue(val)
  };
  @Output() modelChange = new EventEmitter<any>();

  @Output() isInvalid = new EventEmitter<boolean>();


  @Input() FormControl = new FormControl()



  constructor() { }

  ngOnInit() {
    this.FormControl.valueChanges.subscribe(val => {
      this.modelChange.emit(val);
      this.isInvalid.emit(this.FormControl.invalid);
    })
  }

}
