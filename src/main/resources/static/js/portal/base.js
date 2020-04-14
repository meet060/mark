$(function(){
        if(typeof(_common) == 'undefined'){
            return false;
        }
        if( _common.pageJs == "index" ){
            baseJs.Index();
        }
        // 导航
        if(_common.pageTo == "con"){
        share();//分享；
        }
        nav();//导航
        scoll_nav();//滚动条事件
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


    // chat_btn.on('click',function(){
    //     var chat_html = '<div class="g-to-chat">微信号已复制成功，请前往微信搜索好友<a href="weixin://">立即前往</a><em></em></div>'
    //     $("body").append(chat_html);
    //     $(".g-to-chat em").click(function(){
    //         $(this).parents(".g-to-chat").remove();
    //     })
    // })
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
  
}}

//导航
function nav(){
    var nav_on = $(".g-nav-list li a")
    nav_on.each(function(){
        var _rel = $(this).attr("rel")
        var _url = window.location.href
        var _e = _url.indexOf(_rel)
        console.log(_e)
        if( _rel != "undefined" && _e > -1 ){
            $(this).addClass("cur")
            $(this).siblings().removeClass("cur")
        }
    })
}

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

    // var _e = 0
    // var _mou_ani = $(".f-new-list")
    // var _h = _mou_ani.height() + 10
    // var clone_box = _mou_ani.children().clone()
    // _mou_ani.append(clone_box)
    // console.log(_h)
    // function wenti(){
    //     _e++
    //     _mou_ani.stop().animate({top:-_e},10)
    //     if( _e == _h ){
    //         _mou_ani.css("top","0")
    //         _e=0
    //         _mou_ani.stop().animate({top:-_e},10)
    //     }
    // }
    // t1 = setInterval(wenti,20)
    // $(".f-new-listbox").on({
    //     "mouseenter":function(){
    //         clearInterval(t1);
    //     },
    //     "mouseleave":function(){
    //         t1 = setInterval(wenti,20)
    //     }
    // })


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