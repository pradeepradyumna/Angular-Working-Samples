import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  signUp(email: string, pasword: string) {
    return this.auth.createUserWithEmailAndPassword(email, pasword);
  }

  signIn(email: string, pasword: string) {
    return this.auth.signInWithEmailAndPassword(email, pasword);
  }

  getUser() {
    return this.auth.authState;
  }

  signOut() {
    return this.auth.signOut();
  }
}
