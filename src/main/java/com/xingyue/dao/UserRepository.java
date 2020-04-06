package com.xingyue.dao;

import com.xingyue.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    /**
     * 根据用户名称查寻密码
     *
     * @param username 用户名称
     * @return
     */
    User queryByUsername(String username);
}
