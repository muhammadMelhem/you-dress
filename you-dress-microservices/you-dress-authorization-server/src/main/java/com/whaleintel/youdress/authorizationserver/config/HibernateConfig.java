package com.whaleintel.youdress.authorizationserver.config;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.AvailableSettings;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Properties;


@Configuration
@EnableTransactionManagement
public class HibernateConfig {

    @Value("${youdress.hibernate.datasource.url}")
    private String url;

    @Value("${youdress.hibernate.username}")
    private String username;

    @Value("${youdress.hibernate.password}")
    private String password;

    @Value("${youdress.hibernate.datasource.driver-class-name}")
    private String driverClassName;

    @Value("${youdress.hibernate.dialect}")
    private String dialect;

    @Value("${youdress.hibernate.show_sql}")
    private String showSql;

    @Value("${youdress.hibernate.hbm2ddl.auto}")
    private String hbm2ddlAuto;

    @Value("${youdress.hibernate.format_sql}")
    private String formatSql;

    @Value("${youdress.hibernate.physical_naming_strategy}")
    private String namingStrategy;
//
//    @Bean
//    public JpaTransactionManager jpaTransactionManager(EntityManagerFactory emf) {
//        return new JpaTransactionManager(emf);
//    }

    @Bean
    public JpaVendorAdapter jpaVendorAdapter() {
        HibernateJpaVendorAdapter jpaVendorAdapter = new HibernateJpaVendorAdapter();
        jpaVendorAdapter.setDatabase(Database.POSTGRESQL);
        jpaVendorAdapter.setShowSql(true);
        return jpaVendorAdapter;
    }

    @Bean
    public LocalSessionFactoryBean sessionFactory() {

        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(dataSource());
        sessionFactory.setPackagesToScan("com.whaleintel*");
        sessionFactory.setHibernateProperties(hibernateProperties());
        return sessionFactory;
    }

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(driverClassName);
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);

        return dataSource;
    }

    private Properties hibernateProperties() {
        Properties hibernateProperties = new Properties();
        hibernateProperties.setProperty(AvailableSettings.HBM2DDL_AUTO, hbm2ddlAuto);
        hibernateProperties.setProperty(AvailableSettings.SHOW_SQL, showSql);
        hibernateProperties.setProperty(AvailableSettings.DIALECT, dialect);
        hibernateProperties.setProperty(AvailableSettings.FORMAT_SQL, formatSql);
        hibernateProperties.setProperty(AvailableSettings.PHYSICAL_NAMING_STRATEGY, namingStrategy);

        return hibernateProperties;
    }

    @Bean
    public HibernateTransactionManager transactionManager(SessionFactory sessionFactory) {
        HibernateTransactionManager transactionManager
                = new HibernateTransactionManager();
        transactionManager.setSessionFactory(sessionFactory);
        return transactionManager;
    }
}
