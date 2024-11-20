import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar-workouts',
  templateUrl: './search-bar-workouts.component.html',
  styleUrls: ['./search-bar-workouts.component.scss'],
})
export class SearchBarWorkoutsComponent implements OnInit {
  searchQuery: string = ''; // User's search input
  workouts: string[] = [ // List of workouts
  "Bench Press",
  "Incline Bench Press",
  "Decline Bench Press",
  "Chest Fly",
  "Cable Crossovers",
  "Push-Ups",

  // Upper Body - Back
  "Pull-Ups",
  "Chin-Ups",
  "Lat Pulldown",
  "Barbell Rows",
  "T-Bar Rows",
  "Dumbbell Rows",
  "Deadlifts",
  "Face Pulls",

  // Upper Body - Shoulders
  "Overhead Press",
  "Dumbbell Shoulder Press",
  "Arnold Press",
  "Lateral Raises",
  "Front Raises",
  "Reverse Pec Deck",
  "Upright Rows",

  // Upper Body - Arms
  "Bicep Curls",
  "Hammer Curls",
  "Preacher Curls",
  "Concentration Curls",
  "Tricep Dips",
  "Tricep Pushdowns",
  "Overhead Tricep Extensions",
  "Skull Crushers",

  // Lower Body - Legs
  "Squats",
  "Front Squats",
  "Lunges",
  "Step-Ups",
  "Leg Press",
  "Deadlifts",
  "Romanian Deadlifts",
  "Hip Thrusts",
  "Leg Curls",
  "Leg Extensions",
  "Calf Raises",

  // Core
  "Planks",
  "Sit-Ups",
  "Russian Twists",
  "Hanging Leg Raises",
  "Bicycle Crunches",
  "Cable Woodchoppers",
  "Ab Rollouts",

  // Cardio
  "Treadmill Running",
  "Stationary Biking",
  "Rowing Machine",
  "Elliptical Machine",
  "Jump Rope",
  "Stair Climber",

  // Functional/Full-Body
  "Kettlebell Swings",
  "Burpees",
  "Medicine Ball Slams",
  "Farmer's Walk",
  "Box Jumps",
  "Battle Ropes",

  // Olympic Lifts
  "Clean and Jerk",
  "Snatch",
  "Power Clean",
  "Power Snatch",
  "Overhead Squat"
  ];
  filteredWorkouts: string[] = []; // Filtered list of workouts to display

  constructor() {}

  ngOnInit() {
    this.filteredWorkouts = this.workouts; // Initialize with all workouts
  }

  onSearch() {
    this.filteredWorkouts = this.workouts.filter(workout =>
      workout.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}


// }

  //possibly implement for search bar:
  // onSearch() {
  //   // Method to handle the search functionality
  //   console.log('Searching for:', this.searchQuery);
  //   this.search.emit(this.searchQuery); // Emit the search query to the parent component
  // }
