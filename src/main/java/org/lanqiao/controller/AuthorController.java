package org.lanqiao.controller;

import org.apache.commons.io.FilenameUtils;
import org.lanqiao.entity.Author;
import org.lanqiao.entity.AuthorLogin;
import org.lanqiao.service.AuthorLoginService;
import org.lanqiao.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

import java.io.IOException;

import java.util.Map;


@RestController
@RequestMapping("/author")
public class AuthorController {

    @Autowired
    AuthorLoginService authorLoginService;
    @Autowired
    AuthorService authorService;



    @RequestMapping("/login")
    public Map loginCheck(String authorAccount, String authorPassword) {
        return authorLoginService.loginCheck(authorAccount,authorPassword);

    }

    @RequestMapping("/register")
    public boolean register(Author author, String authorAccount, String authorPassword, MultipartFile file, HttpServletRequest request) throws IOException {
       return authorService.register(author,authorAccount,authorPassword,file,request);
    }
}
