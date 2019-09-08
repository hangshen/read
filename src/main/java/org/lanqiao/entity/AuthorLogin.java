package org.lanqiao.entity;

public class AuthorLogin {
    private Integer authorLoginId;

    private String authorLoginAccount;

    private String authorLoginPassword;

    private Integer authorLoginAuthorId;

    public Integer getAuthorLoginId() {
        return authorLoginId;
    }

    public void setAuthorLoginId(Integer authorLoginId) {
        this.authorLoginId = authorLoginId;
    }

    public String getAuthorLoginAccount() {
        return authorLoginAccount;
    }

    public void setAuthorLoginAccount(String authorLoginAccount) {
        this.authorLoginAccount = authorLoginAccount == null ? null : authorLoginAccount.trim();
    }

    public String getAuthorLoginPassword() {
        return authorLoginPassword;
    }

    public void setAuthorLoginPassword(String authorLoginPassword) {
        this.authorLoginPassword = authorLoginPassword == null ? null : authorLoginPassword.trim();
    }

    public Integer getAuthorLoginAuthorId() {
        return authorLoginAuthorId;
    }

    public void setAuthorLoginAuthorId(Integer authorLoginAuthorId) {
        this.authorLoginAuthorId = authorLoginAuthorId;
    }
}