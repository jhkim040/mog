package com.myblog.mogbackend.service;

import com.myblog.mogbackend.dto.CategoryDto;
import com.myblog.mogbackend.dto.PostDto;
import com.myblog.mogbackend.entity.Category;
import com.myblog.mogbackend.entity.Member;
import com.myblog.mogbackend.entity.Post;
import com.myblog.mogbackend.repository.CategoryRepository;
import com.myblog.mogbackend.repository.MemberRepository;
import com.myblog.mogbackend.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {
    private final CategoryRepository categoryRepository;
    private final MemberRepository memberRepository;
    private final PostRepository postRepository;

    @Transactional(readOnly = true)
    public Post findPostById(Long id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("no such category"));
    }

    @Transactional(readOnly = true)
    public List<PostDto> postList(Long memberId) {

        Member member = memberRepository.findById(memberId)
                .orElseThrow(()->new RuntimeException("no such member"));

        List<Post> postList = postRepository.findByMember_Id(memberId);

        return PostDto.toPostDtoList(postList);

    }

    @Transactional
    public PostDto write(Post post) {

        return PostDto.toPostDto(postRepository.save(post));
    }

    @Transactional
    public String delete(Long id) {
        postRepository.deleteById(id);
        return "ok";
    }
}
