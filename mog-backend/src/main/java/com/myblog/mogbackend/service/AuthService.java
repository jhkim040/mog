package com.myblog.mogbackend.service;

import com.myblog.mogbackend.dto.MemberRequestDto;
import com.myblog.mogbackend.dto.MemberResponseDto;
import com.myblog.mogbackend.dto.TokenDto;
import com.myblog.mogbackend.entity.Member;
import com.myblog.mogbackend.jwt.TokenProvider;
import com.myblog.mogbackend.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {
    private final AuthenticationManagerBuilder managerBuilder;
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;

    // 회원가입
    public MemberResponseDto signup(MemberRequestDto requestDto) {
        // 한 개의 이메일 당 하나의 계정
        if(requestDto.getEmail().trim() == "" || requestDto.getNickname().trim() == "" || requestDto.getPassword().trim() == "") {
            throw new RuntimeException("a blank value exists");
        }
        if(memberRepository.existsByEmail(requestDto.getEmail())) {
            throw new RuntimeException("already our member");
        }
        Member member = requestDto.toMember(passwordEncoder);
        return MemberResponseDto.of(memberRepository.save(member));
    }

    // 로그인
    public TokenDto login(MemberRequestDto requestDto) {
        UsernamePasswordAuthenticationToken authenticationToken = requestDto.toAuthentication();

        Authentication authentication = managerBuilder.getObject().authenticate(authenticationToken);

        return tokenProvider.generateTokenDto(authentication);

    }
}
