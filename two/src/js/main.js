/**
 * Created by Administrator on 2016/10/19.
 */

require.config({
    baseUrl:"js/",//根据index.html的路径
    paths:{
        sp:"swiper.animate-twice.min",
        sw:"swiper",
        to:"touch"
    },
    shim:{//导成AMD模块
        'sp':{
            exports:"sp"//导出
        },
        'sw':{
            exports:"sw"
        },
        'to':{
            deps:["sw"],//依赖关系 (一个或多个)
            exports:"to"
        }
    }
});

require(["sp","sw","to"],function(s,w,o){
    var mySwiper = new w('.swiper-container', {
        direction: 'vertical',
        loop: true,
        pagination: '.swiper-pagination',
        effect:"slider",
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })
})