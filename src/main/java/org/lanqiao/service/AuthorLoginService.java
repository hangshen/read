package org.lanqiao.service;

import org.lanqiao.entity.AuthorLogin;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface AuthorLoginService {
    Map loginCheck(String authorAccount,String authorPassword);
    int insert(AuthorLogin authorLogin);

}
