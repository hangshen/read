package org.lanqiao.mapper;

import org.lanqiao.entity.BookShelf;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookShelfMapper {
    int deleteByPrimaryKey(Integer shelfId);

    int insert(BookShelf record);

    int insertSelective(BookShelf record);

    BookShelf selectByPrimaryKey(Integer shelfId);

    int updateByPrimaryKeySelective(BookShelf record);

    int updateByPrimaryKey(BookShelf record);

    List<BookShelf> selectAllBookSelf();
}