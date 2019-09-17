package org.lanqiao.service;

import org.lanqiao.entity.Author;
import org.lanqiao.entity.Books;
import org.lanqiao.entity.PayRecord;
import org.lanqiao.entity.Users;
import org.lanqiao.mapper.AuthorMapper;
import org.lanqiao.mapper.BooksMapper;
import org.lanqiao.mapper.PayRecordMapper;
import org.lanqiao.mapper.UsersMapper;
import org.lanqiao.vo.PayRecordVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PayRecordServiceImpl implements PayRecordService{
    @Autowired
    PayRecordMapper payRecordMapper;
    @Autowired
    UsersMapper usersMapper;
    @Autowired
    BooksMapper booksMapper;
    @Autowired
    AuthorMapper authorMapper;
    @Override
    public List<PayRecord> selectPayRecord(PayRecordVo payRecordVo){
        return  payRecordMapper.selectPayRecord(payRecordVo);
    }
    @Override
    public int insertSelective(PayRecord record){
        Users users = usersMapper.selectByPrimaryKey(record.getPayrecordUserId());
        Books books = booksMapper.selectBookById(record.getPayrecordBookId());
        Author author = authorMapper.selectByPrimaryKey(books.getBookAuthorId());
        int s1 = users.getUserMoney()-record.getPayrecordMoney();
        long s2 = books.getBookReward()+record.getPayrecordMoney();
        int s3 = author.getAuthorMoney()+(int)(record.getPayrecordMoney()*0.7);
        if(s1>0){
            users.setUserMoney(s1);
            if(record.getPayrecordFlag() == "打赏"){
                books.setBookReward(s2);
                booksMapper.updateByPrimaryKeySelective(books);
            }
            usersMapper.updateByPrimaryKeySelective(users);
            author.setAuthorMoney(s3);
            authorMapper.updateByPrimaryKeySelective(author);
            return payRecordMapper.insertSelective(record);
        }
        else {
            return 0;
        }
    }

}
