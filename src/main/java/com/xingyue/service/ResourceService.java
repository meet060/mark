package com.xingyue.service;

import com.xingyue.utils.PageUtils;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import com.xingyue.pojo.Resource;

import java.util.List;
import java.util.Map;

/**
 * @author
 */
public interface ResourceService {

    /**
     * 上传图片
     *
     * @param file     图片地址
     * @param resource 对象
     * @return
     * @throws Exception
     */
    Resource createFile(MultipartFile file, Resource resource) throws Exception;

    /**
     * 根据模块查询资源
     *
     * @param pageUtils
     * @return
     */
    Map<String, Object> queryResourcesByModule(PageUtils<Resource> pageUtils);

	Map<String, Object> queryResourcesByModule(Resource resource);


}
