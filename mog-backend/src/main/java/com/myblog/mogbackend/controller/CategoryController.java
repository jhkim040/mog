package com.myblog.mogbackend.controller;

import com.myblog.mogbackend.dto.CategoryDto;
import com.myblog.mogbackend.entity.Category;
import com.myblog.mogbackend.service.CategoryService;
import com.myblog.mogbackend.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/category")
public class CategoryController {
    private final CategoryService categoryService;
    private final MemberService memberService;

   @GetMapping("/list/{id}") // id: memberId
    public ResponseEntity<List<CategoryDto>> categoryList(@PathVariable("id") Long id) {
        return ResponseEntity.ok(categoryService.categoryList(id));
    }
    @PostMapping("/write")
    public ResponseEntity<CategoryDto> writeCategory(@RequestBody CategoryDto request) {
        System.out.println(request.getName());
        System.out.println(request.getMemberId());
        Category category = new Category();
        category.setName(request.getName());
        category.setMember(memberService.findById(request.getMemberId()));
        return ResponseEntity.ok(categoryService.write(category));
    }

    @DeleteMapping("/delete/{categoryId}")
    public ResponseEntity<?> deleteCategory(@PathVariable("categoryId") Long categoryId) {

//       try {
//           Long long_categoryId = Long.parseLong(categoryId);
//           if(long_categoryId != null) {
//                categoryService.delete(long_categoryId);
//           }
//       } catch (Exception e) {
//           throw new RuntimeException("categoryId(Long) type error");
//       }

        return new ResponseEntity<>(categoryService.delete(categoryId), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateCategory(@RequestBody Category category) {
        Category categoryTemp = categoryService.findCategoryById(category.getId());
        categoryTemp.setName(category.getName());
//        categoryService.write(categoryTemp);
        return new ResponseEntity<>(categoryService.write(categoryTemp), HttpStatus.OK);
    }
}
