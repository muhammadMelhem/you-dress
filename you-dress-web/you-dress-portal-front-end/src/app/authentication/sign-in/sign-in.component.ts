import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomizerSettingsService} from '../../customizer-settings/customizer-settings.service';
import {AuthorizationService} from "../authorization/authorization.service";

@Component({
  selector: 'app-sign-in',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {


  constructor(
    public themeService: CustomizerSettingsService,
    private authorizationService: AuthorizationService
  ) {}

  onSignInClick() {
    this.authorizationService.login();
  }

}
