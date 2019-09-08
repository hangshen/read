package org.lanqiao.service;

import org.lanqiao.entity.UserLogin;
import org.lanqiao.entity.Users;
import org.lanqiao.mapper.UserLoginMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserLoginMapper userLoginMapper;

    @Override
    public boolean checkUserLogin(UserLogin login) {
        return userLoginMapper.selectByPrimaryKey(login.getUserLoginAccount())!= null?true:false;
    }
}
