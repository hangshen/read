package org.lanqiao.service;

import org.lanqiao.entity.BookType;
import org.lanqiao.mapper.BookTypeMapper;
import org.lanqiao.vo.BookTypeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookTypeServiceImpl implements BookTypeService{
    @Autowired
    BookTypeMapper bookTypeMapper;
    public List<BookTypeVo> selectAll(){
//        list存放所有数据
        List<BookType> list = bookTypeMapper.selectAll();
//        bookTypeVoList存放封装好的所有对象
        List<BookTypeVo> bookTypeVoList = new ArrayList<BookTypeVo>();
        for(BookType first:list){
            //        bookTypeVo为一个重新封装的对象
            BookTypeVo bookTypeVo = new BookTypeVo();
            if (first.getBooktypeFatherId() == first.getBooktypeId())
            {
                //        s存放一级分类下的二级分类
                List<BookType> s = new ArrayList<BookType>();
                bookTypeVo.setFirstSelect(first);
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
            if (bookTypeVo.getFirstSelect() != null){
                bookTypeVoList.add(bookTypeVo);
            }
        }
        return  bookTypeVoList;
    }

    @Override
    public List<BookType> getAllBookType() {
        return bookTypeMapper.selectAll();
    }
}
