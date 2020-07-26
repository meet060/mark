$(function() {
    if (typeof(_common) == 'undefined') {
        return false;
    }
    $(".g-banner-about p").addClass("cur")
    head(); //头部
    head_foot_txt(); //头部底部
    scoll_nav(); //滚动条事件
    // 导航
    if (_common.pageTo == "con") {
        share(); //分享；
    }
    if (_common.pageJs == "index") {
        baseJs.Index();
    }
    if (_common.page == "2") {
        pro_con();
        var _pro_top = $("#pro_top_list")
        console.log(arrProduct.outerBag)
        $.each(arrProduct.outerBag, function(i, val) {
            var _i = i + 1
            html = '<a href="pro-con.html?id=' +  _i  + '"><img src="' +  api_url  +  val.wdpic  + '" alt="' +  val.wdtitleEn  + '"><em>' +  val.wdtitleEn  + '</em></ a>'
            _pro_top.append(html)
        })
    }
    if (_common.page == "3") {
        pro_list();
        var _g_waidai = $("#g-waidai")
        for (var i = 0; i < 5; i++) {
            var _i = i + 1
            _g_waidai.find("a").eq(i).find("img").attr({
                "src": api_url + arrProduct.innerBag[i].ndpicEn,
                "alt": arrProduct.innerBag[i].ndtitleEn
            })
            _g_waidai.find("a").eq(i).find("strong").html(arrProduct.innerBag[i].ndtitleEn)
        }
    }
    if (_common.page == "4") {
        pro_list();
        var _about_title = $("#about_box")
        var _about1_box = $("#about_box1")
        var _about2_box = $("#about_box2")
        var _industry1 = $("#industry1")
        var _industry2 = $("#industry2")
            // console.log(arrAbout2)
        _about1_box.find(".g-about-r img").attr("src", api_url + arrAbout2.info.info1.introduce1)
        _about1_box.find(".g-about-l h2").after(arrAbout2.info.info1.introDescriptionEn1)
        _about1_box.find(".g-about-l h2").html('Company profile')
        _about2_box.find(".g-about-r img").attr("src", api_url + arrAbout2.info.info2.introduce2)
        _about2_box.find(".g-about-l h2").after(arrAbout2.info.info2.introDescriptionEn2)
        _about2_box.find(".g-about-l h2").html("Because we are focus on it,So keeping leading")

        function fnIndustry() {
            // console.log(arrIndustry.recognized.length)
            for (var i = 0; i < arrIndustry.recognized.length; i++) {
                if (i < 4) {
                    _html_ = '<a><img src="' + api_url + arrIndustry.recognized[i].titlepic + '" title="' + arrIndustry.recognized[i].titleEn + '" alt="' + arrIndustry.recognized[i].titleEn + '"><p>' + arrIndustry.recognized[i].titleEn + '</p></a>'
                    _industry1.find("div").eq(0).append(_html_)
                } else if (i < 9) {
                    _html_ = '<a><img src="' + api_url + arrIndustry.recognized[i].titlepic + '" title="' + arrIndustry.recognized[i].titleEn + '" alt="' + arrIndustry.recognized[i].titleEn + '"><p>' + arrIndustry.recognized[i].titleEn + '</p></a>'
                    _industry1.find("div").eq(1).append(_html_)
                } else {
                    _html_ = '<a><img src="' + api_url + arrIndustry.recognized[i].titlepic + '" title="' + arrIndustry.recognized[i].titleEn + '" alt="' + arrIndustry.recognized[i].titleEn + '"><p>' + arrIndustry.recognized[i].titleEn + '</p></a>'
                    _industry1.find("div").eq(2).append(_html_)
                }
                if (i < 3) {
                    _html_ = '<a><img src="' + api_url + arrIndustry.recognized[i].titlepic + '" title="' + arrIndustry.recognized[i].titleEn + '" alt="' + arrIndustry.recognized[i].titleEn + '"><p>' + arrIndustry.recognized[i].titleEn + '</p></a>'
                    _industry2.find("div").eq(0).append(_html_)
                } else if (i < 6) {
                    _html_ = '<a><img src="' + api_url + arrIndustry.recognized[i].titlepic + '" title="' + arrIndustry.recognized[i].titleEn + '" alt="' + arrIndustry.recognized[i].titleEn + '"><p>' + arrIndustry.recognized[i].titleEn + '</p></a>'
                    _industry2.find("div").eq(1).append(_html_)
                } else if (i < 9) {
                    _html_ = '<a><img src="' + api_url + arrIndustry.recognized[i].titlepic + '" title="' + arrIndustry.recognized[i].titleEn + '" alt="' + arrIndustry.recognized[i].titleEn + '"><p>' + arrIndustry.recognized[i].titleEn + '</p></a>'
                    _industry2.find("div").eq(2).append(_html_)
                } else if (i < 12) {
                    _html_ = '<a><img src="' + api_url + arrIndustry.recognized[i].titlepic + '" title="' + arrIndustry.recognized[i].titleEn + '" alt="' + arrIndustry.recognized[i].titleEn + '"><p>' + arrIndustry.recognized[i].titleEn + '</p></a>'
                    _industry2.find("div").eq(3).append(_html_)
                } else if (i < 15) {
                    _html_ = '<a><img src="' + api_url + arrIndustry.recognized[i].titlepic + '" title="' + arrIndustry.recognized[i].titleEn + '" alt="' + arrIndustry.recognized[i].titleEn + '"><p>' + arrIndustry.recognized[i].titleEn + '</p></a>'
                    _industry2.find("div").eq(4).append(_html_)
                } else {
                    _html_ = '<a><img src="' + api_url + arrIndustry.recognized[i].titlepic + '" title="' + arrIndustry.recognized[i].titleEn + '" alt="' + arrIndustry.recognized[i].titleEn + '"><p>' + arrIndustry.recognized[i].titleEn + '</p></a>'
                    _industry2.find("div").eq(5).append(_html_)
                }
            }
        }
        fnIndustry();
        //企业资质
        var mySwiper = new Swiper('.swiper-container1', {
                autoplay: true, //可选选项，自动滑动
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
            //企业资质
        var mySwiper = new Swiper('.swiper-container2', {
            autoplay: true, //可选选项，自动滑动
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
    if (_common.page == "5") {
        console.log(arrJishu)
        var _jishu_txt = $("#jishu_txt")
        var _jishu_zc = $("#jishu_zc")
        var _jishu_cx = $("#jishu_cx")
        var _jishu_sl = $("#jishu_sl")
        var _jishu_sl1 = $("#jishu_sl1")
        var _jishu_sl2 = $("#jishu_sl2")
        console.log(arrJishu)
        _jishu_txt.find("p").html(arrJishu.banner[0].titleEn)
        _jishu_txt.find("img").attr("src", api_url + arrJishu.banner[0].titlepic)
        _jishu_zc.find("p").html(arrJishu.jishu.jsdescriptionEn1)
        _jishu_zc.find("img").attr({
            "src": api_url + arrJishu.jishu.jspic1,
            "alt": arrJishu.jishu.jstitleEn1,
        })
        _jishu_cx.find("p").html(arrJishu.jishu.jsdescriptionEn2)
        _jishu_cx.find("img").attr({
            "src": api_url + arrJishu.jishu.jspic2,
            "alt": arrJishu.jishu.jstitleEn2,
        })
        _jishu_sl.find("p").html(arrJishu.sbdescriptionEn)
        for (var i = 1; i < 6; i++) {
            var _e = "jspic" + i
            var _e2 = 'jstitleEn' + i
            var _e3 = 'jsdescriptionEn' + i
            var js_html = '<a >' +
                '<em class="u-img"><img src="' + api_url + arrJishu.device[_e] + '" alt=""></em>' +
                '<span class="g-txt-box">' +
                '<strong>' + arrJishu.device[_e2] + '</strong>' +
                '<p>' + arrJishu.device[_e3] + '</p>' +
                '</span>' +
                '</a>'
            if (i < 3) {
                _jishu_sl1.append(js_html)
            } else {
                _jishu_sl2.append(js_html)
            }
        }
    }
    if (_common.page == "6") {
        // console.log(arrContact2)
        var _lianxi_txt = $("#lianxi_txt")
        var _lianxi_box = $("#lianxi_box")
        var _lianxi_jr = $("#lianxi_jr")
        console.log(arrContact2)
        _lianxi_txt.find("p").html(arrContact2.banner[0].titleEn)
        _lianxi_txt.find("img").attr("src", api_url + arrContact2.banner[0].titlepic)
            // _lianxi_box.find("h3").html(arrContact2.contact.enCompany)
            // _lianxi_box.find("p").eq(2).html('Tel：'+arrContact2.contact.phone)
            // _lianxi_box.find("p").eq(3).html('Fax：'+arrContact2.contact.fax)
            // _lianxi_box.find("p").eq(4).html('E-mail：'+arrContact2.contact.mailbox)
            // _lianxi_box.find("p").eq(5).html('Address：'+arrContact2.contact.enAddress)
        _lianxi_jr.find("h2").html(arrContact2.bottom.titleEn)
        _lianxi_jr.find("p").html(arrContact2.bottom.descriptionEn)
        $.ajax({
            type: "POST",
            url: jiekou.lianxi_api,
            success: function(lianxi) {
                var _lianxi = lianxi[0]
                _lianxi_box.find("p").eq(0).html('Contact:' + _lianxi.nameEn)
                _lianxi_box.find("p").eq(1).html('Cell phone:' + _lianxi.cellPhoneEn)
                _lianxi_box.find("p").eq(2).html('phone:' + _lianxi.phoneEn)
                _lianxi_box.find("p").eq(3).html('fax:' + _lianxi.cellPhoneEn)
                _lianxi_box.find("p").eq(4).html('fax:' + _lianxi.mailboxEn)
                _lianxi_box.find("p").eq(5).html('address：' + _lianxi.addressEn)
                $("#lianxi_kufe").find("img").attr("src", '/img/' + _lianxi.urlEn)
                $(".f-lianxi-chat").find("img").attr("src", '/img/' + _lianxi.weChatUrlEn)
                _lianxi_box.find("h3").html(_lianxi.companyEn)
            },
            error: function(data) {
                console.log("error")
            }
        });
    }
    if (_common.page == "7") {
        var _news_banner = $("#news-banner")
        var reg, reg2, url, Url, arr2, jsonarr
        var new_page, new_size, new_yema
        var _url = window.location.search.substring("1")
        new_size = 2
            // console.log(_url)
        if (_url != "") {
            reg = new RegExp("&", "g")
            reg2 = new RegExp("=", "g")
            url = _url.replace(reg, '","')
            Url = url.replace(reg2, '":"')
            arr2 = '{"' + Url + '"}'
            jsonarr = JSON.parse(arr2)
            console.log(jsonarr.page, jsonarr.pagesize)
            new_page = jsonarr.page
        } else {
            new_page = 1
        }

        function new_list_box() {
            var new_url = api_url + '/api/resource/getTheNewsCenterData?page=' + new_page + '&pagesize=' + new_size;
            var _new_list = $("#new_list")
            var _new_page = $("#new_list_page")
            $.ajax({
                type: "POST",
                url: new_url,
                success: function(new_data) {
                    var new_num = new_data.pagenum
                    $.each(new_data.news, function(i, val) {
                            var new_time = val.newtime
                            var _new_time_ = new_time.split("T")
                            var html = '<li>' +
                                '<a href="news-con.html?id=' + val.id + '">' +
                                '<em class="u-img"><img src="' + api_url + val.url + '" alt="' + val.titleEn + '"></em>' +
                                '<span class="g-txt-box">' +
                                '<strong>' + val.titleEn + '</strong>' +
                                '<em>' + _new_time_[0] + '</em>' +
                                '</span>' +
                                '</a>' +
                                '</li>'
                            _new_list.append(html)
                            console.log(new_data)
                            _news_banner.find("p").html(new_data.banner[0].titleEn)
                            _news_banner.find("img").attr("src", api_url + new_data.banner[0].titlepic)
                        })
                        //页码
                    var new_yema = new_data.pagenum / new_size
                    for (var i = 1; i < new_yema; i++) {
                        var new_yema_txt = '<a href="news.html?page=' + i + '&pagesize=' + new_size + '" rel="' + i + '">' + i + '</a>'
                        _new_page.find("a").last().before(new_yema_txt)
                    }
                    $("#new_list_page").find("a").eq(new_page).addClass("cur")
                    $("#new_list_page").find("a").last().click(function() {
                        if (new_page < new_yema - 1) {
                            new_page++
                        } else {
                            return false;
                        }
                        window.location.href = 'news.html?page=' + new_page + '&pagesize=' + new_size
                    })
                    $("#new_list_page").find("a").first().click(function() {
                        if (new_page > 1) {
                            new_page--
                        } else {
                            return false;
                        }
                        window.location.href = 'news.html?page=' + new_page + '&pagesize=' + new_size
                    })
                },
                error: function(data) {
                    console.log("error")
                }
            });
        }
        new_list_box();
    }
    if (_common.page == "8") {
        $(".g-nav-list li a").eq(4).addClass("cur").siblings().removeClass("cur")
        var reg, reg2, url, Url, arr2, jsonarr
        var _url = window.location.search.substring("1")
        console.log(_url)
        reg2 = new RegExp("=", "g")
        Url = _url.replace(reg2, '":"')
        arr2 = '{"' + Url + '"}'
        jsonarr = JSON.parse(arr2)
        console.log(jsonarr.id)
        var _data = { 'id': jsonarr.id }
        var _con_img = $("#con_img")
        var _con_txt = $("#con_txt")
        $.ajax({
            type: "POST",
            data: JSON.stringify(_data),
            url: jiekou.xiangqing_api,
            headers: { 'Content-Type': 'application/json;' },
            success: function(data_con) {
                var _g_pro_ = $("#g-pro")
                var _g_next_ = $("#g-next")
                var _g_pro_id = data_con.previousPageId //上一页
                var _g_next_id = data_con.theNextPageId //下一页
                console.log(data_con)
                console.log(data_con.previousPageId, data_con.theNextPageId)
                    //console.log(data_con)
                _con_img.find("img").attr("src", api_url + '' + data_con.url)
                _con_txt.find("h1").html(data_con.titleEn)
                _con_txt.find(".f-text-content").append(data_con.descriptionEn)
                if (_g_pro_id == "") {
                    _g_pro_.attr("href", "news.html")
                    _g_pro_.html("Section")
                } else {
                    _g_pro_.attr("href", "news-con.html?id=" + _g_pro_id)
                    _g_pro_.html("Previous：" + data_con.previousTitleEn)
                }
                if (_g_next_id == "") {
                    _g_next_.attr("href", "news.html")
                    _g_next_.html("Home")
                } else {
                    _g_next_.attr("href", "news-con.html?id=" + _g_next_id)
                    _g_next_.html("Next page：" + data_con.theNextPageTitleEn)
                }
            },
            error: function(data) {
                console.log("error")
            }
        });
    }
});

var baseJs = {
    Index: function() {
        //导航切换
        nav();

        //移动端调出导航
        var nav_open = $(".g-nav_btn")
        var nav_list = $(".g-nav-list")
        nav_open.click(function() {
                nav_list.slideToggle();
            })
            //我们的产品切换
        var pro_btn = $(".f-pro-btn a")
        pro_btn.on("mouseover", function() {
            var e = $(this).index()
            $(this).addClass("cur").siblings().removeClass("cur")
            $(".g-pro-list").eq(e).addClass("g-pro-list2").siblings(".g-pro-list").removeClass("g-pro-list2")
        })

        //解决方案

        //回到顶部
        var go_top = $(".g-gotop")
        go_top.on("click", function() {
            $("html,body").animate({ scrollTop: 0 }, 300)
        })

        // 留言
        var liuyan_btn = $(".g-liuyan")
        var liuyan_box = $(".g-liuyan-box em")
        liuyan_btn.on("click", function() {
            $(".g-liuyan-box").show()
        })
        liuyan_box.on("click", function() {
            $(".g-liuyan-box").hide()
        })

        //导航高亮
        function nav() {
            var nav_on = $(".g-nav-list li a")
            nav_on.each(function() {
                var _rel = $(this).attr("rel")
                var _url = window.location.href
                var _e = _url.indexOf(_rel)
                    // console.log(_e)
                if (_rel != "undefined" && _e > -1) {
                    $(this).addClass("cur")
                    $(this).siblings().removeClass("cur")
                }
            })
        }
    }
}

function share() {
    window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdText": "",
            "bdMini": "2",
            "bdMiniList": false,
            "bdPic": "",
            "bdStyle": "0",
            "bdSize": "32"
        },
        "share": {},
        "selectShare": {
            "bdContainerClass": null,
            "bdSelectMiniList": ["qzone", "tsina", "weixin"]
        }
    };
    with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
}


function click_nav(click1, click2) {
    click1.click(function() {
        click2.slideToggle("300");
    })
}

function mouse_btn(mouse1, mouse2) {
    mouse1.on({
        "mouseover": function() {
            var e = $(this).index()
            $(this).addClass("on").siblings().removeClass("on")
            mouse2.eq(e).show().siblings().hide()
        }
    })
}

function scoll_nav() {
    $(window).scroll(function() {
        var scroll_h = $(window).scrollTop()
        if (scroll_h > 100) {
            $(".g-nav-list").addClass("g-nav-fixed")
            $(".g-head").addClass("g-head-fixed")
        } else {
            $(".g-nav-list").removeClass("g-nav-fixed")
            $(".g-head").removeClass("g-head-fixed")
        }
    })
}
//产品列表页
function pro_list() {
    var _pro_list = $("#pro_shili")
    var _pro_txt = $("#pro_txt")
    var _pro_neidai = $("#pro_neidai")
    var _pro_jzd = $("#pro_jzd")
    var _pro_jiejing = $("#pro_jiejing")
    var _pro_fangan = $("#pro_fangan")
    var _pro_fangan2 = $("#pro_fangan2")
    var _pro_liucheng = $("#pro_liucheng")
    _pro_txt.find("p").html(arrProduct.banner[0].titleEn)
    _pro_txt.find("img").attr("src", api_url + '' + arrProduct.banner[0].titlepic)
    _pro_list.find("p").html('Diversified customized bags for different markets and application fields, zhongrun has accumulated many years of professional technology and design experience. With a design and sales team of more than 50 people, zhongrun will continue to design and recommend more reasonable products for you.') //arrProduct.outerBag[4].outerBagDescription
    _pro_neidai.find("p").html('Zhongrun has A food-grade film blowing workshop, which produces its own food-grade A, B, C shaped inner bag and inner bag of tensile reinforcement') //arrProduct.innerBag[0].nddescription
    _pro_jzd.find("h2").html(arrProduct.jzdtitleEn)
    _pro_jzd.find("p").html(arrProduct.jzddescriptionEn)
    console.log(arrProduct)
    for (var i = 0; i < 8; i++) {
        // if(i>4){
        //     i=i-1
        // }
        var h = i + 1
        pro_html = '<li>' +
            '<a href="pro-con.html?id=' + h + '">' +
            '<em class="u-img"><img src="' + api_url + arrProduct.outerBag[i].wdpic + '" alt="' + arrProduct.outerBag[i].wdtitleEn + '"></em>' +
            '<span class="g-txt-box">' +
            '<strong>' + arrProduct.outerBag[i].wdtitleEn + '</strong>' +
            '<p>' + arrProduct.outerBag[i].wddescriptionEn + '</p>' +
            '</span> ' +
            '</a>' +
            '</li>'
        _pro_list.find("ul").append(pro_html)
    }
    for (var i = 0; i < 2; i++) {
        html = '<a >' +
            '<em class="u-img"><img src="' + api_url + arrProduct.process[i].titlepic + '" alt="' + arrProduct.process[i].titleEn + '"></em> ' +
            '<span class="g-txt-box">' +
            '<strong>' + arrProduct.process[i].titleEn + '</strong>' +
            '<p>' + arrProduct.process[i].descriptionEn + '</p> ' +
            '</span>' +
            '</a>'
        _pro_jiejing.append(html)
    }
    // console.log(arrProduct.zktitle)
    _pro_fangan.find("h2").html(arrProduct.qhytitleEn)
    _pro_fangan.find("p").html(arrProduct.qhydescriptionEn)
    for (var i = 0; i < 8; i++) {
        _html = '<li>' +
            '<a >' +
            ' <em class="u-img"><img src="' + api_url + arrProduct.program[i].titlepic + '" alt="' + arrProduct.program[i].titleEn + '"></em>' +
            '<span class="g-txt-box">' +
            '<strong>' + arrProduct.program[i].titleEn + '</strong>' +
            '</span>' +
            '</a>' +
            '</li>'
        _pro_fangan.find("ul").append(_html)
    }

    //流程
    _pro_liucheng.find("h2").html(arrProduct.zktitleEn)
    _pro_liucheng.find("p").html(arrProduct.zkdescriptionEn)
    for (var i = 0; i < 4; i++) {
        html = '<a >' +
            '<em class="u-img">' +
            '<img src="' + api_url + arrProduct.control[i].titlepic + '" alt="' + arrProduct.control[i].titleEn + '">' +
            '</em>' +
            '<span class="g-txt-box">' +
            '<strong>' + arrProduct.control[i].titleEn + '</strong>' +
            '<p>' + arrProduct.control[i].descriptionEn + '</p>' +
            '</span>' +
            '</a>'
        _pro_liucheng.find("li").append(html)
    }

}
// 产品内容页面
function pro_con() {
    var index_url = window.location.search
    var id = "pro_" + index_url.substring(1).split("=")[1]
    var _id = index_url.substring(1).split("=")[1] - 1
    var _title = $("#title"),
        _banner_txt = $("#banner_txt"),
        _pro_img = $("#pro_img"),
        _titleH = $("#titleH"),
        _titleHp = $("#titleHp"),
        _titleH2 = $("#titleH2"),
        _aqTxt = $("#aqTxt"),
        _jzTxt = $("#jzTxt"),
        _protxt1 = $("#protxt1"),
        _protxt2 = $("#protxt2")
        // _title.html(pro_box[id].title)
        // _banner_txt.html(pro_box[id].banner_txt)
        // _pro_img.attr("src",api_url+arrProduct.outerBag[_id].wdpic)
        // _titleH.html(arrProduct.outerBag[_id].wdtitle)
        // _titleHp.html(pro_box[id].titleHp)
        // _titleH2.html(arrProduct.outerBag[_id].wdtitle)
        // _aqTxt.append(pro_box[id].aqTxt)
        // _jzTxt.html(pro_box[id].jzTxt)
        // _protxt1.html(pro_box[id].protxt1)
        // _protxt2.html(pro_box[id].protxt2)
    console.log(arrProduct.outerBag)
    _title.html(pro_box[id].titleEn)
    _banner_txt.html(pro_box[id].banner_txtEn)
    _pro_img.attr("src", api_url + arrProduct.outerBag[_id].wdpic)
    _titleH.html(arrProduct.outerBag[_id].wdtitleEn)
    _titleHp.html(arrProduct.outerBag[_id].wddescriptionEn)
    _titleH2.html(arrProduct.outerBag[_id].wdtitleEn)
    _aqTxt.append(pro_box[id].aqTxtEn)
    _jzTxt.html(pro_box[id].jzTxtEn)
    _protxt1.html(pro_box[id].protxt1En)
    _protxt2.html(pro_box[id].protxt2En)
}