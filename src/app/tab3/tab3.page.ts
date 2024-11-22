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
  searchQuery: string = ''; // For search bar input
  workoutPlan: { 
    short_objective: string; 
    day_workouts_with_description: string[][]; 
    conclusion: string 
  }[] | null = null;

  constructor(private http: HttpClient) {}

  toggleTag(tag: string) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    } else {
      this.selectedTags.push(tag);
    }
  }

  generateWorkout() {
    const keywords = this.searchQuery.trim() || this.selectedTags.join(', '); // Prioritize searchQuery

    if (!keywords) {
      alert('Please enter a goal or select at least one tag!');
      return;
    }

    this.http.post<any>('http://localhost:5200', { keywords })
      .subscribe(
        (response) => {
          try {
            this.workoutPlan = JSON.parse(response.workout_plan);
          } catch {
            this.workoutPlan = response.workout_plan;
          }
        },
        (error) => {
          console.error('Error generating workout:', error);
          alert('Error generating workout. Please try again.');
        }
      );
  }
}
