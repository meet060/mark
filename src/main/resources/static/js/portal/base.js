$(function(){
    if(typeof(_common) == 'undefined'){
        return false;
    }
    head();//头部
    head_foot_txt("cn");//头部底部
    scoll_nav();//滚动条事件
    $()
    if( _common.pageJs == "index" ){
        baseJs.Index();
    }
    // 导航
    if(_common.pageTo == "con"){
    share();//分享；
    }
    if( _common.page == "1" ){
        var _pro_title = $("#f-pro-title")
        var index_pro1=$("#g-pro-list1")
        var index_pro3=$("#g-pro-list2")
        index_pro(index_pro1,1);
        index_pro2(index_pro3,5);
        // 首页关于我们
        var _about_index_title = $("#about_index_title")
        var _about_index = $("#about_index")
        var _about_index = $("#about_index")
        var _about_v = $("#about_v")
        var _about_html = '<video muted="" loop="" autoplay="">'+
                                '<source src="'+api_url+'/'+indexPro.about.titleurl+'" type="video/ogg"/>'+
                            '</video>'
        _about_index_title.html(arrAbout2.title)
        _about_index.html(arrAbout2.description)
        _about_v.append(_about_html)
    //产品标题描述
        _pro_title.html(indexPro.innovation.description)
    //首页调用产品
        function index_pro(e,h){
            var _h=h+4
            for( var h=1;h<_h;h++ ){
                var _e = "pro_"+h
                var _num = h-1
                var html = '<li>'+
                                '<a href="pro-con.html?id='+ h +'">'+
                                    '<em class="u-img">'+
                                        '<img src='+ api_url+'/'+indexPro.neidai[_num].titleurl +' alt="'+indexPro.neidai[_num].title+'">'+
                                    '</em>'+
                                    '<strong>'+indexPro.neidai[_num].title+'</strong>'+
                                    '<p>'+indexPro.neidai[_num].description+'</p>'+
                                '</a>'+
                            '</li>'
                e.append(html)
            }
        }
        function index_pro2(e,h){
            var _h=h+4
            for( var h;h<_h;h++ ){
                var _e = "pro_"+h
                var _num = h-5
                var html = '<li>'+
                                '<a href="pro-con.html?id='+ h +'">'+
                                    '<em class="u-img">'+
                                        '<img src='+ api_url+'/'+ indexPro.waidai[_num].titleurl +' alt="'+indexPro.waidai[_num].title+'">'+
                                    '</em>'+
                                    '<strong>'+indexPro.waidai[_num].title+'</strong>'+
                                    '<p>'+indexPro.waidai[_num].description+'</p>'+
                                '</a>'+
                            '</li>'
                e.append(html)
            }
        }
    //改善创新，拓展可能
    var _tuozhan_txt = $("#f-tuozhan-txt")
    var _tuozhan = $("#g-tuozhan")
    for(var i=0;i<_tuozhan.find("li").length;i++){
        _tuozhan.find("li").eq(i).find("img").attr({
            "src":api_url+'/'+indexPro.innovation.innovation[i].titlepic,
            "alt":api_url+'/'+indexPro.innovation.innovation[i].title,
        })
    }
    _tuozhan_txt.find("p").html(indexPro.innovation.description)
    //解决方案
    var _fangan = $("#fangan")
    var _fangan_txt = $("#fangan-box")
    _fangan.find("p").html(indexPro.program.description)
    for(var i=0;i<_fangan_txt.find("li").length;i++){
        _fangan_txt.find("li").eq(i).find("img").attr({
            "src":api_url+'/'+indexPro.program.program[i].titlepic,
            "alt":indexPro.program.program[i].title
        })
    }
    }
    if( _common.page == "2" ){
        pro_con()
    }
    if(_common.page == "3" ){
        pro_list();

    }
    if(_common.page == "4" ){
        pro_list();
        var _about_title = $("#about_box")
        var _about1_box = $("#about_box1")
        var _about2_box = $("#about_box2")
        console.log(arrAbout)
        _about_title.find("p").html(arrAbout2.title)
        _about1_box.find(".g-about-r img").attr("src",api_url+'/'+arrAbout2.info.info1.introduce1)
        _about1_box.find(".g-about-l").append("<p>"+ arrAbout2.info.info1.introDescription1 +"</p>")
        _about1_box.find(".g-about-h2").html(arrAbout2.info.info1.introtitle1)
        _about2_box.find(".g-about-r img").attr("src",api_url+'/'+arrAbout2.info.info2.introduce2)
        _about2_box.find(".g-about-l").append("<p>"+ arrAbout2.info.info2.introDescription2 +"</p>")
        _about2_box.find(".g-about-h2").html(arrAbout2.info.info1.introtitle2)
        
    }
    if(_common.page == "5" ){
        console.log(arrJishu)
        var _jishu_txt = $("#jishu_txt")
        var _jishu_zc = $("#jishu_zc")
        var _jishu_cx = $("#jishu_cx")
        var _jishu_sl = $("#jishu_sl")
        var _jishu_sl1 = $("#jishu_sl1")
        var _jishu_sl2 = $("#jishu_sl2")
        _jishu_txt.find("p").html(arrJishu.sbdescription)
        _jishu_zc.find("p").html(arrJishu.jishu.jsdescription1)
        _jishu_zc.find("img").attr({
            "src":api_url+'/'+arrJishu.jishu.jspic1,
            "alt":arrJishu.jishu.jstitle1,
        })
        _jishu_cx.find("p").html(arrJishu.jishu.jsdescription2)
        _jishu_cx.find("img").attr({
            "src":api_url+'/'+arrJishu.jishu.jspic2,
            "alt":arrJishu.jishu.jstitle2,
        })
        _jishu_sl.find("p").html(arrJishu.sbdescription)
        for(var i=1;i<6;i++){
            var _e = "jspic"+i
            var _e2 = 'jstitle'+i
            var _e3 = 'jsdescription'+i
            var js_html = '<a href="">'+
                                '<em class="u-img"><img src="'+ api_url+'/'+arrJishu.device[_e] +'" alt=""></em>'+
                                '<span class="g-txt-box">'+
                                    '<strong>'+arrJishu.device[_e2] +'</strong>'+
                                    '<p>'+arrJishu.device[_e3] +'</p>'+
                                '</span>'+
                            '</a>'
            if(i<3){
                _jishu_sl1.append(js_html)
            }else{
                _jishu_sl2.append(js_html)
            }
        }
    }
    if(_common.page == "6" ){
        console.log(arrContact2)
        var _lianxi_txt =$("#lianxi_txt")
        var _lianxi_box =$("#lianxi_box")
        var _lianxi_jr = $("#lianxi_jr")
        _lianxi_txt.find("p").html(arrContact2.title)
        _lianxi_txt.find("img").attr("src",api_url+'/'+arrContact2.titlepic)
        _lianxi_box.find("h3").html(arrContact2.contact.company)
        _lianxi_box.find("p").eq(0).html(arrContact2.contact.address)
        _lianxi_box.find("p").eq(1).html('电话：'+arrContact2.contact.phone)
        _lianxi_box.find("p").eq(2).html('手机：'+arrContact2.contact.cellPhone)
        _lianxi_box.find("p").eq(3).html('传真：'+arrContact2.contact.fax)
        _lianxi_box.find("p").eq(4).html('邮箱：'+arrContact2.contact.mailbox)
        _lianxi_jr.find("h2").html(arrContact2.bottom.title)
        _lianxi_jr.find("p").html(arrContact2.bottom.description)
    }
    if(_common.page == "7" ){
                var _url = window.location.search.substring("1")
                var reg = new RegExp("&","g")
                var reg2 = new RegExp("=","g")
                var url = _url.replace(reg,'","')
                var Url = url.replace(reg2,'":"')
                var arr2 = '{"'+Url+'"}'
                // var jsonarr = JSON.parse(arr2)
                console.log(arr2)
                // console.log(jsonarr.page,jsonarr.pagesize)
        function new_list_box(){
            var new_page = 1
            var new_size = 10
            var new_url = api_url+'/api/resource/getTheNewsCenterData?page='+ new_page +'&size='+new_size;
            var _new_list = $("#new_list")
            var _new_page = $("#new_list_page")
            $.ajax({
                type: "POST",
                url: new_url,
                success: function(new_data) {
                var new_num = new_data.pagenum
                $.each(new_data.news,function(i,val){
                    var new_time = val.newtime
                    var _new_time_ = new_time.split("T")
                    var html = '<li>'+
                                    '<a href="news-con.html?'+ val.id +'">'+
                                        '<em class="u-img"><img src="'+api_url+'/' + val.url +'" alt="'+ val.title +'"></em>'+
                                        '<span class="g-txt-box">'+
                                            '<strong>'+ val.title +'</strong>'+
                                            '<em>'+ _new_time_[0] +'</em>' +
                                        '</span>'+
                                    '</a>'+
                                '</li>'
                    _new_list.append(html)
                })
                console.log(new_data)
                //页码
                var new_yema =  new_data.pagenum/new_size + 1
                    for( var i=1;i<new_yema;i++ ){
                        var new_yema_txt = '<a href="news.html?page='+ new_page +'&pagesize='+ new_size +'" rel="'+ i +'">'+ i +'</a>'
                        _new_page.find("a").last().before(new_yema_txt)
                    }
                    _new_page.find("a").each(function(){
                        var _page_class = $(this).attr("rel")
                        if( _page_class == new_page ){
                            $(this).addClass("cur")
                        }
                    })

                },
                error: function (data) {
                    console.log("error")
                }
            });
        }
        new_list_box();
        $("#new_list_page").find("a").click(function(){
            var new_page = $(this).attr("rel")
        })
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
    var _pro_txt = $("#pro_txt p")
    var _pro_neidai = $("#pro_neidai")
    var _pro_jzd = $("#pro_jzd")
    var _pro_jiejing = $("#pro_jiejing")
    var _pro_fangan = $("#pro_fangan")
    var _pro_liucheng = $("#pro_liucheng")
    _pro_txt.html(arrProduct.title)
    _pro_list.find("p").html(arrProduct.outerBagDescription)
    _pro_neidai.find("p").html(arrProduct.innerBag[0].nddescription)
    _pro_jzd.find("h2").html(arrProduct.jzdtitle)
    _pro_jzd.find("p").html(arrProduct.jzddescription)
    for(var i=0;i<4;i++){
            pro_html = '<li>'+
                        '<a href="pro-con.html?id='+ i +'">'+
                            '<em class="u-img"><img src="'+ api_url+'/'+arrProduct.outerBag[i].wdpic +'" alt="'+ arrProduct.outerBag[i].wdtitle +'"></em>'+
                            '<span class="g-txt-box">'+
                                '<strong>'+arrProduct.outerBag[i].wdtitle +'</strong>'+
                                '<p>'+ arrProduct.outerBag[i].wddescription +'</p>'+
                            '</span> '+
                        '</a>'+
                    '</li>'
            _pro_list.find("ul").append(pro_html)
        }
    for(var i=0;i<2;i++){
        html='<a href="">'+
                    '<em class="u-img"><img src="'+ api_url+'/'+arrProduct.process[i].titlepic +'" alt="'+ arrProduct.process[i].title +'"></em> '+
                    '<span class="g-txt-box">'+
                        '<strong>'+ arrProduct.process[i].title +'</strong>'+
                        '<p>'+ arrProduct.process[i].description +'</p> '+   
                    '</span>'+
                '</a>'
        _pro_jiejing.append(html)  
    }
    _pro_fangan.find("h2").html(arrProduct.qhytitle)
    _pro_fangan.find("p").html(arrProduct.qhydescription)
    for(var i=0;i<8;i++){
        _html='<li>'+
                '<a href="">'+
                   ' <em class="u-img"><img src="'+ api_url+'/'+arrProduct.program[i].titlepic +'" alt="'+ arrProduct.program[i].title +'"></em>'+
                    '<span class="g-txt-box">'+
                        '<strong>'+ arrProduct.program[i].title +'</strong>'+
                    '</span>'+
                '</a>'+
            '</li>'
        _pro_fangan.find("ul").append(_html) 
    }

    //流程
    _pro_liucheng.find("h2").html(arrProduct.zktitle)
    _pro_liucheng.find("p").html(arrProduct.zkdescription)
    for(var i=0;i<4;i++){
        html='<a href="">'+
                   '<em class="u-img">'+
                        '<img src="'+ api_url+'/'+ arrProduct.control[i].titlepic +'" alt="'+ arrProduct.control[i].title +'">'+
                    '</em>'+
                    '<span class="g-txt-box">'+
                        '<strong>'+ arrProduct.control[i].title +'</strong>'+
                        '<p>'+ arrProduct.control[i].description +'</p>'+
                    '</span>'+
                '</a>'
            _pro_liucheng.find("li").append(html)
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
        _title.html(pro_box[id].title)
        _banner_txt.html(pro_box[id].banner_txt)
        _pro_img.attr("src",pro_box[id].pro_img)
        _titleH.html(pro_box[id].titleH)
        _titleHp.html(pro_box[id].titleHp)
        _titleH2.html(pro_box[id].titleH2)
        _aqTxt.append(pro_box[id].aqTxt)
        _jzTxt.html(pro_box[id].jzTxt)
        _protxt1.html(pro_box[id].protxt1)
        _protxt2.html(pro_box[id].protxt2)
    }
