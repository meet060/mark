
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
  `number` int(100) unsigned zerofill DEFAULT NULL COMMENT '图片编号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `resource` VALUES (1, '测试模块', 'D:\\upload\\package\\file\\20年检验报告 (2).jpg', '测试', NULL);
INSERT INTO `resource` VALUES (2, 'AboutZR', 'D:\\upload\\package\\file\\banner1.png', '关于中润模页面，轮播图1', 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);
INSERT INTO `resource` VALUES (3, 'AboutZR', 'D:\\upload\\package\\file\\banner2.png', '关于中润模页面，轮播图2', 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002);
INSERT INTO `resource` VALUES (4, 'AboutZR', 'D:\\upload\\package\\file\\banner2.png', '关于中润模页面，轮播图3', 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013);

-- ----------------------------
-- Table structure for after_sale
-- ----------------------------
DROP TABLE IF EXISTS `after_sale`;
CREATE TABLE `after_sale`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '售后id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电话',
  `mailbox` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '地址',
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '内容',
  `status` int(11) NULL DEFAULT NULL COMMENT '状态(0:处理、1待处理)',
  `creation_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `modification_time` datetime NULL DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;