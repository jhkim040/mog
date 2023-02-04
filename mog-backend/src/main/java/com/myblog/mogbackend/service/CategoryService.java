package com.myblog.mogbackend.service;

import com.myblog.mogbackend.dto.CategoryDto;
import com.myblog.mogbackend.entity.Category;
import com.myblog.mogbackend.entity.Member;
import com.myblog.mogbackend.repository.CategoryRepository;
import com.myblog.mogbackend.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;
    private final MemberRepository memberRepository;

    @Transactional(readOnly = true)
    public Category findCategoryById(Long id) {
        return categoryRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("no such category"));
    }

    @Transactional(readOnly = true)
    public List<CategoryDto> categoryList(Long memberId) {
        System.out.println(memberId);
        Member member = memberRepository.findById(memberId)
        .orElseThrow(()->new RuntimeException("no such member"));

        List<Category> list = categoryRepository.findCategoryByMember(member);
        return CategoryDto.toCategoryDtoList(list);

    }

    @Transactional
    public CategoryDto write(Category category) {

        return CategoryDto.toCategoryDto(categoryRepository.save(category));
    }

    @Transactional
    public void delete(Long id) {
        categoryRepository.deleteById(id);
    }
}
