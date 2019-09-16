package org.lanqiao.service;


import org.lanqiao.entity.UserLogin;
import org.lanqiao.entity.Users;
import org.lanqiao.vo.LeiReadChapterVo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserService {
    public boolean checkUserLogin(UserLogin login);

    public int insertUser(UserLogin login);

    public Users chenkPassword(UserLogin login);
    public UserLogin selectUserInfo(Integer userLoginId);

    int deleteByPrimaryKey(Integer userId);
    List<Users> selectUserByName(String UserName);
    List<Users> selectAllUser();

}
