package org.lanqiao.service;

import org.lanqiao.entity.Books;
import org.lanqiao.mapper.BooksMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookServiceImpl implements BookService{
    @Autowired
    BooksMapper booksMapper;
    public List<Books> selectAllBooks(){
        List<Books> list= booksMapper.selectAllBooks();
        List<Books> booksList =new ArrayList<Books>();
        for(int i=0;i<10;i++)
        {
            if(i>list.size()-1)
            {
                break;
            }else {
                booksList.add(list.get(i));
            }
        }
        return  booksList;
    }
}
