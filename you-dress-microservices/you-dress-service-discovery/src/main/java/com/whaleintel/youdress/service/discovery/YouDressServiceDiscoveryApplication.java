package com.whaleintel.youdress.service.discovery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class YouDressServiceDiscoveryApplication {

	public static void main(String[] args) {
		SpringApplication.run(YouDressServiceDiscoveryApplication.class, args);
	}

}
