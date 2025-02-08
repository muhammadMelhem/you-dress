package com.whaleintel.youdress.authorizationserver.authenticationuserdetails;

import com.whaleintel.youdress.authorizationserver.entity.admin.AdminGroupMembers;
import com.whaleintel.youdress.authorizationserver.entity.admin.AdminGroups;
import com.whaleintel.youdress.authorizationserver.entity.admin.AdminUsers;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository("adminUserDetailsService")
@Transactional
public class AdminUserDetailsDaoImpl implements AuthenticationUserDetailsDao {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void createUser(UserDetails user) {
        sessionFactory.getCurrentSession().persist(user);
    }

    @Override
    public List<String> findAllGroups() {
        return List.of();
    }

    @Override
    public List<String> findUsersInGroup(String groupName) {
        return List.of();
    }

    @Override
    public void createGroup(String groupName, List<GrantedAuthority> authorities) {

    }

    @Override
    public void deleteGroup(String groupName) {

    }

    @Override
    public void renameGroup(String oldName, String newName) {

    }

    @Override
    public void addUserToGroup(String username, String groupName) {
        AdminGroups adminGroup = findGroup(groupName);
        AdminUsers adminUser = sessionFactory.getCurrentSession().get(AdminUsers.class, username);

        AdminGroupMembers adminGroupMembers = new AdminGroupMembers();
        adminGroupMembers.setUser(adminUser);
        adminGroupMembers.setGroup(adminGroup);

        sessionFactory.getCurrentSession().persist(adminGroupMembers);

    }

    @Override
    public AdminGroups findGroup(String groupName) {
        return sessionFactory.getCurrentSession()
                .createQuery("from AdminGroups where groupName=:groupName", AdminGroups.class)
                .setParameter("groupName", groupName).uniqueResult();

    }


    @Override
    public void removeUserFromGroup(String username, String groupName) {

    }

    @Override
    public List<GrantedAuthority> findGroupAuthorities(String groupName) {
        return List.of();
    }

    @Override
    public void addGroupAuthority(String groupName, GrantedAuthority authority) {

    }

    @Override
    public void removeGroupAuthority(String groupName, GrantedAuthority authority) {

    }

    @Override
    public void updateUser(UserDetails user) {

    }

    @Override
    public void deleteUser(String username) {

    }

    @Override
    public void changePassword(String oldPassword, String newPassword) {

    }

    @Override
    public boolean userExists(String username) {
        return false;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
