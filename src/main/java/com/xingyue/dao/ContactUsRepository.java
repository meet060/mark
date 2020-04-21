package com.xingyue.dao;

import com.xingyue.pojo.ContactUs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author: hanguoli
 * @Date: 2020年4月21日08:15:08
 * @Description : 联手下我们dao
 */
@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs, Integer> {
}
