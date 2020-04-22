package com.xingyue.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

	@Value("${package.storage}")
	private String storagePath;

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		// /home/file/**为前端URL访问路径 后面 file:xxxx为本地磁盘映射
		registry.addResourceHandler(storagePath + "**").addResourceLocations("file:" + storagePath);
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		// 允许跨域访问的路径，全允许则设为 *
		registry.addMapping("/**")
				// 允许跨域访问的源
                .allowedOrigins("*")
				// 允许请求方法
                .allowedMethods("POST", "GET", "PUT", "OPTIONS", "DELETE")
				// 预检间隔时间
                .maxAge(168000)
				// 是否发送cookie
                .allowCredentials(true);
	}
}