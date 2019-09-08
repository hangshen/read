package org.lanqiao.service;

import org.lanqiao.entity.UserLogin;
import org.lanqiao.mapper.UserLoginMapper;
import org.lanqiao.util.SendMail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailFindServiceImpl implements EmailFindService{
    @Autowired
    UserLoginMapper userLoginMapper;

    @Override
    public String sendEmail(String email) {
//        String emailtest="384342138@qq.com";
        //检查数据苦衷是否有此邮箱 有返回true  无返回false
        UserLogin userLogin = userLoginMapper.selectByAccount(email);
        //实例化一个发送邮件的对象
        SendMail mySendMail = new SendMail();
        if(userLogin != null) {
            //设置收件人和消息内容
            mySendMail.sendMail(email, "活阅读系统提醒，您的密码为："+userLogin.getUserLoginPassword());
            return "恭喜，找回成功";
        } else {
            return "该邮箱尚未注册";
        }
    }
}
