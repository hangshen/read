package org.lanqiao.service;
import org.lanqiao.entity.BookShelf;
import org.lanqiao.entity.Books;
import org.lanqiao.entity.Chapter;
import org.lanqiao.mapper.BookShelfMapper;
import org.lanqiao.mapper.BooksMapper;
import org.lanqiao.util.SolrUtil;
import org.lanqiao.vo.LeiBooksVo;
import org.lanqiao.vo.SelectTypeVo;
import org.lanqiao.vo.SolrBooksVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.solr.core.SolrTemplate;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;


@Service
public class BookServiceImpl implements BookService{
    @Autowired
    BooksMapper booksMapper;
    @Autowired
    SolrTemplate solrTemplate;
    @Autowired
    BookShelfMapper bookShelfMapper;
    @Override
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
        for(Books b : booksList){
            long te1 = b.getBookUpDate().getTime();
            te1 = te1 + 8 * 3600 * 1000;
            b.setBookUpDate(new Timestamp(te1));
        }
        return booksList;
    }
    @Override
    public List<Books> selectBooksByType(SelectTypeVo selectTypeVo){
        List<Books> list = booksMapper.selectBooksByType(selectTypeVo);
        changeBookTime(list);
        for(int i = 0;i<list.size();i++){
            changeChapterTime(list.get(i));
        }
        return list;
    }
    @Override
    public Books selectAllChapters(Integer bookId){
        Books books = booksMapper.selectAllChapters(bookId);
        changeChapterTime(books);
        return  books;
    }
    @Override
    public Books selectByPrimaryKey(Integer bookId){
        Books books = booksMapper.selectByPrimaryKey(bookId);
        changeChapterTime(books);
        return  books;
    }
//改变更新时间
    private Books changeChapterTime(Books books)
    {
        List<Chapter> c = books.getChapterSet();
        for (Chapter chapter : c){
            long te2 = chapter.getChapterDate().getTime();
            te2 = te2 + 8 * 3600 * 1000;
            chapter.setChapterDate(new Timestamp(te2));
        }
        return  books;
    }
    private List<Books> changeBookTime(List<Books>  booksList)
    {
        for(Books b : booksList){
            long te1 = b.getBookUpDate().getTime();
            te1 = te1 + 8 * 3600 * 1000;
            b.setBookUpDate(new Timestamp(te1));
        }
        return booksList;
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
    @Override
    public Books selectBooksPayRecord(Integer bookId){
        return booksMapper.selectBooksPayRecord(bookId);
    }
    @Override
    public List<Books> selectByClick(){
        List<Books> list= booksMapper.selectByClick();
        changeBookTime(list);
        return list;
    }
    @Override
    public List<Books> selectByReward(){
        List<Books> list= booksMapper.selectByReward();
        changeBookTime(list);
        return list;
    }
    @Override
    public List<Books> selectByDingYue(){
        List<Books> list= booksMapper.selectByDingYue();
        changeBookTime(list);
        return list;
    }
    @Override
    public List<Books> selectByXiaoLiang(){
        List<Books> list= booksMapper.selectByXiaoLiang();
        changeBookTime(list);
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

    @Override
    public List<LeiBooksVo> selectShelfBooks(Integer bookState,Integer userId) {
        return booksMapper.leiSelectShelfBooksByUserId(bookState,userId);
    }

    @Override
    public int selectCheckBookState(Integer bookId, Integer userId) {
        return booksMapper.leiCheckBookShelfState(bookId,userId);
    }

    @Override
    public int updateShelfBook(Integer bookId, Integer userId) {
        return booksMapper.leiUpdateBookShelf(bookId,userId);
    }

    @Override
    public int delectShelfBook(Integer bookId, Integer userId) {
        return booksMapper.leiDelectBookShelf(bookId,userId);
    }
    @Override
    public int insertSelective(BookShelf record){
        return bookShelfMapper.insertSelective(record);
    }
}
