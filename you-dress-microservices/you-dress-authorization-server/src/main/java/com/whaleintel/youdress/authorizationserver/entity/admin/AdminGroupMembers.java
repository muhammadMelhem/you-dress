package com.whaleintel.youdress.authorizationserver.entity.admin;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Getter
@Setter
@AllArgsConstructor
@ToString
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AdminGroupMembers {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    @JoinColumn(name = "username")
    private AdminUsers user;

    @ManyToOne
    @JoinColumn(name = "group_id", nullable = false)
    private AdminGroups group;
}
