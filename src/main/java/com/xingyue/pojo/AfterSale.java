package com.xingyue.pojo;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * @author hgl
 * 时间：2020年4月15日20:25:51
 * 功能：在线咨询实体类
 */
@Entity
@Data
public class AfterSale implements Serializable {

    private static final long serialVersionUID = 578605264202422295L;
    /**
     * 售后id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;
    /**
     * 姓名
     */
    @Column
    private String name;
    /**
     * 电话
     */
    @Column
    private String phone;
    /**
     * 邮箱
     */
    @Column
    private String mailbox;
    /**
     * 地址
     */
    @Column
    private String address;
    /**
     * 内容
     */
    @Column
    private String content;
    /**
     * 状态
     */
    @Column
    private Integer status;
    /**
     * 创建时间
     */
    @Column
    private Date creationTime;
    /**
     * 修改时间
     */
    @Column
    private Date modificationTime;
}
