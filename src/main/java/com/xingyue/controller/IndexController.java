package com.xingyue.controller;

import java.io.IOException;
import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.xingyue.utils.PageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.xingyue.pojo.Resource;
import com.xingyue.service.ResourceService;
import com.xingyue.utils.MvcUtils;

import io.swagger.annotations.ApiOperation;

@Controller
@RequestMapping("/api/resource")
public class IndexController {

	@Autowired
	private ResourceService resourceService;

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
	@ApiOperation(value = "根据模块查询资源")
	@GetMapping(value = "/queryResourcesByModule")
	public ResponseEntity<?> queryResourcesByModule(
			@RequestParam("module") String module,
			@RequestParam(name = "page", defaultValue ="1") int page,
			@RequestParam(name = "size", defaultValue = "10") int size) {
		Map<String,Object> map = resourceService.queryResourcesByModule(module, page, size);
		return MvcUtils.ok(map);
	}

	/**
	 * 根据模块查询资源
	 *
	 * @param pageUtils
	 * @return
	 */
	@ApiOperation(value = "根据模块查询资源")
	@GetMapping(value = "/queryResourcesByModule2")
	public ResponseEntity<?> queryResourcesByModule2(Resource resource) {
		Map<String,Object> map = resourceService.queryResourcesByModule(resource);
		return MvcUtils.ok(map);
	}
	
	/**
	 * 修改图片
	 * @param id
	 * @param file
	 * @return
	 * @throws IOException 
	 * @throws IllegalStateException 
	 */
	@PostMapping(value = "/update/img/{id}", headers = "content-type=multipart/*")
	public ResponseEntity<?> updateImg(@PathVariable("id") Integer id, @RequestParam MultipartFile file) 
			throws IllegalStateException, IOException {
		Boolean flag = resourceService.updateFileById(file, id);
		return MvcUtils.ok(flag);
	}
}
