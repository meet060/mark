package com.xingyue.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 路径映射配置
 */
@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {

	/*
	 * @Value("${config.bpfeaturedfirstmanagement.advert}") private String advert;
	 * 
	 * @Value("${config.imgNewUrl}") private String imgNewUrl;
	 * 
	 * @Value("${config.ftp_path}") private String ftp_path;
	 */
	
    @Value("${package.storage}")
    private String storagePath;

	/**
	 * 图片视频路径映射配置
	 * 
	 * @param registry
	 */
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		// registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
		// 最新动态图片路径配置
//		registry.addResourceHandler(imgNewUrl + "**").addResourceLocations("file:" + imgNewUrl);
		// 知识管理视频图片
//		registry.addResourceHandler(imgNewUrl + "image/**").addResourceLocations("file:" + imgNewUrl + "image/");
//		registry.addResourceHandler("/opt/afin/ueditor/image/**").addResourceLocations("file:/opt/afin/ueditor/image/");
		// FTP文件路径配置
//		registry.addResourceHandler(ftp_path + "**").addResourceLocations("file:" + ftp_path);
		// 推荐位图片路径配置
		registry.addResourceHandler(storagePath + "/**").addResourceLocations("file: /" + storagePath);
		super.addResourceHandlers(registry);
	}
}