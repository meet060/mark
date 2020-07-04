package com.xingyue.service;

import com.xingyue.pojo.ContactUs;
import com.xingyue.pojo.Resource;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * @author: hanguoli
 * @Date: 2020/4/21 8:19
 * @Description :
 */
public interface ContactUsService {
    /**
     * 查询联系我们信息
     *
     * @return
     */
    List<ContactUs> enquiriesContactUsForInformation();

    /**
     * 添加联系我们信息
     *
     * @return
     */
    Boolean addContactUsForInformation(ContactUs contactUs);

    /**
     * 修改联系我们信息
     *
     * @return
     */
    Boolean modifyContactUsForInformation(ContactUs contactUs);

    /**
     * 删除联系我们信息
     *
     * @return
     */
    Boolean deleteContactUsForInformation(ContactUs contactUs);

    /**
     * 上传图片
     *
     * @param file     图片地址
     * @return
     * @throws Exception
     */
    String createFile(MultipartFile file);

}
