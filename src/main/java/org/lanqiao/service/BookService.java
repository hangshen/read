package org.lanqiao.service;

import org.lanqiao.entity.Books;
import org.lanqiao.vo.SelectTypeVo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookService {
    List<Books> selectAllBooks();
    List<Books> queryByCondition(String de);
    //根据作者Id查询全部作品
    List<Books> selectBooksByAuthorId(Integer authorId);
    //作者发表作品
    int insertBooks(Books books);
    List<Books> selectBooksByType(SelectTypeVo selectTypeVo);
}
