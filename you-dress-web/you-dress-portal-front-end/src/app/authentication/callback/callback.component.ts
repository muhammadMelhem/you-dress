import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthorizationService} from "../authorization/authorization.service";

@Component({
  selector: 'app-callback',
  imports: [],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent implements OnInit {
  constructor(private authorizationService: AuthorizationService, private router: Router) {
  }

  ngOnInit() {
    this.authorizationService.handleCallback().then(() => {
      this.router.navigate(['/crm']);
    });
  }
}
