package com.xingyue.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import com.xingyue.pojo.Resource;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author
 */
@Repository
public interface ResourceRepository extends JpaRepository<Resource, Integer> {

    /**
     * 根据模块查询资源
     *
     * @param module   模块
     * @param pageable 分页/排序
     * @return
     */
    Page<Resource> findByModuleAndPositionIsNotNull(String module, Pageable pageable);

    List<Resource> queryByModule(String module);

    /**
     * 根据模块获取模块下面的位置信息
     *
     * @param module   模块
     * @param position 位置
     * @return
     */
    List<Resource> queryByModuleAndAndPosition(String module, String position);

    /**
     * 根据模块获取模块下面的位置信息带分页
     *
     * @param pageable 分页信息
     * @param module   模块
     * @param position 位置
     * @return
     */
    Page<Resource> queryByModuleAndAndPosition(String module, String position, Pageable pageable);

    /**
     * 根据id获取上一条记录
     *
     * @param id
     * @return
     */
    @Query(value = "SELECT * FROM resource AS r WHERE r.module = 'pressCenter' and r.position = 'news' and r.id < ?1 ORDER BY r.id DESC  LIMIT 0,1",nativeQuery = true)
    Resource getsTheLastRecordById(Integer id);

    /**
     * 根据id获取下一条记录
     *
     * @param id
     * @return
     */
    @Query(value = "SELECT * FROM resource AS r WHERE r.module = 'pressCenter' and r.position = 'news' and r.id > ?1 ORDER BY r.id DESC  LIMIT 0,1",nativeQuery = true)
    Resource getsTheNextRecordById(Integer id);




}
