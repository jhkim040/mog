package com.myblog.mogbackend.dto;

import com.myblog.mogbackend.entity.Authority;
import com.myblog.mogbackend.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

// Request를 받을 때
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberRequestDto {
    private Long id;
    private String email;
    private String password;
    private String nickname;
    private String message;

    public Member toMember(PasswordEncoder passwordEncoder) {
        return Member.builder()
                .id(id)
                .email(email)
                .password(passwordEncoder.encode(password))
                .nickname(nickname)
                .message(message)
                .authority(Authority.ROLE_USER)
                .build();
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        // 아이디(이메일), 비밀번호 일치 검증 로직
        return new UsernamePasswordAuthenticationToken(email, password);
    }
}
