package org.fundacionjala.contacts.models;

import java.util.Objects;
import java.util.UUID;

public class User {

    private Long id;
    private String fullName;
    private String password;
    private String username;
    private UUID temporalCode;

    public User(String name, String password, String username) {
        this.fullName = name;
        this.password = password;
        this.username = username;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getTemporalCode() {
        return temporalCode.toString().substring(0, 6);
    }

    public void setTemporalCode(UUID temporalCode) {
        this.temporalCode = temporalCode;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) return true;
        if (that == null || getClass() != that.getClass()) return false;
        User user = (User) that;
        return Objects.equals(id, user.id) &&
               Objects.equals(fullName, user.fullName) &&
               Objects.equals(username, user.username) &&
               Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, fullName, password, username);
    }
}
