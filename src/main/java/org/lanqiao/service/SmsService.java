package org.lanqiao.service;

import org.springframework.stereotype.Repository;

@Repository
public interface SmsService {
    public String sendSms(String mobile);
}
