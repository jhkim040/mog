package com.myblog.mogbackend.dto;

import com.myblog.mogbackend.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDto {
    private Long id;
    private String name;
    private Long memberId;

    public static CategoryDto toCategoryDto(Category category) {
        return CategoryDto.builder()
                .id(category.getId())
                .name(category.getName())
                .memberId(category.getMember().getId())
                .build();
    }

    public static List<CategoryDto> toCategoryDtoList(List<Category> list) {
        List<CategoryDto> result = null;
        if(list != null || list.size() > 0) {
            result = new ArrayList<>();
            for (Category c : list) {
                result.add(CategoryDto.toCategoryDto(c));
            }
        }
        return result;
    }
}
