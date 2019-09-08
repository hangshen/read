package org.lanqiao.service;


import org.lanqiao.entity.UserLogin;
import org.springframework.stereotype.Repository;

@Repository
public interface UserService {
    public boolean checkUserLogin(UserLogin login);
}
