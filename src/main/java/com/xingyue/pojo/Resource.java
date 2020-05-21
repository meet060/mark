package com.xingyue.pojo;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.xingyue.utils.CustomizedPropertyConfigurer;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Table(name = "resource")
public class Resource {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	/**
	 * 模块
	 */
	@Column
	private String module;

	/**
	 * 路径
	 */
	@Column
	private String url;

	/**
	 * 位置 轮播。
	 */
	@Column
	private String position;

	/**
	 * 创建时间
	 */
	@Column
	private Date creatTime;

	/**
	 * title
	 */
	@Column
	private String title;

	/**
	 * 描述
	 */
	@Column
	private String description;

	/**
	 * 图片编号
	 */
	@Column
	private Integer number;

	@Transient
	private MultipartFile file;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUrl() {
		return CustomizedPropertyConfigurer.getContextProperty("package.storageUrl") + url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getModule() {
		return module;
	}

	public void setModule(String module) {
		this.module = module;
	}

	public Integer getNumber() {
		return number;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public Date getCreatTime() {
		return creatTime;
	}

	public void setCreatTime(Date creatTime) {
		this.creatTime = creatTime;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
	}

	public Resource() {
		super();
	}

}
