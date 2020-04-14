package com.xingyue.service.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.xingyue.utils.PageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.JpaSort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.xingyue.dao.ResourceRepository;
import com.xingyue.pojo.Resource;
import com.xingyue.service.ResourceService;

@Service
public class ResourceServiceImpl implements ResourceService {

    @Value("${package.storage}")
    private String storagePath;

    @Autowired
    private ResourceRepository resourceRepository;

    @Override
    public Resource createFile(MultipartFile file, Resource res) throws Exception {
        if (file.getSize() > 0) {
            // 判断文件夹是否存在,不存在则创建
            File f = new File(storagePath);
            if (!f.exists()) {
                f.mkdirs();
            }
            String fileName = file.getOriginalFilename();
            if (fileName.endsWith("jpg") || fileName.endsWith("png") || fileName.endsWith("txt")) {
                File newFile = new File(storagePath, fileName);
                file.transferTo(newFile);
                Resource resource = new Resource();
                resource.setUrl(newFile.getPath());
                resource.setDescription(res.getDescription());
                resource.setModule(res.getModule());
                resource.setNumber(res.getNumber());
                return resourceRepository.save(resource);
            }
        }
        return null;
    }

    /**
     * 根据模块查询资源
     *
     * @param pageUtils
     * @return
     */
    @Override
    public Map<String, Object> queryResourcesByModule(PageUtils<Resource> pageUtils) {
        Map<String, Object> map = new HashMap<>(4);
        Sort sort = JpaSort.unsafe(Sort.Direction.ASC, "number");
        Pageable pageable = PageRequest.of(pageUtils.getPage(), pageUtils.getSize(), sort);
        Page<Resource> resources = resourceRepository.queryByModule(pageUtils.getObject().getModule(), pageable);
        //有多少页
        int totalPages = resources.getTotalPages();
        //总条数
        long totalElements = resources.getTotalElements();
        //返回数据
        List<Resource> content = resources.getContent();
        map.put("content", content);
        map.put("totalPages", totalPages);
        map.put("totalElements", totalElements);
        return map;
    }

}
