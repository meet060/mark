package com.xingyue.controller;

import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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

    @RequestMapping(value = "/test", method = RequestMethod.GET)
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
    @ApiOperation(value = "上传图片")
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
     * @param module
     * @param page
     * @param size
     * @return
     */
    @ApiOperation(value = "根据模块查询资源")
    @GetMapping(value = "/queryResourcesByModule")
    public ResponseEntity<?> queryResourcesByModule(
            @RequestParam("module") String module,
            @RequestParam(name = "page", defaultValue = "1") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {
        Map<String, Object> map = resourceService.queryResourcesByModule(module, page, size);
        return MvcUtils.ok(map);
    }

    /**
     * 根据模块查询资源
     *
     * @param resource
     * @return
     */
    @ApiOperation(value = "根据模块查询资源")
    @GetMapping(value = "/queryResourcesByModule2")
    public ResponseEntity<?> queryResourcesByModule2(Resource resource) {
        Map<String, Object> map = resourceService.queryResourcesByModule(resource);
        return MvcUtils.ok(map);
    }

    /**
     * 获取关于中润信息
     *
     * @return
     */
    @ApiOperation(value = "获取关于中润信息")
    @RequestMapping(value = "/obtainInformationAboutZhongrun", method = RequestMethod.POST)
    public ResponseEntity<?> obtainInformationAboutZhongrun() {
        Map<String, Object> map = resourceService.obtainInformationAboutZhongrun();
        return MvcUtils.ok(map);
    }

    /**
     * 查询行业认可图片
     *
     * @return
     */
    @ApiOperation("查询行业认可图片")
    @RequestMapping(value = "/checkIndustryApprovedPictures", method = RequestMethod.POST)
    public ResponseEntity<?> checkIndustryApprovedPictures() {
        Map<String, Object> map = resourceService.checkIndustryApprovedPictures();
        return MvcUtils.ok(map);
    }

    /**
     * 产品中心数据查询
     *
     * @return
     */
    @ApiOperation(value = "产品中心数据查询")
    @RequestMapping(value = "/productCenterDataQuery", method = RequestMethod.POST)
    public ResponseEntity<?> productCenterDataQuery() {
        Map<String, Object> map = resourceService.productCenterDataQuery();
        return MvcUtils.ok(map);
    }

    /**
     * 查询技术支持信息
     *
     * @return
     */
    @ApiOperation(value = "查询技术支持信息")
    @RequestMapping(value = "/queryTechnicalSupportInformation", method = RequestMethod.POST)
    public ResponseEntity<?> queryTechnicalSupportInformation() {
        Map<String, Object> map = resourceService.queryTechnicalSupportInformation();
        return MvcUtils.ok(map);
    }

    /**
     * 获取新闻中心数据
     *
     * @return
     */
    @ApiOperation(value = "获取新闻中心数据")
    @RequestMapping(value = "/getTheNewsCenterData", method = RequestMethod.POST)
    public ResponseEntity<?> getTheNewsCenterData(@RequestParam(name = "page", defaultValue = "1") int page,
                                                  @RequestParam(name = "size", defaultValue = "10") int size) {
        Map<String, Object> map = resourceService.getTheNewsCenterData(page,size);
        return MvcUtils.ok(map);
    }

}
