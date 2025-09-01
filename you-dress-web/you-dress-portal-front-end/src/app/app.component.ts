import {Component, OnInit} from '@angular/core';
import {CommonModule, NgClass, ViewportScroller} from '@angular/common';
import {Event, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {SidebarComponent} from './common/sidebar/sidebar.component';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {CustomizerSettingsComponent} from './customizer-settings/customizer-settings.component';
import {CustomizerSettingsService} from './customizer-settings/customizer-settings.service';
import {ToggleService} from './common/sidebar/toggle.service';
import {LoadingComponent} from "./core/UI/loading/loading.component";
import {HttpClient} from "@angular/common/http";
import {catchError, of} from "rxjs";
import {environment} from "../environment";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SidebarComponent, HeaderComponent, FooterComponent, CustomizerSettingsComponent, NgClass, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  // Title
  title = 'Daxa - Angular 19 Material Design Admin Dashboard Template';

  // isSidebarToggled
  isSidebarToggled = false;

  isAuthenticated: boolean = false;
  userName: string = '';

  constructor(
    public router: Router,
    private toggleService: ToggleService,
    private viewportScroller: ViewportScroller,
    public themeService: CustomizerSettingsService,
    private http: HttpClient
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top after each navigation end
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
    this.toggleService.isSidebarToggled$.subscribe(isSidebarToggled => {
      this.isSidebarToggled = isSidebarToggled;
    });

  }

  ngOnInit(): void {
    // if (this.isAuthenticated) {
    //   this.getUserInfo();
    // } else {
    //   window.location.href = environment.backendBaseUrl;
    // }

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

}
