package com.xingyue.service.impl;

import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

import com.xingyue.dao.ContactUsRepository;
import com.xingyue.pojo.ContactUs;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.JpaSort;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.web.multipart.MultipartFile;

import com.xingyue.dao.ResourceRepository;
import com.xingyue.pojo.Resource;
import com.xingyue.service.ResourceService;

/**
 * @author
 */
@Service
public class ResourceServiceImpl implements ResourceService {

    final Logger log = LoggerFactory.getLogger(ResourceServiceImpl.class);

    @Value("${package.storage}")
    private String storagePath;

    @Autowired
    private ResourceRepository resourceRepository;

    @Override
    public Boolean updateFileById(MultipartFile file, Integer id) {
        Optional<Resource> Resource = resourceRepository.findById(id);
        if (Resource.isPresent() && file.getSize() > 0) {
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
            } catch (Exception e) {
                return false;
            }
            Resource.get().setUrlCn(newfilename);
            Resource.get().setUrlEn(newfilename);
            resourceRepository.save(Resource.get());
            return true;
        }
        return false;
    }

    @Autowired
    private ContactUsRepository contactUsRepository;

    @Override
    public Resource createFile(MultipartFile file, Resource res) throws Exception {
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
            file.transferTo(newFile);
            Resource resource = new Resource();
            resource.setUrlCn(newfilename);
            resource.setUrlEn(newfilename);
            resource.setDescriptionEn(res.getDescriptionEn());
            resource.setDescriptionCn(res.getDescriptionCn());
            resource.setModule(res.getModule());
            resource.setNumber(res.getNumber());
            resource.setPosition(res.getPosition());
            resource.setCreatTime(new Date());
            resource.setTitleEn(res.getTitleEn());
            resource.setTitleCn(res.getTitleCn());
            return resourceRepository.save(resource);
        }
        return null;
    }

    /**
     * 根据模块查询资源
     *
     * @param module
     * @param page
     * @param size
     * @return
     */
    @Override
    public Map<String, Object> queryResourcesByModule(String module, Integer page, Integer size) {
        Map<String, Object> map = new HashMap<>(4);
        Sort sort = JpaSort.unsafe(Sort.Direction.ASC, "number");
        Pageable pageable = PageRequest.of(page - 1, size, sort);
        Page<Resource> resources = resourceRepository.findByModuleAndPositionIsNotNull(module, pageable);
        // 有多少页
        int totalPages = resources.getTotalPages();
        // 总条数
        long totalElements = resources.getTotalElements();
        // 返回数据
        List<Resource> content = resources.getContent();
        map.put("content", content);
        map.put("totalPages", totalPages);
        map.put("totalElements", totalElements);
        return map;
    }

    /**
     * 门户首页
     *
     * @return
     */
    @Override
    public Map<String, Object> queryResourcesByModule() {
        Map<String, Object> map = new HashMap<>();
        List<Resource> resources = resourceRepository.queryByModule("AboutZR");
        /**************************** 我是分割线 **********************************/
        // 轮播图 3条数据按照最新发布信息(图片静态的)
        Sort sort = JpaSort.unsafe(Sort.Direction.ASC, "number");
        Pageable pageable = PageRequest.of(0, 3, sort);
        Page<Resource> resourcePage = resourceRepository.queryByModuleAndAndPosition("AboutZR", "banner", pageable);
        List<Map<String, Object>> list = new ArrayList<>();
        List<Resource> content = resourcePage.getContent();
        for (Resource r : content) {
            Map<String, Object> map1 = new HashMap<>(6);
            map1.put("titleurl", r.getUrlCn());
            map1.put("titleurlEn", r.getUrlEn());
            map1.put("title", r.getTitleCn());
            map1.put("titleEn", r.getTitleEn());
            map1.put("description", r.getDescriptionCn());
            map1.put("descriptionEn", r.getDescriptionEn());
            list.add(map1);
        }
        map.put("banner", list);
        /**************************** 我是分割线 **********************************/
        // 产品：按照产品最新 4条数据
        List<Resource> neidais = filterResource(resources, "neidai", 4);
        List<Object> r = new ArrayList<>();
        for (Resource p : neidais) {
            HashMap<String, Object> m = new HashMap<>();
            m.put("titleurl", p.getUrlCn());
            m.put("titleurlEn", p.getUrlEn());
            m.put("title", p.getTitleCn());
            m.put("titleEn", p.getTitleEn());
            m.put("description", p.getDescriptionCn());
            m.put("descriptionEn", p.getDescriptionEn());
            m.put("id", p.getId());
            r.add(m);
        }
        map.put("neidai", r);
        List<Resource> waidais = filterResource(resources, "waidai", 4);
        List<Object> waidai = new ArrayList<>();
        for (Resource p : waidais) {
            HashMap<String, Object> m = new HashMap<>();
            m.put("titleurl", p.getUrlCn());
            m.put("titleurlEn", p.getUrlEn());
            m.put("title", p.getTitleCn());
            m.put("titleEn", p.getTitleEn());
            m.put("description", p.getDescriptionCn());
            m.put("descriptionEn", p.getDescriptionEn());
            m.put("id", p.getId());
            waidai.add(m);
        }
        map.put("waidai", waidai);
        /**************************** 我是分割线 **********************************/
        // 关于我们：
        Resource abouts = filterResource(resources, "about", 1).get(0);
        HashMap<String, Object> m = new HashMap<>();
        m.put("titleurl", abouts.getUrlCn());
        m.put("titleurlEn", abouts.getUrlEn());
        m.put("video", abouts.getUrlCn());
        m.put("videoEn", abouts.getUrlEn());
        m.put("description", abouts.getDescriptionCn());
        m.put("descriptionEn", abouts.getDescriptionEn());
        m.put("title", abouts.getTitleCn());
        m.put("titleEn", abouts.getTitleEn());
        map.put("about", m);
        /**************************** 我是分割线 **********************************/
        // 改善创新
        List<Resource> innovations = filterResource(resources, "innovation", 4);
        List<Object> l1 = new ArrayList<>();
        for (Resource innovation : innovations) {
            HashMap<String, Object> m1 = new HashMap<>();
            m1.put("titleEn", innovation.getTitleEn());
            m1.put("title", innovation.getTitleCn());
            m1.put("titleurl", innovation.getUrlCn());
            m1.put("titleurlEn", innovation.getUrlCn());
            m1.put("titlepic", innovation.getUrlCn());
            m1.put("titlepicEn", innovation.getUrlEn());
            l1.add(m1);
        }
        HashMap<String, Object> m2 = new HashMap<>(5);
        m2.put("descriptionEn", innovations.get(0).getDescriptionEn());
        m2.put("description", innovations.get(0).getDescriptionCn());
        m2.put("innovation", l1);
        map.put("innovation", m2);
        /**************************** 我是分割线 **********************************/
        // 解决方案
        //赞注释，使用产品模块接口方案
        //List<Resource> programs = filterResource(resources, "program", 4);
        
        List<Resource> productCenters = resourceRepository.queryByModule("productCenter");
        List<Resource> programs = filterResource(productCenters, "scheme", 8);
        List<Object> l2 = new ArrayList<>();
        List<Resource> programs2 = programs.stream().sorted(Comparator.comparing(Resource::getNumber)).collect(Collectors.toList());
        for (Resource program : programs2) {
            HashMap<String, Object> m1 = new HashMap<>();
            m1.put("titleEn", program.getTitleEn());
            m1.put("title", program.getTitleCn());
            m1.put("titleurl", program.getUrlCn());
            m1.put("titleurlEn", program.getUrlEn());
            m1.put("titlepic", program.getUrlCn());
            m1.put("titlepicEn", program.getUrlEn());
            l2.add(m1);
        }
        HashMap<String, Object> m3 = new HashMap<>();
        m3.put("descriptionEn", innovations.get(0).getDescriptionEn());
        m3.put("description", innovations.get(0).getDescriptionCn());
        m3.put("program", l2);
        map.put("program", m3);
        /**************************** 我是分割线 **********************************/
        // 友情链接
        Resource link = filterResource(resources, "link", 1).get(0);
        HashMap<String, Object> m4 = new HashMap<>();
        m4.put("titleEn", link.getTitleEn());
        m4.put("title", link.getTitleCn());
        m4.put("titleurl", link.getUrlCn());
        m4.put("titleurlEn", link.getUrlEn());
        map.put("link", m4);
        return map;
    }

    /**
     * 获取关于中润信息
     *
     * @return
     */
    @Override
    public Map<String, Object> obtainInformationAboutZhongrun() {
        Map<String, Object> m = new HashMap<>(16);
        Map<String, Object> map = new HashMap<>(16);
        // 查询banner
        List<Resource> resources = resourceRepository.queryByModuleAndAndPosition("embellishOfInformation", "banner");
        // 查询公司信息
        List<Resource> resources2 = resourceRepository.queryByModuleAndAndPosition("embellishOfInformation", "companyIntroduction");
        List<Map<String, Object>> bannerList = new ArrayList<>();
        for(Resource r : resources){
            Map<String, Object> m1 = new HashMap<>();
            m1.put("titleEn", r.getTitleEn());
            m1.put("title", r.getTitleCn());
            m1.put("descriptionEn", r.getDescriptionEn());
            m1.put("description", r.getDescriptionCn());
            m1.put("titlepic", r.getUrlCn());
            m1.put("titlepicEn", r.getUrlEn());
            bannerList.add(m1);
        }

        for (int i = 1; i <= resources2.size(); i++) {
            Map<String, Object> map1 = new HashMap<>(2);
            Resource r = resources2.get(i - 1);
            map1.put("introtitleEn" + i, r.getTitleEn());
            map1.put("introtitle" + i, r.getTitleCn());
            map1.put("introDescriptionEn" + i, r.getDescriptionEn());
            map1.put("introDescription" + i, r.getDescriptionCn());
            map1.put("introduce" + i, r.getUrlCn());
            map1.put("introduceEn" + i, r.getUrlEn());
            map.put("info" + i, map1);
        }
        m.put("banner",bannerList);
        m.put("info", map);
        return m;
    }

    /**
     * 查询行业认可图片
     *
     * @return
     */
    @Override
    public Map<String, Object> checkIndustryApprovedPictures() {
        Map<String, Object> m = new HashMap<>(16);
        List list = new ArrayList();
        List<Resource> resources = resourceRepository.queryByModuleAndAndPosition("embellishOfInformation", "industryRecognition");
        for (Resource r : resources) {
            Map<String, Object> map = new HashMap<>(16);
            map.put("titleEn", r.getTitleEn());
            map.put("title", r.getTitleCn());
            map.put("titlepic", r.getUrlCn());
            map.put("titlepicEn", r.getUrlEn());
            list.add(map);
        }
        m.put("recognized", list);
        return m;
    }

    /**
     * 产品中心数据查询
     *
     * @return
     */
    @Override
    public Map<String, Object> productCenterDataQuery() {
        Map<String, Object> m = new HashMap<>(16);
        List outerBagList = new ArrayList();
        List outerBagTitleList = new ArrayList();
        List innerBagTitleList = new ArrayList();
        List innerBagList = new ArrayList();
        List flexibleFreightBagsList = new ArrayList();
        List schemeList = new ArrayList();
        List flowList = new ArrayList();
        List bannerList =  new ArrayList();
        List<Resource> resourceList = resourceRepository.queryByModule("productCenter");
        for (Resource r : resourceList) {
            switch (r.getPosition()) {
                // 产品banner
                case "banner":
                    Map m1 = new HashMap(6);
                    m1.put("titleEn", r.getTitleEn());
                    m1.put("title", r.getTitleCn());
                    m1.put("descriptionEn", r.getDescriptionEn());
                    m1.put("description", r.getDescriptionCn());
                    m1.put("titlepic", r.getUrlCn());
                    m1.put("titlepicEn", r.getUrlEn());
                    bannerList.add(m1);
                    break;
                // 外袋系列
                case "outerBag":
                    Map<String, Object> m2 = new HashMap<>(4);
                    m2.put("wdtitleEn", r.getTitleEn());
                    m2.put("wdtitle", r.getTitleCn());
                    m2.put("wddescriptionEn", r.getDescriptionEn());
                    m2.put("wddescription", r.getDescriptionCn());
                    m2.put("wdpic", r.getUrlCn());
                    m2.put("wdpicEn", r.getUrlEn());
                    outerBagList.add(m2);
                    break;
                // 外袋系列标题
                case "outerBagTitle":
                    Map<String, Object> m10 = new HashMap<>(3);
                    m10.put("outerBagTitleEn", r.getTitleEn());
                    m10.put("outerBagTitle", r.getTitleCn());
                    m10.put("outerBagDescriptionEn", r.getDescriptionEn());
                    m10.put("outerBagDescription", r.getDescriptionCn());
                    outerBagTitleList.add(m10);
                    break;
                // 内袋系列
                case "innerBag":
                    Map<String, Object> m3 = new HashMap<>(5);
                    m3.put("ndtitleEn", r.getTitleEn());
                    m3.put("ndtitle", r.getTitleCn());
                    m3.put("nddescriptionEn", r.getDescriptionEn());
                    m3.put("nddescription", r.getDescriptionCn());
                    m3.put("ndpic", r.getUrlCn());
                    m3.put("ndpicEn", r.getUrlEn());
                    innerBagList.add(m3);
                    break;
                // 内袋系列
                case "innerBagTitle":
                    Map<String, Object> m11 = new HashMap<>(5);
                    m11.put("innerBagTitleEn", r.getTitleEn());
                    m11.put("innerBagTitle", r.getTitleCn());
                    m11.put("innerBagDescriptionEn", r.getDescriptionEn());
                    m11.put("innerBagDescription", r.getDescriptionCn());
                    innerBagTitleList.add(m11);
                    break;
                // 集装袋生产流程
                case "flexibleFreightBags":
                    m.put("jzdtitleEn", r.getTitleEn());
                    m.put("jzdtitle", r.getTitleCn());
                    m.put("jzddescriptionEn", r.getDescriptionEn());
                    m.put("jzddescription", r.getDescriptionCn());
                    m.put("jzddpic", r.getUrlCn());
                    m.put("jzddpicEn", r.getUrlEn());
                    break;
                //生产流程
                case "workFlow":
                    Map<String, Object> m4 = new HashMap<>(16);
                    m4.put("titleEn", r.getTitleEn());
                    m4.put("title", r.getTitleCn());
                    m4.put("descriptionEn", r.getDescriptionEn());
                    m4.put("description", r.getDescriptionCn());
                    m4.put("titlepic", r.getUrlCn());
                    m4.put("titlepicEn", r.getUrlEn());
                    flexibleFreightBagsList.add(m4);
                    break;
                // 覆盖全行业的定制包装解决方案
                case "allIndustry":
                    m.put("qhytitleEn", r.getTitleEn());
                    m.put("qhytitle", r.getTitleCn());
                    m.put("qhydescriptionEn", r.getDescriptionEn());
                    m.put("qhydescription", r.getDescriptionCn());
                    break;
                // 覆盖全行业的定制包装解决方案2
                case "scheme":
                    Map<String, Object> m5 = new HashMap<>(3);
                    m5.put("titleEn", r.getTitleEn());
                    m5.put("title", r.getTitleCn());
                    m5.put("titlepic", r.getUrlCn());
                    m5.put("titlepicEn", r.getUrlEn());
                    schemeList.add(m5);
                    break;
                // 质控流程
                case "qualityControlProcess":
                    m.put("zktitleEn", r.getTitleEn());
                    m.put("zktitle", r.getTitleCn());
                    m.put("zkdescriptionEn", r.getDescriptionEn());
                    m.put("zkdescription", r.getDescriptionCn());
                    break;
                // 质控流程2
                case "flow":
                    Map<String, Object> m6 = new HashMap<>(16);
                    m6.put("titleEn", r.getTitleEn());
                    m6.put("title", r.getTitleCn());
                    m6.put("descriptionEn", r.getDescriptionEn());
                    m6.put("description", r.getDescriptionCn());
                    m6.put("titlepic", r.getUrlCn());
                    m6.put("titlepicEn", r.getUrlEn());
                    flowList.add(m6);
                    break;
                default:
                    log.info("产品中心数据查询>>>没有匹配的数据<<<");
            }

        }
        m.put("outerBag", outerBagList);
        m.put("outerBagTitle", outerBagTitleList);
        m.put("innerBag", innerBagList);
        m.put("innerBagTitle", innerBagTitleList);
        m.put("process", flexibleFreightBagsList);
        m.put("program", schemeList);
        m.put("control", flowList);
        m.put("banner", bannerList);
        return m;
    }

    /**
     * 查询技术支持信息
     *
     * @return
     */
    @Override
    public Map<String, Object> queryTechnicalSupportInformation() {
        // 返回的数据
        Map<String, Object> m = new HashMap<>(16);
        // 技术
        Map<String, Object> techniqueMap = new HashMap<>(3);
        // 设备
        Map<String, Object> deviceMap = new HashMap<>(7);
        // 获取技术支持所有集
        List<Resource> resourceList = resourceRepository.queryByModule("technicalSupport");
        List bannerList = new ArrayList();
        // 区分key用
        int i = 1;
        int j = 1;
        for (Resource r : resourceList) {
            switch (r.getPosition()) {
                // 技术支持banner
                case "banner":
                    Map m1 = new HashMap();
                    m1.put("titleEn", r.getTitleEn());
                    m1.put("title", r.getTitleCn());
                    m1.put("descriptionEn", r.getDescriptionEn());
                    m1.put("description", r.getDescriptionCn());
                    m1.put("titlepic", r.getUrlCn());
                    m1.put("titlepicEn", r.getUrlEn());
                    bannerList.add(m1);
                    break;
                // 技术
                case "technique":
                    techniqueMap.put("jstitleEn" + j, r.getTitleEn());
                    techniqueMap.put("jstitle" + j, r.getTitleCn());
                    techniqueMap.put("jsdescriptionEn" + j, r.getDescriptionEn());
                    techniqueMap.put("jsdescription" + j, r.getDescriptionCn());
                    techniqueMap.put("jspic" + j, r.getUrlCn());
                    techniqueMap.put("jspicEn" + j, r.getUrlEn());
                    j++;
                    break;
                // 设备实力
                case "deviceInstance":
                    m.put("sbtitleEn", r.getTitleEn());
                    m.put("sbtitle", r.getTitleCn());
                    m.put("sbdescriptionEn", r.getDescriptionEn());
                    m.put("sbdescription", r.getDescriptionCn());
                    break;
                // 设备
                case "device":
                    deviceMap.put("jstitleEn" + i, r.getTitleEn());
                    deviceMap.put("jstitle" + i, r.getTitleCn());
                    deviceMap.put("jsdescriptionEn" + i, r.getDescriptionEn());
                    deviceMap.put("jsdescription" + i, r.getDescriptionCn());
                    deviceMap.put("jspic" + i, r.getUrlCn());
                    deviceMap.put("jspicEn" + i, r.getUrlEn());
                    i++;
                    break;
                default:
                    log.info("查询技术支持信息>>>没有匹配的数据<<<");
            }
        }
        m.put("jishu", techniqueMap);
        m.put("device", deviceMap);
        m.put("banner",bannerList);
        return m;
    }

    /**
     * 获取新闻中心数据
     *
     * @return
     */
    @Override
    public Map<String, Object> getTheNewsCenterData(int page, int size) {
        // 返回的数据
        Map<String, Object> m = new HashMap<>(16);
        // 获取新闻中心所有数据
        List<Resource> resources = resourceRepository.queryByModuleAndAndPosition("pressCenter", "banner");
        List<Map<String, Object>> bannerList = new ArrayList<>();
        for(Resource r : resources){
            Map<String, Object> m1 = new HashMap<>(16);
            m1.put("titleEn",r.getTitleEn());
            m1.put("title",r.getTitleCn());
            m1.put("descriptionEn", r.getDescriptionEn());
            m1.put("description", r.getDescriptionCn());
            m1.put("titlepic", r.getUrlCn());
            m1.put("titlepicEn", r.getUrlEn());
            bannerList.add(m1);
        }
        // news 新闻
        List<Map<String, Object>> resourceList = new ArrayList<>();
        Pageable pageable = PageRequest.of(page - 1, size);
        // 获取新闻数据
        Page<Resource> resourcePage = resourceRepository.queryByModuleAndAndPosition("pressCenter", "news", pageable);
        for (Resource r : resourcePage.getContent()) {
            Map<String, Object> newsMap = new HashMap<>(3);
            newsMap.put("id", r.getId());
            newsMap.put("titleEn", r.getTitleEn());
            newsMap.put("title", r.getTitleCn());
            newsMap.put("url", r.getUrlCn());
            newsMap.put("urlEn", r.getUrlEn());
            newsMap.put("newtime", r.getCreatTime());
            resourceList.add(newsMap);
        }
        // 每页多少条
        m.put("pageindex", resourcePage.getTotalPages());
        // 数据总条数
        m.put("pagenum", resourcePage.getTotalElements());
        // 新闻
        m.put("news", resourceList);
        //banner
        m.put("banner",bannerList);
        return m;
    }

    /**
     * 获取联系我们信息
     *
     * @return
     */
    @Override
    public Map<String, Object> getTheContactInformation() {
        Map<String, Object> m = new HashMap<>(16);
        Map<String, Object> bottomMap = new HashMap<>(4);
        Map<String, Object> contancUsMap = new HashMap<>(16);
        List<Resource> resourceList = resourceRepository.queryByModule("contactUs");
        List<ContactUs> contactUsList = contactUsRepository.findAll();
        List bannerList = new ArrayList<>();
        for (Resource r : resourceList) {
            switch (r.getPosition()) {
                case "banner":
                    Map m1 = new HashMap(6);
                    m1.put("titleEn", r.getTitleEn());
                    m1.put("title", r.getTitleCn());
                    m1.put("descriptionEn", r.getDescriptionEn());
                    m1.put("description", r.getDescriptionCn());
                    m1.put("titlepic", r.getUrlCn());
                    m1.put("titlepicEn", r.getUrlEn());
                    bannerList.add(m1);
                    break;
                //底下位置
                case "bottom":
                    bottomMap.put("titleEn", r.getTitleEn());
                    bottomMap.put("title", r.getTitleCn());
                    bottomMap.put("descriptionEn", r.getDescriptionEn());
                    bottomMap.put("description", r.getDescriptionCn());
                    bottomMap.put("titlepic", r.getUrlCn());
                    bottomMap.put("titlepicEn", r.getUrlEn());
                    break;
                default:
                    log.info("获取联系我们信息>>>没有匹配的数据<<<");
            }
        }
        m.put("bottom", bottomMap);
        if (!CollectionUtils.isEmpty(contactUsList)) {
            contancUsMap.put("company", contactUsList.get(0).getCompanyCn());
            contancUsMap.put("enCompany", contactUsList.get(0).getCompanyEn());
            contancUsMap.put("address", contactUsList.get(0).getAddressCn());
            contancUsMap.put("enAddress", contactUsList.get(0).getAddressEn());
            contancUsMap.put("phone", contactUsList.get(0).getPhoneCn());
            contancUsMap.put("phoneEn", contactUsList.get(0).getPhoneEn());
            contancUsMap.put("cellPhone", contactUsList.get(0).getCellPhoneCn());
            contancUsMap.put("cellPhoneEn", contactUsList.get(0).getCellPhoneEn());
            contancUsMap.put("fax", contactUsList.get(0).getFaxCn());
            contancUsMap.put("faxEn", contactUsList.get(0).getFaxEn());
            contancUsMap.put("mailbox", contactUsList.get(0).getMailboxCn());
            contancUsMap.put("mailboxEn", contactUsList.get(0).getMailboxEn());
            contancUsMap.put("url", contactUsList.get(0).getUrlCn());
            contancUsMap.put("urlEn", contactUsList.get(0).getUrlEn());
            contancUsMap.put("weChatUrl", contactUsList.get(0).getWeChatUrlCn());
            contancUsMap.put("weChatUrlEn", contactUsList.get(0).getWeChatUrlEn());
        }
        m.put("contact", contancUsMap);
        m.put("banner", bannerList);
        return m;
    }

    public List<Resource> filterResource(List<Resource> resources, String position, int limit) {
        List<Resource> res = resources.stream().filter(r -> position.equals(r.getPosition()))
                .sorted(Comparator.comparing(Resource::getCreatTime)
//                .reversed()
                ).limit(limit)
                .collect(Collectors.toList());
        return res;
    }

    @Override
    public Boolean saveNews(Resource resource) {
        try {
            File f = new File(storagePath);
            if (!f.exists()) {
                f.mkdirs();
            }

            String fileName = resource.getFile().getOriginalFilename();
            UUID uid = UUID.randomUUID();
            String uuid = uid.toString().substring(1, 16);
            String prefix = fileName.substring(fileName.lastIndexOf(".") + 1);
            String newfilename = uuid + "." + prefix;
            File newFile = new File(storagePath, newfilename);

            resource.getFile().transferTo(newFile);
            resource.setUrlEn(newfilename);
            resource.setUrlCn(newfilename);
            resourceRepository.save(resource);
            return true;
        } catch (Exception e) {
            // TODO: handle exception
            return false;
        }
    }

    @Override
    public Map<String, Object> findNewsById(Integer id) {
        HashMap<String, Object> map = new HashMap<>();
        Optional<Resource> resource = resourceRepository.findById(id);
        //上一条数据
        Resource resource1 = resourceRepository.getsTheLastRecordById(id);
        //下一条数据
        Resource resource2 = resourceRepository.getsTheNextRecordById(id);
        if (resource.isPresent()) {
            map.put("titleEn", resource.get().getTitleEn());
            map.put("title", resource.get().getTitleCn());
            map.put("date", resource.get().getCreatTime());
            map.put("descriptionEn", resource.get().getDescriptionEn());
            map.put("description", resource.get().getDescriptionCn());
            map.put("url", resource.get().getUrlCn());
            map.put("urlEn", resource.get().getUrlEn());
            map.put("id", resource.get().getId());
            if (null != resource1) {
                map.put("previousPageId", resource1.getId());
                map.put("previousTitleEn", resource1.getTitleEn());
                map.put("previousTitle", resource1.getTitleCn());
            } else {
                map.put("previousPageId", "");
                map.put("previousTitle", "");
                map.put("previousTitleEn", "");
            }
            if (null != resource2) {
                map.put("theNextPageId", resource2.getId());
                map.put("theNextPageTitleEn", resource2.getTitleEn());
                map.put("theNextPageTitle", resource2.getTitleCn());
            } else {
                map.put("theNextPageId", "");
                map.put("theNextPageTitle", "");
                map.put("theNextPageTitleEn", "");
            }
            return map;
        }
        return null;
    }

	@Override
	public Map<String, Object> queryResourcesByIndexAndAbout(int page, int size) {
		 Map<String, Object> map = new HashMap<>(4);
	        Sort sort = JpaSort.unsafe(Sort.Direction.ASC, "number");
	        Pageable pageable = PageRequest.of(page - 1, size, sort);
	        Page<Resource> resources = resourceRepository.findByModuleOrModuleAndPositionNotNullAndUrlCnNotNull(
	                "AboutZR", "productCenter", pageable);
	        // 有多少页
	        int totalPages = resources.getTotalPages();
	        // 总条数
	        long totalElements = resources.getTotalElements();
	        // 返回数据
	        List<Resource> content = resources.getContent();
	        map.put("content", content);
	        map.put("totalPages", totalPages);
	        map.put("totalElements", totalElements);
	        return map;
	}

	@Override
	public Resource findOne(Integer id) {
		Optional<Resource> res = resourceRepository.findById(id);
		if(res.isPresent()) {
			return res.get();
		}
		return null;
	}

	@Override
	public Resource updateResources(Resource r, MultipartFile file1, MultipartFile file2) {
		Resource resource = resourceRepository.findById(r.getId()).get();
		if (resource != null && file1 != null) {
			String urlCn = uploud(file1);
			resource.setUrlCn(urlCn);
		}
		if (resource != null && file2 != null) {
			String urlEn = uploud(file2);
			resource.setUrlEn(urlEn);
		}
		resource.setId(r.getId());
		if (r.getTitleCn() != null) {
			resource.setTitleCn(r.getTitleCn());
		}
		System.out.println(r.getTitleEn());
		if (r.getTitleEn() != null) {
			resource.setTitleEn(r.getTitleEn());
		}
		if (r.getDescriptionCn() != null) {
			resource.setDescriptionCn(r.getDescriptionCn());
		}
		if (r.getDescriptionEn() != null) {
			resource.setDescriptionEn(r.getDescriptionEn());
		}
		return resourceRepository.save(resource);
	}
	
	public String uploud(MultipartFile file) {
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
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return newfilename;
	}
}
