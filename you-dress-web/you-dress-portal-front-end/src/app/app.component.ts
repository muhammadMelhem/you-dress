import {Component} from '@angular/core';
import {CommonModule, NgClass, ViewportScroller} from '@angular/common';
import {Event, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {SidebarComponent} from './common/sidebar/sidebar.component';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {CustomizerSettingsComponent} from './customizer-settings/customizer-settings.component';
import {CustomizerSettingsService} from './customizer-settings/customizer-settings.service';
import {ToggleService} from './common/sidebar/toggle.service';
import {filter} from "rxjs";
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SidebarComponent, HeaderComponent, FooterComponent, CustomizerSettingsComponent, NgClass],
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
    public themeService: CustomizerSettingsService,
    private oauthService: OAuthService
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


    // Automatically load user profile
    this.oauthService.events
      .pipe(filter((e) => e.type === 'token_received'))
      .subscribe((_) => {
        console.debug('state', this.oauthService.state);
        this.oauthService.loadUserProfile();

        const scopes = this.oauthService.getGrantedScopes();
        console.debug('scopes', scopes);
      });

  }

}
