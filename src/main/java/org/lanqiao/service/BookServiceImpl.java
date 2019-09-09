package org.lanqiao.service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocumentList;
import org.lanqiao.entity.Books;
import org.lanqiao.mapper.BooksMapper;
import org.springframework.beans.factory.annotation.Autowired;
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
    @Autowired
    SolrClient solrClient;
    public List<Books> queryByCondition(String de) {
        List<Books> list = null;
        // 关键字模糊查询
        SolrQuery query = new SolrQuery();
        String nameLike = "name:*" + de +  "*";
        query.set("q",nameLike);
        query.setStart(0);
        query.setRows(20);
        try {
            QueryResponse response = solrClient.query(query);
            SolrDocumentList documentList = response.getResults();
            if (!documentList.isEmpty()) {
                Gson gson = new Gson();
                String listString = gson.toJson(documentList);
                list = gson.fromJson(listString, new TypeToken<List<Books>>() {}.getType());
            } else {
                LOGGER.info(">>>> no result returned by the filter query word: " + de + " <<<<");
            }
        } catch (SolrServerException e) {
            LOGGER.error(e.getMessage(),e);
        } catch (IOException e) {
            LOGGER.error(e.getMessage(),e);
        }
        return list;
    }
}
