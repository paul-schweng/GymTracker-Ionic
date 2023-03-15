export interface TrainingPlan {
  exercises: Exercise[]
  /**
   * Duration in <b>days</b>
   */
  duration: number
}


export interface Exercise {
  name: string
  sets: number
  reps: number
  weight: number
}
