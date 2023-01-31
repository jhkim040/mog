package com.myblog.mogbackend.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@Builder
@NoArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = true)
    private String message;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setMessage(String message) {
        this.message = message;
    }

    @Builder
    public Member(Long id, String email, String password, String nickname, String message, Authority authority){
        this.id = id;
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.message = message;
        this.authority = authority;
    }



}
