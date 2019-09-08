package org.lanqiao.mapper;

import org.lanqiao.entity.BookType;
import org.springframework.stereotype.Repository;

@Repository
public interface BookTypeMapper {
    int deleteByPrimaryKey(Integer booktypeId);

    int insert(BookType record);

    int insertSelective(BookType record);

    BookType selectByPrimaryKey(Integer booktypeId);

    int updateByPrimaryKeySelective(BookType record);

    int updateByPrimaryKey(BookType record);
}