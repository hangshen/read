package org.lanqiao.service;

import org.springframework.stereotype.Repository;

@Repository
public interface EmailFindService {

    public String sendEmail(String email);
}
