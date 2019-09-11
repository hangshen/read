package org.lanqiao.service;

import org.lanqiao.entity.PayRecord;
import org.lanqiao.vo.PayRecordVo;
import org.springframework.stereotype.Repository;

@Repository
public interface PayRecordService {
    PayRecord selectPayRecord(PayRecordVo payRecordVo);
}
