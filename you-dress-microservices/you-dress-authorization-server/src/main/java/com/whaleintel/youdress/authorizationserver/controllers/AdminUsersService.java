//package com.whaleintel.youdress.authorizationserver.controllers;
//
//
//import com.whaleintel.youdress.authorizationserver.authenticationuserdetails.AdminUserDetailsDaoImpl;
//import com.whaleintel.youdress.authorizationserver.dto.BearerToken;
//import com.whaleintel.youdress.authorizationserver.dto.RegisterDto;
//import com.whaleintel.youdress.authorizationserver.dto.SignInDto;
//import com.whaleintel.youdress.authorizationserver.entity.admin.AdminGroupMembers;
//import com.whaleintel.youdress.authorizationserver.entity.admin.AdminUsers;
//import com.whaleintel.youdress.authorizationserver.util.JwtUtilities;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//
//@Service
//@RequiredArgsConstructor
//public class AdminUsersService implements IAdminUsersService {
//
//    private final AuthenticationManager authenticationManager;
//    private final AdminUserDetailsDaoImpl adminUserDetails;
//    private final PasswordEncoder passwordEncoder;
//    private final JwtUtilities jwtUtilities;
//
//    //    @Override
////    public Role saveRole(Role role) {
////        return roleRepository.save(role);
////    }
////
////    @Override
////    public User saverUser(User user) {
////        return userRepository.save(user);
////    }
////
//    @Override
//    public ResponseEntity<?> register(RegisterDto registerDto) {
//        if (adminUserDetails.userExists(registerDto.getUsername())) {
//            return new ResponseEntity<>("username is already taken !", HttpStatus.SEE_OTHER);
//        } else {
//            AdminUsers user = new AdminUsers();
//            user.setUsername(registerDto.getUsername());
//            user.setPassword(registerDto.getPassword());
//            user.setEnabled(true);
////            user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
//
//            adminUserDetails.createUser(user);
//
//            adminUserDetails.addUserToGroup(user.getUsername(), "Admin");
//
//            String token = jwtUtilities.generateToken(registerDto.getEmail(), user.getAuthorities().stream().map(grantedAuthority -> grantedAuthority.getAuthority()).collect(Collectors.toList()));
//            return new ResponseEntity<>(new BearerToken(token, "Bearer"), HttpStatus.OK);
//
//        }
//    }
//
//    @Override
//    public String authenticate(SignInDto signInDto) {
//        Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                        signInDto.getUsername(),
//                        signInDto.getPassword()
//                )
//        );
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        UserDetails user = adminUserDetails.loadUserByUsername(authentication.getName());
//        List<String> rolesNames = user.getAuthorities().stream().map(grantedAuthority -> grantedAuthority.getAuthority()).collect(Collectors.toList());
//
//
//        String token = jwtUtilities.generateToken(user.getUsername(), rolesNames);
//        return "User login successful! Token: " + token;
//    }
//
//}
