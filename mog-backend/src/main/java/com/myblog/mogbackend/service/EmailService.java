package com.myblog.mogbackend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.Random;
import java.util.UUID;


@PropertySource("classpath:application.yml")
@Slf4j
@RequiredArgsConstructor
@Service
public class EmailService {
    private final JavaMailSender javaMailSender;
    private final MemberService memberService;
    private final PasswordEncoder passwordEncoder;


    @Value("${spring.mail.username}")
    private String username;



    public String sendSimpleMessage(
            String to) {

        String subject = "[MOG] 임시 비밀번호 발행 안내";
        String text = "";
        String randomPassword = "";

        StringBuffer sb = new StringBuffer();
        sb.append("안녕하세요 [MOG] 입니다.\n");
        sb.append("언제나 많은 관심과 이용 진심으로 감사합니다\n");

        if(memberService.existByEmail(to)) { // 등록된 회원일 때
            // 임시 랜덤 비밀번호 생성
            randomPassword = createPassword();
            // 임시 비밀번호로 비밀번호 변경
            memberService.changeMemberPassword_withEmail(to, randomPassword);
            sb.append("재발행된 비밀번호는 " + randomPassword + "입니다.");
            sb.append('\n');
            sb.append("안전한 회원정보를 위해 로그인 후 비밀번호를 변경하실 것을 권장합니다!");
        } else {
            sb.append("죄송합니다. 입력하신 정보는 미가입된 계정입니다.\n ");
            sb.append("회원가입 후 [MOG]의 다양한 기능을 이용해보세요!");
        }
        text = sb.toString();

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(username);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        javaMailSender.send(message);

        return randomPassword;
    }

    // 임시 랜덤 비밀번호 생성
    public static String createPassword() {
        StringBuffer randomPassword = new StringBuffer();
        Random rnd = new Random();
        for (int i = 0; i < 10; i++) {
            int rIndex = rnd.nextInt(3);
            switch (rIndex) {
                case 0:
                    // a-z
                    randomPassword.append((char) ((int) (rnd.nextInt(26)) + 97));
                    break;
                case 1:
                    // A-Z
                    randomPassword.append((char) ((int) (rnd.nextInt(26)) + 65));
                    break;
                case 2:
                    // 0-9
                    randomPassword.append((rnd.nextInt(10)));
                    break;
            }
        }
        return randomPassword.toString();
    }


}
