package com.whaleintel.youdress.authorizationserver.authenticationuserdetails;

import com.whaleintel.youdress.authorizationserver.entity.admin.AdminGroups;
import org.springframework.security.provisioning.GroupManager;
import org.springframework.security.provisioning.UserDetailsManager;

public interface AuthenticationUserDetailsDao extends UserDetailsManager, GroupManager {
    AdminGroups findGroup(String groupName);
}