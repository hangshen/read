package org.lanqiao.controller;

import org.lanqiao.entity.RechargeRecord;
import org.lanqiao.service.RechargeRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RechargeRecordController {
    @Autowired
    RechargeRecordService rechargeRecordService;
    @RequestMapping("/getRechargeRecord")
    public List<RechargeRecord> selectUserRechargeRecord(Integer userLoginId){
        return  rechargeRecordService.selectUserRechargeRecord(userLoginId);
    }
    @RequestMapping("/insertRechargeRecord")
    public int insertSelective(RechargeRecord rechargeRecord){
        return rechargeRecordService.insertSelective(rechargeRecord);
    }
}
