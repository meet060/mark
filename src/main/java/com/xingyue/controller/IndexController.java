package com.xingyue.controller;

import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.xingyue.utils.PageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

import com.xingyue.pojo.Resource;
import com.xingyue.service.ResourceService;
import com.xingyue.utils.MvcUtils;

import io.swagger.annotations.ApiOperation;

@Controller
@RequestMapping("/")
public class IndexController {

	@Autowired
	private ResourceService resourceService;

	@GetMapping("/")
	public String login() {
		return "login";
	}

	@GetMapping("/index")
	public String index() {
		return "index";
	}

	@RequestMapping(value = "/test",method = RequestMethod.GET)
	public ResponseEntity<?> test() {
		List<String> list = Arrays.asList("111", "222", "3333", "4444");
		return MvcUtils.ok(list);
	}

	/**
	 * 上传图片
	 * 
	 * @param file
	 * @param request
	 * @param response
	 * @return
	 */
	@ApiOperation("上传图片")
	@RequestMapping(value = "/create/file", method = RequestMethod.POST)
	public ResponseEntity<?> upload(Resource resource, MultipartFile file, HttpServletRequest request, HttpServletResponse response) {
		try {
			Resource createFile = resourceService.createFile(file, resource);
			return MvcUtils.ok(createFile);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return MvcUtils.notFound();
	}


	/**
	 * 根据模块查询资源
	 *
	 * @param pageUtils
	 * @return
	 */
	@ApiOperation("根据模块查询资源")
	@RequestMapping(value = "/api/resource/queryResourcesByModule", method = RequestMethod.POST)
	public ResponseEntity<?> queryResourcesByModule(@RequestBody PageUtils<Resource> pageUtils) {
		Map<String,Object> map = resourceService.queryResourcesByModule(pageUtils);
		return MvcUtils.ok(map);
	}

}
