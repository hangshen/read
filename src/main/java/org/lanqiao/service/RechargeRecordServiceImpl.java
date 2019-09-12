package org.lanqiao.service;

import org.lanqiao.entity.RechargeRecord;
import org.lanqiao.mapper.RechargeRecordMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RechargeRecordServiceImpl implements RechargeRecordService{
    @Autowired
    RechargeRecordMapper rechargeRecordMapper;
    @Override
    public List<RechargeRecord> selectUserRechargeRecord(Integer userLoginId){
        return  rechargeRecordMapper.selectUserRechargeRecord(userLoginId);
    }
}
