package org.lanqiao.entity;

import java.util.Date;

public class Chapter {
    private Integer chapterId;

    private Integer chapterSort;

    private String chapterName;

    private Date chapterDate;

    private Integer chapterFee;

    private Integer chapterContentId;

    private Integer chapterBookId;

    public Integer getChapterId() {
        return chapterId;
    }

    public void setChapterId(Integer chapterId) {
        this.chapterId = chapterId;
    }

    public Integer getChapterSort() {
        return chapterSort;
    }

    public void setChapterSort(Integer chapterSort) {
        this.chapterSort = chapterSort;
    }

    public String getChapterName() {
        return chapterName;
    }

    public void setChapterName(String chapterName) {
        this.chapterName = chapterName == null ? null : chapterName.trim();
    }

    public Date getChapterDate() {
        return chapterDate;
    }

    public void setChapterDate(Date chapterDate) {
        this.chapterDate = chapterDate;
    }

    public Integer getChapterFee() {
        return chapterFee;
    }

    public void setChapterFee(Integer chapterFee) {
        this.chapterFee = chapterFee;
    }

    public Integer getChapterContentId() {
        return chapterContentId;
    }

    public void setChapterContentId(Integer chapterContentId) {
        this.chapterContentId = chapterContentId;
    }

    public Integer getChapterBookId() {
        return chapterBookId;
    }

    public void setChapterBookId(Integer chapterBookId) {
        this.chapterBookId = chapterBookId;
    }
}