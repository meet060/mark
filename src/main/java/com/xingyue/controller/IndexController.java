package com.xingyue.controller;

import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
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

	@RequestMapping("/test")
	public ResponseEntity<?> test() {
		List<String> list = Arrays.asList("111", "222", "3333", "4444");
		return MvcUtils.ok(list);
	}

	/**
	 * 上传图片
	 * 
	 * @param file
	 * @param session
	 * @param request
	 * @param response
	 * @return
	 * @throws Exceptionn
	 */
	@ApiOperation("上传图片")
	@RequestMapping(value = "/create/file", method = RequestMethod.POST)
	public ResponseEntity<?> upload(MultipartFile file, HttpServletRequest request, HttpServletResponse response) {
		try {
			Resource createFile = resourceService.createFile(file);
			return MvcUtils.ok(createFile);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return MvcUtils.notFound();
	}

}
