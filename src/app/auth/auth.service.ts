import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login: any;

  constructor() { }
}
