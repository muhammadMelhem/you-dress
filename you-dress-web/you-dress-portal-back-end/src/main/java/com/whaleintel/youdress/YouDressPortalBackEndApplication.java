package com.whaleintel.youdress;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@RefreshScope
@EnableFeignClients
public class YouDressPortalBackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(YouDressPortalBackEndApplication.class, args);
    }

}
