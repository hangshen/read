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
import org.lanqiao.vo.SelectTypeVo;
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

    public List<Books> selectBooksByType(SelectTypeVo selectTypeVo){
        return booksMapper.selectBooksByType(selectTypeVo);
    }


    private static final String solrUrl = "http://localhost:8983/solr/book";
    public List<Books> queryByCondition(String de) {
        HttpSolrClient solrClient = new HttpSolrClient.Builder(solrUrl)
                .withConnectionTimeout(10000)
                .withSocketTimeout(60000)
                .build();
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
