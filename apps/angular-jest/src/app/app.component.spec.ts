import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create the App', () => {
    expect(spectator).toBeTruthy();
  });
});
