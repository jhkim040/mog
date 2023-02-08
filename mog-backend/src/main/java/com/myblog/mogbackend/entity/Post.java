package com.myblog.mogbackend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String title;

    @Column(nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "memberId", referencedColumnName = "id")
    private Member member; // author (member FK)

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category; // category (category FK)

    @CreationTimestamp // INSERT 시 자동으로 값을 채워줌
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @UpdateTimestamp // UPDATE 시 자동으로 값을 채워줌
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public void setMember(Member member) {
        if(this.member != null) {
            this.member.getPosts().remove(this);
        }
        this.member = member;
        member.getPosts().add(this);
    }

    public void setCategory(Category category) {
        if(this.category != null) {
            this.category.getPosts().remove(this);
        }
        this.category = category;
        category.getPosts().add(this);
    }

    public void setTitle(String title) {
        this.title = title;
    }
    public void setContent(String content) {
        this.content = content;
    }
}
