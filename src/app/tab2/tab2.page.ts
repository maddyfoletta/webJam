import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {
  selectedWorkout: string | null = null; // Holds the selected workout

  // Method to update the selected workout
  onWorkoutSelected(workout: string) {
    this.selectedWorkout = workout;
  }
}
