package org.lanqiao.service;

import org.lanqiao.entity.AuthorLogin;
import org.lanqiao.mapper.AuthorLoginMapper;

import org.lanqiao.mapper.AuthorMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class AuthorLoginServiceImpl implements AuthorLoginService {


    Map map = new HashMap();


    @Autowired
    AuthorLoginMapper authorLoginMapper;
    @Autowired
    AuthorMapper authorMapper;


    @Override
    public int insert(AuthorLogin authorLogin) {
        return authorLoginMapper.insert(authorLogin);
    }



    @Override
    public Map loginCheck(String authorAccount, String authorPassword) {
        System.out.println(authorAccount);

        AuthorLogin authorLogin = authorLoginMapper.login(authorAccount);

        System.out.println(authorLogin);
        if (authorLogin == null) {
            map.put("author", null);
        } else {
            if (authorPassword.equals(authorLogin.getAuthorLoginPassword()))
                map.put("author", authorMapper.selectByAuthorLoginAuthorId(authorLogin.getAuthorLoginAuthorId()));
            else
                map.put("author", false);
        }
        return map;
    }

}
