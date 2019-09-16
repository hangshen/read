package org.lanqiao.service;

import org.springframework.stereotype.Repository;

@Repository
public interface EmailFindService {

    public boolean sendEmail(String email);

    public boolean sendEmailAuthor(String email);
}
