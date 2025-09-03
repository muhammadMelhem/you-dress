import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment";
import {catchError, of} from "rxjs";
import {CustomizerSettingsService} from "../../customizer-settings/customizer-settings.service";

@Component({
  selector: 'app-sign-in',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit{
  isAuthenticated: boolean = false;
  userName: string = '';
  messages: string[] = [];

  constructor(private http: HttpClient, public themeService: CustomizerSettingsService) {
  }

  ngOnInit(): void {
    this.getUserInfo();
    this.getMessages();
  }

  login(): void {
    // The Backend is configured to trigger login when unauthenticated
    window.location.href = environment.backendBaseUrl;
  }

  logout(): void {
    this.http.post('/logout', null)
      .pipe(catchError((error) => {
        console.error(error);
        return of(null);
      }))
      .subscribe(() => {
        this.isAuthenticated = false;
        this.userName = '';
        this.messages = [];
      });
  }

  getUserInfo(): void {
    this.http.get<any>('/userinfo')
      .pipe(catchError((error) => {
        console.error(error);
        return of(null);
      }))
      .subscribe((userInfo) => {
        if (userInfo) {
          this.isAuthenticated = true;
          this.userName = userInfo.sub;
        }
      });
  }

  authorizeMessages(): void {
    // Trigger the Backend to perform the authorization_code grant flow.
    // After authorization is complete, the Backend will redirect back to this app.
    window.location.href = environment.backendBaseUrl + "/oauth2/authorization/messaging-client-authorization-code";
  }

  getMessages(): void {
    this.http.get<string[]>('/messages')
      .pipe(catchError((error) => {
        console.error(error);
        return of([]);
      }))
      .subscribe((messages) => {
        this.messages = messages;
      });
  }
}



