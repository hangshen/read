package org.lanqiao.entity;

import java.util.Date;

public class RechargeRecord {
    private Integer rechargerecordId;

    private Integer rechargerecordMoney;

    private Date rechargerecordDate;

    private Integer rechargerecordUserId;

    public Integer getRechargerecordId() {
        return rechargerecordId;
    }

    public void setRechargerecordId(Integer rechargerecordId) {
        this.rechargerecordId = rechargerecordId;
    }

    public Integer getRechargerecordMoney() {
        return rechargerecordMoney;
    }

    public void setRechargerecordMoney(Integer rechargerecordMoney) {
        this.rechargerecordMoney = rechargerecordMoney;
    }

    public Date getRechargerecordDate() {
        return rechargerecordDate;
    }

    public void setRechargerecordDate(Date rechargerecordDate) {
        this.rechargerecordDate = rechargerecordDate;
    }

    public Integer getRechargerecordUserId() {
        return rechargerecordUserId;
    }

    public void setRechargerecordUserId(Integer rechargerecordUserId) {
        this.rechargerecordUserId = rechargerecordUserId;
    }
}