
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {
  selectedWorkout: string | null = null; // Holds the selected workout
  searchQuery: string = ''; // Tracks the user's search input
  isLoggingCardVisible: boolean = false; // Controls the visibility of the logging card

  onWorkoutSelected(workout: string) {
    this.selectedWorkout = workout; // Update selected workout
    this.isLoggingCardVisible = true; // Show the logging card
  }

  onSearchQueryChange(query: string) {
    this.searchQuery = query; // Update the search query
    this.isLoggingCardVisible = false; // Hide the logging card if typing again
  }
}
