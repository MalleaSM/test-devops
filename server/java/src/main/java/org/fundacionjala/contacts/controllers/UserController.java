package org.fundacionjala.contacts.controllers;

import org.fundacionjala.contacts.exceptions.InvalidConfirmationCode;
import org.fundacionjala.contacts.exceptions.InvalidCredentialsException;
import org.fundacionjala.contacts.exceptions.RequiredFieldException;
import org.fundacionjala.contacts.models.User;
import org.fundacionjala.contacts.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository repository) {
        userRepository = repository;
    }

    @GetMapping("/users")
    public Set<User> retrieveAllUsers() {
        return (Set<User>) userRepository.findAll();
    }

    @GetMapping("/users/{code}")
    public User confirmUserCode(@PathVariable String code) throws InvalidConfirmationCode {
        return userRepository.findByCode(code).orElseThrow(
                () -> new InvalidConfirmationCode("Invalid code confirmation: " + code)
        );
    }

    @PostMapping("/users")
    public String saveUser(@RequestBody User user) throws RequiredFieldException {
        validateUserFields(user);
        User savedUser = userRepository.save(user);
        return savedUser.getTemporalCode();
    }

    @PutMapping("/users")
    public User updateUser(@RequestBody User user) throws RequiredFieldException {
        validateUserFields(user);
        return userRepository.save(user);
    }

    private void validateUserFields(User user) throws RequiredFieldException {
        if (user.getUsername() == null || user.getUsername().isEmpty()) {
            throw new RequiredFieldException("username");
        }
    }
}
