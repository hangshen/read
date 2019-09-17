package org.lanqiao.controller;


import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.lanqiao.entity.*;

import org.lanqiao.service.*;
import org.lanqiao.vo.AuthorBasicDataVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.IOException;

import java.util.List;
import java.util.Map;
import java.util.UUID;


@RestController
@RequestMapping("/author")
public class AuthorController {


    @Autowired
    AuthorLoginService authorLoginService;
    @Autowired
    AuthorService authorService;
    @Autowired
    BookService bookService;
    @Autowired
    BookTypeService bookTypeService;
    @Autowired
    CommentService commentService;
    @Autowired
    ContentService contentService;
    @Autowired
    ChapterService chapterService;


    /**
     * 登录
     * by lhw
     *
     * @param authorAccount
     * @param authorPassword
     * @return
     */
    @RequestMapping("/login")
    public Map loginCheck(String authorAccount, String authorPassword) {
        System.out.println(authorAccount + " and " + authorPassword);
        return authorLoginService.loginCheck(authorAccount, authorPassword);

    }

    /**
     * 注册
     * by lhw
     *
     * @param authorAccount
     * @param authorPassword
     * @return
     * @throws IOException
     */
    @RequestMapping("/register")
    public boolean register(String authorName, String authorQq, String authorIdentity, String realName, String realID, String authorAccount, String authorPassword) {

        Author author = new Author();
        author.setAuthorName(authorName);
        author.setAuthorQq(authorQq);
        author.setAuthorIdentity(authorIdentity);
        author.setRealName(realName);
        author.setRealID(realID);
        System.out.println(author.toString());
        return authorService.register(author, authorAccount, authorPassword, realID);
    }

    /**
     * 查询某个作者的全部作品
     * by lhw
     *
     * @param authorId
     * @return ListBooks
     */
    @RequestMapping("/getAllBooksByAuthorId")
    public List<Books> getAllBooksByAuthorId(Integer authorId) {
//        System.out.println(bookService.selectBooksByAuthorId(authorId).size());
        return bookService.selectBooksByAuthorId(authorId);
    }

    /**
     * 作者发表（添加）作品
     * by lhw
     *
     * @param books
     * @return
     */
    @RequestMapping("/publishBook")
    public int insertBook(Books books) throws IOException {
//        String filePath = "E:\\java\\project\\IDEAProject\\read\\src\\main\\resources\\static\\images\\upload";//保存图片的路径
//        //获取原始图片的拓展名
//        String originalFilename = file.getOriginalFilename();
//        //新的文件名字
//        String newFileName = UUID.randomUUID() + originalFilename;
//        //封装上传文件位置的全路径
//        File targetFile = new File(filePath, newFileName);
//        //把本地文件上传到封装上传文件位置的全路径
//        file.transferTo(targetFile);
//        books.setBookImg(newFileName);
        System.out.println(books.toString());
        return bookService.insertBooks(books);
    }


    /**
     * 作者中心：我的收入
     * by lhw
     *
     * @param authorId
     * @return author_money
     */
    @RequestMapping("/myIncome")
    public Author myIncome(Integer authorId) {
        System.out.println(authorService.selectByAuthorId(authorId).getAuthorMoney());
        return authorService.selectByAuthorId(authorId);
    }


    /**
     * 作者基本资料
     * by lhw
     *
     * @param authorId
     * @return Author
     */
    @RequestMapping("/authorBasicData")
    public AuthorBasicDataVo authorBasicData(Integer authorId) {
        Author author = authorService.selectByAuthorId(authorId);
        AuthorLogin authorLogin = authorLoginService.selectByAuthorId(authorId);
        AuthorBasicDataVo authorBasicDataVo = new AuthorBasicDataVo();
        authorBasicDataVo.setAuthor(author);
        authorBasicDataVo.setAuthorLogin(authorLogin);
        System.out.println(authorBasicDataVo.toString());
        return authorBasicDataVo;
    }

    @RequestMapping("/getAllBookType")
    public List<BookType> getAllBookType() {
        System.out.println(bookTypeService.selectAllBookType().size());
        return bookTypeService.selectAllBookType();
    }

    @RequestMapping("/readerComment")
    public List<Comment> readerComment(Integer authorId) {

//        PageHelper.startPage(pageNum, 5);
        List<Comment> list = commentService.selectAllByAuthorId(authorId);
        System.out.println(authorId);
//        PageInfo<Comment> pageInfo = new PageInfo<>(list);

        return list;
    }

    @RequestMapping("/selectAuthorByName")
    public List<Author> selectAuthorByName(String authorName) {
        authorName = "%" + authorName + "%";
        return authorService.selectAuthorByName(authorName);
    }

    @RequestMapping("/deleteAuthor")
    public int deleteByPrimaryKey(Integer authorId) {
        return authorService.deleteByPrimaryKey(authorId);
    }

    @RequestMapping("/selectAllAuthor")
    public List<Author> selectAllAuthor() {
        return authorService.selectAllAuthor();
    }

    @RequestMapping("/getAuthorName")
    public Author getAuthorName(Integer authorId) {
        return authorService.getAuthorName(authorId);
    }


    @RequestMapping("/bookSize")
    public Integer getBookSize(Integer authorId) {
        return bookService.selectBooksByAuthorId(authorId).size();
    }

    @RequestMapping("/newChapter")
    public boolean newChapter(Integer chapterSort, Integer bookId, String chapterName, String contentText) {

        System.out.println(chapterSort+" "+bookId+" "+chapterName+" "+contentText);
        Content content = new Content();
        Chapter chapter = new Chapter();
        content.setContentText(contentText);
        int contentId = contentService.insert(content);

        chapter.setChapterBookId(bookId);
        chapter.setChapterContentId(contentId);
        chapter.setChapterName(chapterName);
        chapter.setChapterSort(chapterSort);
        int characterFlag = chapterService.insert(chapter);
        if (characterFlag == 1) {
            return true;
        } else {
            return false;
        }
    }


    /*
    *作者注册账号检测（是否可以注册）
     */
    @RequestMapping("/checkAuthorAccount")
    public boolean checkAuthorAccount(String authorAccount){
        return authorLoginService.checkAccount(authorAccount);
    }
    @RequestMapping("/updateAuthor")
    public int updateByPrimaryKeySelective(@RequestBody Author record){
        return authorService.updateByPrimaryKeySelective(record);
    }
}
