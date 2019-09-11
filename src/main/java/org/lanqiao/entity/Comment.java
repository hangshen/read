package org.lanqiao.entity;

import java.util.Date;

public class Comment {
    private Integer commentId;

    private String commentMassage;

    private Date commentDate;

    private Books books;
    private Users users;

    private Integer commentBookId;

    private Integer commentUserId;

    public Integer getCommentId() {
        return commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    public String getCommentMassage() {
        return commentMassage;
    }

    public void setCommentMassage(String commentMassage) {
        this.commentMassage = commentMassage == null ? null : commentMassage.trim();
    }

    public Date getCommentDate() {
        return commentDate;
    }

    public void setCommentDate(Date commentDate) {
        this.commentDate = commentDate;
    }

    public Integer getCommentBookId() {
        return commentBookId;
    }

    public void setCommentBookId(Integer commentBookId) {
        this.commentBookId = commentBookId;
    }

    public Integer getCommentUserId() {
        return commentUserId;
    }

    public void setCommentUserId(Integer commentUserId) {
        this.commentUserId = commentUserId;
    }

    public Books getBooks() {
        return books;
    }

    public void setBooks(Books books) {
        this.books = books;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }
}