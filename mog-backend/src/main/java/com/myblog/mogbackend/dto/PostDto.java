package com.myblog.mogbackend.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.myblog.mogbackend.entity.Category;
import com.myblog.mogbackend.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.time.LocalDateTime;
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

//    @CreationTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createdAt;

//    @UpdateTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime updatedAt;

    public static PostDto toPostDto(Post post) {
        return PostDto.builder()
                .id(post.getId())
                .title(post.getTitle())
                .content(post.getContent())
                .memberId(post.getMember().getId())
                .categoryId(post.getCategory().getId())
                .createdAt(post.getCreatedAt())
                .updatedAt(post.getUpdatedAt())
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
