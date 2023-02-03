package com.myblog.mogbackend.controller;

import com.myblog.mogbackend.dto.CategoryDto;
import com.myblog.mogbackend.entity.Category;
import com.myblog.mogbackend.service.CategoryService;
import com.myblog.mogbackend.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/category")
public class CategoryController {
    private final CategoryService categoryService;
    private final MemberService memberService;

   @PostMapping("/list")
    public List<Category> categoryList(@RequestBody CategoryDto request) {
        return categoryService.categoryList(request.getMember_id());
    }
    @PostMapping("/write")
    public Category writeCategory(@RequestBody CategoryDto request) {
        System.out.println(request.getName());
        System.out.println(request.getMember_id());
        Category category = new Category();
        category.setName(request.getName());
        category.setMember(memberService.findById(request.getMember_id()));
        return categoryService.write(category);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCategory(@PathVariable Long id) {
        categoryService.delete(id);
    }

    @PutMapping("/update")
    public void updateCategory(@RequestBody Category category) {
        Category categoryTemp = categoryService.findCategoryById(category.getId());
        categoryTemp.setName(category.getName());
        categoryService.write(categoryTemp);
    }
}
