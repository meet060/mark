package com.xingyue.service.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
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
			String uuid = uid.toString().substring(1,16);
			String prefix =fileName.substring(fileName.lastIndexOf(".")+1);
			String newfilename = uuid +"." +prefix;
			File newFile = new File(storagePath, newfilename);
			try {
				file.transferTo(newFile);
			} catch (Exception e) {
				return false;
			}
			Resource.get().setUrl(newfilename);
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
			String uuid = uid.toString().substring(1,16);
			String prefix =fileName.substring(fileName.lastIndexOf(".")+1);
			String newfilename = uuid +"." +prefix;
			File newFile = new File(storagePath, newfilename);
			file.transferTo(newFile);
			Resource resource = new Resource();
			resource.setUrl(newfilename);
			resource.setDescription(res.getDescription());
			resource.setModule(res.getModule());
			resource.setNumber(res.getNumber());
			resource.setPosition(res.getPosition());
			resource.setCreatTime(new Date());
			resource.setTitle(res.getTitle());
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
		Page<Resource> resources = resourceRepository.queryByModule(module, pageable);
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
    public Map<String, Object> queryResourcesByModule() {
        Map<String, Object> map = new HashMap<>();
        List<Resource> resources = resourceRepository.queryByModule("AboutZR");
        /**************************** 我是分割线 **********************************/
        // 轮播图 3条数据按照最新发布信息(图片静态的)
        List<Resource> banners = filterResource(resources, "banner", 3);
        HashMap<String, Object> bannermap = new HashMap<String, Object>();
        bannermap.put("titleurl", banners.stream().map(Resource::getUrl).collect(Collectors.toList()));
        map.put("banner", bannermap);
        /**************************** 我是分割线 **********************************/
        // 产品：按照产品最新 4条数据
        List<Resource> neidais = filterResource(resources, "neidai", 4);
        List<Object> r = new ArrayList<>();
        for (Resource p : neidais) {
            HashMap<String, Object> m = new HashMap<>();
            m.put("titleurl", p.getUrl());
            m.put("title", p.getTitle());
            m.put("description", p.getDescription());
            r.add(m);
        }
        map.put("neidai", r);
        List<Resource> waidais = filterResource(resources, "waidai", 4);
        List<Object> waidai = new ArrayList<>();
        for (Resource p : waidais) {
            HashMap<String, Object> m = new HashMap<>();
            m.put("titleurl", p.getUrl());
            m.put("title", p.getTitle());
            m.put("description", p.getDescription());
            waidai.add(m);
        }
        map.put("waidai", waidai);
        /**************************** 我是分割线 **********************************/
        // 关于我们：
        Resource abouts = filterResource(resources, "about", 1).get(0);
        HashMap<String, Object> m = new HashMap<>();
        m.put("titleurl", abouts.getUrl());
        m.put("video", abouts.getUrl());
        m.put("description", abouts.getUrl());
        map.put("about", m);
        /**************************** 我是分割线 **********************************/
        // 改善创新
        List<Resource> innovations = filterResource(resources, "innovation", 4);
        List<Object> l1 = new ArrayList<>();
        for (Resource innovation : innovations) {
            HashMap<String, Object> m1 = new HashMap<>();
            m1.put("title", innovation.getTitle());
            m1.put("titleurl", innovation.getUrl());
            m1.put("titlepic", innovation.getUrl());
            l1.add(m1);
        }
        HashMap<String, Object> m2 = new HashMap<>();
        m2.put("description", innovations.get(0).getDescription());
        m2.put("innovation", l1);
        map.put("innovation", m2);
        /**************************** 我是分割线 **********************************/
        // 解决方案
        List<Resource> programs = filterResource(resources, "program", 4);
        List<Object> l2 = new ArrayList<>();
        for (Resource program : programs) {
            HashMap<String, Object> m1 = new HashMap<>();
            m1.put("title", program.getTitle());
            m1.put("titleurl", program.getUrl());
            m1.put("titlepic", program.getUrl());
            l2.add(m1);
        }
        HashMap<String, Object> m3 = new HashMap<>();
        m3.put("description", innovations.get(0).getDescription());
        m3.put("program", l1);
        map.put("program", m3);
        /**************************** 我是分割线 **********************************/
        // 友情链接
        Resource link = filterResource(resources, "link", 1).get(0);
        HashMap<String, Object> m4 = new HashMap<>();
        m4.put("title", link.getTitle());
        m4.put("titleurl", link.getUrl());
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
		List<Resource> resources = resourceRepository.queryByModuleAndAndPosition("AboutZR", "company_banner");
		// 查询公司信息
		List<Resource> resources2 = resourceRepository.queryByModuleAndAndPosition("AboutZR", "companyIntroduction");

		m.put("title", resources.get(0).getTitle());
		m.put("description", resources.get(0).getDescription());
		m.put("titlepic", resources.get(0).getUrl());

		for (int i = 1; i <= resources2.size(); i++) {
			Map<String, Object> map1 = new HashMap<>(2);
			Resource r = resources2.get(i - 1);
			map1.put("introtitle" + i, r.getTitle());
			map1.put("introduce" + i, r.getDescription());
			map1.put("introduce" + i, r.getUrl());
			map.put("info"+i,map1);
		}
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
		// 查询banner
		List<Resource> resources = resourceRepository.queryByModuleAndAndPosition("AboutZR", "industryRecognition");
		for (Resource r : resources) {
			Map<String, Object> map = new HashMap<>(16);
			map.put("title", r.getTitle());
			map.put("titlepic", r.getUrl());
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
		List innerBagList = new ArrayList();
		List flexibleFreightBagsList = new ArrayList();
		List schemeList = new ArrayList();
		List flowList = new ArrayList();
		List<Resource> resourceList = resourceRepository.queryByModule("productCenter");
		for (Resource r : resourceList) {
			switch (r.getPosition()) {
			// 产品banner
			case "banner":
				m.put("title", r.getTitle());
				m.put("description", r.getDescription());
				m.put("titlepic", r.getUrl());
				break;
			// 外袋系列
			case "outerBag":
				Map<String, Object> m2 = new HashMap<>(4);
				m2.put("wdtitle", r.getTitle());
				m2.put("wddescription", r.getDescription());
				m2.put("wdpic", r.getUrl());
				outerBagList.add(m2);
				break;
			// 内袋系列
			case "innerBag":
				Map<String, Object> m3 = new HashMap<>(4);
				m3.put("ndtitle", r.getTitle());
				m3.put("nddescription", r.getDescription());
				m3.put("ndpic", r.getUrl());
				innerBagList.add(m3);
				break;
			// 集装袋生产流程
			case "flexibleFreightBags":
				m.put("jzdtitle", r.getTitle());
				m.put("jzddescription", r.getDescription());
				m.put("jzddpic", r.getUrl());
				break;
			case "workFlow":
				Map<String, Object> m4 = new HashMap<>(16);
				m4.put("title", r.getTitle());
				m4.put("description", r.getDescription());
				m4.put("titlepic", r.getUrl());
				flexibleFreightBagsList.add(m4);
				break;
			// 覆盖全行业的定制包装解决方案
			case "allIndustry":
				m.put("qhytitle", r.getTitle());
				m.put("qhydescription", r.getDescription());
				break;
			// 覆盖全行业的定制包装解决方案2
			case "scheme":
				Map<String, Object> m5 = new HashMap<>(3);
				m5.put("title", r.getTitle());
				m5.put("titlepic", r.getUrl());
				schemeList.add(m5);
				break;
			// 质控流程
			case "qualityControlProcess":
				m.put("zktitle", r.getTitle());
				m.put("zkdescription", r.getDescription());
				break;
			// 质控流程2
			case "flow":
				Map<String, Object> m6 = new HashMap<>(16);
				m6.put("title", r.getTitle());
				m6.put("description", r.getDescription());
				m6.put("titlepic", r.getUrl());
				flowList.add(m6);
				break;
			default:
				log.info("产品中心数据查询>>>没有匹配的数据<<<");
			}

		}
		m.put("outerBag", outerBagList);
		m.put("innerBag", innerBagList);
		m.put("process", flexibleFreightBagsList);
		m.put("program", schemeList);
		m.put("control", flowList);
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
		// 区分key用
		int i = 1;
		int j = 1;
		for (Resource r : resourceList) {
			switch (r.getPosition()) {
			// 技术支持banner
			case "banner":
				m.put("title", r.getTitle());
				m.put("description", r.getDescription());
				m.put("titlepic", r.getUrl());
				break;
			// 技术
			case "technique":
				techniqueMap.put("jstitle" + j, r.getTitle());
				techniqueMap.put("jsdescription" + j, r.getDescription());
				techniqueMap.put("jspic" + j, r.getUrl());
				j++;
				break;
			// 设备实力
			case "deviceInstance":
				m.put("sbtitle", r.getTitle());
				m.put("sbdescription", r.getDescription());
				break;
			// 设备
			case "device":
				deviceMap.put("jstitle" + i, r.getTitle());
				deviceMap.put("jsdescription" + i, r.getDescription());
				deviceMap.put("jspic" + i, r.getUrl());
				i++;
				break;
			default:
				log.info("查询技术支持信息>>>没有匹配的数据<<<");
			}
		}
		m.put("jishu", techniqueMap);
		m.put("device", deviceMap);
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
		m.put("title", resources.get(0).getTitle());
		m.put("description", resources.get(0).getDescription());
		m.put("titlepic", resources.get(0).getUrl());

		// news 新闻
		List<Map<String, Object>> resourceList = new ArrayList<>();
		Pageable pageable = PageRequest.of(page - 1, size);
		// 获取新闻数据
		Page<Resource> resourcePage = resourceRepository.queryByModuleAndAndPosition("pressCenter", "news", pageable);
		for (Resource r : resourcePage.getContent()) {
			Map<String, Object> newsMap = new HashMap<>(3);
			newsMap.put("id", r.getId());
			newsMap.put("title", r.getTitle());
			newsMap.put("newtime", r.getCreatTime());
			resourceList.add(newsMap);
		}
		// 每页多少条
		m.put("pageindex", resourcePage.getTotalPages());
		// 数据总条数
		m.put("pagenum", resourcePage.getTotalElements());
		// 新闻
		m.put("news", resourceList);
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
		Map<String, Object> contancUsMap = new HashMap<>(4);
		List<Resource> resourceList = resourceRepository.queryByModule("contactUs");
		List<ContactUs> contactUsList = contactUsRepository.findAll();
		for (Resource r : resourceList) {
			switch (r.getPosition()) {
			case "banner":
				m.put("title", r.getTitle());
				m.put("description", r.getDescription());
				m.put("titlepic", r.getUrl());
				break;
			case "bottom":
				bottomMap.put("title", r.getTitle());
				bottomMap.put("description", r.getDescription());
				bottomMap.put("titlepic", r.getUrl());
			}
		}
		m.put("bottom", bottomMap);
		if (!CollectionUtils.isEmpty(contactUsList)) {
			contancUsMap.put("company", contactUsList.get(0).getCompanyCn());
			contancUsMap.put("enCompany", contactUsList.get(0).getCompanyEn());
			contancUsMap.put("address", contactUsList.get(0).getAddressCn());
			contancUsMap.put("enAddress", contactUsList.get(0).getAddressEn());
			contancUsMap.put("phone", contactUsList.get(0).getPhone());
			contancUsMap.put("cellPhone", contactUsList.get(0).getCellPhone());
			contancUsMap.put("fax", contactUsList.get(0).getFax());
			contancUsMap.put("mailbox", contactUsList.get(0).getMailbox());
		}
		m.put("contact", contancUsMap);
		return m;
	}

	public List<Resource> filterResource(List<Resource> resources, String position, int limit) {
		List<Resource> res = resources.stream().filter(r -> position.equals(r.getPosition()))
				.sorted(Comparator.comparing(Resource::getCreatTime).reversed()).limit(limit)
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
			String uuid = uid.toString().substring(1,16);
			String prefix =fileName.substring(fileName.lastIndexOf(".")+1);
			String newfilename = uuid +"." +prefix;
			File newFile = new File(storagePath, newfilename);
			
			resource.getFile().transferTo(newFile);
			resource.setUrl(newfilename);
			resourceRepository.save(resource);
			return true;
		} catch (Exception e) {
			// TODO: handle exception
			return false;
		}
	}
}
