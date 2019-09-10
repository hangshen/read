package org.lanqiao.entity;

import org.apache.solr.client.solrj.beans.Field;
import org.springframework.data.solr.core.mapping.SolrDocument;

import java.util.Date;
import java.util.Set;

@SolrDocument(solrCoreName = "books")
public class Books {
    private Integer bookId;
    @Field
    private String bookName;

    private String bookImg;

    private String bookIntroduce;

    private Date bookUpDate;

    private Date bookFinishDate;

    private Double bookScore;

    private String bookFlag;

    private Double bookWord;

    private Double bookClick;

    private Long bookReward;

    private BookType bookType;

    private Integer bookTypeId;

    private Author author;
    private Set<Chapter> chapterSet;

    public Integer getBookId() {
        return bookId;
    }

    public void setBookId(Integer bookId) {
        this.bookId = bookId;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName == null ? null : bookName.trim();
    }

    public String getBookImg() {
        return bookImg;
    }

    public void setBookImg(String bookImg) {
        this.bookImg = bookImg == null ? null : bookImg.trim();
    }

    public String getBookIntroduce() {
        return bookIntroduce;
    }

    public void setBookIntroduce(String bookIntroduce) {
        this.bookIntroduce = bookIntroduce == null ? null : bookIntroduce.trim();
    }

    public Date getBookUpDate() {
        return bookUpDate;
    }

    public void setBookUpDate(Date bookUpDate) {
        this.bookUpDate = bookUpDate;
    }

    public Date getBookFinishDate() {
        return bookFinishDate;
    }

    public void setBookFinishDate(Date bookFinishDate) {
        this.bookFinishDate = bookFinishDate;
    }

    public Double getBookScore() {
        return bookScore;
    }

    public void setBookScore(Double bookScore) {
        this.bookScore = bookScore;
    }

    public String getBookFlag() {
        return bookFlag;
    }

    public void setBookFlag(String bookFlag) {
        this.bookFlag = bookFlag == null ? null : bookFlag.trim();
    }

    public Double getBookWord() {
        return bookWord;
    }

    public void setBookWord(Double bookWord) {
        this.bookWord = bookWord;
    }

    public Double getBookClick() {
        return bookClick;
    }

    public void setBookClick(Double bookClick) {
        this.bookClick = bookClick;
    }

    public Long getBookReward() {
        return bookReward;
    }

    public void setBookReward(Long bookReward) {
        this.bookReward = bookReward;
    }

    public BookType getBookType() {
        return bookType;
    }

    public void setBookType(BookType bookType) {
        this.bookType = bookType;
    }

    public Integer getBookTypeId() {
        return bookTypeId;
    }

    public void setBookTypeId(Integer bookTypeId) {
        this.bookTypeId = bookTypeId;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public Set<Chapter> getChapterSet() {
        return chapterSet;
    }

    public void setChapterSet(Set<Chapter> chapterSet) {
        this.chapterSet = chapterSet;
    }
}