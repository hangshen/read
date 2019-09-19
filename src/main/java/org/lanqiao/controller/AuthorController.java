package org.lanqiao.controller;


import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.commons.io.FilenameUtils;
import org.lanqiao.entity.*;

import org.lanqiao.service.*;
import org.lanqiao.vo.AuthorBasicDataVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ClassUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;

import java.util.List;
import java.util.Map;
import java.util.UUID;


@RestController
@RequestMapping("/author")
public class AuthorController {

    private Double bookWord;

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
     * @param
     * @return
     */
    @RequestMapping(value = "/publishBook", method = RequestMethod.POST)
    public int insertBook(Integer authorId, String bookName, String bookIntroduce, String bookFlag, Integer bookTypeId, @RequestParam("bookImg") MultipartFile bookImg) throws IOException {


//        String name = UUID.randomUUID().toString().replaceAll("-", "");
//        //获取图片的扩展名
//        String ext = FilenameUtils.getExtension(bookImg.getOriginalFilename());
//        //设置图片上传路径,存入数据库中的格式为:upload/文件名.后缀
//        String url = request.getSession().getServletContext().getRealPath("/upload");
////        System.out.println(url);
//        //以绝对路径保存重命名后的图片
//        bookImg.transferTo(new File(url + "/" + name + "." + ext));
        //把图片存储路径保存到数据库

        String filePath = System.getProperty("user.dir") + "/src/main/resources/static/images/upload";//ClassUtils.getDefaultClassLoader().getResource("").getPath() + "static/images/upload";
        System.out.println(filePath);
//        String filePath = "E:\\java\\project\\IDEAProject\\read\\src\\main\\resources\\static\\images\\upload";//保存图片的路径
        //获取原始图片的拓展名
        String originalFilename = bookImg.getOriginalFilename();
        //新的文件名字
        String newFileName = UUID.randomUUID() + originalFilename;
        //封装上传文件位置的全路径
        File targetFile = new File(filePath, newFileName);
        //把本地文件上传到封装上传文件位置的全路径
        bookImg.transferTo(targetFile);

        Books books = new Books();
        books.setBookImg("../images/upload" + newFileName);
        books.setBookAuthorId(authorId);
        books.setBookName(bookName);
        books.setBookIntroduce(bookIntroduce);
        books.setBookFlag(bookFlag);
        books.setBookTypeId(bookTypeId);
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

        System.out.println(chapterSort + " " + bookId + " " + chapterName + " " + contentText);
        Content content = new Content();
        Chapter chapter = new Chapter();
        bookWord = Math.ceil((double)contentText.length()/10000)*0.1;
        System.out.println(bookWord);
        content.setContentText(contentText);
        contentService.insert(content);
        int contentId = content.getContentId();

        chapter.setChapterBookId(bookId);
        chapter.setChapterContentId(contentId);
        chapter.setChapterName(chapterName);
        chapter.setChapterSort(chapterSort);
        int characterFlag = chapterService.insert(chapter);
        if (characterFlag == 1) {
           Books books = bookService.selectByBookId(bookId);
           bookService.updateBookWordByBookId(books.getBookWord()+bookWord,bookId);
            return true;
        } else {
            return false;
        }
    }


    /*
     *作者注册账号检测（是否可以注册）
     */
    @RequestMapping("/checkAuthorAccount")
    public boolean checkAuthorAccount(String authorAccount) {
        return authorLoginService.checkAccount(authorAccount);
    }

    @RequestMapping("/updateAuthor")
    public int updateByPrimaryKeySelective(@RequestBody Author record) {
        return authorService.updateByPrimaryKeySelective(record);
    }
}
