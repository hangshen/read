package org.lanqiao.mapper;

import org.apache.ibatis.annotations.Param;
import org.lanqiao.entity.Books;
import org.lanqiao.vo.LeiBooksVo;
import org.lanqiao.vo.SelectTypeVo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BooksMapper {
    int deleteByPrimaryKey(Integer bookId);

    int insert(Books books);

    int insertSelective(Books record);

    Books selectByPrimaryKey(Integer bookId);
    List<Books> selectAllBooks();
    List<Books> selectBooksByType(SelectTypeVo selectTypeVo);
    Books selectAllChapters(Integer bookId);
    Books selectBooksPayRecord(Integer bookId);
    int updateByPrimaryKeySelective(Books record);

    int updateByPrimaryKey(Books record);
    List<Books> selectBooksByAuthorId(Integer authorId);

    List<LeiBooksVo> leiSelectShelfBooksByUserId(@Param("bookState") Integer bookState,@Param("userId") Integer userId);

    int leiCheckBookShelfState(@Param("bookId")Integer bookId,@Param("userId")Integer userId);

    int leiUpdateBookShelf(@Param("bookId")Integer bookId,@Param("userId")Integer userId);

    int leiDelectBookShelf(@Param("bookId")Integer bookId,@Param("userId")Integer userId);
}