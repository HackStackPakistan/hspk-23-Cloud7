import { Injectable, NgZone, inject } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { API } from '../constants/api.constant';
import { resetAuthStore, updateAuthData } from '../stores/auth.repository';
import { Router } from '@angular/router';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { User } from '../models/auth';
import { Auth, authState, signInWithEmailAndPassword } from '@angular/fire/auth';
import { take } from 'rxjs';

// const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  firestore = inject(Firestore); // Inject Firestore service
  afAuth = inject(Auth); // Inject Firebase auth service
  router = inject(Router);
  ngZone = inject(NgZone); // NgZone service to remove outside scope warning

  constructor() {
    authState(this.afAuth).subscribe((user) => {
      if (user) updateAuthData(user);
      else resetAuthStore();
    });
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  setUserData(user: any) {
    const userRef = doc(this.firestore,
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return setDoc(userRef, userData, {
      merge: true,
    });
  }

  async signIn(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(this.afAuth, email, password);
      this.setUserData(result.user);
      authState(this.afAuth).pipe(take(1)).subscribe((user) => {
        if (user) {
          this.router.navigate(['dashboard']);
        }
      });
    } catch (error: any) {
      window.alert(error.message);
    }
  }
  // Reset Forgot password
  // async forgotPassword(passwordResetEmail: string) {
  //   try {
  //     await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  //     window.alert('Password reset email sent, check your inbox.');
  //   } catch (error: any) {
  //     window.alert(error);
  //   }
  // }

  async signOut() {
    await this.afAuth.signOut();
    resetAuthStore();
    this.router.navigate(['sign-in']);
  }

  // login(form: { email: string, password: string; }) {
  //   return this.http.post(API.login, form)
  //     .pipe(
  //       map(response => response.data),
  //       tap(updateAuthToken),
  //       skipWhileAuthCached('token'),
  //       map(data => {
  //         let user: UserProps['detail'] = null;
  //         if (data.token) user = helper.decodeToken(data.token);
  //         return user;
  //       }),
  //       tap(updateUserDetail)
  //     );
  // }

  // logout() {
  //   resetAuthStore();
  //   resetUserStore();
  // }
}
