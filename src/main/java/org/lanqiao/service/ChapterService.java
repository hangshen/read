package org.lanqiao.service;

import org.lanqiao.entity.Chapter;
import org.springframework.stereotype.Repository;

@Repository
public interface ChapterService {
    int insert(Chapter chapter);
}
