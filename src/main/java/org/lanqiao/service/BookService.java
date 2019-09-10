package org.lanqiao.service;

import org.lanqiao.entity.Books;
import org.lanqiao.vo.SelectTypeVo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookService {
    List<Books> selectAllBooks();
    List<Books> queryByCondition(String de);
    List<Books> selectBooksByType(SelectTypeVo selectTypeVo);
}
