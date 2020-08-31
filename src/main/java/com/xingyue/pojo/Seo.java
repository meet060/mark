package com.xingyue.pojo;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @author: hanguoli
 * @Date: 2020/8/16 17:18
 * @Description :
 */
@Data
@Entity
public class Seo implements Serializable {
    /**
     * 联系我们id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;
    /**
     * SEO中文标题
     */
    @Column
    private String titleCn;
    /**
     * SEO英文标题
     */
    @Column
    private String titleEn;
    /**
     * SEO中文关键字
     */
    @Column
    private String keywordsCn;
    /**
     * SEO英文关键字
     */
    @Column
    private String keywordsEn;
    /**
     * SEO中文描述
     */
    @Column
    private String descriptionCn;
    /**
     * SEO英文描述
     */
    @Column
    private String descriptionEn;

    public String getTitleCn() {
        return titleCn;
    }

    public void setTitleCn(String titleCn) {
        this.titleCn = titleCn;
    }

    public String getTitleEn() {
        return titleEn;
    }

    public void setTitleEn(String titleEn) {
        this.titleEn = titleEn;
    }

    public String getKeywordsCn() {
        return keywordsCn;
    }

    public void setKeywordsCn(String keywordsCn) {
        this.keywordsCn = keywordsCn;
    }

    public String getKeywordsEn() {
        return keywordsEn;
    }

    public void setKeywordsEn(String keywordsEn) {
        this.keywordsEn = keywordsEn;
    }

    public String getDescriptionCn() {
        return descriptionCn;
    }

    public void setDescriptionCn(String descriptionCn) {
        this.descriptionCn = descriptionCn;
    }

    public String getDescriptionEn() {
        return descriptionEn;
    }

    public void setDescriptionEn(String descriptionEn) {
        this.descriptionEn = descriptionEn;
    }
}
