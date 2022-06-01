var api_url = ''
var jiekou = {
    "index_api": api_url + "/api/resource/queryIndexResources", //首页接口
    "industry_api": api_url + '/api/resource/checkIndustryApprovedPictures', //查询行业认可图片
    "about_api": api_url + '/api/resource/obtainInformationAboutZhongrun', //关于我们POST
    "contact_api": api_url + '/api/resource/getTheContactInformation', //联系我们
    "online_api": api_url + '/api/afterSale/addAfterSale', //在线咨询
    "product_api": api_url + '/api/resource/productCenterDataQuery', //产品实力
    "jishu_api": api_url + '/api/resource/queryTechnicalSupportInformation', //技术页面
    "xiangqing_api": api_url + '/api/resource/news/', //新闻详情
    "liuyan_api": api_url + '/api/afterSale/addAfterSale', //留言POST
    "lianxi_api": api_url + '/api/contactUs/enquiriesContactUsForInformation', //联系信息
    "seo_api": api_url + '/api/seo/findAll' //SEO
}
var index_url = ["hdzrsl.com", "hdzrsl.cn", "hbzrbz.com", "hbzrbz.cn"]
var index_lxr_txt = ['Han Yazhou', ' Zhao Yanchao', 'Qin Xiangqian', 'Li Quanxing']
var index_lxr = ['Han Yazhou 15028453452', 'Zhao Yanchao  18830092666', 'Qin Xiangqian  13931059103', 'Li Quanxing 15231029903']
var index_tel = ['15028453452', '18830092666', '13931059103', '15231029903']
var _index_url = window.location.href

//产品数据
var pro_box = {
    "pro_1": {
        title: "TYPE-A拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能",
        banner_txt: "TYPE-A拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能",
        pro_img: '/images/41.png',
        titleH: "TYPE-A拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能",
        titleHp: "TYPE-A拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能",
        titleH2: "TYPE-A拉筋集装袋/防膨胀集装袋/普通集装袋/<em>不具备防静电功能</em>",
        aqTxt: "<p>符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准</p>" +
            "<p>规格：105X105X120cm（尺寸可定制）</p>" +
            "<p>进料口可定制，出料口可定制。</p>" +
            "<p>产品适用：用于运输不易燃易爆的物品、并且集装袋周围没有易燃的溶剂或气体</p>",
        jzTxt: "禁止用于运输易燃易爆物品，禁止在使用环境周围放置易燃易爆的溶剂及气体。",
        protxt1: "TYPE-A拉筋集装袋是由普通的聚丙烯材料或者其他非传导性的材料制成的。在填充或清空集装袋时，货物在集装袋内侧的移动将会导致静电的产生。A型集装袋的一个本质缺陷就在于它没有任何机制来耗散静电，因此无法防止高强度的危险的传播型刷形放电PBD的产生。对于这种类型的集装袋，一般在静电防控方面不作要求，所以无需进行静电测试，也没有具体的测试标准，也无需贴分类标签。虽然可以贴上TYPE-A型集装袋的标签，但人们很少这么做。因为如果集装袋上没有贴上如B型，C型或D型之类的标签，那么就可以认定该集装袋为A型。",
        protxt2: "这款产品设计时考虑到装载超细粉末时会在针孔处喷漏出来，所以增加了防漏棉条及无纺布防漏、并且考虑到长宽尺寸大不能够两个并排放在卡车上运输，增加了拉筋来解决膨胀问题，考虑到客户装载物料流动性不好的情况下我们建议使用网状拉筋片作为拉角筋，避免物料进入角筋内部困难，本产品已解决以上所有问题。让客户任意装，使用无忧。",
        titleEn: "TYPE-A: Baffled Fibc bag/Protection against expansion/Ordinary FIBC bag/No anti-static function",
        banner_txtEn: "TYPE-A: Baffled Fibc bag/Protection against expansion/Ordinary FIBC bag/No anti-static function",
        pro_imgEn: '/images/42.png',
        titleHEn: "TYPE-A: Baffled Fibc bag",
        titleHpEn: "TYPE-A: Baffled Fibc bag/Protection against expansion/Ordinary FIBC bag/No anti-static functio",
        titleH2En: "TYPE-A: Baffled Fibc bag<em> / Protection against expansion/Ordinary FIBC bag/No anti-static function</em>",
        aqTxtEn: "<p> Product introduction</ p>" +
            "<p> Size:105X105X120cm（customization）</ p>" +
            "<p> Loading spout and unloading spout (customization)</ p>",
        jzTxtEn: "Suitable for the transportation of non-flammable and explosive articles, and there is no flammable volume or gas around",
        protxt1En: "Forbid transport flammable and explosive substances and forbid using for  flammable and explosive solvents and gases around them TYPE-A Fibc bags are made of ordinary polypropylene or other non-conductive materials. When filling or emptying the container bag, the movement of the goods inside the Fibc bag will lead to electrostatic generation. One of the essential defects of the Type-A Fibc bag is that it does not have any mechanism to dissipate static electricity, so it can not prevent the generation of dangerous propagating brush-shaped discharge PBD with high intensity. For this type of Fibc bags, generally do not require in electrostatic prevention and control, so there is no need to carry out electrostatic testing, there is no specific test standard, and there is no need to affix classification labels. Although it is possible to label TYPE-A Fibc bags, people rarely do so. Since there are no labels such as B, C or D on the container bag, the Fibc  bag can be identified as A.",
        protxt2En: "This product design takes into account the loading of ultra-fine powder will leak out in the pinhole, so added leakproof cotton and non-woven fabric leakproof, and considering the size of the length and width can not be two side-by-side transport on the truck, added tension baffle to solve the expansion problem, considering the customer loading material fluidity is not good, we recommend the use of mesh baffle, to avoid the material liquidity into the inner difficulties, has solved all the above problems. Let customers feel free to wear, use worry-free."
    },
    "pro_2": {
        title: "TYPE-B防静电集装袋/防静电吨包/放静电吨包袋/防静电吨袋",
        banner_txt: "TYPE-B防静电集装袋/防静电吨包/放静电吨包袋/防静电吨袋",
        pro_img: '/images/43.png',
        titleH: "TYPE-B防静电集装袋/防静电吨包/放静电吨包袋/防静电吨袋",
        titleHp: "TYPE-B防静电集装袋/防静电吨包/放静电吨包袋/防静电吨袋 符合国际电工委员会IEC 61340-4-4标准",
        titleH2: "TYPE-B防静电集装袋/<em>低击穿电压，防止静电产生</em>",
        aqTxt: "<p>规格尺寸：105X105X120cm（可根据要求定制）</p>" +
            "<p>进出料口及吊环高度可根据客户设备定制</p>" +
            "<p>适用产品：用于运输干燥的、易燃的粉末 集装袋周围没有易燃的溶剂或气体。</p>",
        jzTxt: "禁止用于运输易燃易爆物品，禁止在使用环境周围放置易燃易爆的溶剂及气体。",
        protxt1: "TYPE-B型集装袋面料在编织和涂膜过程中按比例添加抗静电母料，此特殊工艺使TYPE-B型集装袋面料具有较低的击穿电压，可以防止高强度的危险静电的产生，确保装料和卸料过程中的安全性。 *面料两面表面击穿电压应小于6KV。",
        protxt2: "这款产品设计时考虑到装载超细粉末时会在针孔出喷漏出来，所以增加了防漏棉条及无纺布防漏、并且考虑到长宽尺寸大不能够 两个并排放在卡车上运输，增加了拉筋来解决膨胀问题，考虑到客户装载物料流动性不好的情况下我们建议使用网状拉筋片作为拉角筋，避免物料进入角筋内部困难，已解决以上所有问题。让客户任意装，使用无忧。",
        banner_txtEn: "TYPE-A: Baffled Fibc bag",
        pro_imgEn: '/images/44.png',
        titleHEn: "TYPE-A: Baffled Fibc bag",
        titleHpEn: "TYPE-A: Baffled Fibc bag/ Comply with IEC 61340-4-4 standard",
        titleH2En: "TYPE-A: Baffled Fibc bag <em> / Comply with IEC 61340-4-4 standard </em>",
        aqTxtEn: "<p>Size 105*105*120cm(customization) </ p>" +
            "<p> Used to transport dry, flammable powders, but must be free of flammable solvents or gases around the product。</p>",
        jzTxtEn: "Prohibit the use of this product when there are flammable and explosive solvents and gases around the Type-B bag",
        protxt1En: "TYPE-B type Fibc bag fabric is added antis-tatic masterbatch proportionally in the process of weaving and coating film. this special process makes the TYPE-B type Fibc bag fabric have lower breakdown voltage, which can prevent the generation of dangerous static electricity with high strength and ensure the safety during loading and unloading. * A breakdown voltage of less than 6 KV. on both surfaces of the fabric",
        protxt2En: "This product design takes into account the loading of ultra-fine powder will leak out in the pinhole, so added leakproof cotton and non-woven fabric leakproof, and considering the size of the length and width can not be two side-by-side transport on the truck, added tension baffle to solve the expansion problem, considering the customer loading material fluidity is not good, we recommend the use of mesh baffle, to avoid the material liquidity into the inner difficulties, has solved all the above problems. Let customers feel free to wear, use worry-free."
    },
    "pro_3": {
        title: "TYPE-C导电集装袋",
        banner_txt: "TYPE-C导电集装袋/防静电集装袋/通过导电丝及传导线将静电释放到地下。",
        pro_img: '/images/45.png',
        titleH: "TYPE-C导电集装袋 符合国际电工委员会IEC 61340-4-4标准",
        titleHp: "TYPE-C导电集装袋/防静电集装袋/",
        titleH2: "TYPE-C导电集装袋<em>防静电集装袋</em>",
        aqTxt: "<p>规格尺寸：105X105X120cm（可根据要求定制）</p>" +
            "<p>进出料口及吊环高度可根据客户设备定制</p>" +
            "<p>适用产品：用于运输易燃的粉末，当集装袋周围存在易燃的溶剂或气体时，用本产品可避免静电点火。</p>",
        jzTxt: "当导电线没有连接到地面或者有破损时，禁止使用本产品。",
        protxt1: "TYPE-C型导电集装袋，也称为接地型柔性集装袋。最初是有完全导电的材料编织而成。而现在接地型C型柔性集装袋更多的是在非传导性的聚丙烯面料中穿插织入导电的混纺织物材料编织而成。这种导电的编织材料必须保证所有的导电丝连为一体，并且在使用TYPE-C型集装袋时，袋身的黑色导电膜必须与地线相连接，通过接地导电，有效的去除在装料和卸料时产生的静电，防止点火和粉尘爆炸等危险情况的发生。",
        protxt2: "这款产品设计时考虑到装载超细粉末时会在针孔出喷漏出来，所以增加了防漏棉条及无纺布防漏、并且考虑到长宽尺寸大不能够 两个并排放在卡车上运输，增加了拉筋来解决膨胀问题，考虑到客户装载物料流动性不好的情况下我们建议使用网状拉筋片作为拉角筋，避免物料进入角筋内部困难，已解决以上所有问题。让客户任意装，使用无忧。",
        titleEn: "TYPE-C conductive FIBC bag",
        banner_txtEn: "TYPE-B anti-static container bag / low breakdown voltage, to prevent static electricity-conform to the International Electrotechnical Commission IEC 61340-4-4 standard",
        pro_imgEn: '/images/41.png',
        titleHEn: "TYPE-C conductive FIBC bag",
        titleHpEn: "TYPE-C conductive FIBC bag / Comply with IEC 61340-4-4 standard",
        titleH2En: "TYPE-C conductive bag/anti-static bag <em> / The release of static electricity into the ground by conducting wire and conducting silks Product introduction </em>",
        aqTxtEn: "<p> Size 105*105*120cm(customization)</ p>" +
            "<p>Loading spout and loop free height(customization)</ p>" +
            "<p>Used to transport flammable powder, when there is flammable solvent or gas around the FIBC bag, this product can avoid electrostatic ignition </ p>",
        jzTxtEn: "Do not use this product when the conducting silks does not touch the ground or are damaged.",
        protxt1En: "TYPE-C conductive container bag, also known as earthing flexible container bag. initially woven with fully conductive materials. But now the ground type C flexible container bag is more in the non-conductive polypropylene fabric interweaves into the conductive blended fabric material. A conductive braided material of this kind must ensure that all conductive silks are connected in one, and the black conductive film of the bag body must be connected with the ground silks when using the TYPE-C type container bag, which can effectively remove the static electricity generated during loading and unloading by grounding conduction, and prevent the occurrence of dangerous conditions such as ignition and dust explosion. ",
        protxt2En: "This product design takes into account the loading of ultra-fine powder will leak out in the pinhole, so added leakproof cotton and non-woven fabric leakproof, and considering the size of the length and width can not be two side-by-side transport on the truck, added tension baffle to solve the expansion problem, considering the customer loading material fluidity is not good, we recommend the use of mesh baffle, to avoid the material liquidity into the inner difficulties, has solved all the above problems. Let customers feel free to wear, use worry-free."
    },
    "pro_4": {
        title: "TYPE-D导电集装袋",
        banner_txt: "TYPE-D导电集装袋符合国际电工委员会IEC 61340-4-4标准",
        pro_img: '/images/41.png',
        titleH: "TYPE-D导电集装袋",
        titleHp: "TYPE-D导电集装袋/防静电集装袋/无需接地即可安全使用。",
        titleH2: "TYPE-D导电集装袋/防静电集装袋/无需接地即可安全使用<em>符合国际电工委员会IEC 61340-4-4标准</em>",
        aqTxt: "<p>规格尺寸：105X105X120cm（可根据要求定制）</p>" +
            "<p>进出料口及吊环高度可根据客户设备定制</p>" +
            "<p>适用产品：用于运输易燃的粉末，当集装袋周围存在易燃的溶剂或气体时，用本产品可避免静电点火。</p>",
        jzTxt: "当导电线没有连接到地面或者有破损时，禁止使用本产品。",
        protxt1: "TYPE-D型导电集装袋，是由防静电的面料制成的，能够安全有效的防止静电火花、刷形放电、以及传播型刷形放电的表现，并且无需将集装袋接地。在设计及制作方面，提供了更加安全的防护措施，以便在无需接地的情况下防止静电的危害，将面料用于编织抗静电集装袋，能够在C型柔性集装袋的生产的使用过程中，有效根除了认为失误所导致的静电燃烧及粉尘爆炸危险。",
        protxt2: "这款产品设计时考虑到装载超细粉末时会在针孔出喷漏出来，所以增加了防漏棉条及无纺布防漏、并且考虑到长宽尺寸大不能够 两个并排放在卡车上运输，增加了拉筋来解决膨胀问题，考虑到客户装载物料流动性不好的情况下我们建议使用网状拉筋片作为拉角筋，避免物料进入角筋内部困难，已解决以上所有问题。让客户任意装，使用无忧。",
        titleEn: "TYPE-D conductive FIBC bag",
        banner_txtEn: "TYPE-D conductive FIBC bag /Comply with IEC 61340-4-4 standard",
        pro_imgEn: '/images/41.png',
        titleHEn: "TYPE-D conductive FIBC bag",
        titleHpEn: "TYPE-D conductive FIBC bag/anti-static FIBC bag   /Comply with IEC 61340-4-4 standard ",
        titleH2En: "TYPE-D conductive FIBC bag/anti-static FIBC bag  <em> /Comply with IEC 61340-4-4 standard </em>",
        aqTxtEn: "<p> Safe use without grounding</ p>" +
            "<p> Size 105*105*120cm(customization) </ p>" +
            "<p> Loading spout and loop free height(customization)</ p>",
        jzTxtEn: "Used to transport flammable powder, when there is flammable solvent or gas around the FIBC bag, this product can avoid electrostatic ignition.",
        protxt1En: "It is forbidden to use this product when the surface of the FIBC bag is dirty or coated with conductive material, such as water or oil, etc.TYPE-D conductive FIBC bag is made of anti-static fabric, which can safely and effectively prevent the performance of electrostatic spark, brush discharge and propagating brush discharge, and does not need to ground the FIBC bag.For design and process, more safety precautions are provided to prevent electrostatic hazards without grounding. Fabrics are used to weave anti-static FIBC bags, which can effectively eliminate the electrostatic combustion and dust explosion hazards caused by errors during the production of TYPE- C FIBC bags",
        protxt2En: "This product design takes into account the loading of ultra-fine powder will leak out in the pinhole, so added leakproof cotton and non-woven fabric leakproof, and considering the size of the length and width can not be two side-by-side transport on the truck, added tension baffle to solve the expansion problem, considering the customer loading material fluidity is not good, we recommend the use of mesh baffle, to avoid the material liquidity into the inner difficulties, has solved all the above problems. Let customers feel free to wear, use worry-free. "
    },
    "pro_5": {
        title: "TYPE-A重型集装袋",
        banner_txt: "TYPE-A重型集装袋符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准",
        pro_img: '/images/41.png',
        titleH: "TYPE-A重型集装袋/普通集装袋/不具备防静电功能",
        titleHp: "TYPE-A重型集装袋/普通集装袋/不具备防静电功能",
        titleH2: "TYPE-A重型集装袋/普通集装袋/不具备防静电功能<em>符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准</em>",
        aqTxt: "<p>规格尺寸：规格尺寸：90X90X120cm（可根据要求定制）</p>" +
            "<p>进出料口及吊环高度可根据客户设备定制</p>" +
            "<p>产品适用：用于运输不易燃易爆的物品、并且集装袋周围没有易燃的溶剂或气体</p>",
        jzTxt: "禁止用于运输易燃易爆物品，禁止在使用环境周围放置易燃易爆的溶剂及气体。",
        protxt1: "TYPE-A重型集装袋是由普通的聚丙烯材料或者其他非传导性的材料制成的。在填充或清空集装袋时，货物在集装袋内侧的移动将会导致静电的产生。A型集装袋的一个本质缺陷就在于它没有任何机制来耗散静电，因此无法防止高强度的危险的传播型刷形放电PBD的产生。对于这种类型的集装袋，一般在静电防控方面不作要求，所以无需进行静电测试，也没有具体的测试标准，也无需贴分类标签。虽然可以贴上TYPE-A型集装袋的标签，但人们很少这么做。因为如果集装袋上没有贴上如B型，C型或D型之类的标签，那么就可以认定该集装袋为A型。",
        protxt2: "这款产品设计时考虑到装载量大、称重范围1.5-3.5吨均可采用本款产品。 井字托底更加牢固可靠。",
        titleEn: "TYPE-A: Heavy duty Fibc bag/Ordinary FIBC bag/No anti-static function",
        banner_txtEn: "TYPE-A: Heavy duty Fibc bag/Ordinary FIBC bag/No anti-static function",
        pro_imgEn: '/images/41.png',
        titleHEn: "TYPE-A: Heavy duty Fibc bag/Ordinary FIBC bag",
        titleHpEn: "TYPE-A: Heavy duty Fibc bag/Ordinary FIBC bag/No anti-static function",
        titleH2En: "TYPE-A: Heavy duty Fibc bag/Ordinary FIBC bag/No anti-static function <em> / Compliance with China(GB/T10454-2000) and European (ISO21898)Implementation Standards</em>",
        aqTxtEn: "<p> Size:90X90X120cm（customization）</ p>" +
            "<p>Loading spout and loop,free height (customization)</ p>" +
            "<p>Suitable for the transportation of non-flammable and explosive articles, and there is no flammable volume or gas around</p>",
        jzTxtEn: "Forbid transport flammable and explosive substances and forbid using for  flammable and explosive solvents and gases around them  TYPE-A Fibc bag is made of ordinary PP or other non-conductive materials. ",
        protxt1En: "TYPE-A Fibc bags are made of ordinary polypropylene or other non-conductive materials. When filling or emptying the container bag, the movement of the goods inside the Fibc bag will lead to electrostatic generation. One of the essential defects of the Type-A Fibc bag is that it does not have any mechanism to dissipate static electricity, so it can not prevent the generation of dangerous propagating brush-shaped discharge PBD with high intensity. For this type of Fibc bags, generally do not require in electrostatic prevention and control, so there is no need to carry out electrostatic testing, there is no specific test standard, and there is no need to affix classification labels. Although it is possible to label TYPE-A Fibc bags, people rarely do so. Since there are no labels such as B, C or D on the container bag, the Fibc  bag can be identified as A.",
        protxt2En: "This product is designed to take into account that the ultra-fine powder will be sprayed out of the pinhole when it is loaded, so a leak-proof sliver and a non-woven fabric are added to prevent leakage, and considering the size of the length and width can not be two side by side It is transported on a truck, and a reinforcement bar is added to solve the expansion problem. Considering that the loading material of the customer has poor fluidity, we recommend using a mesh reinforcement bar as a corner bar to avoid the difficulty of materials entering the corner bar. The container bag can be free of pallets. After the container bag is packed with goods, the pallet can not be placed underneath. The forklift can be directly inserted into the two sides of the bottom of the bag to complete the handling work. All the above problems have been solved. Let the customer load it arbitrarily worry."
    },
    "pro_6": {
        title: "TYPE-C免托盘导电集装袋",
        banner_txt: "TYPE-C免托盘导电集装袋 符合国际电工委员会IEC 61340-4-4标准",
        pro_img: '/images/41.png',
        titleH: "TYPE-C免托盘导电集装袋",
        titleHp: "TYPE-C免托盘导电集装袋 符合国际电工委员会IEC 61340-4-4标准",
        titleH2: "TYPE-C免托盘导电集装袋<em> /防静电集装袋/通过导电丝及传导线将静电释放到地下</em>",
        aqTxt: "<p>规格尺寸：105X105X120cm（可根据要求定制）</p>" +
            "<p>进出料口及吊环高度可根据客户设备定制</p>" +
            "<p>适用产品：用于运输易燃的粉末，当集装袋周围存在易燃的溶剂或气体时，用本产品可避免静电点火。</p>",
        jzTxt: "禁止使用：当导电线没有连接到地面或者有破损时，禁止使用本产品。",
        protxt1: "TYPE-C免托盘型导电集装袋，也称为接地型免托盘柔性集装袋。最初是有完全导电的材料编织而成。而现在接地型C型柔性集装袋更多的是在非传导性的聚丙烯面料中穿插织入导电的混纺织物材料编织而成。这种导电的编织材料必须保证所有的导电丝连为一体，并且在使用TYPE-C型集装袋时，袋身的黑色导电膜必须与地线相连接，通过接地导电，有效的去除在装料和卸料时产生的静电，防止点火和粉尘爆炸等危险情况的发生。",
        protxt2: "这款产品设计时考虑到装载超细粉末时会在针孔出喷漏出来，所以增加了防漏棉条及无纺布防漏、并且考虑到长宽尺寸大不能够 两个并排放在卡车上运输，增加了拉筋来解决膨胀问题，考虑到客户装载物料流动性不好的情况下我们建议使用网状拉筋片作为拉角筋，避免物料进入角筋内部困难，这款集装袋可以免去托盘，集装袋装货物后下面可以不放托盘，叉车可以直接插入袋子底部两侧的位置，即可完成搬运工作。已解决以上所有问题。让客户任意装，使用无忧。",
        titleEn: "TYPE-C tray-free conductive FIBC bag",
        banner_txtEn: "TYPE-C tray-free conductive FIBC bag	/ Comply with IEC 61340-4-4 standard",
        pro_imgEn: '/images/41.png',
        titleHEn: "TYPE-C  tray-free conductive FIBC bag",
        titleHpEn: "TYPE-C  tray-free conductive FIBC bag/anti-static bag /The release of static electricity into the ground by conducting wire and conducting silks ",
        titleH2En: "TYPE-C  tray-free conductive FIBC bag <em> / anti-static bag /The release of static electricity into the ground by conducting wire and conducting silks</em>",
        aqTxtEn: "<p> Size 105*105*120cm(customization) </ p>" +
            "<p>Loading spout and loop free height(customization)</ p>" +
            "<p>Used to transport flammable powder, when there is flammable solvent or gas around the FIBC bag, this product can avoid electrostatic ignition</ p>",
        jzTxtEn: "Do not use this product when the conducting silks does not touch the ground or are damaged.",
        protxt1En: "TYPE-C tray-free conductive container bag, also known as ground-free tray-free flexible container bag. initially woven with fully conductive materials. But now the ground type C flexible container bag is more in the non-conductive polypropylene fabric interweaves into the conductive blended fabric material. A conductive braided material of this kind must ensure that all conductive silks are connected in one, and the black conductive film of the bag body must be connected with the ground silks when using the TYPE-C type container bag, which can effectively remove the static electricity generated during loading and unloading by grounding conduction, and prevent the occurrence of dangerous conditions such as ignition and dust explosion.",
        protxt2En: "This product design takes into account the loading of ultra-fine powder will leak out in the pinhole, so added leakproof cotton and non-woven fabric leakproof, and considering the size of the length and width can not be two side-by-side transport on the truck, added tension baffle to solve the expansion problem, considering the customer loading material fluidity is not good, we recommend the use of mesh baffle, to avoid the material liquidity into the inner difficulties, has solved all the above problems. Let customers feel free to wear, use worry-free.",
    },
    "pro_7": {
        title: "拉筋内袋集装袋/铝膜拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能",
        banner_txt: "拉筋内袋集装袋/铝膜拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能 符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准",
        pro_img: '/images/41.png',
        titleH: "拉筋内袋集装袋/铝膜拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能",
        titleHp: "符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准",
        titleH2: "拉筋内袋集装袋<em> /铝膜拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能</em>",
        aqTxt: "<p>规格：105X105X120cm（尺寸可定制）</p>" +
            "<p>进料口可定制，出料口可定制。</p>" +
            "<p>产品适用：用于运输不易燃易爆的物品、并且集装袋周围没有易燃的溶剂或气体</p>",
        jzTxt: "禁止使用：禁止用于运输易燃易爆物品，禁止在使用环境周围放置易燃易爆的溶剂及气体。",
        protxt1: "拉筋内袋集装袋是由普通的聚丙烯材料或者其他非传导性的材料制成的。在填充或清空集装袋时，货物在集装袋内侧的移动将会导致静电的产生。A型集装袋的一个本质缺陷就在于它没有任何机制来耗散静电，因此无法防止高强度的危险的传播型刷形放电PBD的产生。对于这种类型的集装袋，一般在静电防控方面不作要求，所以无需进行静电测试，也没有具体的测试标准，也无需贴分类标签。虽然可以贴上TYPE-A型集装袋的标签，但人们很少这么做。因为如果集装袋上没有贴上如B型，C型或D型之类的标签，那么就可以认定该集装袋为A型。",
        protxt2: "这款产品设计时主要解决了泄露、潮湿结块、等一系列问题，并且考虑到长宽尺寸大不能够两个并排放在卡车上运输，增加了拉筋来解决膨胀问题，考虑到客户装载物料流动性不好的情况下，我们建议使用网状拉筋片作为拉角筋，避免物料进入角筋内部困难，并且可指定铝膜作为内袋的原材料及按照B型防静电、C型防静电、D型防静电标准的同款袋型，已解决以上所有问题。让客户任意装，使用无忧。",
        titleEn: "TYPE:Shaped-baffled PE liner Fibc bag/ Aluminum film inner baffle Fibc bag/Protection against expansion/Ordinary FIBC bag/",
        banner_txtEn: "TYPE:Shaped-baffled PE liner Fibc bag/ Aluminum film inner baffle Fibc bag/Protection against expansion/Ordinary FIBC bag/Compliance with China(GB/T10454-2000) and European (ISO21898)Implementation Standards",
        pro_imgEn: '/images/41.png',
        titleHEn: "TYPE:Shaped-baffled PE liner Fibc bag/ Aluminum film inner baffle Fibc bag/Protection against expansion/Ordinary FIBC bag/",
        titleHpEn: "TYPE:Shaped-baffled PE liner Fibc bag/ Aluminum film inner baffle Fibc bag/Protection against expansion/Ordinary FIBC bag/",
        titleH2En: "TYPE:Shaped-baffled PE liner Fibc bag<em>/ Aluminum film inner baffle Fibc bag/Protection against expansion/Ordinary FIBC bag/</em>",
        aqTxtEn: "<p>Size:105X105X120cm（customization）</ p>" +
            "<p> Loading spout and unloading spout (customization)</ p>",
        jzTxtEn: "Suitable for the transportation of non-flammable and explosive articles, and there is no flammable volume or gas around.",
        protxt1En: "Baffled liner Fibc bags are made of ordinary polypropylene or other non-conductive materials. When filling or emptying the container bag, the movement of the goods inside the Fibc bag will lead to electrostatic generation. One of the essential defects of the Type-A Fibc bag is that it does not have any mechanism to dissipate static electricity, so it can not prevent the generation of dangerous propagating brush-shaped discharge PBD with high intensity. For this type of Fibc bags, generally do not require in electrostatic prevention and control, so there is no need to carry out electrostatic testing, there is no specific test standard, and there is no need to affix classification labels. Although it is possible to label TYPE-A Fibc bags, people rarely do so. Since there are no labels such as B, C or D on the container bag, the Fibc  bag can be identified as A.",
        protxt2En: "This product is designed to solve a series of problems, such as leakage, moisture and caking,and considering the size of the length and width can not be two side-by-side transport on the truck, added tension baffle to solve the expansion problem, considering the customer loading material fluidity is not good, we recommend the use of mesh baffle, to avoid the material liquidity into the inner difficulties, has solved all the above problems. Let customers feel free to wear, use worry-free."
    },
    "pro_8": {
        title: "TYPE-A透气集装袋/吨袋/吨包/吨包袋 不具备防静电功能",
        banner_txt: "TYPE-A透气集装袋/吨袋/吨包/吨包袋 符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准",
        pro_img: '/images/41.png',
        titleH: "TYPE-A透气集装袋/吨袋/吨包/吨包袋",
        titleHp: "TYPE-A透气集装袋/吨袋/吨包/吨包袋 符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准",
        titleH2: "TYPE-A拉筋集装袋<em> /防膨胀集装袋/普通集装袋/不具备防静电功能</em>",
        aqTxt: "<p>规格：95X95X100cm（尺寸可定制）</p>" +
            "<p>进料口可定制，出料口可定制。</p>" +
            "<p>产品适用:用于运输不易燃易爆的物品、并且集装袋周围没有易燃的溶剂或气体，主要用于装载运输马铃薯、红薯、大蒜等农作物。</p>",
        jzTxt: "禁止使用：禁止用于运输易燃易爆物品，禁止在使用环境周围放置易燃易爆的溶剂及气体。",
        protxt1: "TYPE-A透气集装袋是由普通的聚丙烯材料或者其他非传导性的材料制成的。在填充或清空集装袋时，货物在集装袋内侧的移动将会导致静电的产生。A型集装袋的一个本质缺陷就在于它没有任何机制来耗散静电，因此无法防止高强度的危险的传播型刷形放电PBD的产生。对于这种类型的集装袋，一般在静电防控方面不作要求，所以无需进行静电测试，也没有具体的测试标准，也无需贴分类标签。虽然可以贴上TYPE-A型集装袋的标签，但人们很少这么做。因为如果集装袋上没有贴上如B型，C型或D型之类的标签，那么就可以认定该集装袋为A型。",
        protxt2: "这款产品设计主要考虑透气性能，主要用途是装载及运输蔬菜圆葱、土豆（马铃薯）、红薯、大蒜等农作物，齐特点不会对以上蔬菜造成污染及损害，增加了透气条，能够使蔬菜自由的呼吸，不会把蔬菜捂坏，减少人工搬运造成的人工浪费及蔬菜损坏。降低了灌装的劳动强度。",
        titleEn: "TYPE-A: Baffled Fibc bag/Protection against expansion/Ordinary FIBC bag/No anti-static function",
        banner_txtEn: "TYPE-A: Baffled Fibc bag/Protection against expansion/Ordinary FIBC bag/No anti-static function",
        pro_imgEn: '/images/41.png',
        titleHEn: "YPE-A: Baffled Fibc bag/Protection against expansion/Ordinary FIBC bag/",
        titleHpEn: "YPE-A: Baffled Fibc bag/Protection against expansion/Ordinary FIBC bag/",
        titleH2En: "YPE-A: Baffled Fibc bag/Protection against expansion/Ordinary FIBC bag/<em> /Compliance with China(GB/T10454-2000) and European (ISO21898)Implementation Standards </em>",
        aqTxtEn: "<p>Size:90X90X100cm（customization）</ p>" +
            "<p>Loading spout and unloading spout (customization)</ p>" +
            "<p>Suitable for the transportation of non-flammable and explosive articles, and there is no flammable volume or gas around.Mainly used for loading and transporting potato, sweet potato, garlic and other crops. </ p>",
        jzTxtEn: "Forbid transport flammable and explosive substances and forbid using for  flammable and explosive solvents and gases around them.",
        protxt1En: "TYPE-A Fibc bags are made of ordinary polypropylene or other non-conductive materials. When filling or emptying the container bag, the movement of the goods inside the Fibc bag will lead to electrostatic generation. One of the essential defects of the Type-A Fibc bag is that it does not have any mechanism to dissipate static electricity, so it can not prevent the generation of dangerous propagating brush-shaped discharge PBD with high intensity. For this type of Fibc bags, generally do not require in electrostatic prevention and control, so there is no need to carry out electrostatic testing, there is no specific test standard, and there is no need to affix classification labels. Although it is possible to label TYPE-A Fibc bags, people rarely do so. Since there are no labels such as B, C or D on the container bag, the Fibc  bag can be identified as A.",
        protxt2En: "This product is designed to take into account the air permeability. The main purpose of this product is to load and transport vegetables such as scallions, potatoes, sweet potatoes, garlic and other crops. The zit point will not cause pollution and damage to the above vegetables. It will increase the air-permeable strips so that the vegetables can breathe freely, will not cover the vegetables, and reduce the artificial waste caused by manual handling and vegetable damage. Reduced filling labor intensity."
    },
}

//首页联系我们
var dongya = {
    "jiaru": "中润，助你成就每一程",
    "beian": "邯郸市中润塑料制品有限公司",
    "jiaruEn": "Zhongrun, help you achieve every journey",
    "beianEn": "Handan Zhongrun Plastic Products Co., Ltd."
}
var head_foot = {
    "head": {
        "footTxt": "在您繁复和缜密的运转中，包装不是令您分心的一环，这是中润努力的的方向。<br>我们尽力于，也善于让您的企业在使用包装运输时消除顾忌，甚至无需过多关注包装的存在，同时为您节省资金，我们的任务就是通过不断改进和创新满足您的需求。",
        "liuyanTieleTxt": "留言内容",
        "liuyanTxt": ["姓名", "电话(必填)", "邮箱", "地址", "请输入您的留言内容"],
        "FootTxtEn": "In your complicated and meticulous operation, packaging is not a distracting part of you. This is the direction of Zhongrun's efforts. <br> We try our best to make your business use packaging and transportation Eliminate scruples without even paying too much attention to the existence of packaging, while saving you money, our task is to meet your needs through continuous improvement and innovation.",
        "LiuyanTieleTxtEn": "Message Content",
        "LiuyanTxtEn": ["Name", "Phone (required)", "Email(required)", "Address", "Please enter your message content"],
    },
    "foot": {
        "index_txt": "网站首页",
        "about_txt": ["关于中润", "中润包装", "行业认可", "全球客户"],
        "pro_txt": ["产品实力", "产品中心", "公益流程", "应用领域", "质量把控"],
        "jishu_txt": ["技术支持", "设备实力"],
        "news_txt": ["新闻活动", "最新动态"],
        "lianxi_txt": ["联系我们", "联系地址", "加入中润"],
        "chat_txt": ["电话", "传真", "邮箱", "微信公众号", "微信客服"],
        "index_txtEn": "Homepage",
        "about_txtEn": ["About Zhongrun", "Zhongrun Packaging", "Industry Recognition", "Global Customers"],
        "pro_txtEn": ["Product Strength", "Product Center", "Public Welfare Process", "Application Field", "Quality Control"],
        "jishu_txtEn": ["Technical Support", "Equipment Strength"],
        "news_txtEn": ["News Activity", "Latest News"],
        "lianxi_txtEn": ["Contact Us", "Contact Address", "Join Zhongrun"],
        "chat_txtEn": ["Phone", "Fax", "Mailbox", "WeChat WeChat public account", "WeChat Scan"]
    },
}

function head() {
    var _body = $("body")
    var header = '<div class="g-top-nav clearfix">' +
        '<a href="" class="g-logo-box f-fl"><img src="/images/logo.png" alt="" class="pc-logo"></a>' +
        '<div class="g-nav_btn f-fr"></div>' +
        '<div class="f-lang f-fr"><a href="/index.html" class="f-lang-e">中</a><a href="/en/index.html" class="f-lang-c cur">EN</a></div>' +
        '<ul class="g-nav-list f-fr" id="head">' +
        '<li><a href="index.html" class="cur"></a><a href="about.html" rel="about.html"></a><a href="pro-shili.html" rel="pro"></a><a href="jishu.html" rel="jishu.html"></a><a href="news.html" rel="news.html"></a><a href="contact.html" rel="contact.html"></a></li>' +
        '</ul>' +
        '</div>'
    var footer = '<div class="g-link-box">' +
        '<p id="footTxt"></p>' +
        '</div>' +

        '<div class="g-gotop"></div>' +
        '<div class="g-foot-box clearfix">' +
        '<div class="g-foot-l" id="foot_txt">' +
        '<div class="f-foot-nav">' +
        '<a href="index.html" class="cur"></a>' +
        '</div>' +
        '<div class="f-foot-nav">' +
        '<a href="about.html" class="cur"></a>' +
        '<a href="about.html"></a>' +
        '<a href="about.html"></a>' +
        '<a href="about.html"></a>' +
        ' </div>' +
        '<div class="f-foot-nav">' +
        '<a href="pro-shili.html" rel="" class="cur"></a>' +
        '<a href="pro-shili.html"></a>' +
        '<a href="pro-shili.html"></a>' +
        '<a href="pro-shili.html"></a>' +
        '<a href="pro-shili.html"></a>' +
        '</div>   ' +
        '<div class="f-foot-nav">' +
        '<a href="jishu.html" rel="" class="cur"></a>' +
        '<a href="jishu.html"></a>' +
        '</div>' +
        '<div class="f-foot-nav">' +
        '<a href="news.html" rel="" class="cur"></a>' +
        '<a href="news.html"></a>' +
        ' </div>' +
        '<div class="f-foot-nav">' +
        '<a href="contact.html" rel="" class="cur"></a>' +
        '<a href="contact.html"></a>' +
        '<a href="contact.html"></a>' +
        ' </div>' +
        '</div>' +
        '<div class="g-foot-r">' +
        '<div class="g-foot-chat f-fl" id="bottom_chat">' +
        '<img src="/images/chat_1.png" alt="">  ' +
        '<em id="chat_txt2"></em> ' +
        '</div>' +
        '<div class="g-foot-chat f-fl">' +
        '<img src="/images/chat_2.png" alt="">  ' +
        '<em id="chat_txt"></em> ' +
        '</div>' +
        '</div>' +
        '</div>'
    _body.prepend(header);
    _body.append(footer);
    $(".f-foot-nav").each(function() {
        $(this).find("a").eq(0).nextAll().hide();
    })

    if (_common.lug == "en") {
        $(".f-lang a").last().addClass("cur").siblings().removeClass("cur")
        $("body").append('<div class="g-dibu-nav"><a class="g-dianhua" href="/">HOME</a><a class="g-dianhua" href="about.html">ABOUT</a><a class="g-dianhua" id="lianxi_di" href="tel:15369078000">CONTACT</a></div>')
        mobilePhoneContacts();
        // if (_index_url.indexOf("hdzrsl.com") > 1) {
        //     $("#lianxi_di").attr("href", "tel:15028453452")
        // }
        // if (_index_url.indexOf("hdzrsl.cn") > 1) {
        //     $("#lianxi_di").attr("href", "tel:18830092666")
        // }
        // if (_index_url.indexOf("hbzrbz.cn") > 1) {
        //     $("#lianxi_di").attr("href", "tel:15231029903")
        // }
        // if (_index_url.indexOf("hbzrbz.com") > 1) {
        //     $("#lianxi_di").attr("href", "tel:15128024025")
        // }
    } else {
        $("body").append('<div class="g-dibu-nav"><a class="g-dianhua" href="/">首页</a><a class="g-dianhua" href="about.html">关于我们</a><a class="g-dianhua" id="tel_txt" href="tel:15369078000">联系我们</a></div>')
        mobilePhoneContacts();
        // if (_index_url.indexOf("hdzrsl.com") > 1) {
        //     $("#tel_txt").attr("href", "tel:15028453452")
        // }
        // if (_index_url.indexOf("hdzrsl.cn") > 1) {
        //     $("#tel_txt").attr("href", "tel:18830092666")
        // }
        // if (_index_url.indexOf("hbzrbz.cn") > 1) {
        //     $("#tel_txt").attr("href", "tel:15231029903")
        // }
        // if (_index_url.indexOf("hbzrbz.com") > 1) {
        //     $("#tel_txt").attr("href", "tel:15128024025")
        // }
    }
}

function head_foot_txt() {
    var _head = $("#head")
    var _foot = $("#foot_txt")
    var _liuyan_ = $("#liuyanTieleTxt")
    var _liuyanTxt = $("#liuyan_txt")
    var _chatTxt = $("#chat_txt")
    var _chatTxt2 = $("#chat_txt2")
    var _head_ = head_foot.head
    var _foot_ = head_foot.foot
    var foot_cen = '<div class="g-foot-c" id="lianxi_box_index">' +
        '<p></p>' +
        '<p></p>' +
        '<p></p>' +
        '<p></p>' +
        '<p></p>' +
        '<p></p>' +
        '<p></p>' +
        '</div>'
    if (_index_url.indexOf("hdzrsl.com") > 1) {
        foot_bot = '<div class="g-footer">' +
            '<div class="g-foot-btn">' + dongya.jiaru + '</div><p>' + dongya.beian + '<a href="https://beian.miit.gov.cn/" style="color: #B2B2B2"> | 冀ICP备14008699号-4</a></p >' +
            '</div>'
    }
    if (_index_url.indexOf("hdzrsl.cn") > 1) {
        foot_bot = '<div class="g-footer">' +
            '<div class="g-foot-btn">' + dongya.jiaru + '</div><p>' + dongya.beian + '<a href="https://beian.miit.gov.cn/" style="color: #B2B2B2"> | 冀ICP备14008699号-4</a></p >' +
            '</div>'
    }
    if (_index_url.indexOf("hbzrbz.cn") > 1) {
        foot_bot = '<div class="g-footer">' +
            '<div class="g-foot-btn">' + dongya.jiaru + '</div><p>' + dongya.beian + '<a href="https://beian.miit.gov.cn/" style="color: #B2B2B2"> | 冀ICP备14008699号-4</a></p >' +
            '</div>'
    }
    if (_index_url.indexOf("hbzrbz.com") > 1) {
        foot_bot = '<div class="g-footer">' +
            '<div class="g-foot-btn">' + dongya.jiaru + '</div><p>' + dongya.beian + '<a href="https://beian.miit.gov.cn/" style="color: #B2B2B2"> | 冀ICP备14008699号-4</a></p >' +
            '</div>'
    }
    $(".g-foot-r").before(foot_cen)
    $(".g-foot-box").after(foot_bot)
    lianxiApi();
    $.each(index_url, function(i, val) {
            // if (_index_url.indexOf(val) > -1) {
            //     console.log(i)
            //     $("#lianxi_box").find("p").eq(0).html('CONTACT：' + index_lxr_txt[i])
            //     $("#lianxi_box").find("p").eq(1).html('Phone number：' + index_tel[i])
            //     $("#lianxi_kufe").find("img").attr("src", "/images/chat_1" + i + ".png")
            //     $("#bottom_chat").find("img").attr("src", "/images/chat_1" + i + ".png")
            //     $("#tel_txt").attr("href", 'tel:' + index_tel[i])
            //     $(".g-foot-c p").eq(1).html('Contact: ' + index_lxr_txt[i])
            //     $(".g-foot-c p").eq(2).html('Cell phone: ' + index_tel[i])

            // }
        })
        //头部导航
    _head.find("a").eq(0).html(_foot_.index_txtEn)
    _head.find("a").eq(1).html(_foot_.about_txtEn[0])
    _head.find("a").eq(2).html(_foot_.pro_txtEn[0])
    _head.find("a").eq(3).html(_foot_.jishu_txtEn[0])
    _head.find("a").eq(4).html(_foot_.news_txtEn[0])
    _head.find("a").eq(5).html(_foot_.lianxi_txtEn[0])
        //底部导航
    _foot.find(".f-foot-nav").eq(0).find("a").html(_foot_.index_txtEn)
    $.each(_head_.LiuyanTxtEn, function(i, val) {
        _liuyanTxt.find("li").eq(i).children().attr("placeholder", val)
    })
    _liuyan_.html(_head_.LiuyanTieleTxtEn)
    _chatTxt.html(_foot_.chat_txtEn[3])
    _chatTxt2.html(_foot_.chat_txtEn[4])
    $.each(_foot_.about_txtEn, function(i, val) {
        _foot.find(".f-foot-nav").eq(1).find("a").eq(i).html(val)
    })
    $.each(_foot_.pro_txtEn, function(i, val) {
        _foot.find(".f-foot-nav").eq(2).find("a").eq(i).html(val)
    })
    $.each(_foot_.jishu_txtEn, function(i, val) {
        _foot.find(".f-foot-nav").eq(3).find("a").eq(i).html(val)
    })
    $.each(_foot_.news_txtEn, function(i, val) {
        _foot.find(".f-foot-nav").eq(4).find("a").eq(i).html(val)
    })
    $.each(_foot_.lianxi_txtEn, function(i, val) {
        _foot.find(".f-foot-nav").eq(5).find("a").eq(i).html(val)
    })
    $("#footTxt").html(_head_.FootTxtEn)
}

var arrAbout; //关于我们
var arrIndustry; //行业认可
var arrContact; //联系我们
var arrIndex; //首页产品
var arrProduct; //产品中心
var arrJishu; //技术
$(function() {
        function industryApi() {
            $.ajax({
                type: "POST",
                url: jiekou.industry_api,
                success: function(industry) {
                    $.cookie('industryCookice', null);
                    arrIndustry = $.cookie('industryCookice')
                    localStorage.setItem('industryCookice', JSON.stringify(industry));
                },
                error: function(data) {
                    console.log("error")
                }
            });
        }

        // jQuery.support.cors = true;
        function indexApi() {
            $.ajax({
                type: "POST",
                url: jiekou.index_api,
                success: function(res) {
                    if (_common.page == "1" && _common.lug == "en") {
                        // console.log(res)
                        // console.log(indexPro)
                        var _banner = $("#g_banner")
                        var _pro_title = $("#f-pro-title")
                            //首页banner
                        var _banner = $("#g_banner")
                        var banner_len = res.banner.length
                        console.log(res.banner)
                        for (var i = 0; i < banner_len; i++) {
                            var banner_html = '<div class="swiper-slide">' +
                                '<a>' +
                                '<img title="" alt="" src="' + api_url + res.banner[i].titleurl + '">' +
                                '<span class="g-index-banner-txt">' +
                                '<strong>' + res.banner[i].titleEn + '</strong>' +
                                '<p>' + res.banner[i].descriptionEn + '</p>' +
                                '</span>' +
                                '</a>' +
                                '</div>'
                            _banner.append(banner_html)
                        }
                        var mySwiper = new Swiper('.swiper-container0', {
                                autoplay: true, //可选选项，自动滑动
                                loop: true,
                                pagination: {
                                    el: '.swiper-pagination',
                                },
                                navigation: {
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                },
                            })
                            // 首页关于我们
                        var _about_index_title = $("#about_index_title")
                        var _about_index = $("#about_index")
                        var _about_v = $("#about_v")
                        var _video_url = api_url + res.about.video;
                        var _video = document.getElementById("startvideo");
                        _about_v.find("video").attr("src", _video_url)
                            // _video.play();
                        console.log(res)
                        _about_index_title.html(res.about.titleEn)
                        _about_index.html(res.about.descriptionEn)
                        _about_v.find("video").click(function() {
                                console.log(res)
                                var v_html = '<div class="g-fixed-video">' +
                                    '<div class="f-fixed-video">' +
                                    '<video controls="controls" autoplay="">' +
                                    '<source src="' + api_url + '' + res.about.titleurl + '" type="video/mp4">' +
                                    '</video>' +
                                    '<em class="close_btn"><img src="/images/icon_3.png"></em>' +
                                    '</div>' +
                                    '</div>'
                                $("body").append(v_html)
                                $(".close_btn").click(function() {
                                    $(this).parents(".g-fixed-video").remove()
                                })
                            })
                            //产品标题描述
                        console.log(res)
                        _pro_title.html(res.innovation.descriptionEn)
                            //首页调用产品

                        //改善创新，拓展可能
                        var _tuozhan_txt = $("#f-tuozhan-txt")
                        var _tuozhan = $("#g-tuozhan")
                        for (var i = 0; i < _tuozhan.find("li").length; i++) {
                            _tuozhan.find("li").eq(i).find("img").attr({
                                "src": api_url + '' + res.innovation.innovation[i].titlepic,
                                "alt": api_url + '' + res.innovation.innovation[i].titleEn,
                            })
                        }
                        _tuozhan_txt.find("p").html(res.innovation.descriptionEn)
                            //解决方案
                        var _fangan = $("#fangan")
                        var _fangan_txt = $("#fangan-box")
                        _fangan.find("p").html(res.program.descriptionEn)
                        for (var i = 0; i < res.program.program.length; i++) {
                            html = '<li><a><img src="' + api_url + '' + res.program.program[i].titlepic + '" alt="' + res.program.program[i].title + '"><strong><em>' + res.program.program[i].titleEn + '</em></strong></a></li>'
                            _fangan_txt.append(html)
                                // console.log(html)
                        }
                        var _width = $(window).width()
                            // console.log(_width)
                        if (_width > 1000) {
                            $(window).scroll(function() {
                                var winTop = $(window).scrollTop();
                                // console.log(winTop)
                                if (winTop > 300) {
                                    // alert(111)
                                    $(".g-about-index").eq(0).stop().animate({
                                        top: 0,
                                        opacity: 1
                                    }, 500)
                                }
                                if (winTop > 1200) {
                                    $(".g-about-index").eq(1).stop().animate({
                                        top: 0,
                                        opacity: 1
                                    }, 500)
                                }
                                if (winTop > 1900) {
                                    $(".g-about-index").eq(2).stop().animate({
                                        top: 0,
                                        opacity: 1
                                    }, 500)
                                }
                                if (winTop > 2300) {
                                    $(".g-about-index").eq(3).stop().animate({
                                        top: 0,
                                        opacity: 1
                                    }, 500)
                                }
                                if (winTop > 2700) {
                                    $(".g-about-index").eq(4).stop().animate({
                                        top: 0,
                                        opacity: 1
                                    }, 500)
                                }
                            });
                        } else {
                            $(".g-about-index").eq(0).stop().animate({
                                top: 0,
                                opacity: 1
                            }, 500)
                            $(window).scroll(function() {
                                var winTop = $(window).scrollTop();
                                console.log(winTop)
                                if (winTop > 1100) {
                                    $(".g-about-index").eq(1).stop().animate({
                                        top: 0,
                                        opacity: 1
                                    }, 500)
                                }
                                if (winTop > 1600) {
                                    $(".g-about-index").eq(2).stop().animate({
                                        top: 0,
                                        opacity: 1
                                    }, 500)
                                }
                                if (winTop > 2100) {
                                    $(".g-about-index").eq(3).stop().animate({
                                        top: 0,
                                        opacity: 1
                                    }, 500)
                                }
                                if (winTop > 2700) {
                                    $(".g-about-index").eq(4).stop().animate({
                                        top: 0,
                                        opacity: 1
                                    }, 500)
                                }
                            });
                        }
                    }
                    $.cookie('indexCookice', null);
                    localStorage.setItem('indexCookice', JSON.stringify(res));
                    arrIndex = $.cookie('indexCookice')
                },
                error: function(data) {
                    console.log("error")
                }
            });
        }

        function aboutApi() {
            $.ajax({
                type: "POST",
                url: jiekou.about_api,
                success: function(data) {
                    var _about_title_to = $("#about_box")
                    var about_len = data.banner.length
                    for (var i = 0; i < about_len; i++) {
                        var about_html = '<div class="swiper-slide">' +
                            '<a>' +
                            '<img title="" alt="" src="' + api_url + data.banner[i].titlepic + '">' +
                            '<span class="g-index-banner-txt">' +
                            '<strong>' + data.banner[i].titleEn + '</strong>' +
                            '<p>' + data.banner[i].descriptionEn + '</p>' +
                            '</span>' +
                            '</a>' +
                            '</div>'
                        _about_title_to.find(".swiper-wrapper").append(about_html)
                    }
                    var mySwiper = new Swiper('.swiper-container-about', {
                        autoplay: true, //可选选项，自动滑动
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    })
                    $.cookie('aboutCookice', null);
                    arrAbout = $.cookie('aboutCookice')
                    localStorage.setItem('aboutCookice', JSON.stringify(data));
                    // console.log(data)
                },
                error: function(data) {
                    console.log("error")
                }
            });
        }

        function contactApi() {
            $.ajax({
                type: "POST",
                url: jiekou.contact_api,
                success: function(contact) {
                    console.log(contact)
                        // $(".g-foot-c p").eq(0).html(contact.contact.enCompany)
                        // $(".g-foot-c p").eq(3).html('Cell: ' + contact.contact.phone)
                        // $(".g-foot-c p").eq(4).html('Fax: ' + contact.contact.fax)
                        // $(".g-foot-c p").eq(5).html('Mailbox: ' + contact.contact.mailbox)
                        // $(".g-foot-c p").eq(6).html('Adress: ' + contact.contact.enAddress)
                    $.cookie('contactCookice', null);
                    arrContact = $.cookie('contactCookice')
                    localStorage.setItem('contactCookice', JSON.stringify(contact));
                },
                error: function(data) {
                    console.log("error")
                }
            });
        }

        function productApi() {
            $.ajax({
                type: "POST",
                url: jiekou.product_api,
                success: function(product) {
                    var index_pro1 = $("#g-pro-list1")
                    var index_pro3 = $("#g-pro-list2")
                    index_pro(index_pro1, 1);
                    index_pro2(index_pro3, 5);

                    function index_pro(e, h) {
                        var _h = h + 4
                        for (var h = 1; h < _h; h++) {
                            var _e = "pro_" + h
                            var _num = h - 1
                            var html = '<li>' +
                                '<a href="pro-con.html?id=' + h + '">' +
                                '<em class="u-img">' +
                                '<img src=' + api_url + '"' + product.outerBag[_num].wdpic + '" alt="' + product.outerBag[_num].wdtitleEn + '">' +
                                '</em>' +
                                '<strong>' + product.outerBag[_num].wdtitleEn + '</strong>' +
                                '<p>' + product.outerBag[_num].wddescriptionEn + '</p>' +
                                '<span class="u-img-zhao">' + product.outerBag[_num].wddescriptionEn + '</span>' +
                                '</a>' +
                                '</li>'
                            e.append(html)
                        }
                    }

                    function index_pro2(e, h) {
                        var _h = h + 4
                        for (var h; h < _h; h++) {
                            var _e = "pro_" + h
                            var _num = h - 1
                            var html = '<li>' +
                                '<a href="pro-con.html?id=' + h + '">' +
                                '<em class="u-img">' +
                                '<img src=' + api_url + '"' + product.outerBag[_num].wdpic + '" alt="' + product.outerBag[_num].wdtitleEn + '">' +
                                '</em>' +
                                '<strong>' + product.outerBag[_num].wdtitleEn + '</strong>' +
                                '<p>' + product.outerBag[_num].wddescriptionEn + '</p>' +
                                '<span class="u-img-zhao">' + product.outerBag[_num].wddescriptionEn + '</span>' +
                                '</a>' +
                                '</li>'
                            e.append(html)
                        }
                    }

                    $.cookie('productCookice', null);
                    arrProduct = $.cookie('productCookice')
                    localStorage.setItem('productCookice', JSON.stringify(product));
                },
                error: function(data) {
                    console.log("error")
                }
            });
        }

        function jishuApi() {
            $.ajax({
                type: "POST",
                url: jiekou.jishu_api,
                success: function(jishu) {
                    $.cookie('jishuCookice', null);
                    arrJishu = $.cookie('jishuCookice')
                    localStorage.setItem('jishuCookice', JSON.stringify(jishu));
                },
                error: function(data) {
                    console.log("error")
                }
            });
        }

        indexApi(); //首页api
        industryApi(); //行业认证
        aboutApi();
        contactApi();
        productApi();
        jishuApi();
        // console.log(arrJishu)
    })
    //cookice
var arrAbout2 = JSON.parse(localStorage.getItem('aboutCookice')) //首页
var arrIndex = JSON.parse(localStorage.getItem('indexCookice')) //关于我们
var arrProduct = JSON.parse(localStorage.getItem('productCookice')) //关于我们
var arrJishu = JSON.parse(localStorage.getItem('jishuCookice')) //技术
var arrIndustry = JSON.parse(localStorage.getItem('industryCookice')) //行业认可
var arrContact2 = JSON.parse(localStorage.getItem('contactCookice')) //
var indexPro = arrIndex
    //禁止鼠标右键
$(document).ready(function() {
    $(document).bind("contextmenu", function(e) {
        return false;
    });
    //SEO信息
    $.ajax({
        type: "POST",
        url: jiekou.seo_api,
        success: function (data) {
            var _seo = data[0]
            if (_common.lug !== "en") {
                $("#title").text(_seo.titleCn);
                $("#keywords").attr("content", "" + _seo.keywordsCn)
                $("#description").attr("content", ""+ _seo.descriptionCn)
            } else {
                $("#title").text(_seo.titleEn);
                $("#keywords").attr("content", "" + _seo.keywordsEn)
                $("#description").attr("content", ""+ _seo.descriptionEn)
            }
        },
        error: function (data) {
            console.log("error")
        }
    });
});
/**
 * 手机端联系人显示
 */
function mobilePhoneContacts() {
    $.ajax({
        type: "POST",
        url: jiekou.lianxi_api,
        success: function (lianxi) {
            var _lianxi = lianxi[0]
            if (_common.lug !== "en") {
                $("#tel_txt").attr("href", "tel:"+ _lianxi.cnCellPhone)
            } else {
                $("#lianxi_di").attr("href", "tel:"+ _lianxi.enCellPhone)
            }
        },
        error: function (data) {
            console.log("error")
        }
    });
}
function lianxiApi() {
    $.ajax({
        type: "POST",
        url: jiekou.lianxi_api,
        success: function(lianxi) {
            var _lianxi = lianxi[0]
            $(".g-foot-c p").eq(0).html(_lianxi.companyEn);
            $(".g-foot-c p").eq(1).html('Contact:' + _lianxi.nameEn);
            $(".g-foot-c p").eq(2).html('Cell phone:' + _lianxi.cellPhoneEn);
            $(".g-foot-c p").eq(3).html('phone:' + _lianxi.phoneEn);
            $(".g-foot-c p").eq(4).html('fax:' + _lianxi.cellPhoneEn);
            $(".g-foot-c p").eq(5).html('fax::' + _lianxi.mailboxEn);
            $(".g-foot-c p").eq(6).html('address：' + _lianxi.addressEn);
            $("#bottom_chat").find("img").attr("src", '/img/' + _lianxi.urlEn)
            $(".g-foot-chat").eq(1).find("img").attr("src", '/img/' + _lianxi.weChatUrlEn)
        },
        error: function(data) {
            console.log("error")
        }
    });
}


document.writeln('<script type="text/javascript" src="https://shak60.kuaishang.cn/bs/ks.j?cI=615791&fI=126728" charset="utf-8"></script>')