package org.lanqiao.service;

import org.lanqiao.entity.RechargeRecord;
import org.lanqiao.entity.Users;
import org.lanqiao.mapper.RechargeRecordMapper;
import org.lanqiao.mapper.UsersMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RechargeRecordServiceImpl implements RechargeRecordService{
    @Autowired
    RechargeRecordMapper rechargeRecordMapper;
    @Autowired
    UsersMapper usersMapper;
    @Override
    public List<RechargeRecord> selectUserRechargeRecord(Integer userLoginId){
//        List<RechargeRecord> records=
//        for(RechargeRecord re:records){
//            re.setRechargerecordDate(re.getRechargerecordDate().subStr(0, 10) + " " + data[i].rechargerecordDate.substring(11, 19));
//        }
        return  rechargeRecordMapper.selectUserRechargeRecord(userLoginId);
    }
    @Override
    public int insertSelective(RechargeRecord rechargeRecord){
        Users users = usersMapper.selectByPrimaryKey(rechargeRecord.getRechargerecordUserId());
        int s1 = users.getUserMoney()+rechargeRecord.getRechargerecordMoney();
        users.setUserMoney(s1);
        usersMapper.updateByPrimaryKeySelective(users);
        return rechargeRecordMapper.insertSelective(rechargeRecord);
    }
}
