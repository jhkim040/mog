package com.myblog.mogbackend.repository;


import com.myblog.mogbackend.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByMember_IdOrderByUpdatedAtDesc(Long member_id);
    List<Post> findByCategory_IdOrderByUpdatedAtDesc(Long member_id);
    List<Post> findByMember_idAndCategory_IdOrderByUpdatedAtDesc(Long member_id, Long category_id);
    List<Post> findByMember_idAndTitleContaining(Long member_id, String title);
}
