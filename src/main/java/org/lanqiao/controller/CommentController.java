package org.lanqiao.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.lanqiao.entity.Comment;
import org.lanqiao.service.CommentService;
import org.lanqiao.vo.CommentPageVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CommentController {
    @Autowired
    CommentService commentService;
    @RequestMapping("/getCommentForBooks")
    public PageInfo<Comment> selectAllComment(@RequestBody CommentPageVo commentPageVo){
//        commentPageVo.setPageNum(1);
//        commentPageVo.setCommentBookId(5);
        PageHelper.startPage(commentPageVo.getPageNum(),5);
        List<Comment> list = commentService.selectAllComment(commentPageVo);
        PageInfo<Comment> pageInfo = new PageInfo<Comment>(list);
        return pageInfo;
    }
    @RequestMapping("/insertComment")
    public int insertSelective(@RequestBody Comment record){
        return commentService.insertSelective(record);
    }
}
