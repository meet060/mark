package com.xingyue.pojo;

import com.xingyue.utils.CustomizedPropertyConfigurer;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @author: hanguoli
 * @Date: 2020年4月21日08:07:00
 * @Description : 联系我们
 */
@Entity
@Data
public class ContactUs implements Serializable {
    private static final long serialVersionUID = 1351811431524208698L;

    /**
     * 联系我们id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;
    /**
     * 公司中文名称
     */
    @Column
    private String companyEn;
    /**
     * 公司英文名称
     */
    @Column
    private String companyCn;
    /**
     * 公司地址中文
     */
    @Column
    private String addressEn;
    /**
     * 公司地址英文
     */
    @Column
    private String addressCn;
    /**
     * 公司电话中文
     */
    @Column
    private String phoneCn;
    /**
     * 公司电话英文
     */
    @Column
    private String phoneEn;
    /**
     * 手机中文
     */
    @Column
    private String cellPhoneCn;
    /**
     * 手机英文
     */
    @Column
    private String cellPhoneEn;
    /**
     * 公司传真中文
     */
    @Column
    private String faxCn;
    /**
     * 公司传真英文
     */
    @Column
    private String faxEn;
    /**
     * 公司邮箱中文
     */
    @Column
    private String mailboxCn;
    /**
     * 公司邮箱英文
     */
    @Column
    private String mailboxEn;
    /**
     * 联系人中文
     */
    @Column
    private String nameCn;
    /**
     * 联系人英文
     */
    @Column
    private String nameEn;

    /**
     * 中文微信
     */
    @Column
    private String urlCn;
    /**
     * 英文微信
     */
    @Column
    private String urlEn;
    /**
     * 中文公众号
     */
    @Column
    private String weChatUrlCn;
    /**
     * 英文公众号
     */
    @Column
    private String weChatUrlEn;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCompanyEn() {
        return companyEn;
    }

    public void setCompanyEn(String companyEn) {
        this.companyEn = companyEn;
    }

    public String getCompanyCn() {
        return companyCn;
    }

    public void setCompanyCn(String companyCn) {
        this.companyCn = companyCn;
    }

    public String getAddressEn() {
        return addressEn;
    }

    public void setAddressEn(String addressEn) {
        this.addressEn = addressEn;
    }

    public String getAddressCn() {
        return addressCn;
    }

    public void setAddressCn(String addressCn) {
        this.addressCn = addressCn;
    }

    public String getPhoneCn() {
        return phoneCn;
    }

    public void setPhoneCn(String phoneCn) {
        this.phoneCn = phoneCn;
    }

    public String getPhoneEn() {
        return phoneEn;
    }

    public void setPhoneEn(String phoneEn) {
        this.phoneEn = phoneEn;
    }

    public String getCellPhoneCn() {
        return cellPhoneCn;
    }

    public void setCellPhoneCn(String cellPhoneCn) {
        this.cellPhoneCn = cellPhoneCn;
    }

    public String getCellPhoneEn() {
        return cellPhoneEn;
    }

    public void setCellPhoneEn(String cellPhoneEn) {
        this.cellPhoneEn = cellPhoneEn;
    }

    public String getFaxCn() {
        return faxCn;
    }

    public void setFaxCn(String faxCn) {
        this.faxCn = faxCn;
    }

    public String getFaxEn() {
        return faxEn;
    }

    public void setFaxEn(String faxEn) {
        this.faxEn = faxEn;
    }

    public String getMailboxCn() {
        return mailboxCn;
    }

    public void setMailboxCn(String mailboxCn) {
        this.mailboxCn = mailboxCn;
    }

    public String getMailboxEn() {
        return mailboxEn;
    }

    public void setMailboxEn(String mailboxEn) {
        this.mailboxEn = mailboxEn;
    }

    public String getNameCn() {
        return nameCn;
    }

    public void setNameCn(String nameCn) {
        this.nameCn = nameCn;
    }

    public String getNameEn() {
        return nameEn;
    }

    public void setNameEn(String nameEn) {
        this.nameEn = nameEn;
    }

    public String getUrlCn() {
        return urlCn;
    }

    public void setUrlCn(String urlCn) {
        this.urlCn = urlCn;
    }

    public String getUrlEn() {
        return urlEn;
    }

    public void setUrlEn(String urlEn) {
        this.urlEn = urlEn;
    }

    public String getWeChatUrlCn() {
        return weChatUrlCn;
    }
    public String getWeChatUrlCn1() {
        return weChatUrlCn;
    }

    public void setWeChatUrlCn(String weChatUrlCn) {
        this.weChatUrlCn = weChatUrlCn;
    }

    public String getWeChatUrlEn() {
        return weChatUrlEn;
    }

    public void setWeChatUrlEn(String weChatUrlEn) {
        this.weChatUrlEn = weChatUrlEn;
    }
}
