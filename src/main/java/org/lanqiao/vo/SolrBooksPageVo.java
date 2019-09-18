package org.lanqiao.vo;

public class SolrBooksPageVo {
    private SolrBooksVo solrBooksVo;
    private Integer totalPage;

    public SolrBooksPageVo(SolrBooksVo solrBooksVo, Integer totalPage) {
        this.solrBooksVo = solrBooksVo;
        this.totalPage = totalPage;
    }

    public SolrBooksVo getSolrBooksVo() {
        return solrBooksVo;
    }

    public void setSolrBooksVo(SolrBooksVo solrBooksVo) {
        this.solrBooksVo = solrBooksVo;
    }

    public Integer getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(Integer totalPage) {
        this.totalPage = totalPage;
    }
}
