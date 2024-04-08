# Vue原理篇

## Vue2原理

## 响应式

```js
let obj = {}
Object.defineProperty(obj,"a",{
    configurable:true,
    get:function(){
        return obj.a
    },
    set:function(val){
        obj.a = val
    }
})
```

## 响应式局限性

> Vue2无法直接响应下面两种情况
>
> 1. 对象：对对象直接添加，更新，删除属性
>
>    ```js
>    obj.newProp = 1
>    obj.existedProp = "Hello there"
>    delete obj.oldProp
>    ```
>
> 2. 数组：直接通过下标修改数组
>
>    ```js
>    arr[3] = 3
>    ```

## Vue3原理