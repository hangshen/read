package org.lanqiao.service;

import org.lanqiao.entity.BookType;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookTypeService {
    List<BookType> selectAll();
}
