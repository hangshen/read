package org.lanqiao.service;

import org.lanqiao.entity.RechargeRecord;

import java.util.List;

public interface RechargeRecordService {
    List<RechargeRecord> selectUserRechargeRecord(Integer userLoginId);
    int insertSelective(RechargeRecord rechargeRecord);
}
