package com.xingyue.service.impl;

import com.xingyue.dao.ContactUsRepository;
import com.xingyue.pojo.ContactUs;
import com.xingyue.service.ContactUsService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

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

    @Value("${package.storage}")
    private String storagePath;

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
        Optional<ContactUs> c = contactUsRepository.findById(contactUs.getId());
        ContactUs contactUs1 = c.get();
        if(StringUtils.isEmpty(contactUs.getUrlCn())){
            contactUs.setUrlCn(contactUs1.getUrlCn());
        }
        if(StringUtils.isEmpty(contactUs.getUrlEn())){
            contactUs.setUrlEn(contactUs1.getUrlEn());
        }
        if(StringUtils.isEmpty(contactUs.getWeChatUrlCn())){
            contactUs.setWeChatUrlCn(contactUs1.getWeChatUrlCn());
        }
        if(StringUtils.isEmpty(contactUs.getWeChatUrlEn())){
            contactUs.setWeChatUrlEn(contactUs1.getWeChatUrlEn());
        }
        ContactUs save = contactUsRepository.save(contactUs);
        return null == save ? false : true;
    }

    /**
     * 修改联系我们手机端电话
     *
     * @param contactUs
     * @return
     */
    @Override
    public Boolean modifyContactUsOnMobilePhone(ContactUs contactUs) {
        Optional<ContactUs> c = contactUsRepository.findById(contactUs.getId());
        ContactUs contactUs1 = c.get();
        contactUs1.setCnCellPhone(contactUs.getCnCellPhone());
        contactUs1.setEnCellPhone(contactUs.getEnCellPhone());
        ContactUs save = contactUsRepository.save(contactUs1);
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

    @Override
    public String createFile(MultipartFile file) {
        if (file.getSize() > 0) {
            // 判断文件夹是否存在,不存在则创建
            File f = new File(storagePath);
            if (!f.exists()) {
                f.mkdirs();
            }
            String fileName = file.getOriginalFilename();
            UUID uid = UUID.randomUUID();
            String uuid = uid.toString().substring(1, 16);
            String prefix = fileName.substring(fileName.lastIndexOf(".") + 1);
            String newfilename = uuid + "." + prefix;
            File newFile = new File(storagePath, newfilename);
            try {
                file.transferTo(newFile);
            } catch (IOException e) {
                e.printStackTrace();
            } catch (IllegalStateException e) {
                e.printStackTrace();
            }
            return newfilename;
        }
        return null;
    }

}
