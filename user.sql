/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50562
 Source Host           : localhost:33006
 Source Schema         : hgl

 Target Server Type    : MySQL
 Target Server Version : 50562
 File Encoding         : 65001

 Date: 07/04/2020 01:20:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '登录用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', 'c961330d13f32c1049c6ce9129631da2');
INSERT INTO `user` VALUES (5, 'string', 'string');
INSERT INTO `user` VALUES (7, '测试', '测试');
INSERT INTO `user` VALUES (8, 'string', 'string');

SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE if not exists `resource` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `module` varchar(10) DEFAULT '' COMMENT '模块',
  `url` varchar(100) DEFAULT NULL COMMENT '路径',
  `description` varchar(100) DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


