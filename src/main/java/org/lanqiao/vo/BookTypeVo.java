package org.lanqiao.vo;

import org.lanqiao.entity.BookType;

import java.util.List;

public class BookTypeVo {
    private int firstSelect;
    private List<BookType> secondSelect;

    public int getFirstSelect() {
        return firstSelect;
    }

    public void setFirstSelect(int firstSelect) {
        this.firstSelect = firstSelect;
    }

    public List<BookType> getSecondSelect() {
        return secondSelect;
    }

    public void setSecondSelect(List<BookType> secondSelect) {
        this.secondSelect = secondSelect;
    }
}
