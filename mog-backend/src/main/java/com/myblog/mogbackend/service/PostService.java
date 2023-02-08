package com.myblog.mogbackend.service;


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

import java.util.ArrayList;
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

        List<Post> postList = postRepository.findByMember_IdOrderByUpdatedAtDesc(memberId);

        return PostDto.toPostDtoList(postList);

    }

    // 카테고리 name 검색 & 게시글 title 검색
    @Transactional(readOnly = true)
    public List<PostDto> searchPost(Long memberId, String keyword) {
        // 검색 결과
        List<Post> searchResult = new ArrayList<>();

        // 카테고리 name 검색
        List<Category> categoryList = categoryRepository.findByMember_idAndNameContaining(memberId, keyword);
        List<Post> categorySearchResult = null;
        if(categoryList != null || categoryList.size() > 0) {
            // keyword 가진 카테고리의 모든 게시글 --> 결과에 저장
            for(Category c : categoryList) {
                categorySearchResult = postRepository.findByMember_idAndCategory_IdOrderByUpdatedAtDesc(memberId, c.getId());;
                if(categorySearchResult != null || categorySearchResult.size() > 0) {
                    for(Post p : categorySearchResult) {
                        searchResult.add(p);
                    }
                }
            }
        }
        // 게시글 title 검색
        List<Post> postList = postRepository.findByMember_idAndTitleContaining(memberId, keyword);
        if(postList != null || postList.size() > 0) {
            for(Post p : postList) {
                searchResult.add(p);
            }
        }
        return PostDto.toPostDtoList(searchResult);
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
