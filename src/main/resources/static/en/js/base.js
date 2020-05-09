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
        $(window).scroll(function(){
            var winTop = $(window).scrollTop();
            // console.log(winTop)
            var _width = $(window).width()
            if(_width>1000){
                if( winTop > 300 ){
                    $(".g-about-index").eq(0).stop().animate({
                        top:0,
                        opacity:1
                    },500)
                }
                if(winTop > 1000 ){
                    $(".g-about-index").eq(1).stop().animate({
                        top:0,
                        opacity:1
                    },500)
                }
                if(winTop > 1900 ){
                    $(".g-about-index").eq(2).stop().animate({
                        top:0,
                        opacity:1
                    },500)
                }
                if(winTop > 2400 ){
                    $(".g-about-index").eq(3).stop().animate({
                        top:0,
                        opacity:1
                    },500)
                }
                if(winTop > 3000 ){
                    $(".g-about-index").eq(4).stop().animate({
                        top:0,
                        opacity:1
                    },500)
                }
            }else{
                if( winTop > 80 ){
                    $(".g-about-index").eq(0).stop().animate({
                        top:0,
                        opacity:1
                    },500)
                }
                if(winTop > 600 ){
                    $(".g-about-index").eq(1).stop().animate({
                        top:0,
                        opacity:1
                    },500)
                }
                if(winTop > 1200 ){
                    $(".g-about-index").eq(2).stop().animate({
                        top:0,
                        opacity:1
                    },500)
                }
                if(winTop > 1700 ){
                    $(".g-about-index").eq(3).stop().animate({
                        top:0,
                        opacity:1
                    },500)
                }
                if(winTop > 2200 ){
                    $(".g-about-index").eq(4).stop().animate({
                        top:0,
                        opacity:1
                    },500)
                } 
            }
            
        });
    }
    // 导航
    if(_common.pageTo == "con"){
    share();//分享；
    }
    if( _common.page == "1" ){
        //首页banner
        var _banner = $("#g_banner")
        for( var i=0;i<_banner.find("div").length; i++){
            _banner.find(".swiper-slide").eq(i).find("img").attr("src",api_url+'/'+indexPro.banner[i].titleurl)
        }
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
        var index_pro1=$("#g-pro-list1")
        var index_pro3=$("#g-pro-list2")

        // 首页关于我们
        var _about_index_title = $("#about_index_title")
        var _about_index = $("#about_index")
                var _about_index_title = $("#about_index_title")
                var _about_index = $("#about_index")
                var _about_index = $("#about_index")
                var _about_v = $("#about_v")
                var _about_html = '<video muted="" loop="" autoplay="">'+
                                        '<source src="'+api_url+'/'+indexPro.about.titleurl+'" type="video/ogg"/>'+
                                    '</video>'
                _about_index_title.html(arrAbout2.title)
                _about_index_title.html('Break through the limitations of traditional thinking, and always keep the equipment and production capacity at the domestic advanced')
                _about_index.html('Break through the limitations of traditional thinking, and always keep the equipment and production capacity at the domestic advanced')
                _about_v.append(_about_html)
    //首页调用产品
            function index_pro(e,h){
            var _h=h+4
            for( var h=1;h<_h;h++ ){
                var _e = "pro_"+h
                var _num = h-1
                var html = '<li>'+
                                '<a href="pro-con.html?id='+ h +'">'+
                                    '<em class="u-img">'+
                                        '<img src='+ api_url+'/'+indexPro.neidai[_num].titleurl +' alt="'+pro_box[_e].titleEn+'">'+
                                    '</em>'+
                                    '<strong>'+pro_box[_e].titleEn+'</strong>'+
                                    '<p>'+pro_box[_e].titleHpEn+'</p>'+
                                    '<span class="u-img-zhao">'+pro_box[_e].titleHpEn+
                                    '</span>'+
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
                                        '<img src='+ api_url+'/'+ indexPro.waidai[_num].titleurl +' alt="'+pro_box[_e].titleEn+'">'+
                                    '</em>'+
                                    '<strong>'+pro_box[_e].titleEn+'</strong>'+
                                    '<p>'+pro_box[_e].titleHpEn+'</p>'+
                                    '<span class="u-img-zhao">'+pro_box[_e].titleHpEn+
                                    '</span>'+
                                '</a>'+
                            '</li>'
                e.append(html)
            }
        }
        index_pro(index_pro1,1);
        index_pro2(index_pro3,5);

    //改善创新，拓展可能
    var _tuozhan_txt = $("#f-tuozhan-txt")
    var _tuozhan = $("#g-tuozhan")
    for(var i=0;i<_tuozhan.find("li").length;i++){
        _tuozhan.find("li").eq(i).find("img").attr({
            "src":api_url+'/'+indexPro.innovation.innovation[i].titlepic,
            "alt":api_url+'/'+indexPro.innovation.innovation[i].title,
        })
    }
    //解决方案
        var _fangan_txt = $("#fangan-box")
        console.log(indexPro.program.program.length)
        for(var i=0;i<indexPro.program.program.length;i++){
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
        var _about_title = $("#about_box")
        var _about1_box = $("#about_box1")
        var _about2_box = $("#about_box2")
        var _industry1 = $("#industry1")
        var _industry2 = $("#industry2")
        _about_title.find("img").attr("src",api_url+'/'+arrAbout2.titlepic)
        _about1_box.find(".g-about-r img").attr("src",api_url+'/'+arrAbout2.info.info1.introduce1)
        _about2_box.find(".g-about-r img").attr("src",api_url+'/'+arrAbout2.info.info2.introduce2)
        function fnIndustry(){
            // console.log(arrIndustry.recognized.length)
            for( var i=0;i<arrIndustry.recognized.length;i++){
                if(i<4){
                    _html_ = '<a href="#"><img src="'+ api_url+'/'+arrIndustry.recognized[i].titlepic +'" title="'+ arrIndustry.recognized[i].title +'" alt="'+ arrIndustry.recognized[i].title +'"><p></p></a>'
                    _industry1.find("div").eq(0).append(_html_)
                }else if(i<9){
                    _html_ = '<a href="#"><img src="'+ api_url+'/'+arrIndustry.recognized[i].titlepic +'" title="'+ arrIndustry.recognized[i].title +'" alt="'+ arrIndustry.recognized[i].title +'"><p></p></a>'
                    _industry1.find("div").eq(1).append(_html_)
                }else{
                    _html_ = '<a href="#"><img src="'+ api_url+'/'+arrIndustry.recognized[i].titlepic +'" title="'+ arrIndustry.recognized[i].title +'" alt="'+ arrIndustry.recognized[i].title +'"><p></p></a>'
                    _industry1.find("div").eq(2).append(_html_)
                }
                if(i<3){
                    _html_ = '<a href="#"><img src="'+ api_url+'/'+arrIndustry.recognized[i].titlepic +'" title="'+ arrIndustry.recognized[i].title +'" alt="'+ arrIndustry.recognized[i].title +'"><p></p></a>'
                    _industry2.find("div").eq(0).append(_html_)
                }else if(i<6){
                    _html_ = '<a href="#"><img src="'+ api_url+'/'+arrIndustry.recognized[i].titlepic +'" title="'+ arrIndustry.recognized[i].title +'" alt="'+ arrIndustry.recognized[i].title +'"><p></p></a>'
                    _industry2.find("div").eq(1).append(_html_)
                }else if(i<9){
                    _html_ = '<a href="#"><img src="'+ api_url+'/'+arrIndustry.recognized[i].titlepic +'" title="'+ arrIndustry.recognized[i].title +'" alt="'+ arrIndustry.recognized[i].title +'"><p></p></a>'
                    _industry2.find("div").eq(2).append(_html_)
                }else if(i<12){
                    _html_ = '<a href="#"><img src="'+ api_url+'/'+arrIndustry.recognized[i].titlepic +'" title="'+ arrIndustry.recognized[i].title +'" alt="'+ arrIndustry.recognized[i].title +'"><p></p></a>'
                    _industry2.find("div").eq(3).append(_html_)
                }else if(i<15){
                    _html_ = '<a href="#"><img src="'+ api_url+'/'+arrIndustry.recognized[i].titlepic +'" title="'+ arrIndustry.recognized[i].title +'" alt="'+ arrIndustry.recognized[i].title +'"><p></p></a>'
                    _industry2.find("div").eq(4).append(_html_)
                }else{
                    _html_ = '<a href="#"><img src="'+ api_url+'/'+arrIndustry.recognized[i].titlepic +'" title="'+ arrIndustry.recognized[i].title +'" alt="'+ arrIndustry.recognized[i].title +'"><p></p></a>'
                    _industry2.find("div").eq(5).append(_html_) 
                }
            }
        }
        fnIndustry();
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

    }
    if(_common.page == "5" ){
        var _jishu_txt = $("#jishu_txt")
        var _jishu_zc = $("#jishu_zc")
        var _jishu_cx = $("#jishu_cx")
        var _jishu_sl = $("#jishu_sl")
        var _jishu_sl1 = $("#jishu_sl1")
        var _jishu_sl2 = $("#jishu_sl2")
        _jishu_txt.find("img").attr("src",api_url+'/'+arrJishu.titlepic)
        _jishu_zc.find("img").attr({
            "src":api_url+'/'+arrJishu.jishu.jspic1,
            "alt":arrJishu.jishu.jstitle1,
        })
        _jishu_cx.find("img").attr({
            "src":api_url+'/'+arrJishu.jishu.jspic2,
            "alt":arrJishu.jishu.jstitle2,
        })
        _jishu_sl.find("p").html(arrJishu.sbdescription)
        for(var i=1;i<6;i++){
            var _e = "jspic"+i
            var _e2 = 'jstitle'+i
            var _e3 = 'jsdescription'+i
            var _i = i-1
            var _i_ = i-3
            if(i<3){
                _jishu_sl1.find("a").eq(_i).find("img").attr("src",api_url+'/'+arrJishu.device[_e])
            }else{
                _jishu_sl2.find("a").eq(_i_).find("img").attr("src",api_url+'/'+arrJishu.device[_e])
            }
        }
    }
    if(_common.page == "6" ){
        // console.log(arrContact2)
        var _lianxi_txt =$("#lianxi_txt")
        var _lianxi_box =$("#lianxi_box")
        var _lianxi_jr = $("#lianxi_jr")
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
        var reg,reg2,url,Url,arr2,jsonarr
        var new_page,new_size,new_yema
        var _url = window.location.search.substring("1")
        new_size = 2
        console.log(_url)
        if( _url !="" ){
            reg = new RegExp("&","g")
            reg2 = new RegExp("=","g")
            url = _url.replace(reg,'","')
            Url = url.replace(reg2,'":"')
            arr2 = '{"'+Url+'"}'
            jsonarr = JSON.parse(arr2)
            console.log(jsonarr.page,jsonarr.pagesize)
            new_page = jsonarr.page
        }else{
            new_page = 1
        }
        function new_list_box(){
            var new_url = api_url+'/api/resource/getTheNewsCenterData?page='+ new_page +'&pagesize='+new_size;
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
                                    '<a href="news-con.html?id='+ val.id +'">'+
                                        '<em class="u-img"><img src="'+api_url+'/' + val.url +'" alt="'+ val.title +'"></em>'+
                                        '<span class="g-txt-box">'+
                                            '<strong>news</strong>'+
                                            '<em>'+ _new_time_[0] +'</em>' +
                                        '</span>'+
                                    '</a>'+
                                '</li>'
                    _new_list.append(html)
                })
                //页码
                var new_yema =  new_data.pagenum/new_size
                    for( var i=1;i<new_yema;i++ ){
                        var new_yema_txt = '<a href="news.html?page='+ i +'&pagesize='+ new_size +'" rel="'+ i +'">'+ i +'</a>'
                        _new_page.find("a").last().before(new_yema_txt)
                    }
                    $("#new_list_page").find("a").eq(new_page).addClass("cur")
                    $("#new_list_page").find("a").last().click(function(){
                        if(new_page<new_yema-1){
                            new_page++
                        }else{
                            return false;
                        }
                        window.location.href = 'news.html?page='+ new_page +'&pagesize='+ new_size
                    })
                    $("#new_list_page").find("a").first().click(function(){
                        if(new_page>1){
                            new_page--
                        }else{
                            return false;
                        }
                        window.location.href = 'news.html?page='+ new_page +'&pagesize='+ new_size
                    })
                },
                error: function (data) {
                    console.log("error")
                }
            });
        }
        new_list_box();
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
    var _pro_jiejing = $("#pro_jiejing")
    var _pro_fangan = $("#pro_fangan")
    var _pro_liucheng = $("#pro_liucheng")
    for(var i=1;i<5;i++){
        var _pro_ = "pro_"+i
            pro_html = '<li>'+
                        '<a href="pro-con.html?id='+ i +'">'+
                            '<em class="u-img"><img src="'+ api_url+'/'+arrProduct.outerBag[i].wdpic +'" alt="'+ pro_box[_pro_].titleEn +'"></em>'+
                            '<span class="g-txt-box">'+
                                '<strong>'+ pro_box[_pro_].titleEn +'</strong>'+
                                '<p>'+ pro_box[_pro_].titleHpEn +'</p>'+
                            '</span> '+
                        '</a>'+
                    '</li>'
            _pro_list.append(pro_html)
        }
        for(var i=0;i<2;i++){
            _pro_jiejing.find("a").eq(i).find('img').attr("src",api_url+'/'+arrProduct.process[i].titlepic) 
        }
        for(var i=0;i<8;i++){
            _pro_liucheng.find("li").eq(i).find('img').attr("src",api_url+'/'+arrProduct.program[i].titlepic) 
        }
        for(var i=0;i<4;i++){
            _pro_fangan.find("li").eq(i).find("img").attr("src",api_url+'/'+ arrProduct.control[i].titlepic) 
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