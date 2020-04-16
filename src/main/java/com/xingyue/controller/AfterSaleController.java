package com.xingyue.controller;

import com.xingyue.pojo.AfterSale;
import com.xingyue.service.AfterSaleService;
import com.xingyue.utils.MvcUtils;
import com.xingyue.utils.PageUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * @author hgl
 * @date 2020年4月15日20:36:12
 * 功能 在线咨询接口
 */
@RestController
@RequestMapping(value = "/api/afterSale")
@Api(tags = "在线咨询接口")
public class AfterSaleController {

    final Logger log = LoggerFactory.getLogger(AfterSaleController.class);

    @Autowired
    private AfterSaleService afterSaleService;

    /**
     * 在线咨询查询列表
     *
     * @param pageUtils
     * @return
     */
    @ApiOperation(value = "在线咨询查询列表")
    @RequestMapping(value = "/queryAfterSale", method = RequestMethod.POST)
    public ResponseEntity<Map<String, Object>> queryAfterSale(@RequestBody PageUtils<AfterSale> pageUtils) {
        Map<String, Object> map = afterSaleService.queryAfterSale(pageUtils);
        return MvcUtils.ok(map);
    }

    /**
     * 在线咨询添加
     *
     * @param afterSale
     * @return
     */
    @ApiOperation("在线咨询添加")
    @RequestMapping(value = "/addAfterSale",method = RequestMethod.POST)
    public ResponseEntity<Boolean> addAfterSale(@RequestBody AfterSale afterSale) {
        afterSaleService.addAfterSale(afterSale);
        return MvcUtils.ok(true);
    }

    /**
     * 在线咨询修改
     *
     * @param afterSale
     * @return
     */
    @ApiOperation("在线咨询修改")
    @RequestMapping(value = "/modificationAfterSale", method = RequestMethod.POST)
    public ResponseEntity<Boolean> modificationAfterSale(@RequestBody AfterSale afterSale) {
        afterSaleService.addAfterSale(afterSale);
        return MvcUtils.ok(true);
    }

    /**
     * 在线咨询删除
     *
     * @param afterSale
     * @return
     */
    @ApiOperation("在线咨询删除")
    @RequestMapping(value = "/deleteAfterSale", method = RequestMethod.POST)
    public ResponseEntity<Boolean> deleteAfterSale(@RequestBody AfterSale afterSale) {
        afterSaleService.addAfterSale(afterSale);
        return MvcUtils.ok(true);
    }
}
