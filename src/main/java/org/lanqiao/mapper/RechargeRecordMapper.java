package org.lanqiao.mapper;

import org.lanqiao.entity.RechargeRecord;
import org.springframework.stereotype.Repository;

@Repository
public interface RechargeRecordMapper {
    int deleteByPrimaryKey(Integer rechargerecordId);

    int insert(RechargeRecord record);

    int insertSelective(RechargeRecord record);

    RechargeRecord selectByPrimaryKey(Integer rechargerecordId);

    int updateByPrimaryKeySelective(RechargeRecord record);

    int updateByPrimaryKey(RechargeRecord record);
}