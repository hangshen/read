package org.lanqiao.util;

import org.lanqiao.vo.ParagraphDetail;

import java.util.ArrayList;
import java.util.List;

public class ParagraphUtil {
    private String ssid="\r\n\r\n";

    private int totalNum=0;
    private ParagraphDetail test=null;
    private List<ParagraphDetail> para=new ArrayList<ParagraphDetail>();

    public List<ParagraphDetail> Paragraph(String txt){
        txt=txt.replaceAll("\r\n\r\n","%");
        while (txt.contains("%")){
            test =new ParagraphDetail(txt.substring(0,txt.indexOf("%")));
            totalNum += test.getTotalRow();
            para.add(test);
            txt=txt.substring(txt.indexOf("%")+1);
        }
        test=new ParagraphDetail(txt);
        totalNum += test.getTotalRow();
        para.add(test);
        return para;
    }

    public int getTotalNum() {
        return totalNum;
    }

    public void setTotalNum(int totalNum) {
        this.totalNum = totalNum;
    }
}
