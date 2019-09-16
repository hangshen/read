package org.lanqiao.service;

import org.lanqiao.entity.Content;
import org.lanqiao.mapper.ContentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContentServiceImpl implements ContentService{

    @Autowired
    ContentMapper contentMapper;

    @Override
    public int insert(Content content) {
        return contentMapper.insert(content);
    }
}
