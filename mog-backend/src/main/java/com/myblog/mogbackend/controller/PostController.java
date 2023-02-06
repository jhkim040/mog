package com.myblog.mogbackend.controller;


import com.myblog.mogbackend.dto.PostDto;
import com.myblog.mogbackend.entity.Post;
import com.myblog.mogbackend.service.CategoryService;
import com.myblog.mogbackend.service.MemberService;
import com.myblog.mogbackend.service.PostService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/post")
public class PostController {
    private final PostService postService;
    private final CategoryService categoryService;
    private final MemberService memberService;

    @GetMapping("/list/{id}") // id: memberId
    public ResponseEntity<List<PostDto>> categoryList(@PathVariable("id") Long id) {
        return ResponseEntity.ok(postService.postList(id));
    }
    @PostMapping("/write")
    public ResponseEntity<PostDto> writeCategory(@RequestBody PostDto request) {
        log.info(request.getId().toString());
        log.info(request.getTitle());
        Post post = new Post();
        post.setTitle(request.getTitle());
        post.setMember(memberService.findById(request.getMemberId()));
        post.setCategory(categoryService.findCategoryById(request.getCategoryId()));
        return ResponseEntity.ok(postService.write(post));
    }

    @DeleteMapping("/delete/{categoryId}")
    public ResponseEntity<?> deletePost(@PathVariable("postId") Long postId) {
        return new ResponseEntity<>(postService.delete(postId), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateCategory(@RequestBody PostDto postDto) {
        Post postTemp = postService.findPostById(postDto.getId());
        postTemp.setTitle(postDto.getTitle());
        postTemp.setContent(postDto.getContent());
        postTemp.setCategory(categoryService.findCategoryById(postDto.getCategoryId()));
        return new ResponseEntity<>(postService.write(postTemp), HttpStatus.OK);
    }
}
