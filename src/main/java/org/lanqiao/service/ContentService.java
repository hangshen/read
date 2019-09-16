package org.lanqiao.service;

import org.lanqiao.entity.Content;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentService {
    int insert(Content content);
}
