package org.lanqiao.service;

import org.lanqiao.entity.BookType;
import org.lanqiao.vo.BookTypeVo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookTypeService {
    List<BookTypeVo> selectAll();
}
