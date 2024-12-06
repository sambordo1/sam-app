import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ExerciseListComponent extends Component {
  @tracked expandedExercise = null;

  @action
  toggleExercise(exerciseName) {
    if (this.expandedExercise === exerciseName) {
      this.expandedExercise = null;
    } else {
      this.expandedExercise = exerciseName;
    }
  }
}
