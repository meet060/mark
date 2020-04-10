package com.xingyue.service;

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
     * @param file 图片地址
     * @param resource 对象
     * @return
     * @throws Exception
     */
    Resource createFile(MultipartFile file, Resource resource) throws Exception;

    /**
     * 根据模块查询资源
     *
     * @param resource 资源信息
     * @return
     */
    List<Resource> queryResourcesByModule(Resource resource);


}
