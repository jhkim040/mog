package com.myblog.mogbackend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @ManyToOne
    @JoinColumn(name = "memberId", referencedColumnName = "id")
    private Member member; // author (member FK)

    @OneToMany(mappedBy = "category")
    private List<Post> posts;

    public void setMember(Member member) {
        if(this.member != null) {
            this.member.getCategories().remove(this);
        }
        this.member = member;
        member.getCategories().add(this);
    }

    public void addPost(Post post) {
        this.posts.add(post);
        if(post.getCategory() != this) {
            post.setCategory(this);
        }
    }

//    public void setId(Long id) {this.id = id;}
    public void setName(String name) {
        this.name = name;
    }
}
