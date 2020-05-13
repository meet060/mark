var api_url = ''
var jiekou = {
    "index_api":api_url+"/api/resource/queryIndexResources",//首页接口
    "industry_api":api_url+'/api/resource/checkIndustryApprovedPictures',//查询行业认可图片
    "about_api":api_url+'/api/resource/obtainInformationAboutZhongrun',//关于我们POST 
    "contact_api":api_url+'/api/resource/getTheContactInformation',//联系我们
    "online_api":api_url+'/api/afterSale/addAfterSale',//在线咨询
    "product_api":api_url+'/api/resource/productCenterDataQuery', //产品实力
    "jishu_api":api_url+'/api/resource/queryTechnicalSupportInformation',//技术页面
    "xiangqing_api":api_url+'/api/resource/news/',//新闻详情
    "liuyan_api":api_url+'/api/afterSale/addAfterSale'//留言POST
}
//首页联系我们
var dongya = {
        "jiaru":"中润，助你成就每一程",
        "beian":"© 邯郸市中润包装有限公司 冀ICP备14008699号-5",
        "jiaruEn":"Zhongrun, help you achieve every journey",
        "beianEn":"© 2020 Jiangyin Zhongrun Packaging Co., Ltd. JI ICP No.14008699-5"
    }
var head_foot={
    "head":{
        "footTxt":"在您繁复和缜密的运转中，包装不是令您分心的一环，这是中润努力的的方向。<br>我们尽力于，也善于让您的企业在使用包装运输时消除顾忌，甚至无需过多关注包装的存在，同时为您节省资金，我们的任务就是通过不断改进和创新满足您的需求。",
        "liuyanTieleTxt":"留言内容",
        "liuyanTxt":["姓名","电话(必填)","邮箱","地址","请输入您的留言内容"],
        "FootTxtEn": "In your complicated and meticulous operation, packaging is not a distracting part of you. This is the direction of Zhongrun's efforts. <br> We try our best to make your business use packaging and transportation Eliminate scruples without even paying too much attention to the existence of packaging, while saving you money, our task is to meet your needs through continuous improvement and innovation.",        "LiuyanTieleTxtEn": "Message Content",
        "LiuyanTxtEn": ["Name", "Phone (required)", "Email(required)", "Address", "Please enter your message content"],
    },
    "foot":{
        "index_txt":"网站首页",
        "about_txt":["关于中润","中润包装","行业认可","全球客户"],
        "pro_txt":["产品实力","产品中心","公益流程","应用领域","质量把控"],
        "jishu_txt":["技术支持","设备实力"],
        "news_txt":["新闻活动","最新动态"],
        "lianxi_txt":["联系我们","联系地址","加入中润"],
        "chat_txt":["电话","传真","邮箱","微信扫一扫","微信扫一扫"],
        "index_txtEn": "Homepage",
         "about_txtEn": ["About Zhongrun", "Zhongrun Packaging", "Industry Recognition", "Global Customers"],
         "pro_txtEn": ["Product Strength", "Product Center", "Public Welfare Process", "Application Field", "Quality Control"],
         "jishu_txtEn": ["Technical Support", "Equipment Strength"],
         "news_txtEn": ["News Activity", "Latest News"],
         "lianxi_txtEn": ["Contact Us", "Contact Address", "Join Zhongrun"],
         "chat_txtEn": ["Phone", "Fax", "Mailbox", "WeChat Scan","WeChat Scan"]},
}

function head(){
    var _body = $("body")
    var header = '<div class="g-top-nav clearfix">'+
                    '<a href="" class="g-logo-box f-fl"><img src="/images/logo.png" alt="" class="pc-logo"></a>'+
                    '<div class="g-nav_btn f-fr"></div>'+
                    '<div class="f-lang f-fr"><a href="/index.html" class="f-lang-e cur">中</a><a href="/en/index.html" class="f-lang-c">EN</a></div>'+
                    '<ul class="g-nav-list f-fr" id="head">'+
                        '<li><a href="index.html" class="cur"></a><a href="about.html" rel="about.html"></a><a href="pro-shili.html" rel="pro"></a><a href="jishu.html" rel="jishu.html"></a><a href="news.html" rel="news.html"></a><a href="contact.html" rel="contact.html"></a></li>'+
                    '</ul>'+
                    '</div>'
    var footer = '<div class="g-link-box">'+
                        '<p id="footTxt"></p>'+
                        '</div>'+
                        '<div class="g-liuyan-box">'+
                        '<h2 id="liuyanTieleTxt"></h2>'+
                        '<ul class="f-liuyan-box" id="liuyan_txt">'+
                            '<li><input type="text" placeholder="" id="nameTxt"></li>'+
                            '<li><input type="text" placeholder="" id="phoneTxt"></li>'+
                            '<li><input type="text" placeholder="" id="meailTxt"></li>'+
                            '<li><input type="text" placeholder="" id="addressTxt"></li>'+
                            '<li><textarea placeholder="" id="liuyanTxt"></textarea></li>'+
                            '<li><input type="submit" id="sumbtn"></li>'+
                        '</ul>  '+
                        '<em><img src="/images/icon_3.png" alt=""></em>  '+
                        '</div>'+
                        '<div class="g-liuyan"></div>'+
                        '<div class="g-gotop"></div>'+
                        '<div class="g-foot-box clearfix">'+
                    '<div class="g-foot-l" id="foot_txt">'+
                        '<div class="f-foot-nav">'+
                            '<a href="index.html" class="cur"></a>'+
                        '</div>'+
                    '<div class="f-foot-nav">'+
                            '<a href="about.html" class="cur"></a>'+
                            '<a href="about.html"></a>'+
                            '<a href="about.html"></a>'+
                            '<a href="about.html"></a>'+
                    ' </div>'+
                        '<div class="f-foot-nav">'+
                            '<a href="pro-shili.html" rel="" class="cur"></a>'+
                            '<a href="pro-shili.html"></a>'+
                            '<a href="pro-shili.html"></a>'+
                            '<a href="pro-shili.html"></a>'+
                            '<a href="pro-shili.html"></a>'+
                        '</div>   '+
                        '<div class="f-foot-nav">'+
                            '<a href="jishu.html" rel="" class="cur"></a>'+
                            '<a href="jishu.html"></a>'+
                        '</div>'+
                        '<div class="f-foot-nav">'+
                        '<a href="news.html" rel="" class="cur"></a>'+
                            '<a href="news.html"></a>'+
                    ' </div>'+
                        '<div class="f-foot-nav">'+
                            '<a href="contact.html" rel="" class="cur"></a>'+
                            '<a href="contact.html"></a>'+
                            '<a href="contact.html"></a>'+
                    ' </div>'+
                    '</div>'+
                    '<div class="g-foot-r">'+
                        '<div class="g-foot-chat f-fl">'+
                            '<img src="/images/chat.png" alt="">  '+
                            '<em id="chat_txt"></em> '+
                        '</div>'+
                        '<div class="g-foot-chat f-fl">'+
                            '<img src="/images/chat.png" alt="">  '+
                            '<em id="chat_txt2"></em> '+
                        '</div>'+
                     '</div>'+
                     '</div>'
    _body.prepend(header);
    _body.append(footer);
    // $("#footTxt").html(head_foot.head.footTxt)
    if( _common.lug == "en" ){
        // $("#footTxt").html(head_foot.head.FootTxtEn)
        $(".f-lang a").last().addClass("cur").siblings().removeClass("cur")
        $("body").append('<div class="g-dibu-nav"><a class="g-dianhua" href="/">HOME</a><a class="g-dianhua" href="about.html">ABOUT</a><a class="g-dianhua" href="tel:15369078000">CONTACT</a></div>')
    }else{
        $("body").append('<div class="g-dibu-nav"><a class="g-dianhua" href="/">首页</a><a class="g-dianhua" href="about.html">关于我们</a><a class="g-dianhua" href="tel:15369078000">联系我们</a></div>')  
    }
}
function head_foot_txt(e){
    var _head = $("#head")
    var _foot = $("#foot_txt")
    var _liuyan_ = $("#liuyanTieleTxt")
    var _liuyanTxt = $("#liuyan_txt")
    var _chatTxt = $("#chat_txt")
    var _chatTxt2 = $("#chat_txt2")
    var _head_ = head_foot.head
    var _foot_ = head_foot.foot
    if( e == "cn"){
        var foot_cen = '<div class="g-foot-c">'+
                                    '<p></p>'+
                                    '<p></p>'+
                                    '<p></p>'+
                                    '<p></p>'+
                                    '<p></p>'+
                            '</div>'
       var foot_bot = '<div class="g-footer">'+
                '<div class="g-foot-btn">'+ dongya.jiaru +'</div><p>'+ dongya.beian +'</p>'+
            '</div>'
        $(".g-foot-r").before(foot_cen)
        $(".g-foot-box").after(foot_bot)
        //头部导航
        _head.find("a").eq(0).html(_foot_.index_txt)
        _head.find("a").eq(1).html(_foot_.about_txt[0])
        _head.find("a").eq(2).html(_foot_.pro_txt[0])
        _head.find("a").eq(3).html(_foot_.jishu_txt[0])
        _head.find("a").eq(4).html(_foot_.news_txt[0])
        _head.find("a").eq(5).html(_foot_.lianxi_txt[0])
        //底部导航
        _chatTxt.html(_foot_.chat_txt[3])
        _chatTxt2.html(_foot_.chat_txt[4])
        _liuyan_.html(_head_.liuyanTieleTxt)
        _foot.find(".f-foot-nav").eq(0).find("a").html(_foot_.index_txt)
        $.each(_head_.liuyanTxt,function(i,val){
        _liuyanTxt.find("li").eq(i).children().attr("placeholder",val)
        })
        $.each(_foot_.about_txt,function(i,val){
        _foot.find(".f-foot-nav").eq(1).find("a").eq(i).html(val)
        })
        $.each(_foot_.pro_txt,function(i,val){
        _foot.find(".f-foot-nav").eq(2).find("a").eq(i).html(val)
        })
        $.each(_foot_.jishu_txt,function(i,val){
        _foot.find(".f-foot-nav").eq(3).find("a").eq(i).html(val)
        })
        $.each(_foot_.news_txt,function(i,val){
        _foot.find(".f-foot-nav").eq(4).find("a").eq(i).html(val)
        })
        $.each(_foot_.lianxi_txt,function(i,val){
        _foot.find(".f-foot-nav").eq(5).find("a").eq(i).html(val)
        })
        $("#footTxt").html(_head_.footTxt)
    }else{
        var foot_cen = '<div class="g-foot-c">'+
        '<p>'+ dongya.gongsiEn +'</p>'+
        '<p>'+ dongya.addressEn +'</p>'+
        '<p>'+head_foot.foot.chat_txtEn[0]+' : '+ dongya.iphoneEn +'</p>'+
        '<p>'+head_foot.foot.chat_txtEn[1]+' : '+ dongya.foxEn +'</p>'+
        '<p>'+head_foot.foot.chat_txtEn[2]+' : '+ dongya.emailEn +'</p>'+
        '</div>'
        var foot_bot = '<div class="g-footer">'+
                '<div class="g-foot-btn">'+ dongya.jiaruEn +'</div><p>'+ dongya.beianEn +'</p>'+
            '</div>'
        $(".g-foot-r").before(foot_cen)
        $(".g-foot-box").after(foot_bot)
        //头部导航
        _head.find("a").eq(0).html(_foot_.index_txtEn)
        _head.find("a").eq(1).html(_foot_.about_txtEn[0])
        _head.find("a").eq(2).html(_foot_.pro_txtEn[0])
        _head.find("a").eq(3).html(_foot_.jishu_txtEn[0])
        _head.find("a").eq(4).html(_foot_.news_txtEn[0])
        _head.find("a").eq(5).html(_foot_.lianxi_txtEn[0])
        //底部导航
        if( _common.lug == "en" ){
            console.log(_foot_.index_txtEn)
            _foot.find(".f-foot-nav").eq(0).find("a").html(_foot_.index_txtEn)
            $.each(_head_.LiuyanTxtEn,function(i,val){
                _liuyanTxt.find("li").eq(i).children().attr("placeholder",val)
            })
        }
        _liuyan_.html(_head_.LiuyanTieleTxtEn)
        _chatTxt.html(_foot_.chat_txtEn[3])
        _chatTxt2.html(_foot_.chat_txtEn[4])
        $.each(_foot_.about_txtEn,function(i,val){
        _foot.find(".f-foot-nav").eq(1).find("a").eq(i).html(val)
        })
        $.each(_foot_.pro_txtEn,function(i,val){
        _foot.find(".f-foot-nav").eq(2).find("a").eq(i).html(val)
        })
        $.each(_foot_.jishu_txtEn,function(i,val){
        _foot.find(".f-foot-nav").eq(3).find("a").eq(i).html(val)
        })
        $.each(_foot_.news_txtEn,function(i,val){
        _foot.find(".f-foot-nav").eq(4).find("a").eq(i).html(val)
        })
        $.each(_foot_.lianxi_txtEn,function(i,val){
        _foot.find(".f-foot-nav").eq(5).find("a").eq(i).html(val)
        })
        $("#footTxt").html(_head_.FootTxtEn)
    }
   function ts_box(ts_txt){
        var tishi_html = '<div class="g-tishi">'+ ts_txt.txt +'<div>'
        $("body").append(tishi_html)
        setTimeout(function(){
            $(".g-tishi").remove()
        },1500)
    }
        $("#sumbtn").click(function(){
        var regphone = /0?(13|14|15|17|18|19)[0-9]{9}/
        var regmailbox = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
        var _data_smt = {
            "address": $("#addressTxt").val(),
            "content": $("#liuyanTxt").val(),
            "mailbox": $("#meailTxt").val(),
            "name": $("#nameTxt").val(),
            "phone": $("#phoneTxt").val()
        }

        if( $("#phoneTxt").val() == "" || !regphone.test($("#phoneTxt").val()) ||  $("#meailTxt").val() == "" || regmailbox.test($("#meailTxt").val()) ){
            if($("#phoneTxt").val() == "" || !regphone.test($("#phoneTxt").val())){
                if( _common.lug == "en"){
                    ts_box({txt:"Please enter the correct phone number"})
                }else{
                    ts_box({txt:"请输入正确的手机号码"})
                }
            }else if(!regmailbox.test($("#meailTxt").val())){
                if( _common.lug == "en"){
                    ts_box({txt:"please enter your vaild email"})
                }else{
                    ts_box({txt:"请输入正确的邮箱"})
                }
            }
        }else{
            $.ajax({
                type: "POST",
                data:JSON.stringify(_data_smt),
                url: jiekou.liuyan_api,
                headers:{'Content-Type':'application/json;charset=UTF-8'},
                success: function(jishu) {
                    console.log("success")
                    window.location.reload();
                },
                error: function (data) {
                    console.log("error")
                }
            });
        }
    })  
}

var arrAbout;  //关于我们
var arrIndustry;//行业认可
var arrContact; //联系我们
var arrIndex;//首页产品
var arrProduct;//产品中心
var arrJishu;//技术
$(function () {
    function industryApi(){
            $.ajax({
                type: "POST",
                url: jiekou.industry_api,
                success: function(industry) {
                    $.cookie('industryCookice', null);
                    arrIndustry=$.cookie('industryCookice')
                    localStorage.setItem('industryCookice',JSON.stringify(industry));
                },
                error: function (data) {
                    console.log("error")
                }
            });
        }
    // jQuery.support.cors = true;
    function indexApi(){
        $.ajax({
            type: "POST",
            url: jiekou.index_api,
            success: function(res) {
                if( _common.page == "1" && _common.lug != "en"){
                    // console.log(res)
                    // console.log(indexPro)
                        var _banner = $("#g_banner")
                        var _pro_title = $("#f-pro-title")
                        var index_pro1=$("#g-pro-list1")
                        var index_pro3=$("#g-pro-list2")
                        index_pro(index_pro1,1);
                        index_pro2(index_pro3,5);
                        //首页banner
                        var _banner = $("#g_banner")
                        for( var i=0;i<_banner.find("div").length; i++){
                            _banner.find(".swiper-slide").eq(i).find("img").attr("src",api_url+''+res.banner[i].titleurl)
                            _banner.find(".swiper-slide").eq(i).find("strong").html(res.banner[i].title)
                            _banner.find(".swiper-slide").eq(i).find("p").html(res.banner[i].description)
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
                        // 首页关于我们
                        var _about_index_title = $("#about_index_title")
                        var _about_index = $("#about_index")
                        var _about_v = $("#about_v")
                        var _video_url = api_url+res.about.video;
                        var _video=document.getElementById("startvideo"); 
                        _about_v.find("video").attr("src",_video_url)
                        // _video.play();
                        _about_index_title.html(res.about.title)
                        _about_index.html(res.about.description)
                        _about_v.find("video").click(function(){
                            console.log(res)
                            var v_html = '<div class="g-fixed-video">'+
                                            '<div class="f-fixed-video">'+
                                                '<video controls="controls" autoplay="">'+
                                                    '<source src="'+api_url+''+res.about.titleurl+'" type="video/mp4">'+
                                                '</video>'+
                                                '<em class="close_btn"><img src="/images/icon_3.png"></em>'+
                                            '</div>'+
                                        '</div>'
                            $("body").append(v_html)
                            $(".close_btn").click(function(){
                                $(this).parents(".g-fixed-video").remove()
                            })
                        })
                    //产品标题描述
                    _pro_title.html(res.innovation.description)
                    //首页调用产品
                        function index_pro(e,h){
                            var _h=h+4
                            for( var h=1;h<_h;h++ ){
                                var _e = "pro_"+h
                                var _num = h-1
                                var html = '<li>'+
                                                '<a href="pro-con.html?id='+ h +'">'+
                                                    '<em class="u-img">'+
                                                        '<img src='+ api_url+''+res.neidai[_num].titleurl +' alt="'+res.neidai[_num].title+'">'+
                                                    '</em>'+
                                                    '<strong>'+res.neidai[_num].title+'</strong>'+
                                                    '<p>'+res.neidai[_num].description+'</p>'+
                                                    '<span class="u-img-zhao">'+res.waidai[_num].description+
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
                                                        '<img src='+ api_url+''+ res.waidai[_num].titleurl +' alt="'+res.waidai[_num].title+'">'+
                                                    '</em>'+
                                                    '<strong>'+res.waidai[_num].title+'</strong>'+
                                                    '<p>'+res.waidai[_num].description+'</p>'+
                                                    '<span class="u-img-zhao">'+res.waidai[_num].description+
                                                    '</span>'+
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
                            "src":api_url+''+res.innovation.innovation[i].titlepic,
                            "alt":api_url+''+res.innovation.innovation[i].title,
                        })
                    }
                    _tuozhan_txt.find("p").html(res.innovation.description)
                    //解决方案
                    var _fangan = $("#fangan")
                    var _fangan_txt = $("#fangan-box")
                    _fangan.find("p").html(res.program.description)
                    for(var i=0;i<res.program.program.length;i++){
                        html = '<li><a href=""><img src="'+ api_url+''+res.program.program[i].titlepic +'" alt="'+ res.program.program[i].title +'"><strong><em>'+ res.program.program[i].title +'</em></strong></a></li>'
                        _fangan_txt.append(html)
                        // console.log(html)
                    }
                    var _width = $(window).width()
                        console.log(_width)
                        if(_width>1000){
                            $(window).scroll(function(){
                            var winTop = $(window).scrollTop();
                            console.log(winTop)
                            if( winTop > 300 ){
                                // alert(111)
                                $(".g-about-index").eq(0).stop().animate({
                                    top:0,
                                    opacity:1
                                },500)
                            }
                            if(winTop > 1200 ){
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
                            if(winTop > 2300 ){
                                $(".g-about-index").eq(3).stop().animate({
                                    top:0,
                                    opacity:1
                                },500)
                            }
                            if(winTop > 2700 ){
                                $(".g-about-index").eq(4).stop().animate({
                                    top:0,
                                    opacity:1
                                },500)
                            }
                            });
                        }else{
                            $(".g-about-index").eq(0).stop().animate({
                                top:0,
                                opacity:1
                            },500)
                            $(window).scroll(function(){
                                var winTop = $(window).scrollTop();
                                console.log(winTop)
                                    if(winTop > 1100 ){
                                        $(".g-about-index").eq(1).stop().animate({
                                            top:0,
                                            opacity:1
                                        },500)
                                    }
                                    if(winTop > 1600 ){
                                        $(".g-about-index").eq(2).stop().animate({
                                            top:0,
                                            opacity:1
                                        },500)
                                    }
                                    if(winTop > 2100 ){
                                        $(".g-about-index").eq(3).stop().animate({
                                            top:0,
                                            opacity:1
                                        },500)
                                    }
                                    if(winTop > 2700 ){
                                        $(".g-about-index").eq(4).stop().animate({
                                            top:0,
                                            opacity:1
                                        },500)
                                    } 
                            });
                            }
                        }
                $.cookie('indexCookice', null);
                localStorage.setItem('indexCookice',JSON.stringify(res));
                arrIndex = $.cookie('indexCookice')
            },
            error: function (data) {
                console.log("error")
            }
        });
    }
        function aboutApi(){
            $.ajax({
                type: "POST",
                url: jiekou.about_api,
                success: function(data) {
                    $.cookie('aboutCookice', null);
                    arrAbout=$.cookie('aboutCookice')
                    localStorage.setItem('aboutCookice',JSON.stringify(data));
                    // console.log(data)
                },
                error: function (data) {
                    console.log("error")
                }
            });
        }
        function contactApi(){
            $.ajax({
                type: "POST",
                url: jiekou.contact_api,
                success: function(contact) {
                    if( _common.lug !== "en" ){
                        $(".g-foot-c p").eq(0).html(contact.contact.company)
                        $(".g-foot-c p").eq(1).html(contact.contact.address)
                        $(".g-foot-c p").eq(2).html('电话：'+contact.contact.phone+' '+contact.contact.cellPhone)
                        $(".g-foot-c p").eq(3).html('传真：'+contact.contact.fax)
                        $(".g-foot-c p").eq(4).html('邮箱：'+contact.contact.mailbox)
                    }else{
                        $(".g-foot-c p").eq(0).html(contact.contact.enCompany)
                        $(".g-foot-c p").eq(1).html(contact.contact.enAddress)
                        $(".g-foot-c p").eq(2).html('Phone: '+contact.contact.phone+' '+contact.contact.cellPhone)
                        $(".g-foot-c p").eq(3).html('Fax: '+contact.contact.fax)
                        $(".g-foot-c p").eq(4).html('Mailbox: '+contact.contact.mailbox)
                    }
                    $.cookie('contactCookice', null);
                    arrContact=$.cookie('contactCookice')
                    localStorage.setItem('contactCookice',JSON.stringify(contact));
                },
                error: function (data) {
                    console.log("error")
                }
            });
        }
        function productApi(){
            $.ajax({
                type: "POST",
                url: jiekou.product_api,
                success: function(product) {
                    $.cookie('productCookice', null);
                    arrProduct=$.cookie('productCookice')
                    localStorage.setItem('productCookice',JSON.stringify(product));
                },
                error: function (data) {
                    console.log("error")
                }
            });
        }
        function jishuApi(){
            $.ajax({
                type: "POST",
                url: jiekou.jishu_api,
                success: function(jishu) {
                    $.cookie('jishuCookice', null);
                    arrJishu=$.cookie('jishuCookice')
                    localStorage.setItem('jishuCookice',JSON.stringify(jishu));
                },
                error: function (data) {
                    console.log("error")
                }
            });
        }
indexApi();//首页api
industryApi();//行业认证
aboutApi();
contactApi();
productApi();
jishuApi();
    // console.log(arrJishu)
})
//cookice
var arrAbout2 = JSON.parse(localStorage.getItem('aboutCookice'))  //首页
var arrIndex = JSON.parse(localStorage.getItem('indexCookice'))  //关于我们
var arrProduct = JSON.parse(localStorage.getItem('productCookice'))  //关于我们
var arrJishu = JSON.parse(localStorage.getItem('jishuCookice'))  //技术
var arrIndustry = JSON.parse(localStorage.getItem('industryCookice'))//行业认可
var arrContact2 = JSON.parse(localStorage.getItem('contactCookice'))  //
var indexPro = arrIndex
//产品数据
var pro_box = {
    "pro_1":{
                title:"TYPE-A拉筋集装袋",
                banner_txt:"TYPE-A拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能",
                pro_img:"/images/41.png",
                titleH:"TYPE-A拉筋集装袋",
                titleHp:"TYPE-A拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能",
                titleH2:"TYPE-A拉筋集装袋<em> / 防膨胀集装袋/普通集装袋/不具备防静电功能</em>",
                aqTxt:"<p>符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准</p>"+
                        "<p>规格：105X105X120cm（尺寸可定制）</p>"+
                        "<p>进料口可定制，出料口可定制。</p>"+
                        "<p>用于运输不易燃易爆的物品、并且集装袋周围没有易燃的溶剂或气体</p>",
                jzTxt:"禁止用于运输易燃易爆物品，禁止在使用环境周围放置易燃易爆的溶剂及气体。",
                protxt1:"TYPE-A重型集装袋是由普通的聚丙烯材料或者其他非传导性的材料制成的。在填充或清空集装袋时，货物在集装袋内侧的移动将会导致静电的产生。A型集装袋的一个本质缺陷就在于它没有任何机制来耗散静电，因此无法防止高强度的危险的传播型刷形放电PBD的产生。对于这种类型的集装袋，一般在静电防控方面不作要求，所以无需进行静电测试，也没有具体的测试标准，也无需贴分类标签。虽然可以贴上TYPE-A型集装袋的标签，但人们很少这么做。因为如果集装袋上没有贴上如B型，C型或D型之类的标签，那么就可以认定该集装袋为A型。",
                protxt2:"这款产品设计时考虑到装载超细粉末时会在针孔出喷漏出来，所以增加了防漏棉条及无纺布防漏、并且考虑到长宽尺寸大不能够 两个并排放在卡车上运输，增加了拉筋来解决膨胀问题，考虑到客户装载物料流动性不好的情况下我们建议使用网状拉筋片作为拉角筋，避免物料进入角筋内部困难，已解决以上所有问题。让客户任意装，使用无忧。",
titleEn: "TYPE-A Lace FIBC",
                banner_txtEn: "TYPE-A lacing FIBC / anti-expansion FIBC / common FIBC / without anti-static function",
                pro_imgEn: "/images/41.png",
                titleHEn: "TYPE-A Lace FIBC",
                titleHpEn: "TYPE-A lacing FIBC / anti-expansion FIBC / common FIBC / without anti-static function",
                titleH2En: "TYPE-A lacing FIBC <em> / anti-expansion FIBC / common FIBC / without antistatic function </ em>",
                aqTxtEn: "<p> Comply with national GB / T10454-2000 executive standard and European ISO21898 executive standard </ p>" +
                        "<p> Specifications: 105X105X120cm (size can be customized) </ p>" +
                        "<p> The inlet can be customized and the outlet can be customized. </ p>" +
                        "<p> For transportation of non-flammable and explosive items, and there are no flammable solvents or gases around the container </ p>",
                jzTxtEn: "It is forbidden to transport flammable and explosive materials, and it is forbidden to place flammable and explosive solvents and gases around the environment of use.",
                protxt1En: "TYPE-A heavy-duty container is made of ordinary polypropylene material or other non-conductive materials. When filling or emptying the container, the movement of the goods inside the container will cause static electricity Generation. An essential defect of Type A FIBC is that it does not have any mechanism to dissipate static electricity, so it cannot prevent the generation of high-strength dangerous propagating brush discharge PBD. For this type of FIBC, generally in There is no requirement for static electricity prevention and control, so there is no need for static electricity testing, no specific test standards, and no need to affix classification labels. Although TYPE-A type container bags can be affixed, people rarely do so. If there is no label such as type B, type C or type D on the bag, then the container bag can be regarded as type A. ",
                protxt2En:"This product is designed to take into account that the ultra-fine powder will be sprayed out of the pinhole when it is loaded, so a leak-proof sliver and a non-woven fabric are added to prevent leakage, and considering the size of the length and width can not be two side by side It is transported on the truck, and the reinforcement bar is added to solve the expansion problem. Considering that the customer's loading material has poor fluidity, we recommend using mesh-shaped reinforcement bar as the corner bar to avoid the difficulty of materials entering the corner bar. All of the above problems. Let customers install it freely and use it without worry."
            },
    "pro_2":{
        title:"TYPE-A重型集装袋",
        banner_txt:"TYPE-A重型集装袋/普通集装袋/不具备防静电功能,符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准",
        pro_img:"/images/42.png",
        titleH:"TYPE-A重型集装袋",
        titleHp:"YPE-A重型集装袋/普通集装袋/不具备防静电功能",
        titleH2:"TYPE-A重型集装袋<em> /普通集装袋/不具备防静电功能</em>",
        aqTxt:"<p>规格尺寸：90X90X120cm（可根据要求定制）</p>"+
                "<p>进出料口及吊环高度可根据客户设备定制</p>"+
                "<p>用于运输不易燃易爆的物品、并且集装袋周围没有易燃的溶剂或气体</p>",
        jzTxt:"禁止用于运输易燃易爆物品，禁止在使用环境周围放置易燃易爆的溶剂及气体。",
        protxt1:"TYPE-A重型集装袋是由普通的聚丙烯材料或者其他非传导性的材料制成的。在填充或清空集装袋时，货物在集装袋内侧的移动将会导致静电的产生。A型集装袋的一个本质缺陷就在于它没有任何机制来耗散静电，因此无法防止高强度的危险的传播型刷形放电PBD的产生。对于这种类型的集装袋，一般在静电防控方面不作要求，所以无需进行静电测试，也没有具体的测试标准，也无需贴分类标签。虽然可以贴上TYPE-A型集装袋的标签，但人们很少这么做。因为如果集装袋上没有贴上如B型，C型或D型之类的标签，那么就可以认定该集装袋为A型。",
        protxt2:"这款产品设计时考虑到装载量大、称重范围1.5-3.5吨均可采用本款产品。 井字托底更加牢固可靠。",
titleEn: "TYPE-A Heavy Duty FIBC",
        banner_txtEn: "TYPE-A heavy-duty FIBC / common FIBC / without anti-static function, in line with national GB / T10454-2000 executive standard and European ISO21898 executive standard",
        pro_imgEn: "/images/42.png",
        titleHEn: "TYPE-A Heavy Duty FIBC",
        titleHpEn: "YPE-A heavy-duty FIBC / common FIBC / without anti-static function",
        titleH2En: "TYPE-A heavy-duty FIBC <em> / common FIBC / without anti-static function </ em>",
        aqTxtEn: "<p> Specification size: 90X90X120cm (can be customized according to requirements) </ p>" +
                "<p> Inlet and outlet openings and lifting ring height can be customized according to customer equipment </ p>" +
                "<p> For transportation of non-flammable and explosive items, and there are no flammable solvents or gases around the container </ p>",
        jzTxtEn: "It is forbidden to transport flammable and explosive materials, and it is forbidden to place flammable and explosive solvents and gases around the environment of use.",
        protxt1En: "TYPE-A heavy-duty container is made of ordinary polypropylene material or other non-conductive materials. When filling or emptying the container, the movement of the goods inside the container will cause static electricity Generation. An essential defect of Type A FIBC is that it does not have any mechanism to dissipate static electricity, so it cannot prevent the generation of high-strength dangerous propagating brush discharge PBD. For this type of FIBC, generally in There is no requirement for static electricity prevention and control, so there is no need for static electricity testing, no specific test standards, and no need to affix classification labels. Although TYPE-A type container bags can be affixed, people rarely do so. If there is no label such as type B, type C or type D on the bag, then the container bag can be regarded as type A. ",
        protxt2En: "This product is designed with a large loading capacity and a weighing range of 1.5-3.5 tons in mind. This product can be used. The Tic Tac Toe bottom is more reliable."
    },
    "pro_3":{
        title:"TYPE-B防静电集装袋",
        banner_txt:"TYPE-B防静电集装袋/低击穿电压，防止静电产生-符合国际电工委员会IEC 61340-4-4标准",
        pro_img:"/images/43.png",
        titleH:"TYPE-B防静电集装袋",
        titleHp:"TYPE-B防静电集装袋/低击穿电压，防止静电产生",
        titleH2:"TYPE-A拉筋集装袋<em> / 防膨胀集装袋/普通集装袋/不具备防静电功能</em>",
        aqTxt:"<p>规格尺寸：105X105X120cm（可根据要求定制）</p>"+
                "<p>进出料口及吊环高度可根据客户设备定制</p>"+
                "<p>用于运输干燥的、易燃的粉末 集装袋周围没有易燃的溶剂或气体。</p>",
        jzTxt:"当集装袋周围存在易燃的溶剂或气体时禁止使用本产品。",
        protxt1:"TYPE-B型集装袋面料在编织和涂膜过程中按比例添加抗静电母料，此特殊工艺使TYPE-B型集装袋面料具有较低的击穿电压，可以防止高强度的危险静电的产生，确保装料和卸料过程中的安全性。*面料两面表面击穿电压应小于6KV。",
        protxt2:"这款产品设计时考虑到装载超细粉末时会在针孔出喷漏出来，所以增加了防漏棉条及无纺布防漏、并且考虑到长宽尺寸大不能够 两个并排放在卡车上运输，增加了拉筋来解决膨胀问题，考虑到客户装载物料流动性不好的情况下我们建议使用网状拉筋片作为拉角筋，避免物料进入角筋内部困难，已解决以上所有问题。让客户任意装，使用无忧。",
titleEn: "TYPE-B Antistatic Container Bag",
                banner_txtEn: "TYPE-B anti-static container bag / low breakdown voltage, to prevent static electricity-conform to the International Electrotechnical Commission IEC 61340-4-4 standard",
                pro_imgEn: "/images/43.png",
                titleHEn: "TYPE-B Antistatic Container Bag",
                titleHpEn: "TYPE-B anti-static container bag / low breakdown voltage, prevent static electricity",
                titleH2En: "TYPE-A lacing FIBC <em> / anti-expansion FIBC / common FIBC / without antistatic function </ em>",
                aqTxtEn: "<p> Specification size: 105X105X120cm (can be customized according to requirements) </ p>" +
                        "<p> Inlet and outlet openings and lifting ring height can be customized according to customer equipment </ p>" +
                        "<p> For transporting dry, flammable powders. No flammable solvents or gases around the FIBC. </ p>",
                jzTxtEn: "The use of this product is prohibited when flammable solvents or gases are present around the container.",
                protxt1En: "TYPE-B FIBC fabrics add antistatic masterbatch in proportion during weaving and coating. This special process makes TYPE-B FIBC fabrics have a lower breakdown voltage and can prevent high strength The generation of dangerous static electricity ensures the safety during loading and unloading. * The breakdown voltage on both surfaces of the fabric should be less than 6KV. ",
                protxt2En: "This product is designed to take into account that the ultra-fine powder will be sprayed out of the pinhole when it is loaded, so a leak-proof sliver and a non-woven fabric are added to prevent leakage, and considering the size of the length and width can not be two side by side It is transported on the truck, and the reinforcement bar is added to solve the expansion problem. Considering that the customer's loading material has poor fluidity, we recommend using mesh-shaped reinforcement bar as the corner bar to avoid the difficulty of materials entering the corner bar. All of the above problems. Let customers install it freely and use it without worry. "
    },
    "pro_4":{
        title:"TYPE-C导电集装袋",
        banner_txt:"TYPE-C导电集装袋/防静电集装袋/通过导电丝及传导线将静电释放到地下",
        pro_img:"/images/44.png",
        titleH:"TYPE-C导电集装袋",
        titleHp:"TYPE-C导电集装袋 符合国际电工委员会IEC 61340-4-4标准",
        titleH2:"TYPE-C导电集装袋<em> /防静电集装袋/通过导电丝及传导线将静电释放到地下</em>",
        aqTxt:"<p>规格尺寸：105X105X120cm（可根据要求定制）</p>"+
                "<p>进出料口及吊环高度可根据客户设备定制</p>"+
                "<p>用于运输易燃的粉末，当集装袋周围存在易燃的溶剂或气体时，用本产品可避免静电点火。</p>",
        jzTxt:"当导电线没有连接到地面或者有破损时，禁止使用本产品。",
        protxt1:"TYPE-C型导电集装袋，也称为接地型柔性集装袋。最初是有完全导电的材料编织而成。而现在接地型C型柔性集装袋更多的是在非传导性的聚丙烯面料中穿插织入导电的混纺织物材料编织而成。这种导电的编织材料必须保证所有的导电丝连为一体，并且在使用TYPE-C型集装袋时，袋身的黑色导电膜必须与地线相连接，通过接地导电，有效的去除在装料和卸料时产生的静电，防止点火和粉尘爆炸等危险情况的发生。",
        protxt2:"这款产品设计时考虑到装载超细粉末时会在针孔出喷漏出来，所以增加了防漏棉条及无纺布防漏、并且考虑到长宽尺寸大不能够 两个并排放在卡车上运输，增加了拉筋来解决膨胀问题，考虑到客户装载物料流动性不好的情况下我们建议使用网状拉筋片作为拉角筋，避免物料进入角筋内部困难，已解决以上所有问题。让客户任意装，使用无忧。",
titleEn: "TYPE-C conductive container bag",
                banner_txtEn: "TYPE-C conductive container bag / anti-static container bag / discharge static electricity to the ground through conductive wire and conductive wire",
                pro_imgEn: "/images/44.png",
                titleHEn: "TYPE-C conductive container bag",
                titleHpEn: "TYPE-C conductive FIBC conforms to the International Electrotechnical Commission IEC 61340-4-4 standard",
                titleH2En: "TYPE-C conductive container bag <em> / anti-static container bag / discharge static electricity to the ground through conductive wire and conductive wire </ em>",
                aqTxtEn: "<p> Specification size: 105X105X120cm (can be customized according to requirements) </ p>" +
                        "<p> Inlet and outlet openings and lifting ring height can be customized according to customer equipment </ p>" +
                        "<p> It is used to transport flammable powder. When there is flammable solvent or gas around the container, this product can avoid static ignition. </ p>",
                jzTxtEn: "When the conductive wire is not connected to the ground or damaged, the use of this product is prohibited.",
                protxt1En: "TYPE-C type conductive FIBC, also known as grounded flexible FIBC. It was originally woven from fully conductive materials. Now grounded type C flexible FIBC is more non-conductive The conductive polypropylene fabric is interwoven with a conductive blended fabric material. This conductive woven material must ensure that all conductive wires are connected together, and when using TYPE-C FIBC, the bag body is black The conductive film must be connected to the ground wire to conduct electricity through the ground, effectively remove the static electricity generated during loading and unloading, and prevent dangerous situations such as ignition and dust explosion. ",
                protxt2En: "This product is designed to take into account that the ultra-fine powder will be sprayed out of the pinhole when it is loaded, so a leak-proof sliver and a non-woven fabric are added to prevent leakage, and considering the size of the length and width can not be two side by side It is transported on the truck, and the reinforcement bar is added to solve the expansion problem. Considering that the customer's loading material has poor fluidity, we recommend using mesh-shaped reinforcement bar as the corner bar to avoid the difficulty of materials entering the corner bar. All of the above problems. Let customers install it freely and use it without worry. "
    },
    "pro_5":{
        title:"TYPE-C免托盘导电集装袋",
        banner_txt:"TYPE-C免托盘导电集装袋/防静电集装袋/通过导电丝及传导线将静电释放到地下",
        pro_img:"/images/45.png",
        titleH:"TYPE-C免托盘导电集装袋",
        titleHp:"TYPE-C免托盘导电集装袋 符合国际电工委员会IEC 61340-4-4标准",
        titleH2:"TYPE-C免托盘导电集装袋<em> /防静电集装袋/通过导电丝及传导线将静电释放到地下</em>",
        aqTxt:"<p>规格尺寸：105X105X120cm（可根据要求定制）</p>"+
                "<p>进出料口及吊环高度可根据客户设备定制</p>"+
                "<p>用于运输易燃的粉末，当集装袋周围存在易燃的溶剂或气体时，用本产品可避免静电点火。</p>",
        jzTxt:"当导电线没有连接到地面或者有破损时，禁止使用本产品。",
        protxt1:"TYPE-C免托盘型导电集装袋，也称为接地型免托盘柔性集装袋。最初是有完全导电的材料编织而成。而现在接地型C型柔性集装袋更多的是在非传导性的聚丙烯面料中穿插织入导电的混纺织物材料编织而成。这种导电的编织材料必须保证所有的导电丝连为一体，并且在使用TYPE-C型集装袋时，袋身的黑色导电膜必须与地线相连接，通过接地导电，有效的去除在装料和卸料时产生的静电，防止点火和粉尘爆炸等危险情况的发生。",
        protxt2:"这款产品设计时考虑到装载超细粉末时会在针孔出喷漏出来，所以增加了防漏棉条及无纺布防漏、并且考虑到长宽尺寸大不能够 两个并排放在卡车上运输，增加了拉筋来解决膨胀问题，考虑到客户装载物料流动性不好的情况下我们建议使用网状拉筋片作为拉角筋，避免物料进入角筋内部困难，这款集装袋可以免去托盘，集装袋装货物后下面可以不放托盘，叉车可以直接插入袋子底部两侧的位置，即可完成搬运工作。已解决以上所有问题。让客户任意装，使用无忧。",
titleEn: "TYPE-C Tray-Free Conductive Container Bag",
                banner_txtEn: "TYPE-C tray-free conductive container / anti-static container / discharge static electricity to the ground through conductive wires and conductive wires",
                pro_imgEn: "/images/45.png",
                titleHEn: "TYPE-C Tray-Free Conductive Container Bag",
                titleHpEn: "TYPE-C pallet-free conductive FIBC conforms to the International Electrotechnical Commission IEC 61340-4-4 standard",
                titleH2En: "TYPE-C tray-free conductive container bag <em> / antistatic container bag / discharge static electricity to the ground through conductive wire and conductive wire </ em>",
                aqTxtEn: "<p> Specification size: 105X105X120cm (can be customized according to requirements) </ p>" +
                        "<p> Inlet and outlet openings and lifting ring height can be customized according to customer equipment </ p>" +
                        "<p> It is used to transport flammable powder. When there is flammable solvent or gas around the container, this product can avoid static ignition. </ p>",
                jzTxtEn: "When the conductive wire is not connected to the ground or damaged, the use of this product is prohibited.",
                protxt1En: "TYPE-C tray-free conductive FIBC, also known as grounded tray-free flexible FIBC. Originally woven from fully conductive materials. Now grounded type C flexible FIBC are more It is woven with non-conductive polypropylene fabric interspersed with conductive blended fabric material. This conductive woven material must ensure that all conductive wires are connected together, and when using TYPE-C container bag, The black conductive film of the bag body must be connected to the ground wire to conduct electricity through the ground, effectively remove the static electricity generated during loading and unloading, and prevent the occurrence of dangerous situations such as ignition and dust explosion. ",
                protxt2En: "This product is designed to take into account that the ultra-fine powder will be sprayed out of the pinhole when it is loaded, so a leak-proof sliver and a non-woven fabric are added to prevent leakage, and considering the size of the length and width can not be two side by side It is transported on a truck, and a reinforcement bar is added to solve the expansion problem. Considering that the loading material of the customer has poor fluidity, we recommend using a mesh reinforcement bar as a corner bar to avoid the difficulty of materials entering the corner bar. The container bag can be free of pallets. After the container bag is packed with goods, the pallet can not be placed underneath. The forklift can be directly inserted into the two sides of the bottom of the bag to complete the handling work. All the above problems have been solved. Let the customer load it arbitrarily worry."
    },
    "pro_6":{
        title:"TYPE-D导电集装袋",
        banner_txt:"TYPE-D导电集装袋/防静电集装袋/无需接地即可安全使用",
        pro_img:"/images/46.png",
        titleH:"TYPE-D导电集装袋",
        titleHp:"TYPE-D导电集装袋 符合国际电工委员会IEC 61340-4-4标准",
        titleH2:"TYPE-D导电集装袋<em> /防静电集装袋/无需接地即可安全使用</em>",
        aqTxt:"<p>规格尺寸：105X105X120cm（可根据要求定制）</p>"+
                "<p>进出料口及吊环高度可根据客户设备定制</p>"+
                "<p>用于运输易燃的粉末，当集装袋周围存在易燃的溶剂或气体时，用本产品可避免静电点火。</p>",
        jzTxt:"当集装袋表面被弄脏，或者涂上了导电物质，比如水或者油等等。",
        protxt1:"TYPE-D型导电集装袋，是由防静电的面料制成的，能够安全有效的防止静电火花、刷形放电、以及传播型刷形放电的表现，并且无需将集装袋接地。        在设计及制作方面，提供了更加安全的防护措施，以便在无需接地的情况下防止静电的危害，将面料用于编织抗静电集装袋，能够在C型柔性集装袋的生产的使用过程中，有效根除了认为失误所导致的静电燃烧及粉尘爆炸危险。",
        protxt2:"这款产品设计时考虑到装载超细粉末时会在针孔出喷漏出来，所以增加了防漏棉条及无纺布防漏、并且考虑到长宽尺寸大不能够 两个并排放在卡车上运输，增加了拉筋来解决膨胀问题，考虑到客户装载物料流动性不好的情况下我们建议使用网状拉筋片作为拉角筋，避免物料进入角筋内部困难，已解决以上所有问题。让客户任意装，使用无忧。",
titleEn: "TYPE-D conductive container bag",
                banner_txtEn: "TYPE-D conductive FIBC / anti-static FIBC / safe to use without grounding",
                pro_imgEn: "/images/46.png",
                titleHEn: "TYPE-D conductive container bag",
                titleHpEn: "TYPE-D conductive FIBC conforms to the International Electrotechnical Commission IEC 61340-4-4 standard",
                titleH2En: "TYPE-D conductive FIBC <em> / anti-static FIBC / safe to use without grounding </ em>",
                aqTxtEn: "<p> Specification size: 105X105X120cm (can be customized according to requirements) </ p>" +
                        "<p> Inlet and outlet openings and lifting ring height can be customized according to customer equipment </ p>" +
                        "<p> It is used to transport flammable powder. When there is flammable solvent or gas around the container, this product can avoid static ignition. </ p>",
                jzTxtEn: "When the surface of the container bag is soiled, or coated with conductive substances, such as water or oil, etc.",
                protxt1En: "TYPE-D conductive FIBC is made of anti-static fabric, which can safely and effectively prevent the performance of static sparks, brush discharges, and propagating brush discharges, and there is no need to ground the FIBC In terms of design and production, it provides safer protective measures to prevent the harm of static electricity without grounding, and the fabric is used in woven anti-static container bags, which can be used in the production of C-type flexible container bags. In the process, it effectively eliminates the danger of electrostatic combustion and dust explosion caused by mistakes. ",
                protxt2En: "This product is designed to take into account that the ultra-fine powder will be sprayed out of the pinhole when it is loaded, so a leak-proof sliver and a non-woven fabric are added to prevent leakage, and considering the size of the length and width can not be two side by side It is transported on the truck, and the reinforcement bar is added to solve the expansion problem. Considering that the customer's loading material has poor fluidity, we recommend using mesh-shaped reinforcement bar as the corner bar to avoid the difficulty of materials entering the corner bar. All of the above problems. Let customers install it freely and use it without worry. ",
    },
    "pro_7":{
        title:"拉筋内袋集装袋",
        banner_txt:"拉筋内袋集装袋/铝膜拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能",
        pro_img:"/images/47.png",
        titleH:"拉筋内袋集装袋/铝膜拉筋集装袋/防膨胀集装袋/普通集装袋/",
        titleHp:"拉筋内袋集装袋/铝膜拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能 符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准",
        titleH2:"拉筋内袋集装袋<em> /铝膜拉筋集装袋/防膨胀集装袋/普通集装袋/不具备防静电功能</em>",
        aqTxt:"<p>规格：105X105X120cm（尺寸可定制）</p>"+
                "<p>进料口可定制，出料口可定制。</p>"+
                "<p>用于运输不易燃易爆的物品、并且集装袋周围没有易燃的溶剂或气体</p>",
        jzTxt:"禁止用于运输易燃易爆物品，禁止在使用环境周围放置易燃易爆的溶剂及气体。",
        protxt1:"拉筋内袋集装袋是由普通的聚丙烯材料或者其他非传导性的材料制成的。在填充或清空集装袋时，货物在集装袋内侧的移动将会导致静电的产生。A型集装袋的一个本质缺陷就在于它没有任何机制来耗散静电，因此无法防止高强度的危险的传播型刷形放电PBD的产生。对于这种类型的集装袋，一般在静电防控方面不作要求，所以无需进行静电测试，也没有具体的测试标准，也无需贴分类标签。虽然可以贴上TYPE-A型集装袋的标签，但人们很少这么做。因为如果集装袋上没有贴上如B型，C型或D型之类的标签，那么就可以认定该集装袋为A型。",
        protxt2:"这款产品设计时主要解决了泄露、潮湿结块、等一系列问题，并且考虑到长宽尺寸大不能够两个并排放在卡车上运输，增加了拉筋来解决膨胀问题，考虑到客户装载物料流动性不好的情况下，我们建议使用网状拉筋片作为拉角筋，避免物料进入角筋内部困难，并且可指定铝膜作为内袋的原材料及按照B型防静电、C型防静电、D型防静电标准的同款袋型，已解决以上所有问题。让客户任意装，使用无忧。",
titleEn: "Reinforcement inner bag container bag",
        banner_txtEn: "Reinforced inner bag container bag / Aluminum film reinforced container bag / anti-expansion container bag / common container bag / without anti-static function",
        pro_imgEn: "/images/47.png",
        titleHEn: "Reinforced inner bag container bag / Aluminum film reinforced container bag / Anti-expansion container bag / General container bag /",
        titleHpEn: "Reinforced inner bag FIBC / Aluminum film reinforced FIBC / anti-expansion FIBC / common FIBC / without anti-static function conforms to the national GB / T10454-2000 executive standard and European ISO21898 executive standard" ,
        titleH2En: "Reinforced Inner Bag FIBC <em> / Aluminum Film Reinforced FIBC / Anti-expansion FIBC / Common FIBC / No Antistatic Function </ em>",
        aqTxtEn: "<p> Specifications: 105X105X120cm (size can be customized) </ p>" +
                "<p> The inlet can be customized and the outlet can be customized. </ p>" +
                "<p> For transportation of non-flammable and explosive items, and there are no flammable solvents or gases around the container </ p>",
        jzTxtEn: "It is forbidden to transport flammable and explosive materials, and it is forbidden to place flammable and explosive solvents and gases around the environment of use.",
        protxt1En: "Reinforced inner bag FIBC is made of ordinary polypropylene material or other non-conductive materials. When filling or emptying the FIBC, the movement of the goods inside the FIBC will cause static electricity Generation. An essential defect of Type A FIBC is that it does not have any mechanism to dissipate static electricity, so it cannot prevent the generation of high-strength dangerous propagating brush discharge PBD. For this type of FIBC, generally in There is no requirement for static electricity prevention and control, so there is no need for static electricity testing, no specific test standards, and no need to affix classification labels. Although TYPE-A type container bags can be affixed, people rarely do so. If there is no label such as type B, type C or type D on the bag, then the container bag can be regarded as type A. ",
        protxt2En: "This product is mainly designed to solve a series of problems such as leakage, wet agglomeration, etc., and considering that the length and width are not large enough to be transported on the truck side by side, adding tie bars to solve the expansion problem, consider When the loading material of the customer has poor fluidity, we recommend the use of mesh ribs as corner ribs to avoid the difficulty of materials entering the corner ribs, and aluminum film can be designated as the raw material of the inner bag and according to type B anti-static, The same bag type of C-type anti-static and D-type anti-static standards has solved all of the above problems. Let customers install it arbitrarily and use it without worry. "
    },
    "pro_8":{
        title:"蔬菜透气袋",
        banner_txt:"蔬菜透气袋/防膨胀集装袋/普通集装袋/不具备防静电功能 符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准",
        pro_img:"/images/48.png",
        titleH:"蔬菜透气袋",
        titleHp:"蔬菜透气袋/防膨胀集装袋/普通集装袋/不具备防静电功能 符合国家GB/T10454-2000执行标准 及欧洲ISO21898执行标准",
        titleH2:"蔬菜透气袋<em> /防膨胀集装袋/普通集装袋/不具备防静电功能</em>",
        aqTxt:"<p>规格：95X95X100cm（尺寸可定制）</p>"+
                "<p>进料口可定制，出料口可定制。</p>"+
                "<p>用于运输不易燃易爆的物品、并且集装袋周围没有易燃的溶剂或气体，主要用于装载运输马铃薯、红薯、大蒜等农作物。</p>",
        jzTxt:"禁止用于运输易燃易爆物品，禁止在使用环境周围放置易燃易爆的溶剂及气体。",
        protxt1:"蔬菜透气袋是由普通的聚丙烯材料或者其他非传导性的材料制成的。在填充或清空集装袋时，货物在集装袋内侧的移动将会导致静电的产生。A型集装袋的一个本质缺陷就在于它没有任何机制来耗散静电，因此无法防止高强度的危险的传播型刷形放电PBD的产生。对于这种类型的集装袋，一般在静电防控方面不作要求，所以无需进行静电测试，也没有具体的测试标准，也无需贴分类标签。虽然可以贴上TYPE-A型集装袋的标签，但人们很少这么做。因为如果集装袋上没有贴上如B型，C型或D型之类的标签，那么就可以认定该集装袋为A型。",
        protxt2:"这款产品设计主要考虑透气性能，主要用途是装载及运输蔬菜圆葱、土豆（马铃薯）、红薯、大蒜等农作物，齐特点不会对以上蔬菜造成污染及损害，增加了透气条，能够使蔬菜自由的呼吸，不会把蔬菜捂坏，减少人工搬运造成的人工浪费及蔬菜损坏。降低了灌装的劳动强度。",
titleEn: "Vegetable Breathable Bag",
        banner_txtEn: "Vegetable breathable bags / anti-expansion container bags / common container bags / without anti-static function conforms to the national GB / T10454-2000 executive standard and the European ISO21898 executive standard",
        pro_imgEn: "/images/48.png",
        titleHEn: "Vegetable Breathable Bag",
        titleHpEn: "Vegetable breathable bags / anti-expansion container bags / common container bags / without anti-static function conforms to the national GB / T10454-2000 executive standard and the European ISO21898 executive standard",
        titleH2En: "Vegetable Breathable Bag <em> / Anti-expansion Container Bag / General Container Bag / No Anti-static Function </ em>",
        aqTxtEn: "<p> Specifications: 95X95X100cm (size can be customized) </ p>" +
                "<p> The inlet can be customized and the outlet can be customized. </ p>" +
                "<p> It is used to transport non-flammable and explosive items, and there is no flammable solvent or gas around the container. It is mainly used to load and transport potatoes, sweet potatoes, garlic and other agricultural crops. </ p>",
        jzTxtEn: "It is forbidden to transport flammable and explosive materials, and it is forbidden to place flammable and explosive solvents and gases around the environment of use.",
        protxt1En: "Vegetable breathable bags are made of ordinary polypropylene material or other non-conductive materials. When filling or emptying the FIBC, the movement of the goods inside the FIBC will cause static electricity. Type A An essential defect of FIBC is that it does not have any mechanism to dissipate static electricity, so it cannot prevent the generation of high-strength dangerous propagating brush discharge PBD. For this type of FIBC, generally in terms of electrostatic prevention and control No requirements, so there is no need for electrostatic testing, no specific test standards, and no need to affix classification labels. Although it is possible to affix the label of TYPE-A FIBC, people rarely do it. If there is no FIBC With labels such as Type B, Type C or Type D, the container bag can be deemed as Type A. ",
        protxt2En: "This product design mainly considers the ventilation performance. The main purpose is to load and transport vegetables such as onions, potatoes (potatoes), sweet potatoes, garlic and other crops. The Qi characteristics will not cause pollution and damage to the above vegetables. It can make the vegetables breathe freely, and will not cover the vegetables, reducing the artificial waste and vegetable damage caused by manual handling. It reduces the labor intensity of filling. "
    },
}


