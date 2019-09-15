package org.lanqiao.vo;

import java.util.ArrayList;
import java.util.List;

public class ParagraphDetail {
    private int totalRow;

    private String text;

    private List<String> rowTxt=new ArrayList<String>();

    public ParagraphDetail(String text) {
        this.text = text;
        if(text.length()%30 == 0){
            this.totalRow=text.length()/30;
        } else {
            this.totalRow=text.length()/30+1;
        }
        for (int i = 1;i<this.totalRow;i++){
            rowTxt.add(text.substring(0,30));
            text=text.substring(30);
        }
        rowTxt.add(text);

    }

    public int getTotalRow() {
        return totalRow;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public List<String> getRowTxt() {
        return rowTxt;
    }
}
