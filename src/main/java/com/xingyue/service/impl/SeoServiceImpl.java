package com.xingyue.service.impl;

import com.xingyue.dao.SeoRepository;
import com.xingyue.pojo.Seo;
import com.xingyue.service.SeoService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author: hanguoli
 * @Date: 2020/8/16 17:35
 * @Description :
 */
@Service
public class SeoServiceImpl implements SeoService {

    @Autowired
    private SeoRepository seoRepository;

    /**
     * 查询SEO
     *
     * @return
     */
    @Override
    public List<Seo> findAll() {
        return seoRepository.findAll();
    }

    /**
     * 修改SEO
     *
     * @param seo
     * @return
     */
    @Override
    public boolean updateSeo(Seo seo) {
        Seo one = seoRepository.getOne(seo.getId());
        if(StringUtils.isNoneBlank(seo.getTitleCn())){
            one.setTitleCn(seo.getTitleCn());
        }
        if(StringUtils.isNoneBlank(seo.getTitleEn())){
            one.setTitleEn(seo.getTitleEn());
        }
        if(StringUtils.isNoneBlank(seo.getKeywordsCn())){
            one.setKeywordsCn(seo.getKeywordsCn());
        }
        if(StringUtils.isNoneBlank(seo.getKeywordsEn())){
            one.setKeywordsEn(seo.getKeywordsEn());
        }
        if(StringUtils.isNoneBlank(seo.getDescriptionCn())){
            one.setDescriptionCn(seo.getDescriptionCn());
        }
        if(StringUtils.isNoneBlank(seo.getDescriptionEn())){
            one.setDescriptionEn(seo.getDescriptionEn());
        }
        Seo save = seoRepository.save(one);
        return null != save ? true : false;
    }
}
