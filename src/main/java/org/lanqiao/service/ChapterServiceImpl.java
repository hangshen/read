package org.lanqiao.service;

import org.lanqiao.entity.Chapter;
import org.lanqiao.mapper.ChapterMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChapterServiceImpl implements ChapterService {
    @Autowired
    ChapterMapper chapterMapper;

    @Override
    public int insert(Chapter chapter) {
        return chapterMapper.insert(chapter);
    }
}
