package com.myblog.mogbackend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = true)
    private String message;

    @Column(nullable = true)
    private String originalFileName;

    @Column(nullable = true)
    private String storedFileName;

    private Long fileSize;



    @Enumerated(EnumType.STRING)
    private Authority authority;

    @OneToMany(mappedBy = "member")
    private List<Category> categories;

    @OneToMany(mappedBy = "member")
    private List<Post> posts;

    public void addCategory(Category category) {
        this.categories.add(category);
        if(category.getMember() != this) {
            category.setMember(this);
        }
    }

    public void addPost(Post post) {
        this.posts.add(post);
        if(post.getMember() != this) {
            post.setMember(this);
        }
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setMessage(String message) {
        this.message = message;
    }

    public void setOriginalFileName(String originalFileName) { this.originalFileName = originalFileName; }
    public void setStoredFileName(String storedFileName) { this.storedFileName = storedFileName; }

    public void setFileSize(Long fileSize) { this.fileSize = fileSize; }



    @Builder
    public Member(Long id, String email, String password, String nickname, String message, Authority authority,
                  String originalFileName, String storedFileName){
        this.id = id;
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.message = message;
        this.authority = authority;
        this.originalFileName = originalFileName;
        this.storedFileName = storedFileName;
    }



}
