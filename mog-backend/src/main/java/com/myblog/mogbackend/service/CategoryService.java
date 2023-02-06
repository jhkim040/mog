package com.myblog.mogbackend.service;

import com.myblog.mogbackend.dto.CategoryDto;
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
public class CategoryService {
    private final CategoryRepository categoryRepository;
    private final MemberRepository memberRepository;
    private final PostRepository postRepository;

    @Transactional(readOnly = true)
    public Category findCategoryById(Long id) {
        return categoryRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("no such category"));
    }

    @Transactional(readOnly = true)
    public List<CategoryDto> categoryList(Long memberId) {

        Member member = memberRepository.findById(memberId)
        .orElseThrow(()->new RuntimeException("no such member"));

        List<Category> categoryList = categoryRepository.findByMember_Id(memberId);
//        if(categoryList != null || categoryList.size() > 0) {
//            for (Category c : categoryList) {
//                c.setMember(member);
//                member.addCategory(c);
//            }
//        }
//        List<Post> postList = postRepository.findByMember_Id(memberId);
//        if(postList != null || postList.size() > 0) {
//            for(Post p : postList) {
//                p.setMember(member);
//                member.addPost(p);
//            }
//        }
        return CategoryDto.toCategoryDtoList(categoryList);

    }

    @Transactional
    public CategoryDto write(Category category) {

        return CategoryDto.toCategoryDto(categoryRepository.save(category));
    }

    @Transactional
    public String delete(Long id) {
        categoryRepository.deleteById(id);
        return "ok";
    }
}
