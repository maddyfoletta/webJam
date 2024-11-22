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
      this.workouts = this.transformData(data);
       console.log(this.workouts);

      console.log('Raw data:', data);
      
    } catch (error) {
      console.error('Error loading workouts:', error);
    }
  }

  private transformData(data: any): { date: string; exercises: any[] }[] {
    return Object.keys(data)
      .map((date) => ({
        date,
        exercises: Object.keys(data[date]).map((exercise) => ({
          exercise,
          rep: data[date][exercise].rep || "N/A",
          weights: data[date][exercise].weights || "N/A",
        })),
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  formatDate(date: string): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 
      'August', 'September', 'October', 'November', 'December'
    ];

    const [month, day, year] = date.split('-');
    return `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
  }
  
  onRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      window.location.reload(); // Refreshes the entire page
      event.target.complete(); // Marks the refresh event as complete
    }, 2000);
  }
  
}
