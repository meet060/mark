package com.xingyue.service.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
	 * @param resource
	 * @return
	 */
	@Override
	public List<Resource> queryResourcesByModule(Resource resource) {
		Sort sort =JpaSort.unsafe(Sort.Direction.ASC, "number");
		List<Resource> resources = resourceRepository.queryByModule(resource.getModule(),sort);
		return resources;
	}

}
