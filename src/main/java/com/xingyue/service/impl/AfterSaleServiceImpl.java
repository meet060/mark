package com.xingyue.service.impl;

import com.xingyue.dao.AfterSaleRepository;
import com.xingyue.pojo.AfterSale;
import com.xingyue.service.AfterSaleService;
import com.xingyue.utils.PageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.JpaSort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author hgl
 * @date 2020年4月15日20:33:02
 * 功能 售后业务层
 */
@Transactional(rollbackFor = Exception.class)
@Service
public class AfterSaleServiceImpl implements AfterSaleService {


    @Autowired
    private AfterSaleRepository afterSaleRepository;

    /**
     * 在线咨询查询列表
     *
     * @param pageUtils
     * @return
     */
    @Override
    public Map<String, Object> queryAfterSale(PageUtils<AfterSale> pageUtils) {
        Map<String, Object> map = new HashMap<>(4);
        Sort sort = JpaSort.unsafe(Sort.Direction.ASC, "creationTime");
        Pageable pageable = PageRequest.of(pageUtils.getPage(), pageUtils.getSize(), sort);
        AfterSale object = pageUtils.getObject();
        Example<AfterSale> example = Example.of(object);
        Page<AfterSale> afterSales = afterSaleRepository.findAll(example,pageable);
        //有多少页
        int totalPages = afterSales.getTotalPages();
        //总条数
        long totalElements = afterSales.getTotalElements();
        //返回数据
        map.put("content", afterSales.getContent());
        map.put("totalPages", totalPages);
        map.put("totalElements", totalElements);
        return map;
    }

    /**
     * 在线咨询添加
     *
     * @param afterSale
     * @return
     */
    @Override
    public Boolean addAfterSale(AfterSale afterSale) {
        AfterSale save = afterSaleRepository.save(afterSale);
        return StringUtils.isEmpty(save);
    }

    /**
     * 在线咨询修改
     *
     * @param afterSale
     * @return
     */
    @Override
    public Boolean modificationAfterSale(AfterSale afterSale) {
        AfterSale save = afterSaleRepository.save(afterSale);
        return StringUtils.isEmpty(save);
    }

    /**
     * 在线咨询删除
     *
     * @param afterSale
     * @return
     */
    @Override
    public Boolean deleteAfterSale(AfterSale afterSale) {
        afterSaleRepository.delete(afterSale);
        return true;
    }

}
