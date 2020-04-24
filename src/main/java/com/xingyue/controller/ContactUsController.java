package com.xingyue.controller;

import com.xingyue.pojo.ContactUs;
import com.xingyue.service.ContactUsService;
import com.xingyue.utils.MvcUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
     * @return
     */
    @ApiOperation("修改联系我们信息")
    @RequestMapping(value = "/modifyContactUsForInformation", method = RequestMethod.POST)
    public ResponseEntity<?> modifyContactUsForInformation(@RequestBody ContactUs contactUs) {
        Boolean aBoolean = contactUsService.modifyContactUsForInformation(contactUs);
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

}
