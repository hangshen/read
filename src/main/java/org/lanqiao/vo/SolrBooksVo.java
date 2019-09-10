package org.lanqiao.vo;

import org.springframework.data.annotation.Id;
import org.springframework.data.solr.core.mapping.Indexed;
import org.springframework.data.solr.core.mapping.SolrDocument;

import java.util.Objects;

@SolrDocument(solrCoreName = "book")
public class SolrBooksVo {
    @Indexed
    private String authorName;
    @Indexed
    private Double bookWord;
    @Indexed
    private String bookIntrodece;
    @Indexed
    private Double bookClick;
    @Indexed
    private Double bookScore;
    @Id
    @Indexed
    private Integer id;
    @Indexed
    private String bookFlag;
    @Indexed
    private String bookName;
    @Indexed
    private String bookImg;

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public Double getBookWord() {
        return bookWord;
    }

    public void setBookWord(Double bookWord) {
        this.bookWord = bookWord;
    }

    public String getBookIntrodece() {
        return bookIntrodece;
    }

    public void setBookIntrodece(String bookIntrodece) {
        this.bookIntrodece = bookIntrodece;
    }

    public Double getBookClick() {
        return bookClick;
    }

    public void setBookClick(Double bookClick) {
        this.bookClick = bookClick;
    }

    public Double getBookScore() {
        return bookScore;
    }

    public void setBookScore(Double bookScore) {
        this.bookScore = bookScore;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBookFlag() {
        return bookFlag;
    }

    public void setBookFlag(String bookFlag) {
        this.bookFlag = bookFlag;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getBookImg() {
        return bookImg;
    }

    public void setBookImg(String bookImg) {
        this.bookImg = bookImg;
    }

    @Override
    public boolean equals(Object o) {
        SolrBooksVo solrBooksVo = (SolrBooksVo) o;
        return Objects.equals(id, solrBooksVo.id);
    }

}
