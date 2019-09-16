package org.lanqiao.mapper;

import org.lanqiao.entity.Content;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentMapper {
    int deleteByPrimaryKey(Integer contentId);

    int insert(Content content);

    int insertSelective(Content record);

    Content selectByPrimaryKey(Integer contentId);

    int updateByPrimaryKeySelective(Content record);

    int updateByPrimaryKeyWithBLOBs(Content record);
}