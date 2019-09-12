package org.lanqiao.entity;

public class Author {
    private Integer authorId;

    private String authorName;

    private String authorIdentity;

    private String authorQq;

    private String authorImg;

    private Integer authorMoney;

    private String authorIntroduce;

    private String realName;

    @Override
    public String toString() {
        return "Author{" +
                "authorName='" + authorName + '\'' +
                ", authorIdentity='" + authorIdentity + '\'' +
                ", authorQq='" + authorQq + '\'' +
                ", realName='" + realName + '\'' +
                ", realID='" + realID + '\'' +
                '}';
    }

    private String realID;

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public String getRealID() {
        return realID;
    }

    public void setRealID(String realID) {
        this.realID = realID;
    }

    public Integer getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Integer authorId) {
        this.authorId = authorId;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName == null ? null : authorName.trim();
    }

    public String getAuthorIdentity() {
        return authorIdentity;
    }

    public void setAuthorIdentity(String authorIdentity) {
        this.authorIdentity = authorIdentity == null ? null : authorIdentity.trim();
    }

    public String getAuthorQq() {
        return authorQq;
    }

    public void setAuthorQq(String authorQq) {
        this.authorQq = authorQq == null ? null : authorQq.trim();
    }

    public String getAuthorImg() {
        return authorImg;
    }

    public void setAuthorImg(String authorImg) {
        this.authorImg = authorImg == null ? null : authorImg.trim();
    }

    public Integer getAuthorMoney() {
        return authorMoney;
    }

    public void setAuthorMoney(Integer authorMoney) {
        this.authorMoney = authorMoney;
    }

    public String getAuthorIntroduce() {
        return authorIntroduce;
    }

    public void setAuthorIntroduce(String authorIntroduce) {
        this.authorIntroduce = authorIntroduce == null ? null : authorIntroduce.trim();
    }
}