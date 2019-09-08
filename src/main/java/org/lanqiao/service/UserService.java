package org.lanqiao.service;


import org.lanqiao.entity.UserLogin;
import org.lanqiao.entity.Users;
import org.springframework.stereotype.Repository;

@Repository
public interface UserService {
    public boolean checkUserLogin(UserLogin login);

    public int insertUser(UserLogin login);

    public Users chenkPassword(UserLogin login);
}