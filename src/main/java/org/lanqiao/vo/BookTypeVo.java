package org.lanqiao.vo;

import org.lanqiao.entity.BookType;

import java.util.List;

public class BookTypeVo {
    private BookType firstSelect;
    private List<BookType> secondSelect;

    public BookType getFirstSelect() {
        return firstSelect;
    }

    public void setFirstSelect(BookType firstSelect) {
        this.firstSelect = firstSelect;
    }

    public List<BookType> getSecondSelect() {
        return secondSelect;
    }

    public void setSecondSelect(List<BookType> secondSelect) {
        this.secondSelect = secondSelect;
    }
}
