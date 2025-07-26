import {Component} from '@angular/core';
import {CommonModule, NgClass, ViewportScroller} from '@angular/common';
import {Event, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {SidebarComponent} from './common/sidebar/sidebar.component';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {CustomizerSettingsComponent} from './customizer-settings/customizer-settings.component';
import {CustomizerSettingsService} from './customizer-settings/customizer-settings.service';
import {ToggleService} from './common/sidebar/toggle.service';
import {LoadingComponent} from "./core/UI/loading/loading.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SidebarComponent, HeaderComponent, FooterComponent, CustomizerSettingsComponent, NgClass, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // Title
  title = 'Daxa - Angular 19 Material Design Admin Dashboard Template';

  // isSidebarToggled
  isSidebarToggled = false;

  constructor(
    public router: Router,
    private toggleService: ToggleService,
    private viewportScroller: ViewportScroller,
    public themeService: CustomizerSettingsService
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

    // if (this.oauthService.hasValidAccessToken()) {
    //   this.router.navigate(['/users']);
    // } else {
    //   this.router.navigate(['/authentication/logout']);
    // }

  }

}
