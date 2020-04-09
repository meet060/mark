package com.xingyue.service;

import org.springframework.web.multipart.MultipartFile;

import com.xingyue.pojo.Resource;

public interface ResourceService {

	Resource createFile(MultipartFile file, Resource resource) throws Exception;

}
