package com.xingyue.controller;

import com.xingyue.pojo.User;
import com.xingyue.service.UserService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author hgl 功能：用户接口 时间：2020年4月6日12:20:54
 */
@RestController
@RequestMapping(value = "/api/user")
@EnableSwagger2
public class UserContreller {

	@Autowired
	private UserService userService;

	@ApiOperation("查询用户")
	@RequestMapping(value = "queryTheUser", method = RequestMethod.POST)
	public List<User> queryTheUser() {
		List<User> users = userService.queryTheUser();
		return users;
	}

	@ApiOperation("用户登录")
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public Boolean login(@RequestBody User user, HttpServletRequest request) {
		Boolean login = userService.login(user, request);
		return login;
	}

	@ApiOperation("添加用户")
	@RequestMapping(value = "/addUsers", method = RequestMethod.POST)
	public Boolean addUsers(@RequestBody User user) {
		Boolean b = userService.addUsers(user);
		return b;
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
	public String logoutUser(HttpServletRequest request) {
		Boolean aBoolean = userService.logoutUser(request);
		return true == aBoolean ? "登出用户成功（写跳转页面）" : "登出用户失败";
	}

}
