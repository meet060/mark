package com.xingyue.service;

import com.xingyue.pojo.User;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * 用户接口
 */
public interface UserService {

    /**
     * 查询用户
     *
     * @return
     */
    List<User> queryTheUser();

    /**
     * 用户登录
     *
     * @param user
     * @return
     */
    Boolean login(User user, HttpServletRequest request);

    /**
     * 添加用户
     *
     * @param user
     * @return
     */
    Boolean addUsers(User user);

    /**
     * 修改用户
     *
     * @param user
     * @return
     */
    Boolean ModifyTheUser(User user);

    /**
     * 删除用户
     *
     * @param user
     * @return
     */
    Boolean deleteUser(User user);

    /**
     * 登出用户
     *
     * @return
     */
    Boolean logoutUser(HttpServletRequest request);

    /**
     * 查询用户
     *
     * @param request
     * @return
     */
    String queryUsername(HttpServletRequest request);

}
