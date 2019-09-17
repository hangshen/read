package org.lanqiao.service;

import org.lanqiao.entity.Author;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;

@Repository
public interface AuthorService {
    Author selectByAuthorLoginAuthorId(Integer authorLoginAuthorId);
    Author selectByAuthorRealID(String realID);
    boolean register(Author author, String authorAccount, String authorPassword,String realID);
    Author selectByAuthorId(Integer authorId);
    List<Author> selectAuthorByName(String authorName);
    int deleteByPrimaryKey(Integer authorId);
    List<Author> selectAllAuthor();
    Author getAuthorName(Integer authorId);
    int updateByPrimaryKeySelective(Author record);
}
