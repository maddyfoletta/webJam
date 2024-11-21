import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  workouts: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  async ngOnInit() {
    console.log('Initializing Tab1Page...');
    try {
      const data =  await this.firebaseService.getWorkouts();
      
      // console.log(this.workouts);
      // console.log("hello");
      // console.log(data);

      console.log('Raw data:', data);
      // this.workouts = this.parseWorkouts(data);
      // console.log('Parsed workouts:', this.workouts);
    } catch (error) {
      console.error('Error loading workouts:', error);
    }
  }

  private parseData(data: any): any{
    console.log(data[0]);
   
  }

  //   {
//     "biceps": {
//         "11-19-2024": "15"
//     },
//     "leg-press": {
//         "11-19-2024": 200
//     }
// }

// private parseWorkouts(data: any): any[] {
//   const workouts = [];
//   for (const exercise in data) {
//     if (data.hasOwnProperty(exercise)) {
//       const records = data[exercise];
//       for (const date in records) {
//         if (records.hasOwnProperty(date)) {
//           workouts.push({
//             exercise,
//             date,
//             weight: records[date]
//           });
//         }
//       }
//     }
//   }
//   return workouts;
// }
}
