package com.xingyue.controller;

import java.io.File;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

import com.xingyue.utils.MvcUtils;

@Controller
@RequestMapping("/")
public class IndexController {

	@Value("${package.storage}")
	private String storagePath;

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

	@RequestMapping(value = "/savefile", method = RequestMethod.POST)
	public ResponseEntity<?> upload(MultipartFile file, HttpSession session, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		if (file.getSize() > 0) {
			// 判断文件夹是否存在,不存在则创建
			File f = new File(storagePath);
			if(!f.exists()){
				f.mkdirs();
			}
			String fileName = file.getOriginalFilename();
			if (fileName.endsWith("jpg") || fileName.endsWith("png") || fileName.endsWith("txt")) {
				File newFile = new File(storagePath, fileName);
				file.transferTo(newFile);
				return MvcUtils.ok(newFile.getPath());
			}
		}
		return MvcUtils.ok(false);
	}
}
