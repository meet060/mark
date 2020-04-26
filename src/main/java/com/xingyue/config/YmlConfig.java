package com.xingyue.config;
 
import com.xingyue.utils.CustomizedPropertyConfigurer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.YamlPropertiesFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
 
import java.util.Properties;

/**
 * @author: hanguoli
 * @Date: 2020/4/26 19:42
 * @Description : 读取yml配置文件
 */
@Configuration
public class YmlConfig {
    @Autowired
    private Environment env;
 
    @Bean
    public CustomizedPropertyConfigurer ymlConfigurer() {
        //1:加载配置文件
        Resource app = new ClassPathResource("application.yml");
//        Resource appEnv = new ClassPathResource("application-"+env.getActiveProfiles()[0]+".yml");
//        Resource oss = new ClassPathResource("oss.yml");
//        Resource message = new ClassPathResource("message.yml");
        YamlPropertiesFactoryBean yamlPropertiesFactoryBean = new YamlPropertiesFactoryBean();
        // 2:将加载的配置文件交给 YamlPropertiesFactoryBean
//        yamlPropertiesFactoryBean.setResources(app, oss, message, appEnv);
        yamlPropertiesFactoryBean.setResources(app);
        // 3：将yml转换成 key：val
        Properties properties = yamlPropertiesFactoryBean.getObject();
        // 4: 将Properties 通过构造方法交给我们写的工具类
        CustomizedPropertyConfigurer ymlConfigurer = new CustomizedPropertyConfigurer(properties);
        return ymlConfigurer;
    }
}