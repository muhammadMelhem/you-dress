//package com.whaleintel.youdress.authorizationserver.config;
//
//import jakarta.persistence.EntityManagerFactory;
//import org.hibernate.SessionFactory;
//import org.hibernate.cfg.AvailableSettings;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//import org.springframework.orm.hibernate5.HibernateTransactionManager;
//import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.JpaVendorAdapter;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.orm.jpa.vendor.Database;
//import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
//import javax.sql.DataSource;
//import java.util.Properties;
//
//
//@Configuration
//@EnableTransactionManagement
//public class JpaConfig {
//
//    @Value("${youdress.hibernate.datasource.url}")
//    private String url;
//
//    @Value("${youdress.hibernate.username}")
//    private String username;
//
//    @Value("${youdress.hibernate.password}")
//    private String password;
//
//    @Value("${youdress.hibernate.datasource.driver-class-name}")
//    private String driverClassName;
//
//    @Value("${youdress.hibernate.dialect}")
//    private String dialect;
//
//    @Value("${youdress.hibernate.show_sql}")
//    private String showSql;
//
//    @Value("${youdress.hibernate.hbm2ddl.auto}")
//    private String hbm2ddlAuto;
//
//    @Value("${youdress.hibernate.format_sql}")
//    private String formatSql;
//
//    @Value("${youdress.hibernate.physical_naming_strategy}")
//    private String namingStrategy;
//
//
//    @Bean
//    public JpaVendorAdapter jpaVendorAdapter() {
//        HibernateJpaVendorAdapter jpaVendorAdapter = new HibernateJpaVendorAdapter();
//        jpaVendorAdapter.setDatabase(Database.POSTGRESQL);
//        jpaVendorAdapter.setShowSql(true);
//        return jpaVendorAdapter;
//    }
//
//    @Bean
//    public DataSource dataSource() {
//        DriverManagerDataSource dataSource = new DriverManagerDataSource();
//        dataSource.setDriverClassName(driverClassName);
//        dataSource.setUrl(url);
//        dataSource.setUsername(username);
//        dataSource.setPassword(password);
//
//        return dataSource;
//    }
//
//    @Bean
//    public JpaTransactionManager transactionManager(EntityManagerFactory emf) {
//        return new JpaTransactionManager(emf);
//    }
//
//    @Bean
//    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
//        LocalContainerEntityManagerFactoryBean localContainerEntityManagerFactoryBean =
//                new LocalContainerEntityManagerFactoryBean();
//        localContainerEntityManagerFactoryBean.setPersistenceUnitName("auth-pu");
//        localContainerEntityManagerFactoryBean.setDataSource(dataSource());
//        localContainerEntityManagerFactoryBean.setPackagesToScan("com.whaleintel.youdress");
//        localContainerEntityManagerFactoryBean.setJpaVendorAdapter(jpaVendorAdapter());
//        localContainerEntityManagerFactoryBean.setJpaProperties(hibernateProperties());
//        return localContainerEntityManagerFactoryBean;
//    }
//
//    private Properties hibernateProperties() {
//        Properties hibernateProperties = new Properties();
//        hibernateProperties.setProperty(AvailableSettings.HBM2DDL_AUTO, hbm2ddlAuto);
//        hibernateProperties.setProperty(AvailableSettings.SHOW_SQL, showSql);
//        hibernateProperties.setProperty(AvailableSettings.DIALECT, dialect);
//        hibernateProperties.setProperty(AvailableSettings.FORMAT_SQL, formatSql);
//        hibernateProperties.setProperty(AvailableSettings.PHYSICAL_NAMING_STRATEGY, namingStrategy);
//
//        return hibernateProperties;
//    }
//
//}
