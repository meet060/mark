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

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getMailbox() {
        return mailbox;
    }

    public void setMailbox(String mailbox) {
        this.mailbox = mailbox;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }

    public Date getModificationTime() {
        return modificationTime;
    }

    public void setModificationTime(Date modificationTime) {
        this.modificationTime = modificationTime;
    }

    public AfterSale() {
        this.name = "";
        this.phone = "";
        this.mailbox = "";
        this.address = "";
        this.content = "";
        this.status = 1;
        this.creationTime = new Date();
        this.modificationTime = null;
    }
}
