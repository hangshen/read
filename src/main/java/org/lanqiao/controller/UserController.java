package org.lanqiao.controller;

import org.lanqiao.entity.UserLogin;
import org.lanqiao.entity.Users;
import org.lanqiao.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    /*
     *注册 检测账号是否已被注册  传入参数String 账号
     */
    @RequestMapping("/checklogin")
    public boolean checkLogin(UserLogin login){
        return userService.checkUserLogin(login);
    }

    /*
    * 注册成功  进行数据库插入数据  传入参数  账号：账号密码
     */
    @RequestMapping("/loginsuccess")
    public int loginSuccess(UserLogin login){
        return userService.insertUser(login);
    }

    /*
     *用户登录接口 检测密码是否正确 传入参数用户账号+密码 返回用户的个人信息，
     */
    @RequestMapping("/checkuser")
    public Users checkUser(UserLogin login){
        return userService.chenkPassword(login);
    }

}
