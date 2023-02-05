package com.myblog.mogbackend.repository;

import com.myblog.mogbackend.entity.Category;
import com.myblog.mogbackend.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
//    List<Category> findCategoryByMember(Member member);
    List<Category> findByMember_Id(Long id);
}
