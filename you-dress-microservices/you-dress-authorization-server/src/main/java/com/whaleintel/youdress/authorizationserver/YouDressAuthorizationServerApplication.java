package com.whaleintel.youdress.authorizationserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;

@SpringBootApplication(exclude = HibernateJpaAutoConfiguration.class)
public class YouDressAuthorizationServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(YouDressAuthorizationServerApplication.class, args);
    }

}
