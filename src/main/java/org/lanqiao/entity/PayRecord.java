package org.lanqiao.entity;

import java.util.Date;

public class PayRecord {
    private Integer payrecordId;

    private String payrecordFlag;

    private Integer payrecordMoney;

    private String payrecordIntroduce;

    private Date payrecordDate;

    private Integer payrecordUserId;

    public Integer getPayrecordId() {
        return payrecordId;
    }

    public void setPayrecordId(Integer payrecordId) {
        this.payrecordId = payrecordId;
    }

    public String getPayrecordFlag() {
        return payrecordFlag;
    }

    public void setPayrecordFlag(String payrecordFlag) {
        this.payrecordFlag = payrecordFlag == null ? null : payrecordFlag.trim();
    }

    public Integer getPayrecordMoney() {
        return payrecordMoney;
    }

    public void setPayrecordMoney(Integer payrecordMoney) {
        this.payrecordMoney = payrecordMoney;
    }

    public String getPayrecordIntroduce() {
        return payrecordIntroduce;
    }

    public void setPayrecordIntroduce(String payrecordIntroduce) {
        this.payrecordIntroduce = payrecordIntroduce == null ? null : payrecordIntroduce.trim();
    }

    public Date getPayrecordDate() {
        return payrecordDate;
    }

    public void setPayrecordDate(Date payrecordDate) {
        this.payrecordDate = payrecordDate;
    }

    public Integer getPayrecordUserId() {
        return payrecordUserId;
    }

    public void setPayrecordUserId(Integer payrecordUserId) {
        this.payrecordUserId = payrecordUserId;
    }
}