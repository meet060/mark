package com.xingyue.controller;

import java.util.List;

import com.xingyue.pojo.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.xingyue.pojo.ContactUs;
import com.xingyue.service.ContactUsService;
import com.xingyue.utils.MvcUtils;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author: hanguoli
 * @Date: 2020/4/21 8:21
 * @Description : 联系我们接口
 */
@RestController
@Api(tags = "联系我们接口")
@RequestMapping(value = "/api/contactUs")
public class ContactUsController {

    @Autowired
    private ContactUsService contactUsService;

    /**
     * 查询联系我们信息
     *
     * @return
     */
    @ApiOperation("查询联系我们信息")
    @RequestMapping(value = "/enquiriesContactUsForInformation", method = RequestMethod.POST)
    public ResponseEntity<?> enquiriesContactUsForInformation() {
        List<ContactUs> contactUsList = contactUsService.enquiriesContactUsForInformation();
        return MvcUtils.ok(contactUsList);
    }

    /**
     * 添加联系我们信息
     *
     * @return
     */
    @ApiOperation("添加联系我们信息")
    @RequestMapping(value = "/addContactUsForInformation", method = RequestMethod.POST)
    public ResponseEntity<?> addContactUsForInformation(@RequestBody ContactUs contactUs) {
        Boolean aBoolean = contactUsService.addContactUsForInformation(contactUs);
        return MvcUtils.ok(aBoolean);
    }

    /**
     * 修改联系我们信息
     *
     * @param contactUs
     * @return
     */
    @ApiOperation("修改联系我们信息")
    @PostMapping(value = "/modifyContactUsForInformation")
    public ResponseEntity<?> modifyContactUsForInformation(ContactUs contactUs) {
        Boolean aBoolean = contactUsService.modifyContactUsForInformation(contactUs);
        return MvcUtils.ok(aBoolean);
    }

    /**
     * 修改联系我们手机端电话
     *
     * @param contactUs
     * @return
     */
    @ApiOperation("修改联系我们手机端电话")
    @PostMapping(value = "/modifyContactUsOnMobilePhone")
    public ResponseEntity<?> modifyContactUsOnMobilePhone(ContactUs contactUs) {
        Boolean aBoolean = contactUsService.modifyContactUsOnMobilePhone(contactUs);
        return MvcUtils.ok(aBoolean);
    }

    /**
     * 删除联系我们信息
     *
     * @return
     */
    @ApiOperation("删除联系我们信息")
    @RequestMapping(value = "/deleteContactUsForInformation", method = RequestMethod.POST)
    public ResponseEntity<?> deleteContactUsForInformation(@RequestBody ContactUs contactUs) {
        Boolean aBoolean = contactUsService.deleteContactUsForInformation(contactUs);
        return MvcUtils.ok(aBoolean);
    }

    /**
     * 上传图片
     *
     * @param file
     * @return
     */
    @ApiOperation("上传图片")
    @RequestMapping(value = "/create/file", method = RequestMethod.POST)
    public ResponseEntity<String> upload(MultipartFile file) {
        String createFile = contactUsService.createFile(file);
        return MvcUtils.ok(createFile);
    }


}
