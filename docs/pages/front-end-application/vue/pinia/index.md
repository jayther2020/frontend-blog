# Pinia

## 初识和安装

> 1. 安装pinia：`npm install pinia -S`
> 2. 应用里使用Pinia
> 3. 创建相关的Pinia存储模块（store）。
> 4. 在指定组件使用指定存储模块

`Vue3中的app.js`

```js
import { createPinia } from 'pinia'

app.use(createPinia())
```

`Vue2中的index.js`

```js
import { createPinia, PiniaVuePlugin } from 'pinia'  // Vue2用法

Vue.use(PiniaVuePlugin)  // Vue2使用该插件
Vue.use(createPinia())  // Vue2使用Store
```

> 存储模块要点：
>
> 1. 导入：`import {defineStore} from "pinia";`
>
> 2. 用`defineStore`创建存储并导出
>
>    格式为：`defineStore(id,options)`
>
> 3. 导出命名格式最好为`use...store`

```js
import {defineStore} from "pinia";

export const useSettingsStore = defineStore("SettingsStore", {
	//...
})
```

> 使用Pinia存储模块要点：
>
> 1. 将要用到的存储模块导入进去
> 2. 用单个变量来接收存储模块
> 3. 用来自`pinia`的`storeToRefs()`函数来拆分存储模块的多个状态变量，否则无响应式。

`cpn.vue`

```vue
<script setup>
    import { useSettingsStore } from "@/store/SettingsStore.js"
    import { storeToRefs } from 'pinia' // 导入来自`pinia`的`storeToRefs()`函数
    
    const settingStore = useSettingsStore() // 先接收存储模块
    const { themeColor, isDarkMode } = storeToRefs(settingStore) //再将其状态解包出来
</script>
<template><!--...--></template>
```

## state

> `isRef(状态存储的state) === false`

```js
const useStore = defineStore('storeId', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      counter: 0,
      name: 'Eduardo',
      isDarkMode: true,
    }
  },
    //也可以state: () => ({counter: 0, name: 'Eduardo', isDarkMode: true}),
})
```

### $patch

> 在存储实例变量的属性，允许你用一个 `state` 的补丁对象在同一时间更改多个属性：

```js
const settingStore = useSettingsStore()
// 方式1：对象式
settingStore.$patch({ //用部分对象来修改对象
    name: 'Colorado',
    isDarkMode: false,
})
// 方式2：函数式
settingStore.$patch((state)=>{
    state.name = 'Colorado',
    state.isDarkMode = !state.isDarkMode,
})
```

### $state修改

> 不常用，要用它修改必须覆盖原先整个state对象，还是可被`$patch()`代替
>
> ```js
> settingStore.$state({
>  counter: 0,
>  name: 'Rick',
>  isDarkMode: true
> })
> ```

## getters

> 1. 一般格式是以state作为参数的箭头函数（直观），亦可采用普通函数格式
> 2. 动态getter可以返回一个函数来实现传参
> 3. 可以通过this来访问store实例，以此来使用其他的getters（需要标注类型）

```js
const useStore = defineStore('storeId', {
  state: () => {
    return {
      counter: 0,
    }
  },
  getters:{
      basicMsg: state => `Count is ${state.count}.`,
      msg: state => num => `Count is ${num}.`,
      double(state){
          return this.msg(state*2)
      }
  }
})
```

## actions

> 它可以直接改变状态，也可以一次性提交多次或多个mutations，==适合体现页面逻辑==
>
> 可以处理异步操作，也就可以包含任何异步操作。操作如下：

```js
const useStore = defineStore('storeId', {
  state: () => {
    return {
      counter: 0,
      data: null
    }
  },
  actions:{
    incrementBy2 () {
      this.count+=2
    },
    async action1 (token) {
      this.data = await SchoolList(token);
    }
  }
})
```
