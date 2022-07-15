package org.fundacionjala.contacts.repository;

import org.fundacionjala.contacts.models.User;

import java.util.*;

public class UserRepositoryImpl implements UserRepository {

    private Set<User> allUsers;
    public UserRepositoryImpl() {
        allUsers = new HashSet<>();
    }

    @Override
    public <S extends User> S save(S entity) {
        Optional<User> existingUser = findById(entity.getId());

        if (existingUser.isPresent()) {
            allUsers.removeIf(u -> u.getId().equals(entity.getId()));
        } else {
            entity.setId((long) (allUsers.size() + 1));
        }

        entity.setTemporalCode(UUID.randomUUID());
        allUsers.add(entity);

        return entity;
    }

    @Override
    public Optional<User> findById(Long id) {
        return allUsers.stream()
                .filter(u -> u.getId().equals(id)).findFirst();
    }

    @Override
    public boolean existsById(Long id) {
        return allUsers.stream()
                .filter(u -> u.getId().equals(id)).findFirst().isPresent();
    }

    @Override
    public Iterable<User> findAll() {
        return allUsers;
    }

    @Override
    public Optional<User> findByUsernameAndPassword(String username, String password) {
        // TODO: Add missing logic here
        return Optional.empty();
    }

    @Override
    public Optional<User> findByCode(String code) {
        return allUsers.stream()
                .filter(u -> u.getTemporalCode().equals(code))
                .findFirst();
    }
}
