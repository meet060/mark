package com.xingyue.pojo;

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
     * \公司地址中文
     */
    @Column
    private String addressEn;
    /**
     * 公司地址英文
     */
    @Column
    private String addressCn;
    /**
     * 公司电话
     */
    @Column
    private String phone;
    /**
     * 手机
     */
    @Column
    private String cellPhone;
    /**
     * 公司传真
     */
    @Column
    private String fax;
    /**
     * 公司邮箱
     */
    @Column
    private String mailbox;


}
