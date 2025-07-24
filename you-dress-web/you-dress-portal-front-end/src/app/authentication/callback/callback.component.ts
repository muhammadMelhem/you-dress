import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization/authorization.service';

@Component({
  selector: 'app-callback',
  template: '<p>Signing you in...</p>',
})
export class CallbackComponent implements OnInit {
  constructor(private authService: AuthorizationService) {}

  ngOnInit() {
    // this.authService.handleCallback();
  }
}
