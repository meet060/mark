// 一个菜单可以包括的所有属性 
// {
// 	id: '12345',		// 菜单id, 必须唯一
// 	name: '用户中心',		// 菜单名称, 同时也是tab选项卡上显示的名称
// 	icon: 'el-icon-user',	// 菜单图标, 参考地址:  https://element.eleme.cn/#/zh-CN/component/icon
//	info: '管理所有用户',	// 菜单介绍, 在菜单预览和分配权限时会有显示 
// 	url: 'sa-html/user/AboutZR-list.html',	// 菜单指向地址
// 	parent_id: 1,			// 所属父菜单id, 如果指定了一个值, sa-admin在初始化时会将此菜单转移到指定菜单上
// 	is_show: true,			// 是否显示, 默认true
// 	is_blank: false,		// 是否属于外部链接, 如果为true, 则点击菜单时从新窗口打开 
// 	childList: [			// 指定这个菜单所有的子菜单, 子菜单可以继续指定子菜单, 至多支持三级菜单
// 		// .... 
// 	],
//	click: function(){}		// 点击菜单执行一个函数 
// }

// 定义菜单列表 
var menuList =	[
	// {
    // 	// 	id: '1',
    // 	// 	name: '文档说明',
    // 	// 	icon: 'el-icon-document-remove',
    // 	// 	info: 'sa-admin使用文档',
    // 	// 	childList: [
    // 	// 		{id: '1-1', name: '集成步骤', url: '../html/sa-doc/sa-doc.html?way=start-up'},
    // 	// 		{id: '1-2', name: '鉴权操作', url: '../html/sa-doc/sa-doc.html?way=check-per'},
    // 	// 		{id: '1-11', name: '在线论坛', url: 'http://applist.dev33.cn/applist-admin/html/ser-comment/w-list.html?sid=kcafzieb2tcw'},
    //     //
    // 	// 	]
    // 	// },
    // {
		// id: '2',
		// name: '各种示例',
		// icon: 'el-icon-search',
		// info: '增删改查各种常用组件示例',
		// childList: [
		// 	{id: '2-1', name: '查询参数示例', url: '../html/case/query-p-case.html'},
		// 	{id: '2-2', name: '表格显示示例', url: '../html/case/query-table-case.html'},
		// 	{id: '2-3', name: '表单提交示例', url: '../html/case/submit-form.html'},
		// ]
    // },
    // {
		// id: '3',
		// name: '首页设置',
		// icon: 'el-icon-table-lamp',
		// info: '首页的一些设置',
		// childList: [
		// 	{id: '3-2', name: '轮播图设置', url: '../html/home/swiper-list.html'}
		// ]
    // },
    // {
		// id: '4',
		// name: '权限控制',
		// icon: 'el-icon-unlock',
		// info: '对系统角色权限的分配等设计，敏感度较高，请谨慎授权',
		// childList: [
		// 	{id: '4-1', name: '角色列表', url: '../html/role/role-list.html'},
		// 	{id: '4-2', name: '菜单列表', url: '../html/role/menu-list.html'}
		// ]
    // },
	{
		id: '1',
		name: '图片管理',
		icon: 'el-icon-picture',
		info: '管理门户页',
		childList: [
			{id: '1-1', name: '关于中润', url: '../html/management/about.html'},
			{id: '1-2', name: '产品实力', url: '../html/management/product.html'},
			{id: '1-3', name: '技术支持', url: '../html/management/technology.html'},
			{id: '1-4', name: '新闻活动', url: '../html/management/news.html'},
			{id: '1-5', name: '联系我们', url: '../html/management/contact.html'},
			{id: '1-6', name: '首页&关于中润', url: '../html/management/index.html'},
			/*{
				id: '1-3',
				name: '用户统计',
				childList: [
					{
						id: '1-3-1',
						name: '注册量统计',
						url: '../html/user/user-chart.html'
					}
				]
			}*/
		]
	},
    {
        id: '2',
        name: '新闻管理',
        icon: 'el-icon-s-comment',
        info: '添加新闻',
        childList: [
            {id: '2-1', name: '添加新闻', url: '../html/management/add_news.html'}
        ]
    },
	{
		id: '3',
		name: '修改地址',
		icon: 'el-icon-edit',
		info: '修改公司地址',
		childList: [
			{id: '3-1', name: '修改公司地址', url: '../html/management/update_Ltd_address.html'}
			]
	},
    {
    	id: '4',
    	name: 'SEO修改',
    	icon: 'el-icon-edit',
    	info: '修改搜索网址的关键信息',
    	childList: [
    		{id: '4-1', name: 'SEO修改', url: '../html/management/SEO.html'}
    	]
    },
    {
        id: '5',
        name: '手机端联系方式',
        icon: 'el-icon-phone',
        info: '手机端联系方式修改',
        childList: [
            {id: '5-1', name: '联系方式', url: '../html/management/phone.html'}
        ]
    }
    // ,
    // {
    //     id: '6',
    //     name: '用户管理',
    //     icon: 'el-icon-edit',
    //     info: '修改用户信息',
    //     childList: [
    //         {id: '6-1', name: '用户列表', url: '/html/user/user-list.html'},
    //         {id: '6-2', name: '用户添加', url: '/html/user/user-add.html'},
    //         {id: '6-4', name: '用户修改', url: '/html/user/user-list.html'},
    //     ]
    // }
	/*{
		id: '3',
		name: '系统设置',
		icon: 'el-icon-setting',
		childList: [
			{id: '3-1', name: '登录页', url: 'static.html.login.html'},
			{id: '3-8', name: '403无权限', url: '../html/error-page/403.html'},
			{id: '3-9', name: '404未找到', url: '../html/error-page/404.html'},
			{id: '3-10', name: '500有错误', url: '../html/error-page/500.html'},
			{id: '3-11', name: '服务器设置', url: '../html/cfg/system-cfg.html', info: '对服务器参数的设置'},
			{id: '3-12', name: '函数菜单', click: function(){sa.alert('点击菜单执行一个函数')}}
		]
	}*/
	//  ========= 示例 外部链接 点击从新窗口打开 ================
	// {
	// 	id: '8',
	// 	name: '外部链接',
	// 	icon: 'el-icon-link',
	// 	info: '示例：外部链接',
	// 	childList: [
	// 		{id: '8-1', name: '百度一下', url: 'https://www.baidu.com/', is_blank: true},
	// 		{id: '8-3', name: 'sa-token', url: 'http://sa-token.dev33.cn/', is_blank: true},
	// 		{id: '8-4', name: 'SqlFly', url: 'https://sqlfly.dev33.cn/', is_blank: true},
	// 		{id: '8-6', name: '颜值排行榜', url: 'http://yanzhi21.com/', is_blank: true},
	// 		{id: '8-7', name: 'jq22插件库', url: 'http://www.jq22.com/', is_blank: true},
	// 		{id: '8-2', name: 'uni-app', url: 'https://uniapp.dcloud.io/', is_blank: true},
	// 	]
	// },
	//  ========= 示例 隐藏的菜单，最终将不会显示在菜单栏里 ================
	// {
	// 	id: '9',
	// 	name: '一个隐藏菜单',
	// 	url: 'https://www.baidu.com/',
	// 	is_blank: true,
	// 	is_show: false// 隐藏
	// }
]