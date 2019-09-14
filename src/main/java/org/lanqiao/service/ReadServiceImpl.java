package org.lanqiao.service;

import org.lanqiao.entity.Read;
import org.lanqiao.util.RedisUtil;
import org.lanqiao.mapper.ReadMapper;
import org.lanqiao.vo.LeiReadChapterVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReadServiceImpl implements ReadService {

    @Autowired
    ReadMapper readMapper;
    @Autowired
    RedisUtil redisUtil;

    //        Users user=(Users)redisUtil.get(login.getUserLoginAccount());
////        if(user == null){
////            System.out.println("redis");
////            user=userService.chenkPassword(login);
////            redisUtil.set(login.getUserLoginAccount(),user);
////        }
    @Override
    public LeiReadChapterVo getText(Integer userId, Integer bookId, Integer chapterId, Integer pageNum) {
        LeiReadChapterVo leiRead=new LeiReadChapterVo();
        //        读者未登录状态阅读
        if(userId == null){
            if(pageNum == null){
                pageNum=1;
            }
            //读者直接阅读
            if(chapterId == null)
            {
                chapterId = 1;
            } //读者选择章节阅读
            leiRead=readMapper.selectChapterNoUserId(bookId,chapterId);
            leiRead.setContentText(leiRead.getContentText().substring((pageNum-1)*200,(pageNum-1)*200+200));
            return leiRead;

        } else {//读者登录状态阅读
            if(pageNum != null){
                readMapper.updateReadPageNum(userId,bookId,pageNum);
            }
            //读者直接阅读
            if(chapterId == null){
                //读者第一次阅读次书  需要在数据库中插入阅读记录
                if(readMapper.checkRecord(userId,bookId) == 0){
                    chapterId = 1;
                    readMapper.insertRecorder(userId,bookId,chapterId);
                }
            }else {//读者选择章节阅读
                //读者第一次阅读 添加 read记录
                if(readMapper.checkRecord(userId,bookId) == 0){
                    readMapper.insertRecorder(userId,bookId,chapterId);
                }else{//读者读过次书 但选择选择跳章阅读  更新 read记录 数据库
                    readMapper.updateRecorder(userId,bookId,chapterId);
                }
            }
            leiRead=readMapper.selectChapterUserId(userId,bookId);
            pageNum=readMapper.selectReadPageNum(userId,bookId);
            leiRead.setContentText(leiRead.getContentText().substring((pageNum-1)*200,(pageNum-1)*200+200));
            return leiRead;
        }
    }
}
