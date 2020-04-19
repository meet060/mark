package com.xingyue.service.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.JpaSort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.xingyue.dao.ResourceRepository;
import com.xingyue.pojo.Resource;
import com.xingyue.service.ResourceService;
import com.xingyue.utils.PageUtils;

@Service
public class ResourceServiceImpl implements ResourceService {

    @Value("${package.storage}")
    private String storagePath;

    @Autowired
    private ResourceRepository resourceRepository;

    @Override
    public Resource createFile(MultipartFile file, Resource res) throws Exception {
        if (file.getSize() > 0) {
            // 判断文件夹是否存在,不存在则创建
            File f = new File(storagePath);
            if (!f.exists()) {
                f.mkdirs();
            }
            String fileName = file.getOriginalFilename();
            File newFile = new File(storagePath, fileName);
            file.transferTo(newFile);
            Resource resource = new Resource();
            resource.setUrl(newFile.getPath());
            resource.setDescription(res.getDescription());
            resource.setModule(res.getModule());
            resource.setNumber(res.getNumber());
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
        Pageable pageable = PageRequest.of(page-1, size, sort);
        Page<Resource> resources = resourceRepository.queryByModule(module, pageable);
        //有多少页
        int totalPages = resources.getTotalPages();
        //总条数
        long totalElements = resources.getTotalElements();
        //返回数据
        List<Resource> content = resources.getContent();
        map.put("content", content);
        map.put("totalPages", totalPages);
        map.put("totalElements", totalElements);
        return map;
    }

	@Override
	public Map<String, Object> queryResourcesByModule(Resource resource) {
		Map<String, Object> map = new HashMap<>();
		List<Resource> resources = resourceRepository.queryByModule(resource.getModule());
		/**************************** 我是分割线 **********************************/
		// 轮播图 3条数据按照最新发布信息(图片静态的)
		List<Resource> banners = filterResource(resources, "banner", 3);
		HashMap<String, Object> bannermap = new HashMap<String, Object>();
		bannermap.put("titleurl", banners.stream().map(Resource::getUrl).collect(Collectors.toList()));
		map.put("banner", bannermap);
		/**************************** 我是分割线 **********************************/
		// 产品：按照产品最新 4条数据
		List<Resource> products = filterResource(resources, "product", 4);
		List<Object> r = new ArrayList<>();
		for (Resource p : products) {
			HashMap<String, Object> m = new HashMap<>();
			m.put("titleurl", p.getUrl());
			m.put("title", p.getTitle());
			m.put("description", p.getDescription());
			r.add(m);
		}
		map.put("product", r);
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
		//查询banner
		List<Resource> resources = resourceRepository.queryByModuleAndAndPosition("AboutZR", "company_banner");
		//查询公司信息
		List<Resource> resources2 = resourceRepository.queryByModuleAndAndPosition("AboutZR", "companyIntroduction");

		m.put("title",resources.get(0).getTitle());
		m.put("description",resources.get(0).getDescription());
		m.put("titlepic",resources.get(0).getUrl());

		for(int i = 1;i<= resources2.size(); i++){
            Resource r = resources2.get(i - 1);
            map.put("introtitle"+i,r.getTitle());
			map.put("introduce"+i,r.getDescription());
			map.put("introduce"+i,r.getUrl());
		}
		m.put("info",map);
		return m;
	}

	public List<Resource> filterResource(List<Resource> resources, String position, int limit) {
		List<Resource> res = resources.stream().filter(r -> position.equals(r.getPosition()))
				.sorted(Comparator.comparing(Resource::getCreatTime).reversed()).limit(limit)
				.collect(Collectors.toList());
		return res;
	}
}
