package org.lanqiao.controller;

import org.lanqiao.entity.Author;
import org.lanqiao.entity.UserLogin;
import org.lanqiao.entity.Users;
import org.lanqiao.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
    @RequestMapping("/register")
    public int loginSuccess(UserLogin login){
        //获取注册信息  插入数据库
        userService.insertUser(login);
        //返回userid
        return userService.chenkPassword(login).getUserId();
    }
    /*
    *用户个人信息修改
     */
    @RequestMapping("/setusermessage")
    public UserLogin setUserMessage(Users user,Integer userLoginId){
        return userService.updateUserMessage(user,userLoginId);
    }

    /*
     *用户登录接口 检测密码是否正确 传入参数用户账号+密码 返回用户的个人信息，
     * ll
     */
    @RequestMapping("/userlogin")
    public Users checkUser(UserLogin login){
        return userService.chenkPassword(login);
    }
    @RequestMapping("/getUserInfo")
    public UserLogin selectUserInfo(Integer userLoginId){
        return userService.selectUserInfo(userLoginId);
    }
    @RequestMapping("/selectUserByName")
    public List<Users> selectUserByName(String userName){
        userName = "%"+userName+"%";
        return userService.selectUserByName(userName);
    }
    @RequestMapping("/deleteUser")
    public int deleteByPrimaryKey(Integer userId){
        return userService.deleteByPrimaryKey(userId);
    }
    @RequestMapping("/selectAllUser")
    public List<Users> selectAllUser(){
        return userService.selectAllUser();
    }
    @RequestMapping("/countBookself")
    public int countBookself(Integer userId){
        return userService.countBookself(userId);
    }
}
