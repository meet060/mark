package com.xingyue;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@ConfigurationProperties(prefix="package")
@PropertySource(value="classpath:application.yml")
public class ServerSettings {
	
	@Value("${storage}")
	public String storagePath;

	public String getStoragePath() {
		return storagePath;
	}

	public void setStoragePath(String storagePath) {
		this.storagePath = storagePath;
	}

	public ServerSettings() {
		super();
	}
	
}
