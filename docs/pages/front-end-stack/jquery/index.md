

# Jquery笔记

## 获取节点

`$("类名/标签名/...")`

## document的load和ready

> 1. load是当页面*所有资源全部加载*完成后（包括DOM文档树，css文件，js文件，图片资源等），执行一个函数，
>
>    缺点:问题是如果图片资源较多，加载时间较长，onload后等待执行的函数需要等待较长时间，所以一些效果可能受到影响
>
> 2. $(document).ready()是*只当DOM文档树加载完成*后执行一个函数 （不包含图片，css等）所以会比load较快执行，
>
>    在原生的JS中不包括ready()这个方法，只有load方法就是onload事件

```js
$(document).load(function(){
    $("div").hide();
})

$(document).ready(function(){
    $("div").hide();
})
// document ready 简写
$((function(){
  	$("div").hide();
})
```

DOM对象与jQuery对象转换

```js
var xkl = document.querySelector("div")
```

> 转换为jQuery对象为：`$(xkl)`

## 更改样式

```js
$("div").css("width", "300px")
```

> 如果有多个div，则多个div都会被修改样式，因为获取过来的div会自动循环遍历，这就是隐式迭代，前提是所有div的操作相同
> PS：如果css内只写属性名，则返回属性名的属性值：如果后面的值为数字，可以不用给单位和引号
> PS：也可以通过对象修改多个属性，如下

```js
$("div").css({
    width:300,
    height:400,
    backgroundColor:"pink"
})
```

## 通过选择器筛选

`$("li:first")`：获取第一个元素
`$("li:last")`：获取最后一个
`$("li:eq(n)")`获取第n个，从0开始=`$("li").eq(n)`更好
`$("li:odd")`：获取索引号为奇数的元素

`$("li:even")`：获取索引号为偶数的元素

## 节点导航

`$(".son").parent()`：获取.son的父级
`$(".son").parents("类名")`：如果需要写过多的parent()，可以选择将父级类名写在parents括号里直接获取
`$(".father").children("li")`：选择.father的子元素，不包含孙，相当于.father>li
`$(".father").find("li")`：选择.father里面所有的li，相当于.father li
`$(".son").siblings("li")`：获取当前父级内的所有出以及以外的li元素，siblings留空则为除自己的所有元素
`$(".son").nextAll()`：获取当前父级内在.son之后的兄弟元素，括号内的用法与siblings一样
`$(".son").prevtAll()`：获取当前父级内在.son之前的兄弟元素，括号内的用法与siblings一样

## 元素的类控制

| 功能                    | jQuery                            | 原生等价方法                       |
| ----------------------- | --------------------------------- | ---------------------------------- |
| 开关CSS样式类           | `$("div").toggleClass("current")` | `el.classList.toggle("current")`   |
| 判断li是否有box这个类名 | `$("div").hasclass("current")`    | `el.classList.contains("current")` |
| 添加CSS样式类           | `$("div").addClass("current")`    | `el.classList.add("current")`      |
| 删除CSS样式类           | `$("div").removeClass("current")` | `el.classList.remove("current")`   |

排他思想

```js
$("button").click(function(){
	$(this).css("backgroundColor", "pink")
	$(this).siblings("button")
})
```

注意：只有div在同一个盒子的时候才有效，也就是亲兄弟

链式编程操作: `$(this).addClass("current").siblings().removeClass("current");`

表示：当前元素添加指定类，并且当前元素的所有兄弟节点删除指定类

## 获取/设置属性值

获取索引号: `$("div").index()`

获取/设置属性值:`$("input").prop("checked")`：

设置属性值:`$("input").prop("checked"，true)`：

获取自定义属性值:`$("checked").attr("index")`
设置属性值: `$("input").attr("index"，"1")`

获取被选中的复选框个数(用于购物车) : `$("checkbox:checked").length`

获取/修改元素内的内容，与innerHTML一致 : `$("div").html()`
设置元素内的内容 : `$("div").html("123")`

获取/修改元素文本内容，与innerText一致: `$("div").text()`
设置元素内的内容: `$("div").text("123")`

获取表单值: `$("input").val()`

修改表单值: `$("input").val("123")`

## 遍历元素

```js
var arr = ["red"，"green"，"blue"]
$("div").each(function(index，domEle){
    //index为数组下标0123，由于domEle获取过来的是所有div，且是dom元素对象，需要转换成jQuery对象$("domEle")
    $(domEle).css("color"，arr[index])
})
```

遍历数组

```js
$.each(arr，function(i，d){
	//i为索引号，d为数组元素
})
```

## 创建添加删除元素

### 内部添加

`var li = $("<li></li>")`
`$("ul").append(li)`：追加到*后面*
`$("ul").prepend(li)`：添加到*前面*

### 外部添加

`var div = $("<div></div>")`
`$("ul").after(div)`：放在上面ul标签的后面

`$("ul").before(div)`：放在上面ul标签的前面

### 删除元素

`$("ul").remove()`：删除自身
`$("ul").emptr()`：清空自己的子节点

`$("ul").html("")`：清空自己的子节点，同上

### 鼠标事件

```js
$("div").mouseup(function(){
	$(this) // 选中的当前元素div
})
```

### 事件注册on()

(只适用于一个元素同时添加多个事件)

```js
$("div").on({
    mouseenter：function(){
	    $(this).css("background"，"pink")
    }，
    click：function(){
	    $(this).css("background"，"red")
    }
})
```

输入两个事件的方法只适用于toggleClass添加类名，目前貌似只适用于鼠标经过和离开事件

```js
$("div").on("mouseenter mouseleave"，function(){
	$(this).toggleClass("类名")
})
```

事件委托(并且给动态创建的元素添加事件)

```js
$("ul").on("click"，"li"，function(){
    $(this).siblings("li").removeClass("类名")
    $(this).addClass("类名")
})
```

事件解绑: `$("div").off()`（如果括号内为空，会*解除所有*事件，如果里面为off("click")，则*只解除*点击事件）
解除事件委托：`$("ul").off("click"，"li")`（事件委托括号内是什么样子，解除事件委托括号内就是什么样子）

只触发一次事件

```js
$("div").one("click"，function(){
    alert("执行")
})
```

## 触发事件

`$("div").click()`
`$("div").trigger("事件名")`
`$("div").triggerHandler("事件名")`

> 前两个的性质一样，最后一个不会触发默认行为，比如表单获取焦点，里面会有光标闪烁，二最后一个则不会有光标闪烁

## 对象拷贝

```js
var targetObj = {
    id:0
    age:"18"
}

var obj = {
    id:1，
    name:"Andy"，
    msg:{
        sex:"男"
    }
}
```

`$.extend(targetObj，obj)`浅拷贝：将obj拷贝给targetObj，会替换掉原来存在的数据，obj内修改数据，会影响targetObj里面的值

```js
targetObj = {
    id:1，
    name:"Andy"，
    msg:{
	    sex:"男"
    }
}
```

`$.extend(true，targetObj，obj)`深拷贝：与浅拷贝不同，深拷贝不会直接替换msg，而直接合并，且修改原来obj里面的值不会影响targetObj里面的值，则

```js
msg:{
    age:18，
    sex:"男"
}
```

多库共存
> 如果jQuery的`$`与其他库冲突，则可以使用`jQuery`来代替`$​`，如`jQuery("div")`，
>
> 也可以自定义，`var alt = jQuery.noConflict()`，就可以直接以`alt`为命名使用了（`alt("div")`）

### 图片懒加载

(只加载网页可视区的图，其他地方滑动到可视区才能加载，减轻服务器负担，这是一个插件，且必须掌握)

获取/设置元素宽高：
`$("div").width/height()`：获取宽/高度，括号内填数字可直接设置，无需添加单位
`$("div").innerWidth/innerHeight()`：获取包含padding的宽/高度，
`$("div").outerWidth/outerHeight()`：获取包含padding和border的宽/高度

`$("div").outerWidth/outerHeight(true)`：获取包含padding和border和margin的宽/高度

获取距离body的位置(偏移)：offset

```js
$("div").offset().top/left //获取div距离body上、左的距离
// 设置距离
$("div").offset({
    top：300,
    left：300
})
```

获取距离父盒子的位置(偏移)，如果父盒子没有定位，则以body为主：position
`$("div").position().top/left`：获取div距离父盒子上、左的距离

PS：但不能设置

获取被卷去的长度：scroll

```js
$(window).scroll(function(){
	$(document).scrollTop()/scrollLeft() //：获取上/左卷去的长度，括号内填不带单位的数，则直接跳到指定坐标
})
```

PS：所有动画的括号内有毫秒数，里面都可以写函数，函数执行时间为毫秒数结束时间

## jQuery显示隐藏动画

`$("div").hide(时间毫秒，"曲线"，"动画完成后执行的函数")`

与之对应：`$("div").show()`

下拉菜单动画，判断鼠标是否经过

```js
$("div").hover(function(){
    $(this).children["uI"].slideDown(动画向下速度)}，
    function(){
    $(this).children["uI"].slideUp(动画速度)xiangshang'
})
$(this).children["uI"].slideToggle(动画速度)
```

PS：hover括号内需要写两个函数样式，一个是经过，一个是离开

停止动画排队，如果没有写入，则鼠标触发几次，它就会触发几次，即使鼠标离开它也会继续触发，类似中断动画
stop()

```
$(this).children["uI"].stop().slideToggle(动画速度)
```

> 淡入淡出

淡入`$("div").fadeIn(毫秒数)`
淡出`$("div").fadeOut(毫秒数)`

淡入淡出切换: `$("div").fadeToggle(毫秒数)`

透明度: `fadeTo(毫秒数，透明度0-1，动画曲线，函数)`

自定义动画

```js
$("button").click(function(){
    $("div").animate({
        left:100，
        top：100，
        opacity：.5
    }，1000)
})
```

返回顶部动画

```js
$("body，html").stop().animate({
    scrollTop：0
})
```

