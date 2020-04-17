package com.xingyue.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author: hanguoli
 * @Date: 2020年4月17日17:53:21
 * @Description : 时间工具类
 */
public class DateUtils {

    /**
     * 获取当前时间
     *
     * @return
     */
    public static String getTheCurrentTime(){
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date d = new Date();
        String format = sdf.format(d);
        return format;
    }

}
