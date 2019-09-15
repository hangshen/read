package org.lanqiao.mapper;

import org.apache.ibatis.annotations.Param;
import org.lanqiao.entity.Read;
import org.lanqiao.vo.LeiReadChapterVo;
import org.springframework.stereotype.Repository;

@Repository
public interface ReadMapper {
    int deleteByPrimaryKey(Integer readId);

    int insert(Read record);

    int insertSelective(Read record);

    Read selectByPrimaryKey(@Param("userId")Integer userId,@Param("bookId")Integer bookId);

    int updateByPrimaryKeySelective(Read record);

    int updateByPrimaryKey(Read record);

    int insertRecorder(@Param("userId")Integer userId,@Param("bookId")Integer bookId,@Param("chapterId")Integer chapterId);

    int checkRecord(@Param("userId")Integer userId,@Param("bookId")Integer bookId);

    LeiReadChapterVo selectChapterUserId(@Param("userId")Integer userId,@Param("bookId")Integer bookId);

    LeiReadChapterVo selectChapterNoUserId(@Param("bookId")Integer bookId,@Param("chapterId")Integer chapterId);

    int updateRecorder(@Param("userId")Integer userId, @Param("bookId")Integer bookId, @Param("chapterId")Integer chapterId);
    int selectReadPageNum(@Param("userId")Integer userId,@Param("bookId")Integer bookId);

    int updateReadPageNum(@Param("userId")Integer userId, @Param("bookId")Integer bookId, @Param("pageNum")Integer pageNum);
}