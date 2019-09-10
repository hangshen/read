package org.lanqiao.controller;

import org.apache.commons.io.FilenameUtils;
import org.lanqiao.entity.Author;
import org.lanqiao.entity.AuthorLogin;
import org.lanqiao.entity.Books;
import org.lanqiao.service.AuthorLoginService;
import org.lanqiao.service.AuthorService;
import org.lanqiao.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

import java.io.IOException;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/author")
public class AuthorController {

    @Autowired
    AuthorLoginService authorLoginService;
    @Autowired
    AuthorService authorService;
    @Autowired
    BookService bookService;


    /**
     * 登录
     * by lhw
     * @param authorAccount
     * @param authorPassword
     * @return
     */
    @RequestMapping("/login")
    public Map loginCheck(String authorAccount, String authorPassword) {
        return authorLoginService.loginCheck(authorAccount,authorPassword);

    }

    /**注册
     * by lhw
     * @param author
     * @param authorAccount
     * @param authorPassword
     * @param file
     * @param request
     * @return
     * @throws IOException
     */
    @RequestMapping("/register")
    public boolean register(Author author, String authorAccount, String authorPassword, MultipartFile file, HttpServletRequest request) throws IOException {
       return authorService.register(author,authorAccount,authorPassword,file,request);
    }

    /**查询某个作者的全部作品
     * by lhw
     * @param authorId
     * @return
     */
    @RequestMapping("/getAllBooksByAuthorId")
    public List<Books> getAllBooksByAuthorId(Integer authorId){
        return bookService.selectBooksByAuthorId(authorId);
    }

    /**
     * 作者发表（添加）作品
     * by lhw
     * @param books
     * @return
     */
    @RequestMapping("/addBook")
    public int insertBook(Books books){
        return bookService.insertBooks(books);
    }
}
