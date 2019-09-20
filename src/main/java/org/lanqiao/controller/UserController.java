package org.lanqiao.controller;

import org.lanqiao.entity.Author;
import org.lanqiao.entity.UserLogin;
import org.lanqiao.entity.Users;
import org.lanqiao.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

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

    @RequestMapping(value = "/updateUserImg",method = RequestMethod.POST)
    public int updateUserImg(Integer userId,@RequestParam("userImg") MultipartFile userImg) throws IOException {
        String filePath = System.getProperty("user.dir") + "/src/main/resources/static/images/upload";//ClassUtils.getDefaultClassLoader().getResource("").getPath() + "static/images/upload";
        System.out.println(filePath);
//        String filePath = "E:\\java\\project\\IDEAProject\\read\\src\\main\\resources\\static\\images\\upload";//保存图片的路径
        //获取原始图片的拓展名
        String originalFilename = userImg.getOriginalFilename();
        //新的文件名字
        String newFileName = UUID.randomUUID() + originalFilename;
        //封装上传文件位置的全路径
        File targetFile = new File(filePath, newFileName);
        //把本地文件上传到封装上传文件位置的全路径
        userImg.transferTo(targetFile);
        Users users = new Users();
        String userImgFilePath="../images/upload/" + newFileName;
        return userService.updateUserImg(userImgFilePath,userId);
    }
}
