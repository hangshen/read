package org.lanqiao.entity;

public class Vip {
    private Integer vipId;

    private Integer vipChapterId;

    private Chapter chapter;

    public Integer getVipId() {
        return vipId;
    }

    public void setVipId(Integer vipId) {
        this.vipId = vipId;
    }

    public Integer getVipChapterId() {
        return vipChapterId;
    }

    public void setVipChapterId(Integer vipChapterId) {
        this.vipChapterId = vipChapterId;
    }

    public Chapter getChapter() {
        return chapter;
    }

    public void setChapter(Chapter chapter) {
        this.chapter = chapter;
    }
}