package com.xingyue.controller;


import com.xingyue.pojo.User;
import com.xingyue.service.UserService;
import com.xingyue.utils.MvcUtils;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

/**
 * @author hgl
 * 功能：用户接口
 * 时间：2020年4月6日12:20:54
 */
@RestController
@RequestMapping(value = "/api/user")
@EnableSwagger2
public class UserContreller {
    @Autowired
    private UserService userService;

    @ApiOperation("查询用户")
    @RequestMapping(value = "queryTheUser", method = RequestMethod.POST)
    public Map queryTheUser() {
        List<User> users = userService.queryTheUser();
        return MvcUtils.returnForegroundParameter(200,"ok",users);
    }

    @ApiOperation("用户登录")
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Map login(User user, HttpServletRequest request) {
        Boolean login = userService.login(user,request);
        return MvcUtils.returnForegroundParameter(200,login.toString());
    }

    @ApiOperation("添加用户")
    @RequestMapping(value = "/addUsers", method = RequestMethod.POST)
    public Map addUsers(User user) {
        Boolean b = userService.addUsers(user);
        return MvcUtils.returnForegroundParameter(200,b.toString());
    }

    @ApiOperation("修改用户")
    @RequestMapping(value = "/ModifyTheUser", method = RequestMethod.POST)
    public Boolean ModifyTheUser(@RequestBody User user) {
        Boolean b = userService.ModifyTheUser(user);
        return b;
    }

    @ApiOperation("删除用户")
    @RequestMapping(value = "/deleteUser", method = RequestMethod.POST)
    public Boolean deleteUser(@RequestBody User user) {
        Boolean b = userService.deleteUser(user);
        return b;
    }

    /**
     * 登出用户
     *
     * @return
     */
    @ApiOperation("登出用户")
    @RequestMapping(value = "/logoutUser", method = RequestMethod.POST)
    public String logoutUser(HttpServletRequest request){
        Boolean aBoolean = userService.logoutUser(request);
        return true == aBoolean?"yes":"no";
    }

}
