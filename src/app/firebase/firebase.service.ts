import { Injectable } from '@angular/core';
// Import the functions you need from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBmRtfoMxkAHhaCiJ644eldJytjF0_bYrI',
  authDomain: 'gymapp-843ef.firebaseapp.com',
  databaseURL: 'https://gymapp-843ef-default-rtdb.firebaseio.com',
  projectId: 'gymapp-843ef',
  storageBucket: 'gymapp-843ef.firebasestorage.app',
  messagingSenderId: '67397034834',
  appId: '1:67397034834:web:add9002b4fdd70c7e8908b',
  measurementId: 'G-3LS2CKNJ50'
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app;
  private db: any;

  constructor() {
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully');
    this.db = getDatabase(this.app);
  }
  
  async getData(path: string): Promise<any> {
    const dbRef = ref(this.db);
    try {
      const snapshot = await get(child(dbRef, path));
      if (snapshot.exists()) {
        return snapshot.val(); // Return the data
      } else {
        console.log('No data available');
        return null;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  // Optionally, create a method to access Firebase app
  public getApp() {
    return this.app;
  }

}