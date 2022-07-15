package org.fundacionjala.contacts.repository;

import org.fundacionjala.contacts.models.Contact;

import java.util.Optional;
import java.util.List;

public interface ContactRepository extends BasicRepository<Contact, Long> {

    Optional<Contact> findByEmail(String email);

    List<Contact> findByName(String name);
}
