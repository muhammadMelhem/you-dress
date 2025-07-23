import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

    // Your Auth0 app's domain
    // Important: Don't forget to start with https://
    //  AND the trailing slash!
    issuer: 'http://localhost:8080',

    // The app's clientId configured in Auth0
    clientId: 'client',

    // The app's redirectUri configured in Auth0
  redirectUri: window.location.origin + '/authentication/callback',

    // Scopes ("rights") the Angular application wants get delegated
    scope: 'openid',

    // Using Authorization Code Flow
    // (PKCE is activated by default for authorization code flow)
    responseType: 'code',
  dummyClientSecret: 'secret', // Required if using Basic Auth
  useHttpBasicAuth: true,
  requireHttps: "remoteOnly",// Enables Basic Authentication
  showDebugInformation: true // Only for development





};
