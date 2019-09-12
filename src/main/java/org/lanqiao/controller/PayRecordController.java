package org.lanqiao.controller;

import org.lanqiao.entity.PayRecord;
import org.lanqiao.service.PayRecordService;
import org.lanqiao.vo.PayRecordVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PayRecordController {
    @Autowired
    PayRecordService payRecordService;
    @RequestMapping("/getPayRecord")
    List<PayRecord> selectPayRecord(PayRecordVo payRecordVo){
        return  payRecordService.selectPayRecord(payRecordVo);
    }
}
