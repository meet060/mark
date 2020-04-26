package com.xingyue.utils;

import java.util.Properties;

/**
 * @author: hanguoli
 * @Date: 2020/4/26 19:42
 * @Description : 读取yml配置文件工具类
 */
public class CustomizedPropertyConfigurer {
 
	private static Properties ymlProperties = new Properties();
 
	public CustomizedPropertyConfigurer(Properties properties){
		ymlProperties = properties;
	}
 
	public static Object getContextProperty(String key) {
		return ymlProperties.getProperty(key);
	}
	
	public static Object setContextProperty(String key,Object value) {
		return ymlProperties.setProperty(key, value.toString());
	}
 
}