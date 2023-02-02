package com.myblog.mogbackend.controller;

import com.myblog.mogbackend.dto.ChangePasswordRequestDto;
import com.myblog.mogbackend.dto.MemberRequestDto;
import com.myblog.mogbackend.dto.MemberResponseDto;
import com.myblog.mogbackend.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {
    private final MemberService memberService;

// 세션에 저장할 때 사용
//    @GetMapping("/me")
//    public ResponseEntity<MemberResponseDto> getMyMemberInfo() {
//        MemberResponseDto myInfoBySecurity = memberService.getMyInfoBySecurity();
//        System.out.println(myInfoBySecurity.getNickname());
//        return ResponseEntity.ok((myInfoBySecurity));
//    }

    @GetMapping("/me")
    public ResponseEntity<MemberResponseDto> getMyMemberInfo(HttpServletRequest request) {
        // Interceptor로 가로챈 Header의 Authorization 내의 token 정보 추출 후
        // request에 담은 사용자 정보(email)
        Object emailTemp = request.getAttribute("email");

        if(emailTemp == null) {
            throw new RuntimeException("non-existing user");
        }
        String email = (String) emailTemp;
        MemberResponseDto myMemberInfo = memberService.findByEmail(email);

        return ResponseEntity.ok(myMemberInfo);
    }


    @PutMapping("/nickname")
    public ResponseEntity<MemberResponseDto> setMemberNickname(@RequestBody MemberRequestDto request) {
        return ResponseEntity.ok(memberService.changeMemberNickname(request.getEmail(), request.getNickname()));
    }


    @PutMapping("/password")
    public ResponseEntity<MemberResponseDto> setMemberPassword(@RequestBody ChangePasswordRequestDto request) {
        return ResponseEntity.ok(memberService.changeMemberPassword(request.getEmail(), request.getExPassword(), request.getNewPassword()));
    }

    @PutMapping("/message")
    public ResponseEntity<MemberResponseDto> setMemberMessage(@RequestBody MemberRequestDto request) {
        return ResponseEntity.ok(memberService.changeMemberMessage(request.getEmail(), request.getMessage()));
    }


    @PostMapping("/delete")
    public ResponseEntity<?> deleteByEmailandPw(@RequestBody MemberRequestDto request) {
        return new ResponseEntity<>(memberService.deleteByEmailandPw(request.getEmail(), request.getPassword()), HttpStatus.OK);
    }
}