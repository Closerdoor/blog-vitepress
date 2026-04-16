---
title: 正则表达式
author: Closerdoor
date: '2021-12-12'
---
## new RegExp()
```js
//以下三种等价
/ab+c/i; //字面量形式
new RegExp('ab+c', 'i'); // 首个参数为字符串模式的构造函数
new RegExp(/ab+c/, 'i'); // 首个参数为常规字面量的构造函数

//以下是等价的：
//当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 \）。
var re = new RegExp("\\w+");
var re = /\w+/;
```
## 正则表达式方法
### test
注意：当正则表达式中有g全局匹配时，用test去匹配后,每次test都会保留上次匹配的位置——即lastIndex(和exec一样)，所以此时要么把reg.lastIndex = 0重新设置，要么去掉g，否则会出现错误
```js
let reg = /\d/;
reg.test(str) //返回true/false
```
### exec
```js
let reg = /\d/;
reg.exec(str)
```
在字符串中执行匹配搜索，返回首次匹配结果`数组`,
## 字符串方法
### match
`str.match(/\d/g)`
返回RegExp匹配的包含全部`字符串`的数组或`null`
### replace
`str.replace(/\d/,newStr)`
用`newStr`替换RegExp匹配结果，并返回新字符串
### split
```js
let str = '阿斯1顿发2发疯的3';
str.split(/\d/);
```
返回字符串按指定RegExp拆分的数组
### search
`str.search(/\d/g)`
返回RegExp匹配字符串首次出现的`位置`
## 语法
### 修饰符modifiers
`var patt =  /pattern/igm;`
- `i` `忽略大小写`匹配
- `g` `全局匹配`，默认只匹配第一个元素，就不再进行匹配
- `m` 执行`多行匹配`
## 模板pattern
```js
let reg = /abc/; //匹配abv
let reg = /abc|qwe|zxc/; //匹配`abc`或`qwe`或`zxc`字符
//[]
let reg = /[abc]/; //匹配abc之中的任何一个字符
let reg = /[^abc]/;//匹配非a非b非c字符的
let reg = /[0-9]/; //匹配 0至9 之间的数字
let reg = /[a-z]/; //匹配 小写a至小写z 的字符
let reg = /[A-Z]/; //匹配 大写A至大写Z 的字符
let reg = /[\u4e00-\u9fa5]/; //匹配中文
//元字符
let reg = /./;  //匹配单个字符，除了换行和行结束符
let reg = /\w/; //匹配数字字母下划线 [A-Za-z0-9_]
let reg = /\W/; //匹配非数字字母下划线 [^A-Za-z0-9_]
let reg = /\d/; //匹配数字 [0-9]
let reg = /\D/; //匹配非数字 [^0-9]
let reg = /\s/; //匹配空白字符（空格）
let reg = /\S/; //匹配非空格字符
let reg = /\b/; //匹配单词边界(除了数字字母下划线都算单词边界, 。 ?等)
let reg = /\B/; //匹配非单词边界
let reg = /\n/; //匹配换行符
//量词
let reg = /n?/;//匹配0个或一个n的字符串 n{0,1}
let reg = /n*/;//匹配0个或多个字符串(任意个) n{0,}
let reg = /n+/;//匹配至少一个n字符串 n{1,}
let reg = /n{X}/;//匹配包含X个n的序列的字符串
let reg = /n{X,Y}/;//匹配包含至少X或至多Y个n的序列的字符串
let reg = /n{x,}/;//-匹配至少X个n的序列字符串

let reg = /^n/;//匹配以n开头的字符串
let reg = /n$/;//匹配以n结尾的字符串
//高级
let reg = /\d+(?=\.)/;//先行断言 x(?=y) 当x后面是y的时候匹配x 
let reg = /(?<=\d+\.)(\d+)/;//后行断言 (?<=y)x 当x前面是y的时候匹配x
let reg = /(?<=^[1-9]\d*\.)(\d+)/;//获取整数位大于0的数值的小数位
let reg = /海(?!牙)/;//正向否定查找 x(?!y) 只有当x后面跟着不是y的时候匹配x
let reg = /(?<!海)牙/;//反向否定查找 (?<!y)x  只有当x前面跟着不是y的时候匹配x
//() 捕获模式

//(?:)非捕获模式
let reg = /(abc)(?:\d+)/;
```

## 案例与问题
正则匹配cookie
正则匹配url
正则匹配小数

### 解析整型值
```js
let filterInt = function (value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}
console.log(filterInt('421'));               // 421
console.log(filterInt('-421'));              // -421
console.log(filterInt('+421'));              // 421
console.log(filterInt('Infinity'));          // Infinity
console.log(filterInt('421e+0'));            // NaN
console.log(filterInt('421hop'));            // NaN
console.log(filterInt('hop1.61803398875'));  // NaN
console.log(filterInt('1.61803398875'));     // NaN
```

### 统计出 英文字母、空格、数字和其它字符 的个数。
```js
//英文字母
let reg1 = /[a-z]/gi;
//空格
let reg2 = /[\s]/gi;
//数字
let reg3 = /[\d]/gi;
//其它字符
let reg4 = /[^\da-z\s]/gi;
```
### 小数点后保留两位小数
```js
//方法一
string.toFixed(2)
//方法二
num = Math.floor(num * 100) / 100;
//方法三-正则匹配
num.toString().match(/^\d+(?:\.\d{0,2})?/)
```