package com.xingyue.service.impl;

import com.xingyue.dao.UserRepository;
import com.xingyue.pojo.User;
import com.xingyue.service.UserService;
import com.xingyue.utils.Md5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author hgl 功能：用户业务层 时间：2020年4月6日11:59:35
 */
@Transactional(rollbackFor = Exception.class)
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	/**
	 * 查询用户
	 *
	 * @return
	 */
	@Override
	public List<User> queryTheUser() {
		List<User> users = userRepository.findAll();
		return users;
	}

	/**
	 * 用户登录
	 *
	 * @param user
	 * @return
	 */
	@Override
	public Boolean login(User user, HttpServletRequest request) {
		// 根据用户名称查询密码
		User u = userRepository.queryByUsername(user.getUsername());
		// 用户名称为空
		if (StringUtils.isEmpty(u)) {
			System.out.println("账户或者密码错误");
			return false;
		}
		// 用户输入密码
		String enterPassword = Md5Util.getsTheMd5String(user.getPassword());
		// 存储密码
		String storePassword = u.getPassword();
		// 判断密码是否正确
		if (storePassword.equals(enterPassword)) {
			// 写入session
			request.getSession().setAttribute("xueyue", u.getUsername() + storePassword);
			// 设置过期时间秒
			request.getSession().setMaxInactiveInterval(10);
			return true;
		} else {
			System.out.println("账户或者密码错误");
			return false;
		}
	}

	/**
	 * 添加用户
	 *
	 * @param user
	 * @return
	 */
	@Override
	public Boolean addUsers(User user) {
		User save = userRepository.save(user);
		if (StringUtils.isEmpty(save)) {
			return false;
		}
		return true;
	}

	/**
	 * 修改用户
	 *
	 * @param user
	 * @return
	 */
	@Override
	public Boolean ModifyTheUser(User user) {
		User save = userRepository.save(user);
		if (StringUtils.isEmpty(save)) {
			return false;
		}
		return true;
	}

	/**
	 * 删除用户
	 *
	 * @param user
	 * @return
	 */
	@Override
	public Boolean deleteUser(User user) {
		userRepository.deleteById(user.getId());
		return true;
	}

	/**
	 * 登出用户
	 *
	 * @return
	 */
	@Override
	public Boolean logoutUser(HttpServletRequest request) {
		request.getSession().removeAttribute("xinyue");
		return true;
	}
}
