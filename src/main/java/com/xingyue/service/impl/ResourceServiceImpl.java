package com.xingyue.service.impl;

import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
	public Resource createFile(MultipartFile file) throws Exception {
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
				resource.setDescription("测试");
				resource.setModule("测试模块");
				return resourceRepository.save(resource);
			}
		}
		return null;
	}

}
