package org.lanqiao.service;

import org.lanqiao.entity.AuthorLogin;
import org.lanqiao.entity.UserLogin;
import org.lanqiao.mapper.AuthorLoginMapper;
import org.lanqiao.mapper.AuthorMapper;
import org.lanqiao.mapper.UserLoginMapper;
import org.lanqiao.util.SendMail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailFindServiceImpl implements EmailFindService{
    @Autowired
    UserLoginMapper userLoginMapper;
    @Autowired
    AuthorLoginMapper authorLoginMapper;

    @Override
    public boolean sendEmail(String email) {
//        String emailtest="384342138@qq.com";
        //检查数据苦衷是否有此邮箱
        UserLogin userLogin = userLoginMapper.selectByAccount(email);
        //实例化一个发送邮件的对象
        SendMail mySendMail = new SendMail();
        if(userLogin != null) {
            //设置收件人和消息内容
            mySendMail.sendMail(email, "爱阅读系统提醒，您的密码为："+userLogin.getUserLoginPassword());
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean sendEmailAuthor(String email) {
        //检查数据苦衷是否有此邮箱
        AuthorLogin authorLogin = authorLoginMapper.selectByAccount(email);
        //实例化一个发送邮件的对象
        SendMail mySendMail = new SendMail();
        if(authorLogin != null) {
            //设置收件人和消息内容
            mySendMail.sendMail(email, "爱阅读系统提醒，您的密码为："+authorLogin.getAuthorLoginPassword());
            return true;
        } else {
            return false;
        }
    }
}
