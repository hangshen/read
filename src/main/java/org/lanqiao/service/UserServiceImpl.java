package org.lanqiao.service;

import org.lanqiao.entity.UserLogin;
import org.lanqiao.entity.Users;
import org.lanqiao.mapper.ReadMapper;
import org.lanqiao.mapper.UserLoginMapper;
import org.lanqiao.mapper.UsersMapper;
import org.lanqiao.vo.LeiReadChapterVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserLoginMapper userLoginMapper;
    @Autowired
    UsersMapper usersMapper;
    @Autowired
    ReadMapper readMapper;

    /*
     *检测注册账号是否已被注册
     */
    @Override
    public boolean checkUserLogin(UserLogin login) {
        //有返回true  无返回false
        return userLoginMapper.selectByAccount(login.getUserLoginAccount())!= null?true:false;
    }

    /*
     *注册成功
     * 表user插入用户信息 得到uesrid 用于表userlogin插入 登录信息
     */
    @Override
    public int insertUser(UserLogin login) {
        Users user=new Users();
        user.setUserName(login.getUserLoginAccount());
        if(usersMapper.insertSelective(user) > 0){
            login.setUserLoginUserId(user.getUserId());
            return userLoginMapper.insertSelective(login);
        }else{
            return 0;
        }
    }

    @Override
    public Users chenkPassword(UserLogin login) {

        return userLoginMapper.selectUser(login);
    }
    @Override
    public UserLogin selectUserInfo(Integer userLoginId){
        return userLoginMapper.selectUserInfo(userLoginId);
    }

    @Override
    public List<Users> selectUserByName(String userName){
        return usersMapper.selectUserByName(userName);
    }
    @Override
    public int deleteByPrimaryKey(Integer userId){
        return usersMapper.deleteByPrimaryKey(userId);
    }
    @Override
    public List<Users> selectAllUser(){
        return usersMapper.selectAllUser();
    }

}
