package com.myblog.mogbackend.controller;

import com.myblog.mogbackend.dto.ChangePasswordRequestDto;
import com.myblog.mogbackend.dto.MemberRequestDto;
import com.myblog.mogbackend.dto.MemberResponseDto;
import com.myblog.mogbackend.service.EmailService;
import com.myblog.mogbackend.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {
    private final MemberService memberService;
    private final EmailService emailService;


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
        return ResponseEntity.ok(memberService.changeMemberPassword_withEmailAndExPassword(request.getEmail(), request.getExPassword(), request.getNewPassword()));
    }

    @PutMapping("/message")
    public ResponseEntity<MemberResponseDto> setMemberMessage(@RequestBody MemberRequestDto request) {
        return ResponseEntity.ok(memberService.changeMemberMessage(request.getEmail(), request.getMessage()));
    }
    @PostMapping("/profileImage/{memberId}")
    public ResponseEntity<MemberResponseDto> setProfileImage(@PathVariable Long memberId,
                                                             @Validated @RequestParam("image") List<MultipartFile> files) throws Exception {
        log.info(files.toString());
                return ResponseEntity.ok(memberService.changeProfileImage(memberId, files));
    }


    // 회원탈퇴 이메일, 암호 필요
    @PostMapping("/account")
    public ResponseEntity<?> deleteByEmailandPw(@RequestBody MemberRequestDto request) {
        return new ResponseEntity<>(memberService.deleteByEmailandPw(request.getEmail(), request.getPassword()), HttpStatus.OK);
    }

    @PostMapping("/sendPwEmail")
    public ResponseEntity<?> sendPwEmail(@RequestBody MemberRequestDto request) throws Exception {
        String email = request.getEmail();
        String randomPassword = emailService.sendSimpleMessage(email);
        log.info("임시 비밀번호 :" + randomPassword);

        // 임시 비밀번호로 수정
        return new ResponseEntity<>(emailService.sendSimpleMessage(email), HttpStatus.OK);
    }
}