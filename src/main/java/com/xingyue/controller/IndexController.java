package com.xingyue.controller;

import java.io.IOException;
import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.xingyue.pojo.Resource;
import com.xingyue.service.ResourceService;
import com.xingyue.utils.MvcUtils;

import io.swagger.annotations.ApiOperation;

/**
 * @author
 * 资源接口
 */
@Controller
@RequestMapping("/api/resource")
@Api(tags = "资源接口")
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
	@ApiOperation("上传图片")
	@RequestMapping(value = "/create/file", method = RequestMethod.POST)
	public ResponseEntity<?> upload(Resource resource, MultipartFile file, HttpServletRequest request,
			HttpServletResponse response) {
		try {
			Resource createFile = resourceService.createFile(file, resource);
			return MvcUtils.ok(createFile);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return MvcUtils.notFound();
	}

	/**
	 * 修改图片
	 *
	 * @param id
	 * @param file
	 * @return
	 * @throws IOException
	 * @throws IllegalStateException
	 */
	@PostMapping(value = "/update/img/{id}", headers = "content-type=multipart/*")
	public ResponseEntity<?> updateImg(@PathVariable("id") Integer id, @RequestParam MultipartFile file)
			throws IllegalStateException, IOException {
		Boolean flag = resourceService.updateFileById(file, id);
		return MvcUtils.ok(flag);
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
	public ResponseEntity<?> queryResourcesByModule(@RequestParam("module") String module,
			@RequestParam(name = "page", defaultValue = "1") int page,
			@RequestParam(name = "size", defaultValue = "10") int size) {
		Map<String, Object> map = resourceService.queryResourcesByModule(module, page, size);
		return MvcUtils.ok(map);
	}

    /**
     *查询首页资源
     *
     * @param modeule
     * @return
     */
	@ApiOperation(value = "查询首页资源")
    @RequestMapping(value = "/queryIndexResources", method = RequestMethod.POST)
    public ResponseEntity<?> queryResourcesByModule2() {
        Map<String, Object> map = resourceService.queryResourcesByModule();
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
		Map<String, Object> map = resourceService.getTheNewsCenterData(page, size);
		return MvcUtils.ok(map);
	}

	/**
	 * 添加新闻中心数据
	 *
	 * @return
	 */
	@ApiOperation(value = "添加新闻中心数据")
	@RequestMapping(value = "/save/news", method = RequestMethod.POST)
	public ResponseEntity<?> saveNews(
			@RequestParam(value="file", required = false) MultipartFile file,
			@RequestParam(value="title", required = false)String title,
			@RequestParam(value="description", required = false)String description,
			@RequestParam(value="creatTime", required = false) Date creatTime) {
		Resource resource = new Resource();
		resource.setCreatTime(creatTime);
		resource.setFile(file);
		resource.setTitle(title);
		resource.setDescription(description);
		resource.setModule("pressCenter");
		resource.setPosition("news");
		Boolean flag = resourceService.saveNews(resource);
		return MvcUtils.ok(flag);
	}
	
	/**
	 * 获取联系我们信息
	 *
	 * @return
	 */
	@ApiOperation(value = "获取联系我们信息")
	@RequestMapping(value = "/getTheContactInformation", method = RequestMethod.POST)
	public ResponseEntity<?> getTheContactInformation() {
		Map<String, Object> map = resourceService.getTheContactInformation();
		return MvcUtils.ok(map);
	}

}
