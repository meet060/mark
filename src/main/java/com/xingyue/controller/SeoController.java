package com.xingyue.controller;

import com.xingyue.pojo.Seo;
import com.xingyue.service.SeoService;
import com.xingyue.utils.MvcUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author: hanguoli
 * @Date: 2020/8/16 17:25
 * @Description : SEO
 */
@RestController
@Api(tags = "SEO")
@RequestMapping(value = "/api/seo")
public class SeoController {

    @Autowired
    private SeoService seoService;

    /**
     * 查询SEO信息
     *
     * @return
     */
    @ApiOperation("查询SEO信息")
    @RequestMapping(value = "/findAll", method = RequestMethod.POST)
    public ResponseEntity<List<Seo>> findAll() {
        return MvcUtils.ok(seoService.findAll());
    }

    /**
     * 修改SEO信息
     *
     * @return
     */
    @ApiOperation("修改SEO信息")
    @RequestMapping(value = "/updateSeo", method = RequestMethod.POST)
    public ResponseEntity<Boolean> updateSeo(Seo seo) {
        return MvcUtils.ok(seoService.updateSeo(seo));
    }
}
