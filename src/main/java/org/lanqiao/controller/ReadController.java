package org.lanqiao.controller;

import org.lanqiao.service.ReadService;
import org.lanqiao.vo.LeiReadVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReadController {
    @Autowired
    ReadService readService;

    @RequestMapping("/getbooxtxt")
    public LeiReadVo getText(Integer userId, Integer bookId, Integer chapterId, Integer pageNum){
        return readService.getText(userId,bookId,chapterId,pageNum);
    }
}
