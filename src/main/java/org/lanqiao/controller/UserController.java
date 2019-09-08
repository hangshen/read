package org.lanqiao.controller;

import org.lanqiao.entity.UserLogin;
import org.lanqiao.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping("/checklogin")
    public boolean checkUser(UserLogin login){
        UserLogin userLogin=new UserLogin();
        userLogin.setUserLoginAccount("liulei5832@163.com");
        return userService.checkUserLogin(userLogin);
    }
}
