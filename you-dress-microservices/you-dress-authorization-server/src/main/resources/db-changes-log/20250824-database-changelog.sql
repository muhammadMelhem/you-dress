INSERT INTO public.admin_users (username, password, enabled) VALUES ('admin', 'admin', true);
-- DELETE FROM public.admin_users WHERE username ='admin';


INSERT INTO public.admin_group_members (id, username, group_id) VALUES (1, 'admin', 1);
-- DELETE FROM public.admin_group_members WHERE id = 1  AND username = 'admin'  AND group_id = 1;


