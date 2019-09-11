package org.lanqiao.service;

import org.lanqiao.entity.Comment;
import org.lanqiao.mapper.CommentMapper;
import org.lanqiao.vo.CommentPageVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService{
    @Autowired
    CommentMapper commentMapper;
    public List<Comment> selectAllComment(CommentPageVo commentPageVo){
        return commentMapper.selectAllComment(commentPageVo);
    }
}
