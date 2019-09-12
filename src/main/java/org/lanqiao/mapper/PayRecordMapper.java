package org.lanqiao.mapper;

import org.lanqiao.entity.PayRecord;
import org.lanqiao.vo.PayRecordVo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PayRecordMapper {
    int deleteByPrimaryKey(Integer payrecordId);

    int insert(PayRecord record);

    int insertSelective(PayRecord record);

    PayRecord selectByPrimaryKey(Integer payrecordId);
    List<PayRecord> selectPayRecord(PayRecordVo payRecordVo);
    int updateByPrimaryKeySelective(PayRecord record);

    int updateByPrimaryKey(PayRecord record);
}