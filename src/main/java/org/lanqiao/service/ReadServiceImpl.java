package org.lanqiao.service;

import org.lanqiao.entity.Read;
import org.lanqiao.util.ParagraphUtil;
import org.lanqiao.util.RedisUtil;
import org.lanqiao.mapper.ReadMapper;
import org.lanqiao.util.SelectPageNumUtil;
import org.lanqiao.vo.LeiReadChapterVo;
import org.lanqiao.vo.LeiReadVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReadServiceImpl implements ReadService {

    @Autowired
    ReadMapper readMapper;
    @Autowired
    RedisUtil redisUtil;

    @Override
    public LeiReadVo getText(Integer userId, Integer bookId, Integer chapterId, Integer pageNum) {
        LeiReadChapterVo leiRead=new LeiReadChapterVo();
        ParagraphUtil paragraphUtil=new ParagraphUtil();
        SelectPageNumUtil selectPageNumUtil=new SelectPageNumUtil();
        //        读者未登录状态阅读
        if(userId == null){
            if(pageNum == null){
                pageNum=1;
            }
            //读者直接阅读
            if(chapterId == null)
            {
                chapterId = 1;
            }
            //读者选择章节阅读
            leiRead=readMapper.selectChapterNoUserId(bookId,chapterId);
            leiRead.setParagraphList(paragraphUtil.Paragraph(leiRead.getContentText()));
            leiRead.setTotalPageNum(paragraphUtil.getTotalNum());

            //整理包装数据 返回目标数据结构
            return new LeiReadVo(leiRead.getChapterSort(),leiRead.getChapterName(),selectPageNumUtil.selectPage(leiRead.getParagraphList(),pageNum), pageNum, leiRead.getTotalPageNum());

        } else {//读者登录状态阅读
            String key=userId.toString()+bookId.toString();
            Read read = (Read) redisUtil.get(key);
            if(read == null){
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
                //整理包装数据 返回目标数据结构
                leiRead=readMapper.selectChapterUserId(userId,bookId);
                read=readMapper.selectByPrimaryKey(userId,bookId);
                //redis库插入记录
                redisUtil.set(key,read);
                pageNum=((Read) redisUtil.get(key)).getReadPageNum();
                leiRead.setParagraphList(paragraphUtil.Paragraph(leiRead.getContentText()));
                leiRead.setTotalPageNum(paragraphUtil.getTotalNum());
                return new LeiReadVo(leiRead.getChapterSort(),leiRead.getChapterName(),selectPageNumUtil.selectPage(leiRead.getParagraphList(),pageNum), pageNum, leiRead.getTotalPageNum());
            }else {
                if(chapterId == null){//读者正常翻页阅读,未换章节
                    //更新redis库中的页数
                    if(pageNum != null){
                        Read read1=new Read(userId,bookId,read.getReadChapterId(),pageNum);
                        redisUtil.set(key,read1);
                    }
                    //获得此时页数
                    pageNum=((Read) redisUtil.get(key)).getReadPageNum();

                }else{//读者换章节了
                    //跟新redis库中的章节数，并设pageName为1，并跟新数据库中的数据使数据一致性
                    Read read2=new Read(userId,bookId,chapterId,1);
                    readMapper.updateRecorder(userId,bookId,chapterId);
                    redisUtil.set(key,read2);
                    //获得页数
                    pageNum=((Read) redisUtil.get(key)).getReadPageNum();
                }
                //整理包装数据 返回目标数据结构
                leiRead=readMapper.selectChapterUserId(userId,bookId);
                leiRead.setParagraphList(paragraphUtil.Paragraph(leiRead.getContentText()));
                leiRead.setTotalPageNum(paragraphUtil.getTotalNum());
                return new LeiReadVo(leiRead.getChapterSort(),leiRead.getChapterName(),selectPageNumUtil.selectPage(leiRead.getParagraphList(),pageNum), pageNum, leiRead.getTotalPageNum());
            }

        }
    }
}
