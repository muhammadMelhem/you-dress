import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';
import {CustomizerSettingsService} from '../../customizer-settings/customizer-settings.service';
import {OAuthService} from "angular-oauth2-oidc";
import {AuthorizationService} from "../authorization/authorization.service";
import {authConfig} from "../authorization/auth.config";

@Component({
    selector: 'app-logout',
  imports: [MatButtonModule],
    templateUrl: './logout.component.html',
    styleUrl: './logout.component.scss'
})
export class LogoutComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private oauthService: OAuthService,
        private authorizationService: AuthorizationService,
        private router: Router,
    ) {}

  onSignInClick() {
    this.authorizationService.login();

  }

  private configureCodeFlow() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(value => {
      if(this.oauthService.hasValidAccessToken()){
        this.router.navigate(['/']);
      }else{

      }
    });

    this.oauthService.setupAutomaticSilentRefresh();
  }
}
