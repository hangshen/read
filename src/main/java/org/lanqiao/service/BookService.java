package org.lanqiao.service;

import org.lanqiao.entity.Books;
import org.lanqiao.vo.SelectTypeVo;
import org.lanqiao.vo.SolrBooksVo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookService {
    List<Books> selectAllBooks();
    List<SolrBooksVo> queryByKeyword(String keyword);
    List<Books> selectBooksByType(SelectTypeVo selectTypeVo);
    Books selectAllChapters(Integer bookId);
    Books selectByPrimaryKey(Integer bookId);
    //根据作者Id查询全部作品
    List<Books> selectBooksByAuthorId(Integer authorId);
    //作者发表作品
    int insertBooks(Books books);
}
