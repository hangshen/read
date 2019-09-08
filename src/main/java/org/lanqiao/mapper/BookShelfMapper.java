package org.lanqiao.mapper;

import org.lanqiao.entity.BookShelf;
import org.springframework.stereotype.Repository;

@Repository
public interface BookShelfMapper {
    int deleteByPrimaryKey(Integer shelfId);

    int insert(BookShelf record);

    int insertSelective(BookShelf record);

    BookShelf selectByPrimaryKey(Integer shelfId);

    int updateByPrimaryKeySelective(BookShelf record);

    int updateByPrimaryKey(BookShelf record);
}