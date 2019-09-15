package org.lanqiao.vo;

import org.lanqiao.entity.Author;
import org.lanqiao.entity.AuthorLogin;

public class AuthorBasicDataVo {
    private Author author;
    private AuthorLogin authorLogin;

    @Override
    public String toString() {
        return "AuthorBasicDataVo{" +
                "author=" + author +
                ", authorLogin=" + authorLogin +
                '}';
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public AuthorLogin getAuthorLogin() {
        return authorLogin;
    }

    public void setAuthorLogin(AuthorLogin authorLogin) {
        this.authorLogin = authorLogin;
    }
}
