import { OktaAuthOptions } from '@okta/okta-auth-js';

const oidc: OktaAuthOptions = {
  clientId: '',
  issuer: '',
  redirectUri: '',
  scopes: ['openid', 'profile', 'email'],
};

export const oktaConfig = {
  oidc,
  widget: {
    useInteractionCodeFlow: false,
  },
};
