package com.xingyue.service;

import com.xingyue.pojo.AfterSale;
import com.xingyue.utils.PageUtils;

import java.util.Map;

/**
 * @author hgl
 * @date 2020年4月15日21:15:38
 */
public interface AfterSaleService {

    /**
     * 在线咨询查询列表
     *
     * @param pageUtils
     * @return
     */
    Map<String, Object> queryAfterSale(PageUtils<AfterSale> pageUtils);

    /**
     * 在线咨询添加
     *
     * @param afterSale
     * @return
     */
    Boolean addAfterSale(AfterSale afterSale);

    /**
     * 在线咨询修改
     *
     * @param afterSale
     * @return
     */
    Boolean modificationAfterSale(AfterSale afterSale);

    /**
     * 在线咨询删除
     *
     * @param afterSale
     * @return
     */
    Boolean deleteAfterSale(AfterSale afterSale);
}
