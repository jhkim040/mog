package com.myblog.mogbackend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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
    @JoinColumn(name = "memberId")
    private Member member; // author (member FK)

//    public void setId(Long id) {this.id = id;}
    public void setName(String name) {
        this.name = name;
    }
    public void setMember(Member member) {this.member = member;}
}
