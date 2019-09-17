package org.lanqiao.service;

import org.lanqiao.entity.PayRecord;
import org.lanqiao.vo.PayRecordVo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PayRecordService {
    List<PayRecord> selectPayRecord(PayRecordVo payRecordVo);
    int insertSelective(PayRecord record);
}
