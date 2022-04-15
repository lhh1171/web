//1.获取所有的图片
var imgs = document.querySelectorAll(".content>li");
//2.获取所有的圆点
var dots = document.querySelectorAll(".dot li");
//3.左按钮
var leftBtn = document.querySelector(".left");
//4.右按钮
var rightBtn = document.querySelector(".right");

//补充变量 存储当前正在显示的图片的下标
var index = 0;//默认第一张

//避免过度的快速点击,设置是否可以点击
var isClick = true;
//右侧按钮
rightBtn.onclick = function () {
    if ( !isClick){
        return;
    }
    isClick = false;
    //延迟0.5秒执行
    setTimeout(function () {
        isClick = true;
    }, 500);
//    ----------------
    //先隐藏当前显示的图片
    imgs[index].style.opacity = 0;
    //圆点
    dots[index].style.backgroundColor = '#fff';
    //下标增加
    index++;
    //判断下标 不要越界,一共8张 最大下标到7  从0开始
    if(index == 8){
        index = 0;
    }
    //切换新图片
    imgs[index].style.opacity = 1;
    dots[index].style.backgroundColor = "#dc192c";
};
//左侧按钮
leftBtn.onclick = function () {
    if (!isClick) {
        return;
    }
    isClick = false;
    //延迟
    setTimeout(function () {
        isClick = true;
    }, 500);
//    -----------------------
    imgs[index].style.opacity = 0;
    dots[index].style.backgroundColor = '#fff';
    index--;
    if (index == -1){
        index = 7;
    }
    imgs[index].style.opacity = 1;
    dots[index].style.backgroundColor = "#dc192a";
};
//------------------------
//自动滚动
//获取底部的banner
var banner = document.querySelector(".banner");
//设置自动函数
function autoChange() {
    imgs[index].style.opacity = 0;
    dots[index].style.backgroundColor = "#fff";
    index++;//默认向右滚动
    if (index == 8){
        index = 0;
    }
    //显示新的一张  和圆点
    imgs[index].style.opacity = 1;
    dots[index].style.backgroundColor = "#dc192a";
}
//自动切换--开启计时器
var timer = setInterval(autoChange, 1000);
//监测鼠标触摸banner的事件
banner.onmouseenter = function () {
    //关闭计时器
    clearInterval(timer);
};
//鼠标离开banner
banner.onmouseleave = function () {
    //重新开始计时器
    timer = setInterval(autoChange, 1000);
};
//鼠标经过小圆点 8个园点都可切换图片 所以每个圆点的功能都一样
for (var i = 0; i < 8; i++){
    dots[i].onmousemove = function () {
        //隐藏当前图片
        imgs[index].style.opacity = 0;
        dots[index].style.backgroundColor = '#fff';
        //this: 代表当前当前触发事件元素
        for(var j = 0; j < 8; j++){
            if(dots[j] == this){
                //j就是当前触摸的圆点的下标
                index = j;
                break;//结束循环
            }
        }
//新的位置
        imgs[index].style.opacity = 1
        dots[index].style.backgroundColor = '#dc192a';
    };
}

