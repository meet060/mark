$(function(){
    if(typeof(_common) == 'undefined'){
        return false;
    }
    var arrAbout2 = JSON.parse(localStorage.getItem('aboutCookice'))  //关于我们
    head();//头部
    head_foot_txt("en");//头部底部
    scoll_nav();//滚动条事件
    if( _common.pageJs == "index" ){
        baseJs.Index();
    }
    // 导航
    if(_common.pageTo == "con"){
    share();//分享；
    }
    if( _common.page == "1" ){
        var index_pro1=$("#g-pro-list1")
        var index_pro3=$("#g-pro-list2")
        // 首页关于我们
        var _about_index_title = $("#about_index_title")
        var _about_index = $("#about_index")
        _about_index_title.html('Break through the limitations of traditional thinking, and always keep the equipment and production capacity at the domestic advanced')
        _about_index.html('Break through the limitations of traditional thinking, and always keep the equipment and production capacity at the domestic advanced')
    //首页调用产品
        function index_pro(e,h){
            var _h=h+4
            for( var h=1;h<_h;h++ ){
                var _e = "pro_"+h
                var html = '<li>'+
                                '<a href="pro-con.html?id='+ h +'">'+
                                    '<em class="u-img">'+
                                        '<img src="'+pro_box[_e].pro_imgEn+'" alt="">'+
                                    '</em>'+
                                    '<strong>'+pro_box[_e].titleEn+'</strong>'+
                                    '<p>'+pro_box[_e].banner_txtEn+'</p>'+
                                '</a>'+
                            '</li>'
                e.append(html)
            }
        }
        function index_pro2(e,h){
            var _h=h+4
            for( var h;h<_h;h++ ){
                var _e = "pro_"+h
                var html = '<li>'+
                                '<a href="pro-con.html?id='+ h +'">'+
                                    '<em class="u-img">'+
                                        '<img src="'+pro_box[_e].pro_imgEn+'" alt="">'+
                                    '</em>'+
                                    '<strong>'+pro_box[_e].titleEn+'</strong>'+
                                    '<p>'+pro_box[_e].banner_txtEn+'</p>'+
                                '</a>'+
                            '</li>'
                e.append(html)
            }
        }
        index_pro(index_pro1,1);
        index_pro2(index_pro3,5);
    }
    if( _common.page == "2" ){
        pro_con()
    }
    if(_common.page == "3" ){
        pro_list();
    }
});

var baseJs = {
Index:function(){
//导航切换
nav();

//移动端调出导航
var nav_open=$(".g-nav_btn")
var nav_list=$(".g-nav-list")
nav_open.click(function(){
    nav_list.slideToggle();
})
//我们的产品切换
var pro_btn = $(".f-pro-btn a")
pro_btn.on("mouseover",function(){
    var e = $(this).index()
    $(this).addClass("cur").siblings().removeClass("cur")
    $(".g-pro-list").eq(e).addClass("g-pro-list2").siblings(".g-pro-list").removeClass("g-pro-list2")
})

//解决方案
var fangan = $(".g-fangan ul li")
fangan.mouseenter(function(){
    $(this).find("strong").stop().slideUp();
}).mouseleave(function(){
    $(this).find("strong").stop().slideDown();
})
//回到顶部
var go_top = $(".g-gotop")
go_top.on("click",function(){
    $("html,body").animate({scrollTop:0},300)
})

// 留言
var liuyan_btn = $(".g-liuyan")
var liuyan_box = $(".g-liuyan-box em")
liuyan_btn.on("click",function(){
    $(".g-liuyan-box").show()
})
liuyan_box.on("click",function(){
    $(".g-liuyan-box").hide()
})
// banner
   var mySwiper = new Swiper('.swiper-container0', {
    autoplay: true,//可选选项，自动滑动
    loop : true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
//企业资质
var mySwiper = new Swiper('.swiper-container1', {
    autoplay: true,//可选选项，自动滑动
    loop : true,
    pagination: {
        el: '.swiper-pagination',
    },
})
//企业资质
var mySwiper = new Swiper('.swiper-container2', {
    autoplay: true,//可选选项，自动滑动
    loop : true,
    pagination: {
        el: '.swiper-pagination',
    },
})
//导航高亮
    function nav(){
        var nav_on = $(".g-nav-list li a")
        nav_on.each(function(){
            var _rel = $(this).attr("rel")
            var _url = window.location.href
            var _e = _url.indexOf(_rel)
            // console.log(_e)
            if( _rel != "undefined" && _e > -1 ){
                $(this).addClass("cur")
                $(this).siblings().removeClass("cur")
            }
        })
        }
}}
function share(){
window._bd_share_config={"common":{
    "bdSnsKey":{},
    "bdText":"",
    "bdMini":"2",
    "bdMiniList":false,
    "bdPic":"",
    "bdStyle":"0",
    "bdSize":"32"
},
    "share":{},
    "selectShare":{
        "bdContainerClass":null,
        "bdSelectMiniList":["qzone","tsina","weixin"]}};
        with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
}


function click_nav(click1,click2){
    click1.click(function(){
        click2.slideToggle("300");
    })
}

function mouse_btn(mouse1,mouse2){
    mouse1.on({
        "mouseover":function(){
            var e = $(this).index()
            $(this).addClass("on").siblings().removeClass("on")
            mouse2.eq(e).show().siblings().hide()
        }
    })
}
function scoll_nav(){
$(window).scroll(function(){
    var scroll_h = $(window).scrollTop()
    if(scroll_h > 100){
        $(".g-nav-list").addClass("g-nav-fixed")
        $(".g-head").addClass("g-head-fixed")
    }else{
        $(".g-nav-list").removeClass("g-nav-fixed")
        $(".g-head").removeClass("g-head-fixed")
    }
})
}
//产品列表页
function pro_list(){
    var _pro_list=$("#pro_shili")
    for(var i=1;i<5;i++){
        var _pro_ = "pro_"+i
            pro_html = '<li>'+
                        '<a href="pro-con.html?id='+ i +'">'+
                            '<em class="u-img"><img src="'+ pro_box[_pro_].pro_imgEn +'" alt="'+ pro_box[_pro_].titleEn +'"></em>'+
                            '<span class="g-txt-box">'+
                                '<strong>'+ pro_box[_pro_].titleEn +'</strong>'+
                                '<p>'+ pro_box[_pro_].titleHpEn +'</p>'+
                            '</span> '+
                        '</a>'+
                    '</li>'
            _pro_list.append(pro_html)
        }
    }
// 产品内容页面
function pro_con(){
    var index_url=window.location.search
    var id = "pro_"+index_url.substring(1).split("=")[1]
    var _title = $("#title"),
        _banner_txt=$("#banner_txt"),
        _pro_img=$("#pro_img"),
        _titleH=$("#titleH"),
        _titleHp=$("#titleHp"),
        _titleH2=$("#titleH2"),
        _aqTxt=$("#aqTxt"),
        _jzTxt=$("#jzTxt"),
        _protxt1=$("#protxt1"),
        _protxt2=$("#protxt2")
        _title.html(pro_box[id].titleEn)
        _banner_txt.html(pro_box[id].banner_txtEn)
        _pro_img.attr("src",pro_box[id].pro_imgEn)
        _titleH.html(pro_box[id].titleHEn)
        _titleHp.html(pro_box[id].titleHpEn)
        _titleH2.html(pro_box[id].titleH2En)
        _aqTxt.append(pro_box[id].aqTxtEn)
        _jzTxt.html(pro_box[id].jzTxtEn)
        _protxt1.html(pro_box[id].protxt1En)
        _protxt2.html(pro_box[id].protxt2En)
    }