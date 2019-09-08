package org.lanqiao.entity;

public class BookType {
    private Integer booktypeId;

    private String booktypeName;

    private Integer booktypeFatherId;

    public Integer getBooktypeId() {
        return booktypeId;
    }

    public void setBooktypeId(Integer booktypeId) {
        this.booktypeId = booktypeId;
    }

    public String getBooktypeName() {
        return booktypeName;
    }

    public void setBooktypeName(String booktypeName) {
        this.booktypeName = booktypeName == null ? null : booktypeName.trim();
    }

    public Integer getBooktypeFatherId() {
        return booktypeFatherId;
    }

    public void setBooktypeFatherId(Integer booktypeFatherId) {
        this.booktypeFatherId = booktypeFatherId;
    }
}