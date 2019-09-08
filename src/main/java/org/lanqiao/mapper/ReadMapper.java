package org.lanqiao.mapper;

import org.lanqiao.entity.Read;
import org.springframework.stereotype.Repository;

@Repository
public interface ReadMapper {
    int deleteByPrimaryKey(Integer readId);

    int insert(Read record);

    int insertSelective(Read record);

    Read selectByPrimaryKey(Integer readId);

    int updateByPrimaryKeySelective(Read record);

    int updateByPrimaryKey(Read record);
}