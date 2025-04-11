//package com.whaleintel.youdress.authorizationserver.controllers;
//
//import com.whaleintel.youdress.authorizationserver.dto.LoginDto;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationProvider;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequiredArgsConstructor
//public class LoginController {
//
//    private final AuthenticationProvider authenticationProvider;
//
//    @PostMapping("/sign-in")
//    public ResponseEntity<?> login(@RequestBody Object loginRequest) {
//
////        Authentication authentication = authenticationProvider.authenticate(
////                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
////        );
////
////        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        return ResponseEntity.ok().build();
//    }
//}
//
//
