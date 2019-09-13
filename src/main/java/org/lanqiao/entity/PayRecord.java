package org.lanqiao.entity;

import java.util.Date;
import java.util.List;

public class PayRecord {
    private Integer payrecordId;

    private String payrecordFlag;

    private Integer payrecordMoney;

    private Integer payrecordBookId;

    private Date payrecordDate;

    private Integer payrecordUserId;

    private UserLogin userLogin;
    private Books books;
    private Vip vip;
    private Users users;

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

    public Integer getPayrecordBookId() {
        return payrecordBookId;
    }

    public void setPayrecordBookId(Integer payrecordBookId) {
        this.payrecordBookId = payrecordBookId;
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

    public UserLogin getUserLogin() {
        return userLogin;
    }

    public void setUserLogin(UserLogin userLogin) {
        this.userLogin = userLogin;
    }

    public Books getBooks() {
        return books;
    }

    public void setBooks(Books books) {
        this.books = books;
    }

    public Vip getVip() {
        return vip;
    }

    public void setVip(Vip vip) {
        this.vip = vip;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

}