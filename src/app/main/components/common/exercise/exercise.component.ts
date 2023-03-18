import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from "../../../../models/training-plan";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {

  @Input() exercise: Exercise = {name: "", reps: 0, sets: 0};

  isWeightVisible = false;

  toggleWeightVisibility() {
    this.isWeightVisible = !this.isWeightVisible;
  }

  constructor() { }

  ngOnInit() {}

}
