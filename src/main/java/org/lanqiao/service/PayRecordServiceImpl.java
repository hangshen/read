package org.lanqiao.service;

import org.lanqiao.entity.PayRecord;
import org.lanqiao.mapper.PayRecordMapper;
import org.lanqiao.vo.PayRecordVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PayRecordServiceImpl implements PayRecordService{
    @Autowired
    PayRecordMapper payRecordMapper;
    public PayRecord selectPayRecord(PayRecordVo payRecordVo){
        return  payRecordMapper.selectPayRecord(payRecordVo);
    }
}
