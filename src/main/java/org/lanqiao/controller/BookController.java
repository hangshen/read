package org.lanqiao.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.lanqiao.entity.Books;
import org.lanqiao.service.BookService;
import org.lanqiao.vo.LeiBooksVo;
import org.lanqiao.vo.SelectTypeVo;
import org.lanqiao.vo.SolrBooksPageVo;
import org.lanqiao.vo.SolrBooksVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BookController {
    @Autowired
    BookService bookService;
    @RequestMapping("/getBooks")
    public List<Books> selectAllBooks(){
       return  bookService.selectAllBooks();
    }
    //solr模糊查询接口
    @RequestMapping("/solrSelect")
    public List<SolrBooksPageVo> searchBooks(String keyword,Integer pageNum) {
        int pageSize = 1;
        int totalPage;
        SolrBooksPageVo solrBooksPageVo = new SolrBooksPageVo();
        List<SolrBooksPageVo> solrBooksVoList = new ArrayList<SolrBooksPageVo>();
        List<SolrBooksVo> list = bookService.queryByKeyword(keyword);
        if(list.size() % pageSize == 0){
            totalPage = list.size() / pageSize;
        }else {
            totalPage = (list.size() / pageSize)+1;
        }
        if(totalPage!=0){
            for (int i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
                solrBooksPageVo.setSolrBooksVo(list.get(i));
                solrBooksPageVo.setTotalPage(totalPage);
                solrBooksVoList.add(solrBooksPageVo);
            }
        }
        return solrBooksVoList;
    }
    @RequestMapping("/getBooksByType")
    public PageInfo<Books> selectBooksByType(@RequestBody SelectTypeVo selectTypeVo){
        PageHelper.startPage(selectTypeVo.getPageNum(),5);
        List<Books> list = bookService.selectBooksByType(selectTypeVo);
        PageInfo<Books> pageInfo = new PageInfo<Books>(list);
        return pageInfo;
    }
    @RequestMapping("/getBooksById")
    public Books selectAllChapters(Integer bookId){
        return  bookService.selectAllChapters(bookId);
    }
    @RequestMapping("/getBooksInfoById")
    public Books selectByPrimaryKey(Integer bookId){
        return bookService.selectByPrimaryKey(5);
    }

    @RequestMapping("/getshelfbooks")
    public List<LeiBooksVo> searchShelfBooks(Integer bookState,Integer userId){
        return bookService.selectShelfBooks(bookState,userId);
    }

    @RequestMapping("/delectshelfbooks")
    public Integer delectShelfBooks(Integer bookId,Integer userId){
        if(bookService.selectCheckBookState(bookId,userId) == 0){
            return bookService.updateShelfBook(bookId,userId);
        } else {
            return bookService.delectShelfBook(bookId,userId);
        }
    }
}
