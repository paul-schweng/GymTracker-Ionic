export interface TrainingPlan {
  id?: string
  name: string
  exercises: ExercisesWeek
  /**
   * Duration in <b>weeks</b>
   */
  duration: number
  startDate: string
  endDate: string
}

export interface ExercisesWeek {
  monday: Exercise[]
  tuesday: Exercise[]
  wednesday: Exercise[]
  thursday: Exercise[]
  friday: Exercise[]
  saturday: Exercise[]
  sunday: Exercise[]
}

export interface Exercise {
  id?: string
  name: string
  sets: number
  reps: number
  weight?: number
}

export interface ActualExercise extends Partial<Exercise> {
  actualSets?: number
  actualReps?: number
  actualWeight?: number
  date: string
}

export function validateExercises(exercises: ExercisesWeek): boolean {
  let exerciseCount = 0;
  for (const day in exercises) {
    const dailyExercises: Exercise[] = exercises[day as keyof ExercisesWeek];


    for (const exercise of dailyExercises) {
      if (exercise.name.trim() === '' || exercise.sets <= 0 || exercise.reps <= 0) {
        return false;
      }
      exerciseCount++;
    }
  }

  return exerciseCount > 0;
}
