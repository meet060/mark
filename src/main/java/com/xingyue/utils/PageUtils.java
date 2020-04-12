package com.xingyue.utils;

import lombok.Data;

/**
 * @author hgl
 * 功能：分页
 * 时间：2020年4月11日20:55:48
 */
@Data
public final class PageUtils<T> {
    /**
     * 当前页数
     */
    private int page;
    /**
     * 按多少分页
     */
    private int size;
    /**
     * 接受参数对象
     */
    private T object;
}
