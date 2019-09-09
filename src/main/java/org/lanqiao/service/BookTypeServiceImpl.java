package org.lanqiao.service;

import org.lanqiao.entity.BookType;
import org.lanqiao.mapper.BookTypeMapper;
import org.lanqiao.vo.BookTypeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookTypeServiceImpl implements BookTypeService{
    @Autowired
    BookTypeMapper bookTypeMapper;
    public List<BookTypeVo> selectAll(){
        List<BookType> list = bookTypeMapper.selectAll();
        List<BookTypeVo> bookTypeVoList = null;
        List<BookType> s = null;
        BookTypeVo bookTypeVo = null;
        for(BookType first:list){
            if (first.getBooktypeFatherId() == first.getBooktypeId())
            {
                bookTypeVo.setFirstSelect(first.getBooktypeFatherId());
                for (BookType second:list){
                    if(second.getBooktypeFatherId() != second.getBooktypeId())
                    {
                        if(first.getBooktypeFatherId() == second.getBooktypeFatherId())
                        {
                            s.add(second);
                        }
                    }
                }
                bookTypeVo.setSecondSelect(s);
            }
            bookTypeVoList.add(bookTypeVo);
        }
        return  bookTypeVoList;
    }
}
