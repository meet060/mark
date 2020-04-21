package com.xingyue.service.impl;

import com.xingyue.dao.ContactUsRepository;
import com.xingyue.pojo.ContactUs;
import com.xingyue.service.ContactUsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author: hanguoli
 * @Date: 2020/4/21 8:19
 * @Description : 联系我们业务层
 */
@Service
public class ContactUsServiceImpl implements ContactUsService {
    final Logger log = LoggerFactory.getLogger(ContactUsServiceImpl.class);

    @Autowired
    private ContactUsRepository contactUsRepository;

    /**
     * 查询联系我们信息
     *
     * @return
     */
    @Override
    public List<ContactUs> enquiriesContactUsForInformation() {
        List<ContactUs> all = contactUsRepository.findAll();
        return all;
    }

    /**
     * 添加联系我们信息
     *
     * @return
     */
    @Override
    public Boolean addContactUsForInformation(ContactUs contactUs) {
        ContactUs save = contactUsRepository.save(contactUs);
        return null == save ? false : true;
    }

    /**
     * 修改联系我们信息
     *
     * @return
     */
    @Override
    public Boolean modifyContactUsForInformation(ContactUs contactUs) {
        ContactUs save = contactUsRepository.save(contactUs);
        return null == save ? false : true;
    }

    /**
     * 删除联系我们信息
     *
     * @return
     */
    @Override
    public Boolean deleteContactUsForInformation(ContactUs contactUs) {
        contactUsRepository.delete(contactUs);
        return true;
    }
}
