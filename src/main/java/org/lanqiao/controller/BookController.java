package org.lanqiao.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.lanqiao.entity.BookShelf;
import org.lanqiao.entity.Books;
import org.lanqiao.service.BookService;
import org.lanqiao.vo.LeiBooksVo;
import org.lanqiao.vo.SelectTypeVo;
import org.lanqiao.vo.SolrBooksPageVo;
import org.lanqiao.vo.SolrBooksVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.Date;
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
        int pageSize = 3;
        int totalPage;
        List<SolrBooksPageVo> solrBooksVoList = new ArrayList<SolrBooksPageVo>();
        List<SolrBooksVo> list = new ArrayList<SolrBooksVo>();
        list = bookService.queryByKeyword(keyword);
        if(list.size() % pageSize == 0){
            totalPage = list.size() / pageSize;
        }else {
            totalPage = (list.size() / pageSize)+1;
        }
        if(totalPage!=0){
            for (int i = (pageNum - 1) * pageSize; i < pageNum * pageSize && i<list.size(); i++) {
                solrBooksVoList.add(new SolrBooksPageVo(list.get(i),totalPage));
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
        return bookService.selectByPrimaryKey(bookId);
    }
    @RequestMapping("/getBooksPayRecord")
    public Books selectBooksPayRecord(Integer bookId){
        return bookService.selectBooksPayRecord(bookId);
    }
    @RequestMapping("/getClickOrder")
    public List<Books> selectByClick(){
       return bookService.selectByClick();
    }
    @RequestMapping("/getRewardOrder")
    public List<Books> selectByReward(){
        return bookService.selectByReward();
    }
    @RequestMapping("/getDingYueOrder")
    public List<Books> selectByDingYue(){
        return bookService.selectByDingYue();
    }
    @RequestMapping("/getXiaoLiangOrder")
    public List<Books> selectByXiaoLiang(){
        return bookService.selectByXiaoLiang();
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
    @RequestMapping("/insertToBookSelf")
    public int insertSelective(Integer userId,Integer bookId){
        BookShelf bookShelf = new BookShelf();
        bookShelf.setShelfUserId(userId);
        bookShelf.setShelfBookId(bookId);
        return bookService.insertSelective(bookShelf);
    }
    @RequestMapping("/selectAll")
    public List<Books> selectAll(Integer pageNum){
        return bookService.selectAll();
    }
    @RequestMapping("/selectByBooksName")
    public List<Books> selectByBookName(String bookName){
        bookName = "%"+bookName+"%";
        return bookService.selectByBookName(bookName);
    }
    @RequestMapping("/deleteBook")
    public int deleteByPrimaryKey(Integer bookId){
        return bookService.deleteByPrimaryKey(bookId);
    }
    @RequestMapping("/updateBook")
    public int updateByPrimaryKeySelective(@RequestBody Books record){
        return bookService.updateByPrimaryKeySelective(record);
    }
    @RequestMapping("/insertBook")
    public int insertSelective(@RequestBody Books record){
        return bookService.insertSelective(record);
    }
}
