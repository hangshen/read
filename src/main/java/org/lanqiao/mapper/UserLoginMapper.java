package org.lanqiao.mapper;

import org.lanqiao.entity.UserLogin;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLoginMapper {
    int deleteByPrimaryKey(Integer userLoginId);

    int insert(UserLogin record);

    int insertSelective(UserLogin record);

    UserLogin selectByPrimaryKey(String userLoginAccount);

    int updateByPrimaryKeySelective(UserLogin record);

    int updateByPrimaryKey(UserLogin record);
}