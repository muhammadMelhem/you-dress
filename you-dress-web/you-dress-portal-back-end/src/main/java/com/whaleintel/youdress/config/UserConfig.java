package com.whaleintel.youdress.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class UserConfig {

     @Bean // <- Comment this out or remove it for production!
    public UserDetailsService userDetailsService() {

        UserDetails admin = User.withUsername("admin")
                .password("admin")
                .roles("ADMIN")
                .build();

        return new InMemoryUserDetailsManager(admin);
    }

     @Bean // <- Comment this out or remove it for production!
    public PasswordEncoder passwordEncoder() {
        // WARNING: NoOpPasswordEncoder is not secure for production.
        // Use BCryptPasswordEncoder in production!
        return NoOpPasswordEncoder.getInstance();
    }
}
