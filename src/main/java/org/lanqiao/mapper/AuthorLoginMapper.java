package org.lanqiao.mapper;

import org.lanqiao.entity.AuthorLogin;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorLoginMapper {
    int deleteByPrimaryKey(Integer authorLoginId);

    int insert(AuthorLogin record);

    int insertSelective(AuthorLogin record);

    AuthorLogin selectByPrimaryKey(Integer authorLoginId);

    int updateByPrimaryKeySelective(AuthorLogin record);

    int updateByPrimaryKey(AuthorLogin record);
}