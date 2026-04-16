---
title: JavaScript 基础
author: Closerdoor
date: '2021-12-12'
---

## string 字符串
### toString()
该方法属于Object对象，由于所有的对象都"继承"了Object的对象实例，因此几乎所有的实例对象都可以使用该方法。
null和undefined没有toString()方法
`[].toString() //''结果为空字符串`
### String()
### 字符串转义符
### 字符串换行处理
```
//如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。但是，输出的时候还是单行
var longString = 'Long \
long \
long \
string';

longString
// "Long long long string"
```
## number 数字
**范围**
```
最小值：Number.MIN_VALUE，这个值为： 5e-324
最大值：Number.MAX_VALUE，这个值为： 1.7976931348623157e+308
无穷大：Infinity
无穷小：-Infinity
```
### js可以通过否运算符来取整
`~~ 13.33    // 13`
### Number()
```
Number(null) // 0
Number(undefined) // NaN
Number(NaN) // NaN
Number([]) // 0
Number([123]) // 123
Number(['123']) // 123
Number([undefined]) // 0
Number({}) // NaN
```
### parseInt() 和 parseFloat()
**parseInt(string,radix)**
- 如果parseInt的参数不是字符串，则会先转为字符串再转换。
- 如果第一个字符是数字会解析知道遇到非数字结束
- 如果第一个字符不是数字或者符号就返回NaN
- parseInt的返回值只有两种可能，要么是一个十进制整数，要么是NaN。
```
parseInt() 函数可解析一个字符串，并返回一个整数。
如果参数radix不是数值，会被自动转为一个整数。这个整数只有在2到36之间，才能得到有意义的结果，超出这个范围，则返回NaN。如果第二个参数是0、undefined和null，则直接忽略。  
当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。
当忽略参数 radix , JavaScript 默认数字的基数如下:
如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。
如果 string 以 0 开头，解析为十进制的整数,如果是数字,解析为八进制或十六进制的数字。
如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。
```
```
var num1 = parseInt("12.3abc");  // 返回12，
var num2 = parseInt("abc123");   // 返回NaN，
```
**parseFloat(string)**
```
parseFloat()把字符串转换成浮点数
parseFloat()和parseInt非常相似，不同之处在与
	parseFloat会解析第一个. 遇到第二个.或者非数字结束
	如果解析的内容里只有整数，解析成整数
```

### +str -str
### NaN 和 isNaN()
`0 / 0 会得到NaN`
NaN 与任何值都不相等，包括他本身  
NaN进行任何数学运算 结果也是 NaN  
`isNaN`方法可以用来判断一个值是否为`NaN`。但是，`isNaN`只对数值有效，如果传入其他值，会先转成数值再判断。
```
function meIsNaN(value) {
  return typeof value === 'number' && isNaN(value);
}
//`NaN`为唯一不等于自身的值的这个特点
function meIsNaN(value) {
  return value !== value;
}
```
### isFinite
`isFinite`方法返回一个布尔值，表示某个值是否为正常的数值。  
除了`Infinity`、`-Infinity`、`NaN`和`undefined`这几个值会返回`false`，`isFinite`对于其他的数值都会返回`true`。
```
isFinite(Infinity) // false
isFinite(-Infinity) // false
isFinite(NaN) // false
isFinite(undefined) // false
isFinite(null) // true
isFinite(-1) // true
```
## boolean 布尔
数据类型转换,`''(空字符串) 0 null undefined NaN 会转换成false  其它都会转换成true`
### Boolean() 和 !!value

## undefined 和 null
- `undefined`：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
```js
// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined
```
- `null`：表示空值，即此处的值为空 。
- `null`在javascript中常见于释放内存空间
```js
typeof null === 'object';
null instanceof Anything;//false
```
## 判断数据类型
### typeof
```
typeof undefined //"undefined"
typeof null // "object"
//针对未声明的变量
if (typeof v === "undefined" ) {
   console.log("变量 v 不存在")
}
```
### instanceof
### Object.prototype.toString

## 数组
**数组本质上是一种对象**  
Object.keys方法返回数组的所有键名,数组的键名其实也是字符串。之所以可以用数值读取，是因为非字符串的键名会被转为字符串。  
length属性的值就是等于最大的数字键加1，如果数组没有整数键，则length属性保持为0。
```js
var arr = ['a', 'b', 'c'];

Object.keys(arr)
// ["0", "1", "2"]

arr['0'] // 'a'
arr[0] // 'a'

arr['p'] = 'abc';
arr.length // 3

arr[2.1] = 'abc';
arr.length // 3
```
### 判断数组类型
`typeof arr //'object'`
`Array.isArray([])`
### 数组类型转化
**转化成字符串**
arr1 + arr2 时，会把两者转换成字符串
```js
//[],[null],[undefined]会转化成空字符串。其余原样转换
String([])// ''
String(null)// ''
String(undefined)// ''
String({})//[object Object]
String([0,'a',4])//"0,a,4"
```
**转化成数字**
数组的indexOf方法内部使用的是严格相等运算符，所以该方法对NaN不成立。
`[NaN].indexOf(NaN) // -1`
```js
//[],[''],[null],[undefined]会转化成0，单个数字原样转换，其余为NaN
Number([])// 0
Number([''])// 0
Number([null])// 0
Number([undefined])// 0
Number([0])// 0
Number([[123]])// 123
Number([1,2])// NaN
```

## 运算符
i++是一个表达式，他的返回值是i的值
++i是一个表达式，他的返回值是i+1的值

## js中的比较运算符
```
字符串和其他对象比较大小 字符串和其他对象进行比较，大体要遵循下面的这些考量：

两个操作数都是数值，则进行数值比较
两个操作数都是字符串，则比较两个字符串第一个不通的字符编码值
两个操作数有一个是数值，则将另一个转换为数值，再进行数值比较
两个操作数有一个是对象，则先调用valueOf()方法或toString()方法，再用结果比较
```
