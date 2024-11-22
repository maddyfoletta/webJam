import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {
  tags: string[] = ['Lose Weight', 'Build Muscle', 'Improve Endurance', 'Flexibility', 'Cardio'];
  selectedTags: string[] = [];
  workoutPlan: { 
    goals: string; 
    day_workouts_with_description: string[][]; 
    important_considerations: string 
  }[] | null = null;

  //DELETE IF
  selectedWorkout: string | null = null; // Currently selected workout

  constructor(private http: HttpClient) {}

  //DELETE IF
  onWorkoutSelected(workout: string) {
    this.selectedWorkout = workout; // Update the workout
  }

  toggleTag(tag: string) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    } else {
      this.selectedTags.push(tag);
    }
  }

  generateWorkout() {
    if (this.selectedTags.length === 0) {
      alert('Please select at least one tag!');
      return;
    }

    const keywords = this.selectedTags.join(', ');

    this.http.post<any>('http://127.0.0.1:5000', { keywords })
    .subscribe(
      (response) => {
        if (response && response.workout_plan) {
          try {
            this.workoutPlan = JSON.parse(response.workout_plan); // Ensure parsing if it’s a JSON string
          } catch (e) {
            this.workoutPlan = response.workout_plan; // Already parsed
          }
          console.log('Workout Plan:', this.workoutPlan);
        } else {
          console.error("No workout plan returned:", response);
          alert('Error: No workout plan returned.');
        }
      },
      (error) => {
        console.error("Error generating workout:", error);
        alert('Error generating workout. Please try again.');
      }
    );
  
  }
}
