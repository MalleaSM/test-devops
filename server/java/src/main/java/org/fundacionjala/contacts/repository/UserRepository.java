package org.fundacionjala.contacts.repository;

import org.fundacionjala.contacts.models.User;

import java.util.Optional;

public interface UserRepository extends BasicRepository<User, Long> {

    Optional<User> findByUsernameAndPassword(String username, String password);

    Optional<User> findByCode(String code);
}
