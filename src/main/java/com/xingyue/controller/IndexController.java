package com.xingyue.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/package")
public class IndexController {

	@GetMapping("/index")
	public String index() {
		return "index/index";
	}
}
