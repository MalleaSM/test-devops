package org.fundacionjala.contacts.repository;

import org.fundacionjala.contacts.models.Contact;

import java.util.List;
import java.util.Optional;

public class ContactRepositoryImpl implements ContactRepository {

    public ContactRepositoryImpl() {

    }

    @Override
    public <S extends Contact> S save(S entity) {
        // TODO: Implement missing logic here
        return null;
    }

    @Override
    public Optional<Contact> findById(Long id) {
        // TODO: Implement missing logic here
        return Optional.empty();
    }

    @Override
    public boolean existsById(Long id) {
        // TODO: Implement missing logic here
        return false;
    }

    @Override
    public Iterable<Contact> findAll() {
        // TODO: Implement missing logic here
        return null;
    }

    @Override
    public Optional<Contact> findByEmail(String email) {
        // TODO: Implement missing logic here
        return Optional.empty();
    }

    @Override
    public List<Contact> findByName(String name) {
        // TODO: Implement missing logic here
        return null;
    }
}
