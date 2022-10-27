import { Component, inject } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';

@Component({
  selector: 'angular-jest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  private _oktaAuth = inject(OKTA_AUTH);
  title = 'angular-jest';
}
