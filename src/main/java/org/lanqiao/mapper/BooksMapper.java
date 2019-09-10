package org.lanqiao.mapper;

import org.lanqiao.entity.Books;
import org.lanqiao.vo.SelectTypeVo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BooksMapper {
    int deleteByPrimaryKey(Integer bookId);

    int insert(Books record);

    int insertSelective(Books record);

    Books selectByPrimaryKey(Integer bookId);
    List<Books> selectAllBooks();
    List<Books> selectBooksByType(SelectTypeVo selectTypeVo);
    int updateByPrimaryKeySelective(Books record);

    int updateByPrimaryKey(Books record);
}