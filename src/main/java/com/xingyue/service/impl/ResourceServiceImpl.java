package com.xingyue.service.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;

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
            File newFile = new File(storagePath, fileName);
            file.transferTo(newFile);
            Resource resource = new Resource();
            resource.setUrl(newFile.getPath());
            resource.setDescription(res.getDescription());
            resource.setModule(res.getModule());
            resource.setNumber(res.getNumber());
            return resourceRepository.save(resource);
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

	@Override
	public Map<String, Object> queryResourcesByModule(Resource resource) {
		Map<String, Object> map = new HashMap<>();
		List<Resource> resources = resourceRepository.queryByModule(resource.getModule());
		//轮播图 3条数据按照最新发布信息(图片静态的)
		map.put("banner", filterResource(resources, "banner", 3));
		//产品：按照产品最新  4条数据
		map.put("product", filterResource(resources, "product", 4));
		//关于我们：
		map.put("about", filterResource(resources, "about", 1));
		//改善创新
		map.put("innovation", filterResource(resources, "innovation", 4));
		//解决方案
		map.put("program", filterResource(resources, "program", 4));
		//友情链接
		map.put("link", filterResource(resources, "link", 1));
		return map;
	}

	public List<Resource> filterResource(List<Resource> resources, String position, int limit) {
		List<Resource> res = resources.stream()
				.filter(r -> position.equals(r.getPosition()))
				.sorted(Comparator.comparing(Resource :: getCreatTime).reversed())
				.limit(limit)
				.collect(Collectors.toList());
		return res;
	}
}
