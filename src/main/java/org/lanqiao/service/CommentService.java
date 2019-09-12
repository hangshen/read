package org.lanqiao.service;

import org.lanqiao.entity.Comment;
import org.lanqiao.vo.CommentPageVo;

import java.util.List;

public interface CommentService {
    List<Comment> selectAllComment(CommentPageVo commentPageVo);
    int insertSelective(Comment record);
    List<Comment> selectAllByAuthorId(Integer authorId);
}
