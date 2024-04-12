## ES6 新特性（2015）

*  let和const
   *  重新赋值
   *  块级作用域
   *  变量提升
   *  重复声明

*  解构赋值
   *  数组解构
   *  对象解构
   *  其他解构赋值

*  模板字符串
*  函数默认参数
   *  函数length属性值
   *  参数作用域

*  箭头函数
   *  更加简洁
   *  不绑定 this
   *  不可作为构造函数
   *  不绑定 arguments

*  扩展运算符
*  Symbol
   *  避免常量值重复
   *  避免对象属性覆盖

*  集合 Set
*  Map
*  模块化
   *  export 导出模块
   *  import 导入模块
   *  导入导出复合用法
   *  模块的继承

*  字符串方法
   *  `includes()`
   *  `startsWith()`
   *  `endsWith()`
   *  `repeat()`

*  数组方法
   *  `reduce()`
   *  `filter()`
   *  `Array.from()`
   *  `fill()`


## ES7 新特性（2016）

*  `Array.includes()`
*  指数操作符`**`，运算符优先级比`*`，`/`高

```js
2**3 // 8
```

## ES8 新特性（2017）
*  `padStart()`和`padEnd()`
*  `Object.values()`和`Object.entries()`
*  函数扩展
*  `Object.values()`

## ES9 新特性（2018）
*  `for await…of`
*  `Promise.finally`
*  对象的扩展运算符
*  对象的 Rest

## ES10 新特性（2019）
*  `trimStart()` 和 `trimEnd()`
*  `flat()`和`flatMap()`
*  `Object.fromEntries()`
   
   *  将数组转成对象
   
   ```js
   const arr = [
     ['name', 'John'],
     ['age', 30],
     ['city', 'New York']
   ];
   
   const obj = Object.fromEntries(arr);
   console.log(obj); // { name: 'John', age: 30, city: 'New York' }
   ```
   
   *  将 Map 转成对象
   
   ```js
   const map = new Map();
   map.set('name', 'Alice');
   map.set('age', 25);
   map.set('city', 'London');
   
   const obj = Object.fromEntries(map);
   console.log(obj); // { name: 'Alice', age: 25, city: 'London' }
   ```
*  `Symbol`描述
*  `toString()`（函数的`toString()`完善）
*  `catch` (`try...catch...`中catch不必带参数了)

## ES11 新特性（2020）
*  `BigInt`
*  空值合并运算符（`??`）

> 只有为`null`和`undefined`才会使用后者

```js
const a = null;
const b = undefined;
const c = "";
const d = 0;

console.log(a ?? "空"); //空
console.log(b ?? "未定义"); //未定义

console.log(c ?? "无"); //''
console.log(d ?? "零"); //0
```

*  可选链操作符（`?.`）

> 不使用`可选链路操作符`虽然在获取空对象的第一层不会报错，但第二层就会报错
>
> 可选链不能用于赋值

```js
let obj = {};
console.log(obj.a?.b); //undefined
console.log(obj.a.b); //直接报错

object?.property = 1; //不能用于赋值
```

*  `Promise.allSettled()`
*  `String.matchAll()`

## ES12 新特性（2021）
*  `String.replaceAll()`
*  数字分隔符（在大数字内可以用`_`来分割任意数位，使数字更清晰）

```js
2_3600_0000 // 236000000
1_000_000  // 1000000
```

*  `Promise.any`
*  逻辑赋值操作符

```js
x &&= y;
//等价于
x && (x = y);

x ||= y;
//等价于
x || (x = y);

x ??= y;
//等价于
x ?? (x = y);
```

## ES13 新特性（2022）
*  `Object.hasOwn()`
*  `at()`
*  `error.cause`
*  [:Top-level Await](/pages/front-end-stack/async-js/#顶行await)