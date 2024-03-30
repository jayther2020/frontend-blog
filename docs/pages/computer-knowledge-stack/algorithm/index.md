# 算法相关

![image-20221122190626982](./index.assets/image-20221122190626982.png)

## 概述

**算法设计**

> 1. 算法重在设计。如果提供不出高效算法，超级计算机客观上只是一堆“超级废铁”
> 2. 算法分析
>    又快又好
>    +适用范围
> 3. 计算机算法设计贵在“智类之明”
>    +算法分类：比如数值算法与非数值算法、串行算法、加速算法、快速算法、并行算法
>    +五大类算法：（蛮力法），递归与分治、贪心、动态规划、回溯、分支限界
>
> 算法的重点不在公式，而且根本不存在万能的源码。但存在着解决问题的万能方法：trial and error（试探并纠错)。So,try it first!（先试试！)

**程序设计法则IPO**

> IPO，即Input, Process, Output ；是再复杂的程序都逃不过的设计原则。
>
> 遇到一个问题，要求解它，就要从输入，处理，输出三方面考虑。

```typescript
function fn(a){ // 输入
    //...
    process() // 处理
    //...
    return b // 输出
}
```

**算法特征**

> 特点：有穷，确定，可行，输入，至少一个或多个输出
>
> 好算法特征：正确，可读，健壮，高效（效率高，存储量低）

## 时间复杂度

语句频度：每条语句的执行次数。

时间复杂度：简化总语句频度表示。衡量程序的相对最糟运行时间

> 两种算法效率度量方法：
>
> 1. 事后统计法
>
> 2. 事前分析估算法（主要）
>
>    同一个算法的时间复杂度不是一成不变的，和输入的数据形式依然有关系

```typescript
//### 时间复杂度从上至下变大 ###
let x:number = 0, y:number
// 时间复杂度为O(1)
x+=1; y=x //基本语句

//时间复杂度为O(logn)
let i:number=1
while (i<n){
    i*=2 //基本语句
}

//时间复杂度为O(n)
for (let i:number=0;i<n;i++){
    print(i) //基本语句
}

//时间复杂度为O(n*logn)
for (let i=0;i<n;i++){
    let x=1;
    while( x<n){
        x*=2 //基本语句
    }
}

//时间复杂度为O(n^2)
for (let i = 0;i<n;i++){
    for(let j = 0;j<n;j++){
        x+=1; s+=x //基本语句
    }
}

//时间复杂度为O(n^3)：矩阵乘法
for (let i = 0;i<n;i++){
    for(let j = 0;j<n;j++){
        mtx[i][j] = 0
        for(let k = 0;k<n;k++){
            mtx[i][j]+=a[i][k]*b[k][j] //基本语句
        } 
    }           
}

//时间复杂度为O(2^n)
```

更复杂点的要据语句频度进行分析

```typescript
//下面的基本语句的语句频度为((n+1)*n)/2；则时间复杂度为O(n^2)
for(let i = 0;i<n;i++){
    for(let j = 0;j<n;j++){
        x+=1; s+=x  //基本语句
    }
}
```

由此可知我们需要尽量减小算法的复杂度来达到优化算法的目的

```typescript
//斐波那契数列算法实质是爆炸增量函数
interface fibonacciFn {
  (value: number): number;
}

//实现方法1：普通实现方法
// 爆炸式增长的函数常常导致算法无效
const fibonacci1: fibonacciFn = function (n) {
  if (n < 1) return -1;
  else if ([1, 2].includes(n)) return 1;
  else return fibonacci1(n - 1) + fibonacci1(n - 2)
}

//实现方法2：数组实现方法
// 时间复杂度：O(n)
// 空间复杂度：O(n)
const fibonacci2: fibonacciFn = function (n) {
  if (n < 1) return -1;
  const fibonacciArray = [1, 1]
  for (let i = 2; i <= n; i++) {
    fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2])
  }
  return fibonacciArray[n - 1]
}

//实现方法3：两变量辗转相加法
// 时间复杂度：O(n)
// 空间复杂度：O(l)
const fibonacci3: fibonacciFn = function (n) {
  if (n < 1) return -1;
  else if ([1, 2].includes(n)) return 1;
  let num1: number = 1, num2: number = 1;
  for (let i = 3; i <= n; i++) {
    num2 = num2 + num1;
    num1 = num2 - num1;
  }
  return num2
}

console.log("================================")
console.log(fibonacci1(10))
console.log("================================")
console.log(fibonacci2(10))
console.log("================================")
console.log(fibonacci3(10))
console.log("================================")
```

## 空间复杂度

衡量程序的所需存储空间量度

> 算法运行过程的存储空间包括：
>
> 1. 输入输出数据占用的空间
> 2. 算法本身占用的空间
> 3. 执行算法需要的辅助空间（主要）

```typescript
//### 空间复杂度从上至下变大 ###//

//#空间复杂度为O(1)
let x:number=0

//#空间复杂度为O(n)
let x:number[]=[...]

//#空间复杂度为O(n^2)
let x:number[][] = [[...],[...],[...],...]
```

## 递归算法设计技术

### 定义

在定义一个过程或函数时出现调用本过程或本函数的成分，称之为递归。

若调用自身，称之为直接递归。若过程或函数p调用过程或函数q,而q又调用P,称之为间接递归。任何间接递归都可以等价地转换为直接递归。

如果一个递归过程或递归函数中递归调用语句是最后一条执行语句，则称这种递归调用为尾递归。

![image-20221024233121694](./index.assets/image-20221024233121694.png)

### 递归特征

> 一般来说，能够用递归解决的问题应该满足以下三个条件：
>
> 1. 需要解决的问题==可以转化为一个或多个子问题==来求解，而这些子问题的求解方法与==原问题完全相同==，只是在数规模上不同。
> 2. 递归调用的==次数必须是有限==的。
> 3. 必须==有结束递归的条件==来终止递归。即有一个分支不调用自身。

```typescript
function fn(x: number){
  if(x==1)return 1
  else return fn(x-1)*x
}
```

> 使用递归的情况分为以下三种：
>
> 1. ==定义==是递归的，如求阶乘
> 2. ==数据结构==是递归的，如链表
> 3. ==求解方法==是递归的，如汉诺塔问题
>
> **递归模型**
>
> 是对递归问题的抽象，展示递归问题的递归结构
>
> 1. 递归出口：
> 2. 递归体：

## 蛮力法

> 顾名思义，就是用穷举的方法来遍历所有可能，思想就是直接遍历所有的可能。

**五大核心算法**

## 分治法

> 

```

```

## 回溯法

> 回溯法（探索与回溯法）是一种选优搜索法，又称为试探法，按选优条件向前搜索，以达到目标。
>
> 当探索到某一步时，发现原先选择并不优或达不到目标，就退回一步重新选择。
>
> 这种走不通就退回再走的技术为回溯法，而满足回溯条件的某个状态的点称为“回溯点”。

```

```

## 分支限界法

> 在遍历求解树上采取广度优先的策略

```

```

## 贪心算法

> 贪心算法，只关心局部最优解，在某些问题中贪心算法甚至能直接找到最优解。
>
> 思想：每步只着眼于眼前小问题而给出其最优解。最终综合起来成为其解决方案。

```typescript
/**
* 恒生：求股票最佳购买方案
* @param prices int整型一维数组 一个数字数组，其中的每个元素表示股票在连续天数内的价格
* @return int整型
*/
function maxProfitWithMultipleTransactions(prices) {
  // write code here
  let j = 0, maxProfit = 0
  for (let i = 1, n = prices.length; i <= n; i++) {
    if (prices[i - 1] > prices[i] || prices[j] < prices[i - 1]) {
      maxProfit += prices[i - 1] - prices[j];
      j = i;
    }
    if (prices[j] > prices[i - 1]) j = i - 1
  }
  return maxProfit;
}
```

## 动态规划

> 又称记录结果填表法，是种解决多阶段决策问题优化方法，将多阶段问题转化为一系列阶段问题。

我们再回看

```typescript
const fibonacci2: fibonacciFn = function (n) {
  if (n < 1) return -1;
  const fibonacciArray = [1, 1]
  for (let i = 2; i <= n; i++) {
    fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2])
  }
  return fibonacciArray[n - 1]
}
```

## 排序算法

## 算法技巧

### 双指针

```js
/**
 * 力扣1. 两数之和（双指针解法）

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    let numsLength = nums.length
    let numsCpy = Array.from(nums) // 需要排序，排序要考虑原数组顺序需要记下原id
        .map((val, idx) => ({ val, idx }))
        .sort((a, b) => a.val - b.val)

    let [left, right] = [0, numsLength - 1] // 定义左右指针

    while (left < right) {
        if (numsCpy[left].val + numsCpy[right].val === target) 
            return [numsCpy[left].idx, numsCpy[right].idx]
        else if (numsCpy[left].val + numsCpy[right].val > target) 
            right--
        else if (numsCpy[left].val + numsCpy[right].val < target) 
            left++
    }
    return []
};

/**
 * 力扣27. 移除元素
 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let [left, right] = [0, nums.length]

    while (left < right) {
        while (nums[right-1] === val) right--
        if (nums[left] === val) {
            let temp = nums[left]
            nums[left] = nums[right-1]
            nums[right-1] = temp
        }
        else left++
    }

    nums.length = right

};

/**
  * 熟练后命名可以缩短，且可以直接一个指针遍历用for循环处理，总之要优化得想办法"精简处理流程"。
  * 力扣26. 删除有序数组中的重复项

 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 1
    for (let j = 0, l = nums.length; j < l; j++) 
        if (nums[j] !== nums[i-1])  nums[i++] = nums[j] 
    return i
};
```

### 滑动窗口

> 整体思路：
>
> 1. 右侧指针移位
> 2. 判断是否符合
> 3. 左侧指针是否需要移位
> 4. 进入下一次循环

```js
/**
 * 力扣3. 无重复字符的最长子串

 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length < 2) return s.length
    let l = 0, r = 1, max = 0

    while (r < s.length) {
        let subStr = s.slice(l, r)
        if (subStr.indexOf(s[r]) !== -1) l++ // <string>[index]去取字符串下标更简洁些
        else r++
        max = Math.max(r - l, max)
    }
    return max
};

/**
 * 力扣209. 长度最小的子数组

 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let l = 0, sum = 0, minLen = Infinity // Infinity比具体的数(如100001>10^5)要更省性能
    for (let r = 1; r <= nums.length; r++) {
        sum += nums[r - 1]
        if (sum >= target) {
            while (sum - nums[l] >= target)
                sum -= nums[l++] // 注意l++yun'xin
            minLen = Math.min(minLen, r - l)
        }
    }
    return minLen === Infinity ? 0 : minLen
};
```

