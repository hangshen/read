package org.lanqiao.vo;

import org.lanqiao.entity.BookType;
import org.lanqiao.entity.Books;

public class BookInfoVo {
    private Books books;
    private BookType bookTypeFather;

    public Books getBooks() {
        return books;
    }

    public void setBooks(Books books) {
        this.books = books;
    }

    public BookType getBookTypeFather() {
        return bookTypeFather;
    }

    public void setBookTypeFather(BookType bookTypeFather) {
        this.bookTypeFather = bookTypeFather;
    }
}
