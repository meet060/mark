package com.xingyue.service;

import com.xingyue.pojo.Seo;

import java.util.List;

/**
 * @author: hanguoli
 * @Date: 2020/8/16 17:25
 * @Description :
 */
public interface SeoService {
    /**
     * 查询SEO
     *
     * @return
     */
    List<Seo> findAll();

    /**
     * 修改SEO
     *
     * @return
     */
    boolean updateSeo(Seo seo);
}
