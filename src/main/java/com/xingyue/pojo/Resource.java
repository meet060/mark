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
	 * 中文图片
	 */
	@Column
	private String urlCn;

	/**
	 * 英文图片
	 */
	@Column
	private String urlEn;

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
	 * 中文标题
	 */
	@Column
	private String titleCn;

	/**
	 * 英文标题
	 */
	@Column
	private String titleEn;

	/**
	 * 中文描述
	 */
	@Column
	private String descriptionCn;

	/**
	 * 英文描述
	 */
	@Column
	private String descriptionEn;

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

	public String getUrlCn() {
		return CustomizedPropertyConfigurer.getContextProperty("package.storageUrl") + urlCn;
	}
	public String getUrlEn() {
		return CustomizedPropertyConfigurer.getContextProperty("package.storageUrl") + urlEn;
	}

	public void setUrlCn(String url) {
		this.urlCn = urlCn;
	}
	public void setUrlEn(String urlEn) {
		this.urlEn = urlEn;
	}

	public String getDescriptionCn() {
		return descriptionCn;
	}
	public String getDescriptionEn() {
		return descriptionEn;
	}

	public void setDescriptionEn(String descriptionEn) {
		this.descriptionEn = descriptionEn;
	}
	public void setDescriptionCn(String descriptionCn) {
		this.descriptionCn = descriptionCn;
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

	public String getTitleCn() {
		return titleCn;
	}
	public String getTitleEn() {
		return titleEn;
	}

	public void setTitleCn(String titleCn) {
		this.titleCn = titleCn;
	}

	public void setTitleEn(String titleEn) {
		this.titleEn = titleEn;
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
