package org.lanqiao.read;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.lanqiao.mapper.BooksMapper;
import org.lanqiao.entity.Books;


import java.io.Reader;
import java.util.List;

/**
 * Created by David on 2019/8/9.
 */
public class Test {
    private static SqlSessionFactory sqlSessionFactory;
    private static Reader reader;

    static {
        try {
            reader = Resources.getResourceAsReader("mybatis-Config.xml");
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        SqlSession session = sqlSessionFactory.openSession(true);
        try {
            BooksMapper booksMapper = session.getMapper(BooksMapper.class);
//          addAuthor
//
//          getPaging            Author author = new Author();
////            author.setAuthor("davia");
////            author.setMsg("321155");
////            int ret = authorDao.addAuthor(author);
////            System.out.println(ret);
//////          GetAuthorCount
////            int temp = authorDao.GetAuthorCount();
////            System.out.println(temp);
            List<Books> u= booksMapper.selectAllBooks();
            System.out.println(u.size());
        } finally {
            session.close();
        }
    }
}

