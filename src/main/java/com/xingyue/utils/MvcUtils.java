package com.xingyue.utils;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.client.HttpStatusCodeException;

import com.fasterxml.jackson.databind.ObjectMapper;

public final class MvcUtils {

    public static Map<Object, Object> toErrorMessage(BindingResult bindingResult) {
        Map<Object, Object> msg = new LinkedHashMap<>();
        msg.put("status", HttpStatus.BAD_REQUEST.value());
        msg.put("error", HttpStatus.BAD_REQUEST.getReasonPhrase());
        msg.put("validation",
                bindingResult.getAllErrors().stream()
                        .collect(Collectors.toMap(
                                e -> (e instanceof FieldError) ? ((FieldError) e).getField() : e.getObjectName(),
                                e -> e.getDefaultMessage())));
        return msg;
    }

    public static Map<Object, Object> toErrorMessage(Exception e) {
        return toErrorMessage(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public static Map<Object, Object> toErrorMessage(Exception e, HttpStatus status) {
        Map<Object, Object> msg = new LinkedHashMap<>();
        msg.put("status", status.value());
        msg.put("error", e.getMessage());
        return msg;
    }

    public static void errorToBindingResult(HttpStatusCodeException e, BindingResult bindingResult,
                                            ObjectMapper objectMapper) {
        String msg = e.getResponseBodyAsString();
        if (msg != null) {
            try {
                Map<?, ?> map = objectMapper.readValue(msg, Map.class);
                Map<?, ?> validation = (Map<?, ?>) map.get("validation");
                if (validation != null) {
                    for (Map.Entry<?, ?> pair : validation.entrySet()) {
                        bindingResult.addError(new FieldError(bindingResult.getObjectName(), pair.getKey().toString(),
                                pair.getValue().toString()));
                    }
                }
            } catch (IOException e1) {
                // ignore
            }
        }
    }

    public static ResponseEntity<?> ok() {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public static <T> ResponseEntity<T> ok(T obj) {
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    public static <T> ResponseEntity<T> created(T obj) {
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }

    public static ResponseEntity<?> noContent() {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    public static ResponseEntity<?> notFound() {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public static ResponseEntity<?> badRequest() {
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    public static ResponseEntity<?> badRequest(BindingResult bindingResult) {
        return new ResponseEntity<>(toErrorMessage(bindingResult), HttpStatus.BAD_REQUEST);
    }

    public static ResponseEntity<?> forbidden() {
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    public static ResponseEntity<?> unauthorized() {
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    /**
     * 返回前台参数
     *
     * @param code 状态码 如200
     * @param msg  信息
     * @param list list集合
     * @return map
     */
    public static Map returnForegroundParameter(Integer code, String msg, List<?> list) {
        Map map = new HashMap(4);
        map.put("code", code);
        map.put("msg", msg);
        map.put("data", list);
        return map;
    }
    /**
     * 返回前台参数
     *
     * @param code 状态码 如200
     * @param msg  信息
     * @return Map
     */
    public static Map returnForegroundParameter(Integer code, String msg) {
        Map map = new HashMap(4);
        map.put("code", code);
        map.put("msg", msg);
        map.put("data", new ArrayList<>());
        return map;
    }

}