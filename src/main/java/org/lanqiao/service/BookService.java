package org.lanqiao.service;

import org.lanqiao.entity.Books;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookService {
    List<Books> selectAllBooks();
}
