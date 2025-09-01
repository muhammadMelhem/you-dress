import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {AuthorizationService} from "./authorization/authorization.service";

@Component({
    selector: 'app-authentication',
    imports: [RouterOutlet],
    templateUrl: './authentication.component.html',
    styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {

  // constructor(private authorizationService: AuthorizationService) {
  //   // authorizationService.configureOAuth();
  // }
}
