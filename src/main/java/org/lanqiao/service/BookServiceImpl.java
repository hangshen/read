package org.lanqiao.service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.apache.solr.common.SolrInputDocument;
import org.lanqiao.entity.Books;
import org.lanqiao.mapper.BooksMapper;
import org.lanqiao.util.SolrUtil;
import org.lanqiao.vo.SelectTypeVo;
import org.lanqiao.vo.SolrBooksVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.solr.core.SolrTemplate;
import org.springframework.data.solr.core.query.Criteria;
import org.springframework.data.solr.core.query.SimpleQuery;
import org.springframework.data.solr.core.query.result.ScoredPage;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class BookServiceImpl implements BookService{
    @Autowired
    BooksMapper booksMapper;
    @Autowired
    SolrTemplate solrTemplate;

    private final static Logger LOGGER = LoggerFactory.getLogger(BookServiceImpl.class);
    public List<Books> selectAllBooks(){
        List<Books> list= booksMapper.selectAllBooks();
        List<Books> booksList =new ArrayList<Books>();
        for(int i=0;i<10;i++)
        {
            if(i>list.size()-1)
            {
                break;
            }else {
                booksList.add(list.get(i));
            }
        }
        return booksList;
    }

    public List<Books> selectBooksByType(SelectTypeVo selectTypeVo){
        return booksMapper.selectBooksByType(selectTypeVo);
    }

    @Override
    public List<SolrBooksVo> queryByKeyword(String keyword) {


        SolrUtil solrUtil=new SolrUtil();
        List<SolrBooksVo> content1=solrUtil.searchKeyValue("bookName",keyword,solrTemplate);
        List<SolrBooksVo> content2=solrUtil.searchKeyValue("authorName",keyword,solrTemplate);
        if(content1.size() >= content2.size()){
            if(content1.size() == 0){
                return content1;
            }
            for (SolrBooksVo sb:content2) {
                if(!content1.contains(sb)){
                    content1.add(sb);
                }
            }
            return content1;
        } else {
            for (SolrBooksVo sb:content1) {
                if(!content2.contains(sb)){
                    content2.add(sb);
                }
            }
            return content2;
        }
    }

    /**
     * by lhw
     * @param authorId
     * @return 作者的作品
     */
    @Override
    public List<Books> selectBooksByAuthorId(Integer authorId) {
        return booksMapper.selectBooksByAuthorId(authorId);
    }

    @Override
    public int insertBooks(Books books) {
        return booksMapper.insert(books);
    }
}
