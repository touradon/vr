$(function(){
    var i = 0;
    if ( $(window).width() > 750 && $(".menu-wrap").hasClass('active') ){
        $(".menu-wrap").addClass('active');
    } else {
        $(".menu-wrap").removeClass('active');
    }
    $(".menu-btn").click(function() {
        $('.top_wrap').toggleClass('menu_click');
        if (i == 0) {
            $(".menu-wrap").addClass("active");
            i = 1;
        } else {
            $(".menu-wrap").removeClass("active");
            i = 0;
        }
    });
   

    // 滚动
    $('.swift_nav li').click(function(e){
        // 页面平滑的滚动到相应的位置
        scrollToTop($("."+$(this).attr("id")).offset().top);
        $(this).addClass('active').siblings('li').removeClass('active');
    })
    /* 监听滚动 */
    // $(document).scroll(function() {
    //   if ($(document).height() <= (parseInt($(document).scrollTop() + 1) + $(window).height())){  //滚动条滑到底部啦
    //     $(".swift_nav li").removeClass('active')
    //     $(".swift_nav li:last").addClass('active')
    //     return;
    //   }
    //   var top = $(document).scrollTop();  //滚动条距离顶部的高度
    //   $(".text").each(function (i,item) {
    //       if($(this).offset().top <= top){
    //           $("ol li").removeClass('active')
    //           $("#"+item.classList[1]).addClass('active');
    //       }
    //   })
    // });
    /** 将滚动轴滚到相应位置 */
    function scrollToTop(number) {
        window.scrollTo({
            top: number,
            behavior: "smooth"
        });
     }

    // scroll2top
    function scroll2top(){
        let btn = $(".pop-back2top"); // 获取元素
        let fixedBox = $(".fixed");
        btn.click(function(){  // 按钮添加点击事件
            $("body, html").stop(true, true).animate({
                scrollTop: 0 // body和html添加动画
            }, 300)
         });
        $(window).scroll( function(){ // 窗口滚动时，滚动到一定位置 btn 按钮显示/隐藏
            if( $(window).scrollTop() > $(window).height() ){
                fixedBox.addClass('show');
            } else {
                fixedBox.removeClass('show');
            }
        });
    }
    // 初始化
    scroll2top();

    // wow 动画
    var wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
    )
      wow.init();

})