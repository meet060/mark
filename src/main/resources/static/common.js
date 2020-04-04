var viewWidth = $(window).width();
var viewHeight = $(window).height();
var pageHeight = $('body').height();
var scrollTop = '';
$(function(){
  $(".lazyload").lazyload({
    // threshold :180,
    effect: "fadeIn"
  });
});
if(typeof isIndex === "undefined"){
  isIndex = false;
}
window.onload = function(){
  scrollTop = $(window).scrollTop();
  //页面调整，包括窗口大小发生变化的的时候
  pageAdajust();
  //页面调整，只在资源加载完成后
  onceAdajust();
  //图片延迟加载
  delayImg(scrollTop);
  //弹出层初始化
  popLayout();
  //缓动效果
  animateShow(scrollTop);
  pageProcess(scrollTop);
};

$(window).resize(function(event) {
  /* Act on the event */
  //reset viewHeight,viewWidth
  viewWidth = $(window).width();
  viewHeight = $(window).height();
  pageAdajust();
  //页面调整，在只在窗口尺寸变化时候生效
  docReady();
  //弹出层调整在窗口尺寸发生变化的时候
  popLayout();
  // 调整全屏元素
  fullScreen();
});

$(document).ready(function(){
  scrollTop = $(window).scrollTop();
  //页面调整，在DOM准备好，在onload之前
  onceReady();
  // 调整全屏元素
  fullScreen();
});

$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  delayImg(scrollTop);
  delayPlate(scrollTop);
  animateShow(scrollTop);
  animateMask(scrollTop);
  pageProcess(scrollTop)
});


$('.stop-pop').on('click',function(event){
  var event = event || window.event;
  event.stopPropagation();
});


function popLayout(){
  if($('.pop-layout').hasClass('full')){
    $('.pop-layout,.pop-layout.pop-wrap').css({
      height: viewHeight,
      width: viewWidth
    });
  }
}

function fullScreen()
{
  $('.fullScreen').css({
    height: viewHeight
  });
}

var delayPlateStatus = [];
var delayImgStatus = [];
function delayPlate(scrollTop)
{
  if($('.delayplate')[0])
  {
    var num = $('.delayplate').length;
    for(var i=0;i<num;i++)
    {
      var key = $('.delayplate').eq(i);
      var keyHeight = key.height();
      var plateTop = key.offset().top - keyHeight;

      if((plateTop+300)<scrollTop + viewHeight&&!delayPlateStatus[i])
      {
        //加载
        key.animate({'top':0}, 600);
        delayPlateStatus[i] = true;
      }
    }
  }
}

function delayImg(scrollTop)
{
  if($('.delayimg')[0])
  {
    var num = $('.delayimg').length;
    for(var i=0;i<num;i++)
    {
      if(!delayImgObj[i])
      {
        var obj = $('.delayimg').eq(i);
        var imgTop = obj.offset().top;
        if(imgTop + 100<scrollTop + viewHeight&&!delayImgStatus[i])
        {
          //开始加载
          var src = obj.attr('data-src');
          obj.attr({src:src});
          delayImgObj[i] = obj[0];//保存对象
          delayImgStatus[i] = true;
        }
      }
    }
    if(!loopStatus)
    {
      imgLoadStatusCheck();//开始轮询
    }
  }
}


//mask animation
var animateMaskStatus = [];
function animateMask(scrollTop)
{
  if($('.mask-animation')[0])
  {
    var num = $('.mask-animation').length;
    for(var i=0;i<num;i++)
    {
      var key = $('.mask-animation').eq(i);
      var keyHeight = key.height();
      var plateTop = key.offset().top - keyHeight;

      if((plateTop+400)<scrollTop + viewHeight && !animateMaskStatus[i])
      {
        //加载
        key.addClass('show');
        animateMaskStatus[i] = true;
      }
    }
  }
}

//背景图片加载，带样式，并带有background-size
if($('.imageload')[0])
{
  $('.imageload').each(function(index){
    var src = $(this).attr('origin-data');
    $(this).css({
      'background':'url("'+src+'") no-repeat center center',
      'background-size':'cover'
    });
  });
}
//背景图片加载，带样式，不带有background-size
if($('.imageloadNoCover')[0])
{
  $('.imageloadNoCover').each(function(index){
    var src = $(this).attr('origin-data');
    $(this).css({
      'background':'url("'+src+'") no-repeat center center'
    });
  });
}
//背景图片加载，不带样式
if($('.imageloadNoStyle')[0])
{
  $('.imageloadNoCover').each(function(index){
    var src = $(this).attr('origin-data');
    $(this).css({
      'background':'url("'+src+'")'
    });
  });
}


/*
 *模块延迟出现
 *
 */
var animateShowStatus = [];
var animateShowStatusDelay = [];
function animateShow(scrollTop)
{
  if($('.animate-show')[0])
  {
    var num = $('.animate-show').length;
    for(var i=0;i<num;i++)
    {
      var key = $('.animate-show').eq(i);
      var plateTop = key.offset().top;

      if((plateTop+viewHeight/3)<scrollTop + viewHeight&&!animateShowStatus[i])/*视觉修正*/
      {
        //加载
        key.addClass('show');
        animateShowStatus[i] = true;
      }
    }
  }

  if($('.animate-show-delay')[0])
  {
    var num = $('.animate-show-delay').length;
    for(var i=0;i<num;i++)
    {
      var key = $('.animate-show-delay').eq(i);
      var plateTop = key.offset().top;

      if((plateTop+viewHeight/7)<scrollTop + viewHeight&&!animateShowStatusDelay[i])/*视觉修正*/
      {
        //加载
        opts = {
          key:key,
          i:i
        };
        setAnimateShowClassDelay(opts);
        animateShowStatusDelay[i] = true;
      }
    }
  }
  if($('.animate-show-delay-fast')[0])
  {
    var num = $('.animate-show-delay-fast').length;
    for(var i=0;i<num;i++)
    {
      var key = $('.animate-show-delay-fast').eq(i);
      var plateTop = key.offset().top;

      if((plateTop+viewHeight/7)<scrollTop + viewHeight&&!animateShowStatusDelay[i])/*视觉修正*/
      {
        //加载
        opts = {
          key:key,
          i:i,
          level:50
        };
        setAnimateShowClassDelay(opts);
        animateShowStatusDelay[i] = true;
      }
    }
  }
}


/*
 */
function setAnimateShowClassDelay(opts){
  var key = opts.key;
  var i = opts.i;
  var level = opts.level || 200;
  if(key.hasClass('outoforder')){
    //乱序出现
    var delay = Math.floor(Math.random()*500);
  } else {
    var delay = level*i;
  }

  var timer = setTimeout(function(){
    key.addClass('show');
  },delay);
}


/**
 * 禁止body随滚轮滚动
 */
var scroll_width = 0;
if(hasScrollbar()){
  scroll_width = getScrollbarWidth()
}
function disableBodyScroll () {

  document.documentElement.style.cssText = 'overflow:none;+overflow:hidden;_overflow:hidden;';
  document.body.style.cssText = 'overflow:hidden;+overflow:none;_overflow:none;padding:'+scroll_width+';';
}

/**
 *  恢复body随滚轮滚动
 */
function enableBodyScroll() {
  document.documentElement.style.cssText = 'overflow:auto;+overflow:auto;_overflow:auto;';
  document.body.style.cssText = 'overflow:auto;+overflow:auto;_overflow:auto;padding:0;';
}

function hasScrollbar() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
}

function getScrollbarWidth() {

  var scrollDiv = document.createElement("div");
  scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);

  return scrollbarWidth;

}

var modal_open_call = [];
var modal_close_call = [];
$(document).on('click', '[role="modal"]', function(){
  var url = $(this).attr('href');
  if (url.indexOf("#") !== -1)
  {
    url = url.substr(1);
  } else {
    url = null;
  }
  if(url){
    // disableBodyScroll();
    $('#'+url).fadeIn(300)
  }

  for(var i=0; i<modal_open_call.length;i++){
    var fn = modal_open_call[i];
    if(typeof fn === 'function'){
      fn();
    }
  }
});
$(document).on('click', '.pop-layout, .pop-layout .close', function(){
  for(var i=0; i<modal_close_call.length;i++){
    var fn = modal_close_call[i];
    if(typeof fn === 'function'){
      fn();
    }
  }
  $(this).fadeOut(300);
  // enableBodyScroll();
});

//copyright	取年份
function getYear(){
  var date = new Date();
  return date.getFullYear();
}


var loopStatus = false;
function imgLoadStatusCheck()
{
  var num = delayImgObj.length;
  var flag= 0;
  for(var i=0;i<num;i++)
  {
    if(delayImgObj[i])
    {
      if(delayImgObj[i].complete)
      {
        //添加随机数
        // var random = Math.round(Math.random()*10);
        $(delayImgObj[i]).animate({top:0},500);
        $(delayImgObj[i]).siblings('.hide').removeClass('hide');
        flag++;
      }
    }
  }
  if(flag !== num)
  {
    var t = setTimeout(function(){imgLoadStatusCheck();},500);
  }
}



var delayImgObj = [];

function docReady(){

}
var cover_video
function onceReady(){
}
function onceAdajust()
{

}
function pageAdajust()
{

}


/**
 * 首页导航栏样式切换
 * @param scrollTop
 */
function headChange(scrollTop) {
  var head = $('#head');
  if(scrollTop > 100) {
    head.removeClass('transparent');
  } else {
    if(!head.hasClass('transparent')){
      head.addClass('transparent')
    }
  }
}

function pageProcess(scrollTop){
  var diff = (pageHeight - viewHeight);
  if(diff<=0){
    return false;
  }
  var rate = (scrollTop / diff) * 100;
  var processBar = $('#head #load-line .process');
  if(!processBar[0]) {
    return false;
  }
  processBar.css({
    width: rate+'%'
  })
}

(function(window){
  function ImageLoad(opts){
    this.images = $(opts.images);
    this.imageArray = [];
    // 超时
    this.startTime = (new Date()).getTime();
    this.timeOut = opts.timeOut || 30000;
    this.completeCallback = opts.completeCallback || function(){};
    this.completeCallbackStatus = true;
    this.checkInterval = 300;
    this.checkTimer = null;
    this.init()
  }
  ImageLoad.prototype = {
    constructor: 'ImageLoad',
    init: function(){
      var that = this
      if(that.images.length <= 0){
        return false;
      }
      //如果没有加载 则进行加载
      if(that.imageArray.length <= 0){
        that.images.each(function(){
          var image = new Image();
          image.src = $(this).attr('origin-data');
          that.imageArray.push(image)
        })
      }
      this.check()
    },
    // 检查加载情况
    check: function(){
      // 检查时间戳
      var that = this;
      if((new Date()).getTime() > (that.startTime + that.timeOut)){
        //
        if(completeCallbackStatus){
          that.callback(that.completeCallback);
          that.completeCallbackStatus = false;
        }
      }
      clearTimeout(that.checkTimer );
      var allLoad = true;
      for(var i = 0; i < that.imageArray.length; i++) {
        if(!that.imageArray[i].complete){
          that.checkTimer = setTimeout(function(){that.check()}, that.checkInterval);
          allLoaded = false;
          break;
        }
      }
      if(allLoad && that.completeCallbackStatus){
        that.images.each(function(){
          var src = $(this).attr('origin-data');
          $(this).css({
            'background':'url("'+src+'") no-repeat center center',
            'background-size':'cover'
          });
        })
        that.callback(that.completeCallback);
        that.completeCallbackStatus = false;
      }
    },
    callback : function(c, delay){
      delay = delay || 0;
      var that = this;
      if( 'function' === typeof c){
        var t_callback = setTimeout(function () {
          c(that);
        }, delay);
      }
    }
  }
  window.ImageLoad = ImageLoad;
})(window)

$('.backtop').on('click',function(){
  $('body,html').animate({
    scrollTop: 0
  }, 1000);
});
