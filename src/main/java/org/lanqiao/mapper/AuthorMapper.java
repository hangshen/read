package org.lanqiao.mapper;

import org.lanqiao.entity.Author;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuthorMapper {
    int deleteByPrimaryKey(Integer authorId);

    int insertSelective(Author record);

    Author selectByPrimaryKey(Integer authorId);

    int updateByPrimaryKeySelective(Author record);

    int updateByPrimaryKey(Author record);
    Author selectByAuthorLoginAuthorId(Integer authorLoginAuthorId);
    Author selectByAuthorRealID(String realID);
    int insert(Author author);
    Author selectByAuthorId(Integer authorId);
    Author getAuthorName(Integer authorId);
    List<Author> selectAuthorByName(String authorName);
    List<Author> selectAllAuthor();
}