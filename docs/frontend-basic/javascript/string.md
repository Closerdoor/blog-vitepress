---
title: 字符串方法
author: Closerdoor
date: '2021-12-12'
---

## 方法汇总
字符串字面量 string literal 的各个字符不能被改变。改变`string`中的唯一方法是重新给它赋一个值。因此，大部分字符串方法都返回一个新的字符串。
```js
// 1 字符方法
charAt(3)//获取下标为3的字符
str[3]//HTML5,IE8+支持 和charAt()等效
charCodeAt(3)//获取下标为3的字符对应的ASCII码值
String.fromCharCode() //unicode转字符串
// String.fromCharCode(101, 102, 103) =>'efg'
// 2 字符串操作方法
concat()//拼接字符串,等效于+,+更常用
slice(start,end)//从start截取到end(end取不到),返回截取的新字符串。可为负数,-1指字符串的最后一个字符的位置
substr(start,length)//从start位置开始,截取length个字符,返回截取的新字符串
substring(start,end) 	//从start位置开始,截取到end位置(end取不到),返回截取的新字符串,如果省略end,则截取到末尾
// 3 位置方法
indexOf('abc',start)//查找指定内容第一次出现的下标,返回该下标,没找到返回-1
lastIndexOf('abc')//查找字符串最后一次出现的位置,返回该下标,没找到返回-1
includes(str,start=0)//执行区分大小写的搜索,返回 true 或 false。start可省略，默认为0
padStart(length,str)//将字符串从左开始用str增加到length长度，返回新字符串
'abc'.padStart(10);         // "       abc"
'abc'.padStart(8, "0");     // "00000abc"
padEnd(length,str)
startsWith() //判断字符串是否以另一个字符串开头,返回true或false。
endsWith() //判断字符串是否以另一个字符串结尾,返回true或false。
/* 
  const str1 = 'Saturday night plans';
  console.log(str1.startsWith('Sat'));
// Expected output: true
*/
// 4 去除空白   
trim()//只能去除字符串前后的空白
// 5 大小写转换方法
to(Locale)UpperCase() 	//把字符串转换成小写,返回新字符串,不改变原字符串
to(Locale)LowerCase() 	//把字符串转换成大写,返回新字符串,不改变原字符串
// 6 其它
search()//正则匹配,返回出现的位置

split()//根据分割符,拆分成数组
// 7 正则相关
str.search(regexp)//返回正则表达式在字符串中首次匹配项的索引;否则返回-1
str.match(regexp)//返回一个字符串匹配正则表达式的结果
str.replace()//替换字符串
```
    
###  charCodeAt()
返回 Unicode编码数字
```js
str.charCodeAt(index)  index默认为0
返回指定index处字符的 UTF-16代码单元值的一个数字；如果index超出范围，charCodeAt() 返回 NaN。
```

### replace()
`str.replace(regexp|substr, newSubStr|function)`
参数：如果是substr，仅第一个匹配项会被替换。
function参数：function(match,p1,p2...,offset,string){}
  - match	匹配的子串
  - p1,p2, ... 如果是用 /(\a+)(\b+)/ 这个来匹配，p1 就是匹配的 \a+，p2 就是匹配的 \b+
  - offset 匹配到的子字符串在原字符串中的偏移量
  - string	被匹配的原字符串。
返回值：返回新的字符串。
```js
//交换字符串中的两个单词
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
// Smith, John
console.log(newstr);
```
### match()
`str.match(regexp)`
参数:如果 regexp 不是 RegExp 对象,会使用new RegExp()将其隐式地转换为 RegExp。
返回值:
如果使用 g 标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
如果未使用 g 标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。在这种情况下，返回的项,等同于RegExp.exec()
```js
let str = 'For more information, see Chapter 3.4.5.1';
str.match();   // returns [""]
str.match(/[A-E]/gi);   //['A', 'B', 'c', 'd', 'e']
str.match(/see (chapter \d+(\.\d)*)/i);
//[ 'see Chapter 3.4.5.1','Chapter 3.4.5.1','.1',index: 22,input: 'For more information, see Chapter 3.4.5.1' ]
//[group,index,input]
```
### slice()
提取字符串的一部分，并返回一个新的字符串，不会改动原字符串
```js
str.slice(beginIndex[, endIndex])
```
### repeat()
str.repeat(num)
num:介于 0 和 +Infinity 之间的整数。表示在新构造的字符串中重复了多少遍原字符串。
构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。
```js
"abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数 count 将会被自动转换成整数。
"abc".repeat(1/0)    // RangeError: repeat count must be positive and less than inifinity
```
### 转义字符 
如果在一个正常字符前添加反斜杠，JavaScript 会忽略该反斜杠。
| 转义符 | 含义   | 
| :----- | :---  | 
|   \n  | 换行符,n 是 newline 的意思   |         
|   \t  | 制表符,tab   |         
|   \b  | 空格,b 是 blank 的意思   |         
|   \r  | 回车   |         
|   \f  | 进制   |         
|   \\  | 斜杠\   |         
|   \'  | 单引号' |         
|   \"  | 双引号" |         
|   \xnn  | 由 2 位十六进制数值 XX 指定的 Latin-1 字符,n为0~F。例：\x41表示"A" |         
|   \unnnn  | 由 4 位十六进制数值 XX 指定的 Latin-1 字符(n为0~F)例：\u03a3表示希腊字符 |         


## js中的进制转换
### 字符串转换成十进制parseInt(string, radix)
进制转换，将radix进制转换成十进制。radix 是 2-36 之间的整数
参数:
如果参数string不是一个字符串，则用 toString将其转换为字符串
如果参数 string 以 0x 或 0X（一个 0，后面是小写或大写的 X）开头，那么 radix 被假定为 16
返回值：解析字符串得到的一个整数 或 NaN
```js
parseInt("007") //7
```
### 十进制数字转换成其它进制num.toString(radix)
```js
//注意，字面量不能使用toString方法
let num = 255;
num.toString(2); // '11111111'
num.toString(16); // 'ff'
```
**十六进制**
```js
//以0x或者0X开头的为十六进制，会被默认识别
```