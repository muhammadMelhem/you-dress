import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization/authorization.service';
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-callback',
  template: '<mat-spinner></mat-spinner>',
  imports: [
    MatProgressSpinner
  ]
})
export class CallbackComponent implements OnInit {
  constructor(private authService: AuthorizationService) {}

  ngOnInit() {
    // this.authService.handleCallback();
  }
}
