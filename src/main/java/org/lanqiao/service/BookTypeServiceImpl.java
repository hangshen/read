package org.lanqiao.service;

import org.lanqiao.entity.BookType;
import org.lanqiao.mapper.BookTypeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookTypeServiceImpl {
    @Autowired
    BookTypeMapper bookTypeMapper;
    public List<BookType> selectAll(){
        return  bookTypeMapper.selectAll();
    }
}
