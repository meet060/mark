package com.xingyue.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xingyue.pojo.Resource;

public interface ResourceRepository extends JpaRepository<Resource, Integer> {

}
