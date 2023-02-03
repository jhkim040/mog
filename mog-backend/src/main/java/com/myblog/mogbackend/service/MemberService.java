package com.myblog.mogbackend.service;

import com.myblog.mogbackend.dto.MemberResponseDto;
import com.myblog.mogbackend.entity.Member;
import com.myblog.mogbackend.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional(readOnly = true)
    public Member findById(Long id) {
        return memberRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("no such member"));
    }

    @Transactional(readOnly = true)
    public MemberResponseDto findByEmail(String email) {
        return memberRepository.findByEmail(email)
                .map(MemberResponseDto::of)
                .orElseThrow(() -> new RuntimeException("no such member"));
    }


    // 닉네임 변경
    @Transactional
    public MemberResponseDto changeMemberNickname(String email, String nickname) {
        if(nickname.trim() == "") {
            throw new RuntimeException("nickname blank");
        }
        Member member = memberRepository.findByEmail(email).
                orElseThrow(() -> new RuntimeException("no such member"));
        member.setNickname(nickname);
        return MemberResponseDto.of(memberRepository.save(member));
    }

    // 비밀번호 변경
    @Transactional
    public MemberResponseDto changeMemberPassword(String email, String exPassword, String newPassword) {
//        Member member = memberRepository.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다"));
        if(newPassword.trim() == "") {
            throw new RuntimeException("new password blank");
        }
        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("no such member"));

        if (!passwordEncoder.matches(exPassword, member.getPassword())) {
            throw new RuntimeException("Incorrect Password");
        }
        member.setPassword(passwordEncoder.encode((newPassword)));
        return MemberResponseDto.of(memberRepository.save(member));
    }

    // 상태 메시지 변경
    @Transactional
    public MemberResponseDto changeMemberMessage(String email, String newMessage) {
        Member member = memberRepository.findByEmail(email).
                orElseThrow(() -> new RuntimeException("no such member"));
        member.setMessage(newMessage);
        return MemberResponseDto.of(memberRepository.save(member));
    }

    // 암호 일치해야 회원탈퇴
    @Transactional
    public String deleteByEmailandPw(String email, String password) {
        if(password.trim() == "") {
            throw new RuntimeException("new password blank");
        }
        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("no such member"));

        if (!passwordEncoder.matches(password, member.getPassword())) {
            throw new RuntimeException("Incorrect Password");
        }
        if(!memberRepository.existsByEmail(email)) {
//            throw new RuntimeException("존재하지 않은 사용자입니다.");
            return "fail";
        } else {
//            Member member = memberRepository.findByEmail(email).get();
            memberRepository.delete(member);
            return "ok";
        }
    }

}
