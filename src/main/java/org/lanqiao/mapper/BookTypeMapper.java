package org.lanqiao.mapper;

import org.lanqiao.entity.BookType;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookTypeMapper {
    int deleteByPrimaryKey(Integer booktypeId);

    int insert(BookType record);

    int insertSelective(BookType record);

    BookType selectByPrimaryKey(Integer booktypeId);
    List<BookType> selectAll();
    List<BookType> selectAllBookType();
    List<BookType> selectByTypeName(String booktypeName);

    int updateByPrimaryKeySelective(BookType record);

    int updateByPrimaryKey(BookType record);
}