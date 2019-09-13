package org.lanqiao.service;

import org.lanqiao.entity.Books;
import org.lanqiao.vo.LeiBooksVo;
import org.lanqiao.vo.SelectTypeVo;
import org.lanqiao.vo.SolrBooksVo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookService {
    List<Books> selectAllBooks();
    List<SolrBooksVo> queryByKeyword(String keyword);
    List<Books> selectBooksByType(SelectTypeVo selectTypeVo);
    Books selectAllChapters(Integer bookId);
    Books selectBooksPayRecord(Integer bookId);
    Books selectByPrimaryKey(Integer bookId);
    List<Books> selectByClick();
    List<Books> selectByReward();
    List<Books> selectByDingYue();
    List<Books> selectByXiaoLiang();
    //根据作者Id查询全部作品
    List<Books> selectBooksByAuthorId(Integer authorId);
    //作者发表作品
    int insertBooks(Books books);

    List<LeiBooksVo> selectShelfBooks(Integer bookState,Integer userId);

    int selectCheckBookState(Integer bookId,Integer userId);

    int updateShelfBook(Integer bookId,Integer userId);

    int delectShelfBook(Integer bookId,Integer userId);
}
