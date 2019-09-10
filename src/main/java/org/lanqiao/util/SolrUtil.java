package org.lanqiao.util;

import org.lanqiao.vo.SolrBooksVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.solr.core.SolrTemplate;
import org.springframework.data.solr.core.query.Criteria;
import org.springframework.data.solr.core.query.SimpleQuery;
import org.springframework.data.solr.core.query.result.ScoredPage;
import org.springframework.stereotype.Component;

import java.util.List;

public class SolrUtil {

    public List<SolrBooksVo> searchKeyValue(String fieldname,String keyword,SolrTemplate solrTemplate){
        //        查询所有
        SimpleQuery query = new SimpleQuery();
//        设置条件
        Criteria criteria = new Criteria(fieldname).is(keyword);
        query.addCriteria(criteria);
//        设置分页
        query.setOffset(0l);//开始索引  默认为0
        query.setRows(10);//每页记录数(默认为10)
//        设置排序规则
        Sort sort = new Sort(Sort.Direction.ASC, "id");
        query.addSort(sort);
//        查询
        ScoredPage<SolrBooksVo> pages = solrTemplate.queryForPage("book", query, SolrBooksVo.class);
        System.out.println("pages.getTotalElements() = " + pages.getTotalElements());
        List<SolrBooksVo> content = pages.getContent();
        return content;
    }

}
