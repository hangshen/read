package org.lanqiao.controller;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocumentList;
import org.lanqiao.entity.Books;
import org.lanqiao.service.BookService;
import org.lanqiao.vo.SelectTypeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.util.List;

@RestController
public class BookController {

    @Autowired
    BookService bookService;
    @RequestMapping("/getBooks")
    public List<Books> selectAllBooks(){
       return  bookService.selectAllBooks();
    }

    @RequestMapping("/solrSelect")
    public List<Books> queryByCondition(String de) {
        return bookService.queryByCondition("民国");
    }
    @RequestMapping("/getBooksByType")
    public List<Books> selectBooksByType(SelectTypeVo selectTypeVo){
        return bookService.selectBooksByType(selectTypeVo);
    }
}
