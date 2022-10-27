package com.book.service.impl;

import com.book.model.UserRole;
import com.book.model.Users;
import com.book.repository.IUserRepository;
import com.book.repository.IUserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IUserRoleRepository userRoleRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println(username);
        Users users = userRepository.findUsersByName(username);

        if (users == null) {
            throw new UsernameNotFoundException("User " + username + " was not found in the database");
        }

        List<UserRole> userRoles = userRoleRepository.findAllByUsers(users);

        List<GrantedAuthority> grantList = new ArrayList<>();

        if (userRoles != null) {
            for (UserRole item : userRoles) {
                GrantedAuthority authority = new SimpleGrantedAuthority(item.getRoles().getName());
                grantList.add(authority);
            }
        }
        return new User(users.getUsername(), users.getPassword(), grantList);
    }
}
