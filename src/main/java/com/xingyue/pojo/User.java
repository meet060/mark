package com.xingyue.pojo;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @author hgl
 * 功能：用户实体类
 * 时间：2020年4月6日10:15:24
 */
@Data
@Entity
public class User implements Serializable {

    private static final long serialVersionUID = -3472580922493502746L;

    /**
     * 用户id
     */
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column
    private int id;
    /**
     * 用户名称
     */
    @Column
    private String username;
    /**
     * 用户密码
     */
    @Column
    private String password;

}
