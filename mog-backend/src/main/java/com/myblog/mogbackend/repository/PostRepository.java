package com.myblog.mogbackend.repository;


import com.myblog.mogbackend.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByMember_Id(Long member_id);
    List<Post> findByCategory_Id(Long category_id);
}
