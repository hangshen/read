package org.lanqiao.entity;

public class Read {
    private Integer readId;

    private Integer readUserId;

    private Integer readBookId;

    private Integer readChapterId;

    private Integer readPageNum;

    public Integer getReadId() {
        return readId;
    }

    public void setReadId(Integer readId) {
        this.readId = readId;
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

    public Integer getReadChapterId() {
        return readChapterId;
    }

    public void setReadChapterId(Integer readChapterId) {
        this.readChapterId = readChapterId;
    }

    public Integer getReadPageNum() {
        return readPageNum;
    }

    public void setReadPageNum(Integer readPageNum) {
        this.readPageNum = readPageNum;
    }
}