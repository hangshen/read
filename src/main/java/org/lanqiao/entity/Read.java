package org.lanqiao.entity;

public class Read {
    private Integer readId;

    private String readFlag;

    private Integer readUserId;

    private Integer readBookId;

    public Integer getReadId() {
        return readId;
    }

    public void setReadId(Integer readId) {
        this.readId = readId;
    }

    public String getReadFlag() {
        return readFlag;
    }

    public void setReadFlag(String readFlag) {
        this.readFlag = readFlag == null ? null : readFlag.trim();
    }

    public Integer getReadUserId() {
        return readUserId;
    }

    public void setReadUserId(Integer readUserId) {
        this.readUserId = readUserId;
    }

    public Integer getReadBookId() {
        return readBookId;
    }

    public void setReadBookId(Integer readBookId) {
        this.readBookId = readBookId;
    }
}