import { Component, inject } from '@angular/core';
import { OktaAuthModule, OKTA_AUTH } from '@okta/okta-angular';
import { oktaConfig } from './app.config';

@Component({
  selector: 'angular-jest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  providers: [{ provide: OKTA_AUTH, useValue: oktaConfig }],
})
export class AppComponent {
  private _oktaAuth = inject(OKTA_AUTH);
  title = 'angular-jest';
}
