package org.lanqiao.service;

import org.lanqiao.vo.LeiReadVo;
import org.springframework.stereotype.Repository;

@Repository
public interface ReadService {
    public LeiReadVo getText(Integer userId, Integer bookId, Integer chapterId, Integer pageNum);

}
