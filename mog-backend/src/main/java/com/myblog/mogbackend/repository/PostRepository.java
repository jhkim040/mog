package com.myblog.mogbackend.repository;

import com.myblog.mogbackend.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
