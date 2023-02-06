package com.myblog.mogbackend.dto;


import com.myblog.mogbackend.entity.Category;
import com.myblog.mogbackend.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PostDto {
    private Long id;
    private String title;
    private String content;
    private Long memberId;
    private Long categoryId;

    public static PostDto toPostDto(Post post) {
        return PostDto.builder()
                .id(post.getId())
                .title(post.getTitle())
                .content(post.getContent())
                .memberId(post.getMember().getId())
                .categoryId(post.getCategory().getId())
                .build();
    }

    public static List<PostDto> toPostDtoList(List<Post> list) {
        List<PostDto> result = null;
        if(list != null || list.size() > 0) {
            result = new ArrayList<>();
            for (Post p : list) {
                result.add(PostDto.toPostDto(p));
            }
        }
        return result;
    }
}
