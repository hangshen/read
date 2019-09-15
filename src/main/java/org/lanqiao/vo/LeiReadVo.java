package org.lanqiao.vo;

import java.util.ArrayList;
import java.util.List;

public class LeiReadVo {
    private int chapterSort;

    private String chapterName;

    private List<String> paragraphList=new ArrayList<>();

    private int totalPageNum;

    public LeiReadVo(int chapterSort, String chapterName, List<String> paragraphList, int totalPageNum) {
        this.chapterSort = chapterSort;
        this.chapterName = chapterName;
        this.paragraphList=paragraphList;

        if((totalPageNum+4)%15 == 0){
            this.totalPageNum = (totalPageNum+4)/15;
        } else {
            this.totalPageNum = (totalPageNum+4)/15 + 1;
        }

    }
    public int getChapterSort() {
        return chapterSort;
    }

    public void setChapterSort(int chapterSort) {
        this.chapterSort = chapterSort;
    }

    public String getChapterName() {
        return chapterName;
    }

    public void setChapterName(String chapterName) {
        this.chapterName = chapterName;
    }

    public List<String> getParagraphList() {
        return paragraphList;
    }

    public void setParagraphList(List<String> paragraphList) {
        this.paragraphList = paragraphList;
    }

    public int getTotalPageNum() {
        return totalPageNum;
    }

    public void setTotalPageNum(int totalPageNum) {
        this.totalPageNum = totalPageNum;
    }
}
