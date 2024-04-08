# Emmet代码速写

Emmet是前段开发者必不可少的工具。它可以让你更快速的写代码， 完成网页的设计 

## 学习资料

Emmet官网：[www.emmet.io](https://www.emmet.io/)

Emmet文档：[docs.emmet.io](https://docs.emmet.io/)

Emmet速查表：[docs.emmet.io](https://docs.emmet.io/cheat-sheet/)

## 语法

简写形式有它的语法，掌握它便可以更写复杂的简写形式并扩展为代码。

| 语法符号 | 描述                   | 例子                          |
| -------- | ---------------------- | ----------------------------- |
| `>`      | 由外向内嵌套           | `nav>ul>li`                   |
| `+`      | 符号两端标签同级       | `div.main>header+main+footer` |
| `^`      | 爬升，脱离上一级嵌套   | `main>nav>a+ul^article`       |
| `()`     | 起包住整体的作用       | `ul>(li>a)*5`                 |
| `*`      | 标签*个数              | `ol>li*7`                     |
| `\$`     | 标签计数               | `div>a.link\$*4`              |
| `.`      | 标签名.类              | `div.app`                     |
| `#`      | 标签名#id值            | `span#highlight`              |
| `{}`     | 括号内写入文字内容     | `p{Hello Emmet!}`             |
| `[]`     | 括号内写入指定标签属性 | `input[type="radio"]`         |

## 基本操作

最基本的操作非补全莫属，在简写形式后面打tab键，即可把简写形式直接扩展为标签形式，例如下面简写形式：

> `div.app>nav>a[href="#$$"]*10^span{part$}*3`

可以扩展为：

```html
<div class="app">
		<nav>
			<a href="#01"></a>
			<a href="#02"></a>
			<a href="#03"></a>
			<a href="#04"></a>
			<a href="#05"></a>
			<a href="#06"></a>
			<a href="#07"></a>
			<a href="#08"></a>
			<a href="#09"></a>
			<a href="#10"></a>
		</nav>
		<span>part1</span>
		<span>part2</span>
		<span>part3</span>
	</div>
```

所有操作和其快捷键如下：

| 操作            | 快捷键       |
| --------------- | ------------ |
| 补全 ，补全标签 | tab          |
| 下一个编辑点    | ctrl+alt+→   |
| 上一个编辑点    | ctrl+alt+←   |
| 选择标签向外    | ctrl+d       |
| 选择上一个      | shift+ctrl+, |
| 选择下一个      | shift+ctrl+. |
| 注释标签        | ctrl+/       |
