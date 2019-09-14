package org.lanqiao.service;

import org.lanqiao.vo.LeiReadChapterVo;
import org.omg.CORBA.PUBLIC_MEMBER;
import org.springframework.stereotype.Repository;

@Repository
public interface ReadService {
    public LeiReadChapterVo getText(Integer userId, Integer bookId,Integer chapterId,Integer pageNum);

}
