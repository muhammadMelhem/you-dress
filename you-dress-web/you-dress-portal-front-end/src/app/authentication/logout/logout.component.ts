import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {CustomizerSettingsService} from '../../customizer-settings/customizer-settings.service';
import {AuthorizationService} from "../authorization/authorization.service";

@Component({
  selector: 'app-logout',
  imports: [MatButtonModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  constructor(
    public themeService: CustomizerSettingsService,
    private authorizationService: AuthorizationService
  ) {}

  onLogoutClick() {
    this.authorizationService.logout();

  }
}
