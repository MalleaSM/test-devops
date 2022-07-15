package org.fundacionjala.contacts.models;

import java.util.Objects;

public class Contact {

    private Long id;
    private Long userId;
    private String name;
    private String email;

    public Contact() { }

    public Contact(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public Long getUserId() { return userId; }

    public void setUserId(Long userId) { this.userId = userId; }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) return true;
        if (that == null || getClass() != that.getClass()) return false;
        Contact contact = (Contact) that;
        return Objects.equals(id, contact.id) &&
               Objects.equals(userId, ((Contact) that).userId) &&
               Objects.equals(name, contact.name) &&
               Objects.equals(email, contact.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, email, userId);
    }

    @Override
    public String toString() {
        return "Contact{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
