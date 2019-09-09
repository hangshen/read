package org.lanqiao.controller;

import org.lanqiao.entity.Books;
import org.lanqiao.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {

    @Autowired
    BookService bookService;
    @RequestMapping("/getBooks")
    public List<Books> selectAllBooks(){
       return  bookService.selectAllBooks();
    }
}
