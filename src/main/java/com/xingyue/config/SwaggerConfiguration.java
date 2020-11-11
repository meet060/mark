package com.xingyue.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author hgl
 * 功能 ：配置 Swagger2 RESTful APIs
 * 时间：2020年4月6日12:34:00
 */
@Configuration
@EnableSwagger2
@ComponentScan(basePackages = {"com.xingyue.controller"})
public class SwaggerConfiguration {
    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                //生产影藏Swagger接口 true开放
                .enable(false)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.xingyue.controller"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("《星跃工作室》package-web 项目接口RESTful APIs")
                .description("package-web 项目接口")
                .termsOfServiceUrl("")
                .version("1.0")
                .build();
    }
}
