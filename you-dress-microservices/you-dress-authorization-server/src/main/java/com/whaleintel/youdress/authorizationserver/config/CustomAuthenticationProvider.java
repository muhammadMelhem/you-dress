package com.whaleintel.youdress.authorizationserver.config;

import com.whaleintel.youdress.authorizationserver.authenticationuserdetails.AuthenticationUserDetailsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    private AuthenticationUserDetailsDao authenticationUserDetailsDao;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        String password = String.valueOf(authentication.getCredentials());

        UserDetails userDetails = authenticationUserDetailsDao.loadUserByUsername(username);

        if (userDetails.getUsername().equals(username) && userDetails.getPassword().equals(password)) {
            return new UsernamePasswordAuthenticationToken(username, password, Arrays.asList());
        } else {
            throw new AuthenticationCredentialsNotFoundException("Error!");
        }
    }

    @Override
    public boolean supports(Class<?> authenticationType) {
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authenticationType);
    }

    public AuthenticationUserDetailsDao getAuthenticationUserDetailsDao() {
        return authenticationUserDetailsDao;
    }

    @Autowired
    @Qualifier("adminUserDetailsService")
    public void setAuthenticationUserDetailsDao(AuthenticationUserDetailsDao authenticationUserDetailsDao) {
        this.authenticationUserDetailsDao = authenticationUserDetailsDao;
    }
}
