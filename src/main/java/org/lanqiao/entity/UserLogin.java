package org.lanqiao.entity;

public class UserLogin {
    private Integer userLoginId;

    private String userLoginAccount;

    private String userLoginPassword;

    private Integer userLoginUserId;

    public Integer getUserLoginId() {
        return userLoginId;
    }

    public void setUserLoginId(Integer userLoginId) {
        this.userLoginId = userLoginId;
    }

    public String getUserLoginAccount() {
        return userLoginAccount;
    }

    public void setUserLoginAccount(String userLoginAccount) {
        this.userLoginAccount = userLoginAccount == null ? null : userLoginAccount.trim();
    }

    public String getUserLoginPassword() {
        return userLoginPassword;
    }

    public void setUserLoginPassword(String userLoginPassword) {
        this.userLoginPassword = userLoginPassword == null ? null : userLoginPassword.trim();
    }

    public Integer getUserLoginUserId() {
        return userLoginUserId;
    }

    public void setUserLoginUserId(Integer userLoginUserId) {
        this.userLoginUserId = userLoginUserId;
    }
}