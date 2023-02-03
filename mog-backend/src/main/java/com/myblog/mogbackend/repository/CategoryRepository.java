package com.myblog.mogbackend.repository;

import com.myblog.mogbackend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    List<Category> findAllByMember_Id(Long member_id);
}
