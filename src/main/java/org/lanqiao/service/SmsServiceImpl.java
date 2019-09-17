package org.lanqiao.service;

import org.lanqiao.util.PhoneCode;
import org.springframework.stereotype.Service;

@Service
public class SmsServiceImpl implements SmsService{
    @Override
    public String sendSms(String mobile) {
        return PhoneCode.getPhonemsg(mobile);
    }
}
