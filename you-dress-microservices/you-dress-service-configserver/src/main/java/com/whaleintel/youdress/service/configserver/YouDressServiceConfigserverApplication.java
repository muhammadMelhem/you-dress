package com.whaleintel.youdress.service.configserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class YouDressServiceConfigserverApplication {

    public static void main(String[] args) {
        SpringApplication.run(YouDressServiceConfigserverApplication.class, args);
    }

}
