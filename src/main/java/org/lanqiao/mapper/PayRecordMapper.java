package org.lanqiao.mapper;

import org.lanqiao.entity.PayRecord;
import org.springframework.stereotype.Repository;

@Repository
public interface PayRecordMapper {
    int deleteByPrimaryKey(Integer payrecordId);

    int insert(PayRecord record);

    int insertSelective(PayRecord record);

    PayRecord selectByPrimaryKey(Integer payrecordId);

    int updateByPrimaryKeySelective(PayRecord record);

    int updateByPrimaryKey(PayRecord record);
}