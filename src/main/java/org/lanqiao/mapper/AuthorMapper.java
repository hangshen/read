package org.lanqiao.mapper;

import org.lanqiao.entity.Author;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorMapper {
//    int deleteByPrimaryKey(Integer authorId);
//
//    int insertSelective(Author record);
//
//    Author selectByPrimaryKey(Integer authorId);
//
//    int updateByPrimaryKeySelective(Author record);
//
//    int updateByPrimaryKey(Author record);
    Author selectByAuthorLoginAuthorId(Integer authorLoginAuthorId);
    Author selectByAuthorAccount(String authorAccount);
    int insert(Author author);
}