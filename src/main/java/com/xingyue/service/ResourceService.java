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
    Map<String, Object> queryResourcesByModule(String module, Integer page, Integer size);

    Map<String, Object> queryResourcesByModule(Resource resource);

    /**
     * 获取关于中润信息
     *
     * @return
     */
    Map<String, Object> obtainInformationAboutZhongrun();

    /**
     * 查询行业认可图片
     *
     * @return
     */
    Map<String, Object> checkIndustryApprovedPictures();

    /**
     * 产品中心数据查询
     *
     * @return
     */
    Map<String, Object> productCenterDataQuery();

    /**
     * 查询技术支持信息
     *
     * @return
     */
    Map<String, Object> queryTechnicalSupportInformation();

    /**
     * 获取新闻中心数据
     *
     * @return
     */
    Map<String, Object> getTheNewsCenterData(int page, int size);
}
