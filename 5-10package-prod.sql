/*
 Navicat Premium Data Transfer

 Source Server         : 本机
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : package-prod

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 10/05/2020 21:05:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
  `creation_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `modification_time` datetime(0) NULL DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 56 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of after_sale
-- ----------------------------
INSERT INTO `after_sale` VALUES (18, '张三', '13240669956', 'string@163.com', '中国北京', '我想详细了解咱公司的产品', 0, '2020-04-25 14:21:02', '2020-04-25 14:20:27');
INSERT INTO `after_sale` VALUES (19, '李四', '12566693545', 'str@163.com', '中国香港', '看着不错想详细了解', 1, '2020-04-26 13:42:13', NULL);
INSERT INTO `after_sale` VALUES (20, 'string', 'string', 'string', 'string', 'string', 1, '2020-04-30 11:56:52', NULL);
INSERT INTO `after_sale` VALUES (21, '1', '1', '1', '1', '1', 1, '2020-04-30 12:01:41', NULL);
INSERT INTO `after_sale` VALUES (22, 'string', 'string', 'string', 'string', 'string', 1, '2020-04-30 12:13:33', NULL);
INSERT INTO `after_sale` VALUES (23, '2', '2', '2', '2', '2', 1, '2020-05-01 12:58:00', NULL);
INSERT INTO `after_sale` VALUES (24, '2', '2', '2', '2', '2', 1, '2020-05-01 12:58:51', NULL);
INSERT INTO `after_sale` VALUES (25, '1', '1', '1', '1', '1', 1, '2020-05-01 13:37:03', NULL);
INSERT INTO `after_sale` VALUES (26, '', '', '', '', '', 1, '2020-05-01 13:38:30', NULL);
INSERT INTO `after_sale` VALUES (27, '', '', '', '', '', 1, '2020-05-01 13:38:31', NULL);
INSERT INTO `after_sale` VALUES (28, 'ceshi', 'ceshi', 'ceshi', 'ceshi', 'ceshi', 1, '2020-05-01 13:38:46', NULL);
INSERT INTO `after_sale` VALUES (29, '张三', '19999999999', '11111', 'hahahah ', 'afdafafasf', 1, '2020-05-03 13:04:49', NULL);
INSERT INTO `after_sale` VALUES (30, '', '', '', '', '', 1, '2020-05-04 04:38:20', NULL);
INSERT INTO `after_sale` VALUES (31, '', '', '', '', '', 1, '2020-05-04 04:38:20', NULL);
INSERT INTO `after_sale` VALUES (32, '', '', '', '', '', 1, '2020-05-04 04:38:20', NULL);
INSERT INTO `after_sale` VALUES (33, 'dsfde', '', '', 'dfdf', '', 1, '2020-05-04 05:10:49', NULL);
INSERT INTO `after_sale` VALUES (34, '', '', '', 'ddd', '', 1, '2020-05-04 05:10:56', NULL);
INSERT INTO `after_sale` VALUES (35, 'sadadwefwe', 'sss', 'sss', 'sss', 'sadw', 1, '2020-05-04 05:50:29', NULL);
INSERT INTO `after_sale` VALUES (36, 'ssss', '', 'sss', 'sss', 'ssss', 1, '2020-05-04 05:56:48', NULL);
INSERT INTO `after_sale` VALUES (37, '', '', '', '', '', 1, '2020-05-04 05:59:28', NULL);
INSERT INTO `after_sale` VALUES (38, '', '', '', '', '', 1, '2020-05-04 05:59:34', NULL);
INSERT INTO `after_sale` VALUES (39, '', '先杀大', '', '', '', 1, '2020-05-04 06:01:01', NULL);
INSERT INTO `after_sale` VALUES (40, '', '时划分为', '', '', '', 1, '2020-05-04 06:01:07', NULL);
INSERT INTO `after_sale` VALUES (41, '', '13522532653', '', '', '', 1, '2020-05-04 06:01:28', NULL);
INSERT INTO `after_sale` VALUES (42, '', '15225325262', '', '', '', 1, '2020-05-04 06:01:58', NULL);
INSERT INTO `after_sale` VALUES (43, '', '15102722131', '5255', '', '', 1, '2020-05-04 07:01:03', NULL);
INSERT INTO `after_sale` VALUES (44, '', '15102722131', '5255', '', '', 1, '2020-05-04 07:01:03', NULL);
INSERT INTO `after_sale` VALUES (45, '', '15102722131', '5255', '', '', 1, '2020-05-04 07:01:03', NULL);
INSERT INTO `after_sale` VALUES (46, '', '15102722131', '5255', '', '', 1, '2020-05-04 07:01:03', NULL);
INSERT INTO `after_sale` VALUES (47, '', '15102722131', '5255', '', '', 1, '2020-05-04 07:01:03', NULL);
INSERT INTO `after_sale` VALUES (48, '', '15102722131', '5255', '', '', 1, '2020-05-04 07:01:03', NULL);
INSERT INTO `after_sale` VALUES (49, '', '15102722131', '5255', '', '', 1, '2020-05-04 07:01:03', NULL);
INSERT INTO `after_sale` VALUES (50, '', '15102722131', '1512', '', '', 1, '2020-05-04 07:02:13', NULL);
INSERT INTO `after_sale` VALUES (51, '', '15120252325', '152', '', '', 1, '2020-05-04 07:03:08', NULL);
INSERT INTO `after_sale` VALUES (52, '', '15223526326', '1525', '', '', 1, '2020-05-04 07:04:38', NULL);
INSERT INTO `after_sale` VALUES (53, '', '15102252253', '1525', '', '', 1, '2020-05-04 07:05:06', NULL);
INSERT INTO `after_sale` VALUES (54, '', '15102722131', '5125', '', '', 1, '2020-05-04 07:06:06', NULL);
INSERT INTO `after_sale` VALUES (55, '', '15125252362', '362', '', '', 1, '2020-05-04 07:06:45', NULL);

-- ----------------------------
-- Table structure for contact_us
-- ----------------------------
DROP TABLE IF EXISTS `contact_us`;
CREATE TABLE `contact_us`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '联系我们id',
  `company_cn` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '公司英文名称',
  `company_en` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '公司中文名称',
  `address_cn` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '公司地址英文',
  `address_en` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '公司地址中文',
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '公司电话',
  `cell_phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手机',
  `fax` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '公司传真',
  `mailbox` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '公司邮箱',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of contact_us
-- ----------------------------
INSERT INTO `contact_us` VALUES (1, '邯郸市中润塑料制品有限公司', 'Handan zhongrun plastic products co. LTD', '河北省邯郸市馆陶县工业园区', 'Industrial park, guantao county, handan city, hebei province', '+86-0310-2882068', '15369078000', '+86-0310-2886200211', 'zyc1@zrplasticproducts.com');

-- ----------------------------
-- Table structure for resource
-- ----------------------------
DROP TABLE IF EXISTS `resource`;
CREATE TABLE `resource`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `module` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '模块',
  `url` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '路径',
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '描述',
  `number` int(100) UNSIGNED NULL DEFAULT NULL COMMENT '图片编号',
  `position` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '模块下位置，例如轮播图，产品',
  `creat_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'title',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 193 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of resource
-- ----------------------------
INSERT INTO `resource` VALUES (69, 'AboutZR', 'c022f31-880d-4e.jpg', '际一流的先进设备，建有严格完善的质量控制体系，从原材料开始逐一实施高标准控制流程。凭借在FIBC领域内的专业技术，东亚能够为各行业客户提供包装综合解决方案', 1, 'banner', '2020-04-25 16:28:46', '中国高端FIBC产业先行者与核心解决方案商');
INSERT INTO `resource` VALUES (70, 'AboutZR', '4640223-462b-4b.png', '始终跟进国际一流的先进设备，建有严格完善的质量控制体系从原材料开始，逐一实施高标准控制流程。', 2, 'banner', '2020-04-25 16:30:07', '坚持跟进国际前沿技术，设备提升与国际同行保持同步。中国高端FIBC产');
INSERT INTO `resource` VALUES (71, 'AboutZR', 'c35a2eb-25a8-46.jpg', '无论是产品细分，还是个性化定制，我们力求为每一个客户实现最合适 最先进的包装解决制造方案。', 3, 'banner', '2020-04-25 16:30:22', '用更多时间，注重在更小的细节上，为了承载您与您企业更大的未来。');
INSERT INTO `resource` VALUES (72, 'AboutZR', 'e848a6b-5e50-44.png', 'TYPE-A拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能', 1, 'neidai', '2020-04-25 16:35:13', 'TYPE-A拉筋集装袋');
INSERT INTO `resource` VALUES (73, 'AboutZR', 'e920aca-ad93-46.png', 'TYPE-A重型集装袋/普通集装袋/不具备防静电功能,符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准', 2, 'neidai', '2020-04-25 16:36:54', 'TYPE-A重型集装袋');
INSERT INTO `resource` VALUES (74, 'AboutZR', 'e6c65f1-cc3b-40.png', 'TYPE-B防静电集装袋/低击穿电压，防止静电产生-符合国际电工委员会IEC 61340-4-4标准', 3, 'neidai', '2020-04-25 16:37:51', 'TYPE-B防静电集装袋');
INSERT INTO `resource` VALUES (75, 'AboutZR', '7999b56-7955-47.png', 'TYPE-C导电集装袋/防静电集装袋/通过导电丝及传导线将静电释放到地下', 4, 'neidai', '2020-04-25 16:38:48', 'TYPE-C导电集装袋');
INSERT INTO `resource` VALUES (76, 'AboutZR', 'index-video-1.mp4', '中润是一家专业的集装袋（fibc）包装袋生产企业，创始与2011年，公司专心与集装袋（FIBC）的研发与生产制造，我们向全球中高端客户提供可信赖、高性价比、定制化的产品及服务，常规集装袋、防静电集装袋、防漏防潮集装袋、拉筋防漏集装袋，为包括化工、矿产、食品、药品、农业等行业提供高可靠性的包装解决方案，目前，我们的生产制造基地位于河北邯郸。', 1, 'about', '2020-04-25 16:41:41', '十多年FIBC设计制作经验，以及持续增长新产品能力');
INSERT INTO `resource` VALUES (77, 'AboutZR', '1-1.png', '坚持跟进国际前沿技术，设备提升与国际同行保持同步。\n生产线始终跟进国际一流的先进设备，以及优秀的技术人员是出产行业标准级别产品的决定性因素。', 1, 'innovation', '2020-04-25 16:44:12', '改善创新，拓展可能');
INSERT INTO `resource` VALUES (78, 'AboutZR', '1-2.png', '坚持跟进国际前沿技术，设备提升与国际同行保持同步。\n生产线始终跟进国际一流的先进设备，以及优秀的技术人员是出产行业标准级别产品的决定性因素。', 2, 'innovation', '2020-04-25 16:44:55', '改善创新，拓展可能');
INSERT INTO `resource` VALUES (79, 'AboutZR', '1-3.png', '坚持跟进国际前沿技术，设备提升与国际同行保持同步。\n生产线始终跟进国际一流的先进设备，以及优秀的技术人员是出产行业标准级别产品的决定性因素。', 3, 'innovation', '2020-04-25 16:45:07', '改善创新，拓展可能');
INSERT INTO `resource` VALUES (80, 'AboutZR', '1-4.png', '坚持跟进国际前沿技术，设备提升与国际同行保持同步。\n生产线始终跟进国际一流的先进设备，以及优秀的技术人员是出产行业标准级别产品的决定性因素。', 4, 'innovation', '2020-04-25 16:45:13', '改善创新，拓展可能');
INSERT INTO `resource` VALUES (81, 'AboutZR', 'c-1.png', '无论是产品细分，还是个性化定制，我们力求为每一个客户实现最合适，最先进的包装解决制造方案。', 1, 'program', '2020-04-25 16:52:35', '食品包装');
INSERT INTO `resource` VALUES (82, 'AboutZR', 'c-2.png', '无论是产品细分，还是个性化定制，我们力求为每一个客户实现最合适，最先进的包装解决制造方案。', 2, 'program', '2020-04-25 16:53:47', '医药包装');
INSERT INTO `resource` VALUES (83, 'AboutZR', 'c-3.png', '无论是产品细分，还是个性化定制，我们力求为每一个客户实现最合适，最先进的包装解决制造方案。', 3, 'program', '2020-04-25 16:54:38', '颜料包装');
INSERT INTO `resource` VALUES (84, 'AboutZR', 'c-4.png', '无论是产品细分，还是个性化定制，我们力求为每一个客户实现最合适，最先进的包装解决制造方案。', 4, 'program', '2020-04-25 16:55:12', '化工包装');
INSERT INTO `resource` VALUES (85, 'AboutZR', '24e9c7b-49a8-49.png', '无论是产品细分，还是个性化定制，我们力求为每一个客户实现最合适，最先进的包装解决制造方案。', 1, 'link', '2020-04-25 17:02:39', '在您繁复和缜密的运转中，包装不是令您分心的一环，这是中润努力的的方向。\n我们尽力于，也善于让您的企业在使用包装运输时消除顾忌，甚至无需过多关注包装的存在，同时为您节省资金，我们的任务就是通过不断改进和创新满足您的需求。\n\n');
INSERT INTO `resource` VALUES (86, 'AboutZR', '8b0e724-652c-45.jpg', NULL, 1, 'company_banner', '2020-04-25 17:12:00', '十多年FIBC设计制作经验，以及持续增长新产品能力');
INSERT INTO `resource` VALUES (87, 'AboutZR', '8cff0c3-18e1-46.jpg', '...', 1, 'companyIntroduction', '2020-04-25 17:13:25', '公司介绍');
INSERT INTO `resource` VALUES (88, 'AboutZR', '3ab87df-1d53-46.jpg', '公司核心业务是FIBC（柔性集装袋）的研发与生产制造，我们向全球中高端客户提供可信赖、高性价比、可定制化产品，常规集装袋和防静电集装袋为主，为包括化工、矿产、食品、药物、农业等行业提供高可靠性包装解决方案，', 2, 'companyIntroduction', '2020-04-25 17:14:33', '因为专注于此，所以持续领先');
INSERT INTO `resource` VALUES (89, 'AboutZR', '71cf1f4-71ca-41.jpg', NULL, 1, 'industryRecognition', '2020-04-26 03:38:46', '中润产品系列均通过了国家');
INSERT INTO `resource` VALUES (90, 'AboutZR', '15593ae-d770-46.jpg', NULL, 2, 'industryRecognition', '2020-04-26 03:39:23', '中润产品系列均通过了国家');
INSERT INTO `resource` VALUES (91, 'AboutZR', '0f7fc14-a2c1-4c.jpg', NULL, 3, 'industryRecognition', '2020-04-26 03:39:42', '中润产品系列均通过了国家');
INSERT INTO `resource` VALUES (92, 'AboutZR', '418e1d3-552b-4e.jpg', NULL, 4, 'industryRecognition', '2020-04-26 03:39:54', '中润产品系列均通过了国家');
INSERT INTO `resource` VALUES (93, 'AboutZR', 'd61f622-56da-45.jpg', NULL, 5, 'industryRecognition', '2020-04-26 03:40:09', '中润产品系列均通过了国家');
INSERT INTO `resource` VALUES (94, 'AboutZR', 'ddcff07-23f2-4d.jpg', NULL, 6, 'industryRecognition', '2020-04-26 03:40:23', '中润产品系列均通过了国家');
INSERT INTO `resource` VALUES (95, 'AboutZR', '2b1f957-22d6-4c.jpg', NULL, 7, 'industryRecognition', '2020-04-26 03:40:36', '中润产品系列均通过了国家');
INSERT INTO `resource` VALUES (96, 'AboutZR', '4d0181a-d88e-43.jpg', NULL, 8, 'industryRecognition', '2020-04-26 03:40:46', '中润产品系列均通过了国家');
INSERT INTO `resource` VALUES (97, 'AboutZR', 'e77fb1f-3f67-46.jpg', NULL, 9, 'industryRecognition', '2020-04-26 03:40:58', '中润产品系列均通过了国家');
INSERT INTO `resource` VALUES (98, 'AboutZR', 'd00993d-bad2-4d.jpg', NULL, 10, 'industryRecognition', '2020-04-26 03:41:08', '中润产品系列均通过了国家');
INSERT INTO `resource` VALUES (99, 'AboutZR', '86c18ac-bb4d-46.jpg', NULL, 11, 'industryRecognition', '2020-04-26 03:41:22', '中润产品系列均通过了国家');
INSERT INTO `resource` VALUES (100, 'AboutZR', '7e944af-e930-43.jpg', NULL, 12, 'industryRecognition', '2020-04-26 03:41:42', '中润产品系列均通过了国家');
INSERT INTO `resource` VALUES (101, 'productCenter', 'c7229cc-f011-4c.png', 'TYPE-A拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能', 1, 'outerBag', '2020-04-26 04:08:15', 'TYPE-A拉筋集装袋');
INSERT INTO `resource` VALUES (102, 'productCenter', 'd4116c1-5e5e-43.png', 'YPE-A重型集装袋/普通集装袋/不具备防静电功能', 2, 'outerBag', '2020-04-26 04:09:16', 'TYPE-A重型集装袋');
INSERT INTO `resource` VALUES (103, 'productCenter', '729cb85-8e91-44.png', 'TYPE-B防静电集装袋/低击穿电压，防止静电产生', 3, 'outerBag', '2020-04-26 04:09:47', 'TYPE-B防静电集装袋');
INSERT INTO `resource` VALUES (104, 'productCenter', '742cbd5-25b6-43.png', 'TYPE-C导电集装袋 符合国际电工委员会IEC 61340-4-4标准', 4, 'outerBag', '2020-04-26 04:11:48', 'TYPE-B防静电集装袋');
INSERT INTO `resource` VALUES (106, 'productCenter', 'ed6b1b1-5daf-4b.jpg', '中润拥有食品级吹膜车间，自产食品级A型膜、B型膜、C型膜', 1, 'innerBag', '2020-04-26 04:13:31', '内袋系列');
INSERT INTO `resource` VALUES (107, 'productCenter', 'dab6843-4a58-43.png', '东严苛的工艺流程是保证产品品质始终如一的唯一途径。我们的技术专家将与你保持密切合作，共同参与方案制定，一起探讨工艺流程，确保产品得到最佳实现的方法。', 1, 'flexibleFreightBags', '2020-04-26 04:16:24', '集装袋 / 生产设备流程');
INSERT INTO `resource` VALUES (109, 'productCenter', '894a98f-769a-43.jpg', '高效过滤的洁净强风吹除人员衣服表面附着的尘埃颗粒', 1, 'workFlow', '2020-04-26 04:18:07', '高效过滤的洁净');
INSERT INTO `resource` VALUES (110, 'productCenter', 'dc5cd09-63ec-43.jpg', '我们的员工都具有三-五年的工作经验，专注每一个细节，在生产环节做到剔除每一个线头', 2, 'workFlow', '2020-04-26 04:19:03', '多年的工作经验');
INSERT INTO `resource` VALUES (111, 'technicalSupport', 'b70956d-4f5d-4d.jpg', '坚持跟进国际前沿技术，设备提升与国际同行保持同步。\r生产设备是东亚重要的组成部分，具备国内最出众的全线生产设备以及优秀的操作人员，是出产行业标准级别产品的决定性因素。\r所以东亚格外注重生产环节的一切细节，在流程每个环节注意异物控制、品质把关，保证产品的细节和超低损耗率，以适应客户日益严格的细节要求。\r', 1, 'technique', '2020-04-26 04:27:09', '技术支持');
INSERT INTO `resource` VALUES (112, 'technicalSupport', 'fc80886-b125-4a.jpg', '作为全国首个获得工业产品（大包装）生产许可证的企业，东亚拥有超过25年的创新经验积累，得益于第一手宝贵经验，东亚的技术人员在各个专业领域都是出色的专家和人才。\r\n生产线始终跟进国际一流的先进设备，建有严格完善的质量控制体系，从原材料、拉丝、缝纫、检验、库存以及运输环节逐一实施高标准控制流程，仅仅以拉丝环节为例，我们就掌控着领先行业技术', 1, 'technique', '2020-04-26 04:28:27', '改善创新，拓展可能');
INSERT INTO `resource` VALUES (113, 'technicalSupport', NULL, '为了保持领先的竞争力，我们竭尽所能在各方面提高产品水准，并保持卓越的性价比。同时不断投资技术，制定了未来包装生产工厂所应该达到的最高标准。', 1, 'deviceInstance', '2020-04-26 04:32:19', '设备实力');
INSERT INTO `resource` VALUES (114, 'technicalSupport', '54ea096-af5a-46.png', '全自动拉丝，无需人工换卷', 1, 'device', '2020-04-26 04:33:59', '全自动拉丝机');
INSERT INTO `resource` VALUES (115, 'technicalSupport', '68be6a3-f0bb-4b.png', '全自动拉丝，无需人工换卷', 2, 'device', '2020-04-26 04:34:21', '全自动拉丝机');
INSERT INTO `resource` VALUES (116, 'technicalSupport', '4479642-01dc-45.png', '全自动拉丝，无需人工换卷', 3, 'device', '2020-04-26 04:34:37', '全自动拉丝机');
INSERT INTO `resource` VALUES (117, 'technicalSupport', 'e91573c-e267-4e.png', '全自动拉丝，无需人工换卷', 4, 'device', '2020-04-26 04:34:47', '全自动拉丝机');
INSERT INTO `resource` VALUES (118, 'technicalSupport', '2de3cdd-af89-4b.png', '全自动拉丝，无需人工换卷', 5, 'device', '2020-04-26 04:34:57', '全自动拉丝机');
INSERT INTO `resource` VALUES (120, 'pressCenter', '842cec1-f103-4b.jpg', NULL, 1, 'banner', '2020-04-26 04:40:27', NULL);
INSERT INTO `resource` VALUES (121, 'pressCenter', '0dd81f3-59c9-40.jpg', NULL, 1, 'news', '2020-04-26 04:41:25', '测试新闻');
INSERT INTO `resource` VALUES (122, 'contactUs', '7145df1-047a-40.jpg', NULL, 1, 'banner', '2020-04-26 04:42:55', '中润，助你成就每一程');
INSERT INTO `resource` VALUES (123, 'contactUs', '89e193c-6c33-4e.jpg', '中润视员工为公司最宝贵的财富，愿意吸纳优秀和有潜力的人才，并为员工提供发展个人才能舞台，希望每一位员工都能在中润得到良好的发展。\n\n', 1, 'bottom', '2020-04-26 04:44:21', '加入中润');
INSERT INTO `resource` VALUES (124, 'AboutZR', 'b144c8d-517d-49.png', 'TYPE-C免托盘导电集装袋/防静电集装袋/通过导电丝及传导线将静电释放到地下', 1, 'waidai', '2020-04-26 06:37:40', 'TYPE-C免托盘导电集装袋');
INSERT INTO `resource` VALUES (125, 'AboutZR', '9958690-96bd-4a.png', '拉筋内袋集装袋/铝膜拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能', 3, 'waidai', '2020-04-26 06:43:00', '拉筋内袋集装袋');
INSERT INTO `resource` VALUES (126, 'AboutZR', 'eb38e5e-74c6-46.png', '蔬菜透气袋/防膨胀集装袋/普通集装袋/不具备防静电功能 符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准', 4, 'waidai', '2020-04-26 06:44:00', '蔬菜透气袋');
INSERT INTO `resource` VALUES (127, 'AboutZR', '024677f-cd8a-48.png', 'TYPE-D导电集装袋/防静电集装袋/无需接地即可安全使用', 2, 'waidai', '2020-04-26 06:42:00', 'TYPE-D导电集装袋');
INSERT INTO `resource` VALUES (128, 'productCenter', NULL, '无论是产品细分，还是个性化定制，我们力求为每一个客户实现最合适，最先进的包装解决制造方案。', 1, 'allIndustry', '2020-04-26 14:35:35', '覆盖全行业的定制包装解决方案');
INSERT INTO `resource` VALUES (129, 'productCenter', 'c-1.png', NULL, 1, 'scheme', '2020-04-26 14:37:09', '食品包装');
INSERT INTO `resource` VALUES (130, 'productCenter', 'c-2.png', NULL, 2, 'scheme', '2020-04-26 14:37:30', '医药包装');
INSERT INTO `resource` VALUES (131, 'productCenter', 'c-3.png', NULL, 3, 'scheme', '2020-04-26 14:37:52', '颜料包装');
INSERT INTO `resource` VALUES (132, 'productCenter', 'c-4.png', NULL, 4, 'scheme', '2020-04-26 14:38:07', '化工包装');
INSERT INTO `resource` VALUES (133, 'productCenter', 'c-5.png', NULL, 5, 'scheme', '2020-04-26 14:38:33', '矿物包装');
INSERT INTO `resource` VALUES (134, 'productCenter', 'c-6.png', NULL, 6, 'scheme', '2020-04-26 14:38:58', '塑料包装');
INSERT INTO `resource` VALUES (135, 'productCenter', 'c-7.png', NULL, 7, 'scheme', '2020-04-26 14:39:21', '能源新材料');
INSERT INTO `resource` VALUES (136, 'productCenter', 'c-8.png', NULL, 8, 'scheme', '2020-04-26 14:39:43', '农药包装');
INSERT INTO `resource` VALUES (137, 'productCenter', NULL, '中润对产品出厂有一套严格的质量把控流程，我们定期送检国际电工委员会授权的海外实验室进行内外袋的防静电、导电性能测试；定期送检国家危险货物包装检测重点实验室（江苏）进行物理性能测试', 1, 'qualityControlProcess', '2020-04-26 14:40:52', '每一个产品都经过严格的质控流程');
INSERT INTO `resource` VALUES (138, 'productCenter', 'b-1.jpg', '全新食品级聚丙烯、聚乙烯', 1, 'flow', '2020-04-26 14:42:14', '原料选择');
INSERT INTO `resource` VALUES (139, 'productCenter', 'b-2.jpg', '定期送检国际电工委员会授权的海外实验室进行内外袋的防静电、导电性能测试；\n定期送检国家危险货物包装检测重点实验室（江苏）进行物理性能，如：承重、拉力等测试，具有办理出入境货物包装性能检验结果单的资质。', 2, 'flow', '2020-04-26 14:43:07', '性能测试');
INSERT INTO `resource` VALUES (140, 'productCenter', 'b-3.jpg', '缝制中袋体可见线头处理出厂前异物排查 / 离子风静电除异物 — 强光灯照 — 金属探测', 3, 'flow', '2020-04-26 14:43:50', '异物剔除');
INSERT INTO `resource` VALUES (141, 'productCenter', 'b-4.jpg', '微生物指标检验报告（PP PE）/ 有害物质指标检验报告（PP PE）', 4, 'flow', '2020-04-26 14:44:24', '外部检测');
INSERT INTO `resource` VALUES (142, 'productCenter', '928f02a-4a0b-48.jpg', NULL, 1, 'banner', '2020-04-26 14:49:06', '中国高端FIBC产业先行者与核心解决方案商');
INSERT INTO `resource` VALUES (143, 'embellishOfInformation', 'h1.jpg', '行业认可', 1, 'industryRecognition', '2020-04-19 17:51:48', '图一');
INSERT INTO `resource` VALUES (144, 'embellishOfInformation', 'h2.jpg', '行业认可', 1, 'industryRecognition', '2020-04-19 17:51:48', '图二');
INSERT INTO `resource` VALUES (145, 'embellishOfInformation', 'h3.jpg', '行业认可', 1, 'industryRecognition', '2020-04-19 17:51:48', '图三');
INSERT INTO `resource` VALUES (146, 'embellishOfInformation', 'h4.jpg', '行业认可', 1, 'industryRecognition', '2020-04-19 17:51:48', '图四');
INSERT INTO `resource` VALUES (147, 'embellishOfInformation', 'h5.jpg', '行业认可', 1, 'industryRecognition', '2020-04-19 17:51:48', '图五');
INSERT INTO `resource` VALUES (148, 'embellishOfInformation', 'h6.jpg', '行业认可', 1, 'industryRecognition', '2020-04-19 17:51:48', '图六');
INSERT INTO `resource` VALUES (149, 'embellishOfInformation', 'h7.jpg', '行业认可', 1, 'industryRecognition', '2020-04-19 17:51:48', '图七');
INSERT INTO `resource` VALUES (150, 'embellishOfInformation', 'h8.jpg', '行业认可', 1, 'industryRecognition', '2020-04-19 17:51:48', '图八');
INSERT INTO `resource` VALUES (151, 'embellishOfInformation', 'h9.jpg', '行业认可', 1, 'industryRecognition', '2020-04-19 17:51:48', '图九');
INSERT INTO `resource` VALUES (152, 'embellishOfInformation', 'h10.jpg', '行业认可', 1, 'industryRecognition', '2020-04-19 17:51:48', '图十');
INSERT INTO `resource` VALUES (153, 'embellishOfInformation', 'h1.jpg', '行业认可', 1, 'industryRecognition', '2020-04-19 17:51:48', '图十一');
INSERT INTO `resource` VALUES (154, 'embellishOfInformation', 'h12.jpg', '行业认可', 1, 'industryRecognition', '2020-04-19 17:51:48', '图十一');
INSERT INTO `resource` VALUES (155, 'embellishOfInformation', '04.jpg', '打破传统思维的局限，始终保持设备和产能提升位于国内先进', 1, 'banner', '2020-04-19 17:24:08', '打破传统思维的局限，始终保持设备和产能提升位于国内先进');
INSERT INTO `resource` VALUES (156, 'embellishOfInformation', '00000.jpg', '<p><span style=\"font-size:18px\">邯郸市中润塑料制品有限公司<br />\r\n2011年，中润创始。<br />\r\n中国的北部我们以最早深耕FIBC产业的先行者出身，专业、专注、专心开发每一款新的高要求的FIBC。<br />\r\n公司使命：</span></p>\r\n\r\n<p style=\"margin-left:40px\"><span style=\"font-size:18px\">对外、以客户为中心、以市场为导向、成就客户满意度。<br />\r\n把产品、公司及服务、做到极致。<br />\r\n对内：以奋斗者为本、成就员工、与员工分享财富，让员工得到尊重、爱和希望。</span></p>\r\n\r\n<p style=\"margin-left:40px\"><span style=\"font-size:18px\">如今我们是世界五百强工厂及中国国企、国际知名企业的合作伙伴。<br />\r\n我们多年来累计的行业经验，为客户设计及推荐最合适的产品。<br />\r\n开拓高端市场、实施精品战略、树立行业标准、打造中润品牌。</span></p>\r\n\r\n<p style=\"margin-left:40px\"><span style=\"font-size:18px\">如今，中润始终在产业发展的路上不断进步，与客户同心同行。</span></p>\r\n\r\n<p><span style=\"font-size:18px\">保持潜心科研的同时，建立更加有序合力的管理模式，探求更加精细的品质控制，为客户想的更多。不断探索，创造持之以恒。</span></p>\r\n\r\n<p style=\"margin-left:40px\"><br />\r\n&nbsp;</p>\r\n\r\n', 1, 'companyIntroduction', '2020-04-19 17:48:16', '产品信息');
INSERT INTO `resource` VALUES (157, 'embellishOfInformation', '06.jpg', '<p><span style=\"font-size:20px\">&nbsp;&nbsp;&nbsp;&nbsp; 公司核心业务是FIBC（柔性集装袋）的研发、生产及销售，我们向全球中高端客户提供可信赖、高性价比、定制化的产品及服务，常规集装袋和防静电集装袋为主，为包括化工、矿产、食品、药物中间体、农业等行业提供可靠性包装解决方案。</span></p>\r\n\r\n<p><span style=\"font-size:20px\">目前，我们的生产基地位于河北邯郸。</span></p>\r\n', 2, 'companyIntroduction', '2020-04-19 17:51:48', '产品信息');
INSERT INTO `resource` VALUES (188, 'productCenter', NULL, '多种定制化FIBC（柔性集装袋）产品，针对不同市场和应用领域，东亚拥有多年积累的专业技术经验。', 1, 'outerBagTitle', '2020-04-19 19:51:48', '外袋系列');
INSERT INTO `resource` VALUES (189, 'technicalSupport', 'd753b90-31ca-4e.jpg', NULL, 1, 'banner', '2020-04-27 14:21:48', '');
INSERT INTO `resource` VALUES (190, 'pressCenter', '0dd81f3-59c9-40.jpg', '深蓝的天空中挂着一轮金黄的圆月，下面是海边的沙地，都种着一望无际的碧绿的西瓜。其间有一个十一二岁的少年，项带银圈，手捏一柄钢叉，向一匹猹②用力地刺去。那猹却将身一扭，反从他的胯下逃走了。\n　　这少年便是闰土。我认识他时，也不过十多岁，离现在将有三十年了；那时我的父亲还在世，家景也好，我正是一个少爷。那一年，我家是一件大祭祀的值年。这祭祀，说是三十多年才能轮到一回，所以很郑重；正月里供祖像，供品很多，祭器很讲究，拜的人也很多，祭器也很要防偷去。我家只有一个忙月（我们这里给人做工的分三种：整年给一定人家做工的叫长年；按日给人做工的叫短工；自己也种地，只在过年过节以及收租时候来给一定的人家做工的称忙月），忙不过来，他便对父亲说，可以叫他的儿子闰土来管祭器的。\n　　我的父亲允许了；我也很高兴，因为我早听到闰土这名字，而且知道他和我仿佛年纪，闰月生的，五行缺土，所以他的父亲叫他闰土。他是能装弶捉小鸟雀的。\n　　我于是日日盼望新年，新年到，闰土也就到了。好容易到了年末，有一日，母亲告诉我，闰土来了，我便飞跑地去看。他正在厨房里，紫色的圆脸，头戴一顶小毡帽，颈上套一个明晃晃的银项圈，这可见他的父亲十分爱他，怕他死去，所以在神佛面前许下愿心，用圈子将他套住了。他见人很怕羞，只是不怕我，没有旁人的时候，便和我说话，于是不到半日，我们便熟识了。\n　　我们那时候不知道谈些什么，只记得闰土很高兴，说是上城之后，见了许多没有见过的东西。\n　　第二日，我便要他捕鸟。他说：“这不能。须大雪下了才好。我们沙地上，下了雪，我扫出一块空地来，用短棒支起一个大竹匾，撒下秕谷，看鸟雀来吃时，我远远地将缚在棒上的绳子只一拉，那鸟雀就罩在竹匾下了。什么都有：稻鸡，角鸡，鹁鸪，蓝背……”\n　　我于是又很盼望下雪。\n　　闰土又对我说：“现在太冷，你夏天到我们这里来。我们日里到海边捡贝壳去，红的绿的都有，鬼见怕也有，观音手也有。晚上我和爹管四瓜去，你也去。”\n　　“管贼吗？”\n　　“不是。走路的人口渴了摘一个瓜吃，我们这里是不算偷的。要管的是獾猪，刺猬，猹。月亮地下，你听，啦啦地响了，猹在咬瓜了。你便捏了胡叉，轻轻地走去……”\n　　我那时并不知道这所谓猹的是怎么一件东西——便是现在也没有知道——只是无端地觉得状如小狗而很凶猛。', NULL, 'news', '2020-04-21 04:00:00', '测试新闻1');
INSERT INTO `resource` VALUES (191, 'pressCenter', '0dd81f3-59c9-40.jpg', '“它不咬人吗？”\n　　“有胡叉呢。走到了，看见猹了，你便刺。这畜生很伶俐，倒向你奔来，反从胯下窜了。它的皮毛是油一般的滑……\n　　我素不知道天下有这许多新鲜事：海边有如许五色的贝壳；西瓜有这样危险的经历，我先前单知道它在水果店里出卖罢了。\n　　“我们沙地里，潮汛要来的时候，就有许多跳鱼儿只是跳，都有青蛙似的两只脚……”\n　　啊！闰土的心里有无穷无尽的希奇的事，都是我往常的朋友所不知道的。他们不知道一些事，闰土在海边时．他们都和我一样只看见院子里高墙上的四角的天空。\n　　可惜正月过去了，闰土须回家里去。我急得大哭，他也躲到厨房里，哭着不肯出门，但终于被他父亲带走了。他后来还托他的父亲带给我一包贝壳和几支很好看的鸟毛，我也曾送他一两次东西，但从此没有再见面。', NULL, 'news', '2020-04-21 04:00:00', '测试新闻2');
INSERT INTO `resource` VALUES (192, 'pressCenter', '0dd81f3-59c9-40.jpg', '臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间：尔来二十有一年矣。\n\n　　先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明；故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。\n\n　　愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏。臣不胜受恩感激。\n\n　　今当远离，临表涕零，不知所言。', NULL, 'news', '2020-04-22 04:00:00', '测试新闻4');
INSERT INTO `resource` VALUES (200, 'productCenter', 'b144c8d-517d-49.png', 'TYPE-C免托盘导电集装袋/防静电集装袋/通过导电丝及传导线将静电释放到地下', 2, 'innerBag', '2020-04-26 06:37:40', 'TYPE-C免托盘导电集装袋');
INSERT INTO `resource` VALUES (203, 'productCenter', '024677f-cd8a-48.png', 'TYPE-D导电集装袋/防静电集装袋/无需接地即可安全使用', 3, 'innerBag', '2020-04-26 06:42:00', 'TYPE-D导电集装袋');
INSERT INTO `resource` VALUES (204, 'productCenter', '9958690-96bd-4a.png', '拉筋内袋集装袋/铝膜拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能', 4, 'innerBag', '2020-04-26 06:43:00', '拉筋内袋集装袋');
INSERT INTO `resource` VALUES (205, 'productCenter', 'eb38e5e-74c6-46.png', '蔬菜透气袋/防膨胀集装袋/普通集装袋/不具备防静电功能 符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准', 5, 'innerBag', '2020-04-26 06:44:00', '蔬菜透气袋');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '登录用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', 'c961330d13f32c1049c6ce9129631da2');
INSERT INTO `user` VALUES (9, 'test', '0b45c17a9734ff57a44897a6d2cb62c2');

SET FOREIGN_KEY_CHECKS = 1;
