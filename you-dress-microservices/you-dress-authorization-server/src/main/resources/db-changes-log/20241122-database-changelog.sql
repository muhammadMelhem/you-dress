-- Create sequences
-- changeset create_tables_and_sequences admin user details
-- Create sequences
CREATE SEQUENCE admin_group_authorities_seq START WITH 1 INCREMENT BY 50;
CREATE SEQUENCE admin_group_members_seq START WITH 1 INCREMENT BY 50;
CREATE SEQUENCE admin_groups_seq START WITH 1 INCREMENT BY 50;


-- Create Tables

CREATE TABLE admin_group_authorities
(
    id        BIGINT      NOT NULL,
    group_id  BIGINT      NOT NULL,
    authority VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE admin_group_members
(
    id       BIGINT NOT NULL,
    username VARCHAR(128),
    group_id BIGINT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE admin_groups
(
    id         BIGINT      NOT NULL,
    group_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE admin_users
(
    username VARCHAR(128) NOT NULL,
    password VARCHAR(128) NOT NULL,
    enabled  BOOLEAN      NOT NULL,
    PRIMARY KEY (username)
);


-- Create foreign key constraints

ALTER TABLE IF EXISTS admin_group_authorities
    ADD CONSTRAINT FK_group_id
        FOREIGN KEY (group_id) REFERENCES admin_groups (id);

ALTER TABLE IF EXISTS admin_group_members
    ADD CONSTRAINT FK_group_id
        FOREIGN KEY (group_id) REFERENCES admin_groups (id);

ALTER TABLE IF EXISTS admin_group_members
    ADD CONSTRAINT FK_user_name
        FOREIGN KEY (username) REFERENCES admin_users (username);


-- insert essential data
INSERT INTO public.admin_groups(id, group_name)
VALUES (nextval('admin_groups_seq'), 'Admin');

INSERT INTO public.admin_group_authorities(id, group_id, authority)
VALUES (nextval('admin_group_authorities_seq'), 1, 'ADMIN_FULL_ACCESS');


-- Rollback changeset create_tables_and_sequences --
-- Drop Foreign Key Constraints
-- ALTER TABLE IF EXISTS admin_group_members
--     DROP CONSTRAINT IF EXISTS FK_group_id;
--
-- ALTER TABLE IF EXISTS admin_group_members
--     DROP CONSTRAINT IF EXISTS FK_user_name;
--
-- ALTER TABLE IF EXISTS admin_group_authorities
--     DROP CONSTRAINT IF EXISTS FK_group_id;
--
-- ALTER TABLE IF EXISTS admin_authorities
--     DROP CONSTRAINT IF EXISTS FK_username;
--
-- -- Drop Tables
-- DROP TABLE IF EXISTS admin_users;
-- DROP TABLE IF EXISTS admin_groups;
-- DROP TABLE IF EXISTS admin_group_members;
-- DROP TABLE IF EXISTS admin_group_authorities;
-- DROP TABLE IF EXISTS admin_authorities;
--
-- -- Drop Sequences
-- DROP SEQUENCE IF EXISTS admin_groups_seq;
-- DROP SEQUENCE IF EXISTS admin_group_members_seq;
-- DROP SEQUENCE IF EXISTS admin_group_authorities_seq;