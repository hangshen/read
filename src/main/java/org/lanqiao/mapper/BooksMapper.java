package org.lanqiao.mapper;

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
    int updateByPrimaryKeySelective(Books record);

    int updateByPrimaryKey(Books record);
    List<Books> selectBooksByAuthorId(Integer authorId);

    List<LeiBooksVo> leiSelectShelfBooksByUserId(Integer userId);
}