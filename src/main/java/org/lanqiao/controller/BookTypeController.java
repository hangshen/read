package org.lanqiao.controller;

import org.lanqiao.entity.BookType;
import org.lanqiao.service.BookTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookTypeController {
    @Autowired
    BookTypeService bookTypeService;
    @RequestMapping("/getAllType")
    public List<BookType> selectAll(){
        return  bookTypeService.selectAll();
    }
}
