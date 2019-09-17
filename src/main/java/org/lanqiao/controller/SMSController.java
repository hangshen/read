package org.lanqiao.controller;

import org.lanqiao.service.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SMSController {

    @Autowired
    SmsService smsService;

    @RequestMapping("/sendphone")
    public String sendSMS(String mobile){
        return smsService.sendSms(mobile);
    }
}
