package org.lanqiao.mapper;

import org.lanqiao.entity.Comment;
import org.lanqiao.vo.CommentPageVo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentMapper {
    int deleteByPrimaryKey(Integer commentId);

    int insert(Comment record);

    int insertSelective(Comment record);

    List<Comment> selectAllComment(CommentPageVo commentPageVo);

    int updateByPrimaryKeySelective(Comment record);

    int updateByPrimaryKey(Comment record);
}