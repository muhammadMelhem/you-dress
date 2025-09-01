package com.whaleintel.youdress.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.oidc.OidcScopes;

@Configuration
public class OAuth2ClientConfig {

    @Bean
    public ClientRegistrationRepository clientRegistrationRepository() {
        return new InMemoryClientRegistrationRepository(this.youdressClientRegistration());
    }

    private ClientRegistration youdressClientRegistration() {
        return ClientRegistration.withRegistrationId("youdress")
                .clientId("youdress-bff-client")
                .clientSecret("bff-secret")
                .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                .redirectUri("{baseUrl}/login/oauth2/code/{registrationId}")
                .scope(OidcScopes.OPENID, OidcScopes.PROFILE, "articles.read", "articles.write")
                .authorizationUri("http://localhost:9000/oauth2/authorize")
                .tokenUri("http://localhost:9000/oauth2/token")
                .jwkSetUri("http://localhost:9000/oauth2/jwks")
                .issuerUri("http://localhost:9000")
                .userNameAttributeName("sub")
                .clientName("YouDress BFF Client")
                .build();
    }
}
