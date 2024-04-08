# 其他算法

## 双指针

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

## 滑动窗口

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
                sum -= nums[l++] // 注意l++运行位置
            minLen = Math.min(minLen, r - l)
        }
    }
    return minLen === Infinity ? 0 : minLen
};
```

