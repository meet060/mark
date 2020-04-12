package com.xingyue.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import com.xingyue.pojo.Resource;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author
 */
@Repository
public interface ResourceRepository extends JpaRepository<Resource, Integer> {

    /**
     *根据模块查询资源
     * @param module 模块
     * @param pageable 分页/排序
     * @return
     */
    Page<Resource> queryByModule(String module, Pageable pageable);
}
