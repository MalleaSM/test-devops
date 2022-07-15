package org.fundacionjala.contacts.config;

import org.fundacionjala.contacts.models.User;
import org.fundacionjala.contacts.repository.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RepositoriesConfigurator {

    @Bean
    public ContactRepository initializeContactRepository() {
        return new ContactRepositoryImpl();
    }

    @Bean
    public UserRepository initializeUserRepository() {
        UserRepository repository = new UserRepositoryImpl();
        repository.save(new User("Super Admin", "system123", "admin"));
        return repository;
    }
}
