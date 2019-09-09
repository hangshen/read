package org.lanqiao.service;

import org.lanqiao.entity.Author;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Repository
public interface AuthorService {
    Author selectByAuthorLoginAuthorId(Integer authorLoginAuthorId);
    Author selectByAuthorAccount(String authorAccount);
    boolean register(Author author, String authorAccount, String authorPassword, MultipartFile file,HttpServletRequest request) throws IOException;
}
