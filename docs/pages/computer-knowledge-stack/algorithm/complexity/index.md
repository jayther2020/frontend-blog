# 算法相关

![image-20221122190626982](./index.assets/image-20221122190626982.png)

**算法设计**

> 1. 算法重在设计。如果提供不出高效算法，超级计算机客观上只是一堆“超级废铁”
> 2. 算法分析: 又快又好、考虑适用范围
> 3. 计算机算法设计贵在“智类之明”
> 4. 算法分类：比如数值算法与非数值算法、串行算法、加速算法、快速算法、并行算法
> 5. 五大类算法：（蛮力法），递归与分治、贪心、动态规划、回溯、分支限界
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
let x:number = 0

//#空间复杂度为O(n)
let x:number[] = [...]

//#空间复杂度为O(n^2)
let x:number[][] = [[...],[...],[...],...]
```

