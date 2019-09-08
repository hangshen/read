package org.lanqiao.mapper;

import org.lanqiao.entity.UserLogin;
import org.lanqiao.entity.Users;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLoginMapper {
    int deleteByPrimaryKey(Integer userLoginId);

    int insert(UserLogin record);

    int insertSelective(UserLogin record);

    UserLogin selectByAccount(String userLoginAccount);

    UserLogin selectByPrimaryKey(Integer userLoginId);

    Users selectUser(UserLogin userLogin);

    int updateByPrimaryKeySelective(UserLogin record);

    int updateByPrimaryKey(UserLogin record);
}