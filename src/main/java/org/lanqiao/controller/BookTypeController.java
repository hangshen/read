package org.lanqiao.controller;


import org.lanqiao.entity.BookType;
import org.lanqiao.service.BookTypeService;
import org.lanqiao.vo.BookTypeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookTypeController {
    @Autowired
    BookTypeService bookTypeService;
    @RequestMapping("/getAllType")
    public List<BookTypeVo> selectAll(){
        return bookTypeService.selectAll();
    }
    @RequestMapping("/insertBookType")
    public int insertSelective(String bookTypeName,Integer fatherTypeId){
        BookType bookType = new BookType();
        bookType.setBooktypeName(bookTypeName);
        bookType.setBooktypeFatherId(fatherTypeId);
        return  bookTypeService.insertSelective(bookType);
    }
    @RequestMapping("/selectByTypeName")
    public List<BookType> selectByTypeName(String booktypeName){
        booktypeName = "%"+booktypeName+"%";
        return bookTypeService.selectByTypeName(booktypeName);
    }
    @RequestMapping("/deleteByType")
    public int deleteByPrimaryKey(Integer booktypeId){
        return bookTypeService.deleteByPrimaryKey(booktypeId);
    }
    @RequestMapping("/updateBookType")
    public int updateByPrimaryKeySelective(Integer typeId,String typeName,Integer fatherId){
        BookType record = new BookType();
        record.setBooktypeId(typeId);
        record.setBooktypeName(typeName);
        record.setBooktypeFatherId(fatherId);
        return bookTypeService.updateByPrimaryKeySelective(record);
    }
    @RequestMapping("/getAllBookType")
    public List<BookType> selectAllBookType(){
        return  bookTypeService.selectAllBookType();
    }
}
