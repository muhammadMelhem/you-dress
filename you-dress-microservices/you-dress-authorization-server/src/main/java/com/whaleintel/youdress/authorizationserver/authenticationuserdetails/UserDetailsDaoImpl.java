//package com.whaleintel.youdress.authorizationserver.authenticationuserdetails;
//
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//@Repository("userDetailsService")
//public class UserDetailsDaoImpl implements AuthenticationUserDetailsDao {
//    @Override
//    public List<String> findAllGroups() {
//        return List.of();
//    }
//
//    @Override
//    public List<String> findUsersInGroup(String groupName) {
//        return List.of();
//    }
//
//    @Override
//    public void createGroup(String groupName, List<GrantedAuthority> authorities) {
//
//    }
//
//    @Override
//    public void deleteGroup(String groupName) {
//
//    }
//
//    @Override
//    public void renameGroup(String oldName, String newName) {
//
//    }
//
//    @Override
//    public void addUserToGroup(String username, String group) {
//
//    }
//
//    @Override
//    public void removeUserFromGroup(String username, String groupName) {
//
//    }
//
//    @Override
//    public List<GrantedAuthority> findGroupAuthorities(String groupName) {
//        return List.of();
//    }
//
//    @Override
//    public void addGroupAuthority(String groupName, GrantedAuthority authority) {
//
//    }
//
//    @Override
//    public void removeGroupAuthority(String groupName, GrantedAuthority authority) {
//
//    }
//
//    @Override
//    public void createUser(UserDetails user) {
//
//    }
//
//    @Override
//    public void updateUser(UserDetails user) {
//
//    }
//
//    @Override
//    public void deleteUser(String username) {
//
//    }
//
//    @Override
//    public void changePassword(String oldPassword, String newPassword) {
//
//    }
//
//    @Override
//    public boolean userExists(String username) {
//        return false;
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        return null;
//    }
//}
