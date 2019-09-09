package org.lanqiao.mapper;

import org.lanqiao.entity.Books;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BooksMapper {
    int deleteByPrimaryKey(Integer bookId);

    int insert(Books record);

    int insertSelective(Books record);

    Books selectByPrimaryKey(Integer bookId);
    List<Books> selectAllBooks();

    int updateByPrimaryKeySelective(Books record);

    int updateByPrimaryKey(Books record);
}