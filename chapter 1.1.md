# 1.1 基础编程模型

## 数据类型和数据结构

### 动态类型
`javascript`是一种弱类型或者说动态语言。这意味着不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。   
```javascript
var data = 10;
var data = "str";
var data = true;
```

### 数据类型
ECMAScript标准定义了7种数据类型：
- 6种原始类型
  - Boolean
  - Null
  - Undefined
  - Number
  - String
  - Symbol
- Object

#### 原始值
除`Object`意外的所有类型都是不可变的（值本身无法被改变），对原始值得操作返回一个新的原始值。

##### 布尔类型 Boolean
布尔表示一个逻辑实体，有两个值`true`和`false`

##### Null
Null类型只有一个值：`null`
```javascript
typeof null; //"object"，这是ECMAScript的bug，应该是null
```

##### Undefined类型
一个没有被赋值的变量会有个默认值`undefined`

##### 数字类型 Number
根据ECMAScript标准，javaScript中只有一种数字类型：基于IEEE 754标准的双精度64位二进制格式的值(-(2<sup>53</sup>-1)到2<sup>53</sup>-1)。它并没有为整数给出一种特定的类型。除了能够表示浮点数外，还有一些带符号的值：`+Infinity`, `-Infinity`和`NaN`。   
要检查值是否大于或小于+/-Infinity，你可以使用常量`Number.MAX_VALUE`和`Number.MIN_VALUE`。在ECMAScript6中，也可以通过`Number.isSafeInteger()`方法还有`Number.MAX_SAFE_INTEGER`和`Number.MIN_SAFE_INTEGER`来检查是否在双精度浮点数的取值范围内。超出这个范围，Javascript中的数字不再安全了。   
数字类型只有一个整数，它有两种表示方法：0可以表示为`-0`和`+0`(0是+0的简写)。
```javascript
+0 === -0; //true
42 / +0; //Infinity
42 / -0; //-Infinity
```

##### 字符串类型 String
javascript的字符串类型用于表示文本数据。它是一组16位的无符号整数值得“元素”。字符串的长度是它的元素的数量。

##### 符号类型 Symbol
`Symbols`是`ECMAScript 2015`新定义的。符号类型是唯一的并且不可修改的，并且也可以用来作为`Object`的key的值。可以认为它们是C里面的枚举类型。

#### 对象
在计算机科学中，对象是指内存中的可以被标识符引用的一块区域。

##### 属性 property
在javascript里，对象可以被看作是一组属性的集合。属性的值可以是任意类型，包括具有复杂数据结构的对象。属性使用键来标识，键值可以是一个字符串或者符号值(Symbol)。   
   
ECMAScript定义的对象中有两种属性：数据属性和访问器属性。   
   
###### 数据属性
数据属性是键值对，并且每个数据属性拥有下列特性：   

特性 | 数据类型 | 描述 | 默认值
---- | -------- | ---- | ------
[[Value]] | 任何javascript类型 | 包含这个属性的数据值 | undefined
[[Writable]] | Boolean | 属性的[[value]]特性能不能被修改 | false
[[Enumerable]] | Boolean | 是否可以用循环来枚举 | false
[[Configurable]] | Boolean | 如果改值为false,则改属性不能被删除，并且除了[[Value]]和[[Writable]]以外的特性都不能被改变 | false

###### 访问器属性
访问器属性有一个或两个访问器函数（get和set）来存取数值，有一下特性：   

特性 | 类型 | 描述 | 默认值
---- | ---- | ---- | ----
[[Get]] | 函数对象或者undefined | 该函数使用空的参数列表，能够在有权访问的情况下读取属性值。 | undefined
[[Set]] | 函数对象或者undefined | 该函数有一个参数，用来写入属性值。 | undefined
[[Enumerable]] | Boolean | 如果改值为true，则改属性可以用循环来枚举。 | false
[[Configurable]] | Boolean | 如果改值为false，则改属性不能被删除，并且不能被转变成一个数据属性。 | false

##### 标准的对象和函数
一个javascript对象就是键和值之间的映射。键是一个字符串（或者是Symbol），值可以是任意类型的值。这使得对象非常符合哈希表。

##### 日期
内建`Date`对象。

##### 有序集：数组和类型数组
数组是一种使用整数作为键属性和length属性之间关联的常规对象。数组对象继承了`Array.prototype`的一些操作数组的便捷方法。数组是表示列表或集合的最优选择。

类型数组`Typed Arrays`是ES6新定义的javascript内建对象，提供了一个基本的二进制数据缓冲区的类数组视图。   

Type | Size in bytes | Description | Web IDL type | Equivalent C type
---- | ------------- | ----------- | ------------ | -----------------
Int8Array | 1 | 8-bit two's complement signed integer | byte | int8_t
Uint8Array | 1 | 8-bit unsigned integer | octet | uint8_t
Uint8ClampedArray | 1 | 8-bit unsigned integer (clamped) | octet | uint8_t
Int16Array | 2 | 16-bit two's complement signed integer | short | int16_t
Uint16Array | 2 | 16-bit unsigned integer | unsigned short | uint16_t
Int32Array | 4 | 32-bit two's complement signed integer | long | int32_t
Uint32Array | 4 | 32-bit unsigned integer | unsigned long | uint32_t
Float32Array | 4 | 32-bit IEEE floating point number | unrestricted float | float
Float64Array | 8 | 64-bit IEEE floating point number | unrestricted double | double

##### 键控集：Maps，Sets，WeakMaps，WeakSets
在ECMAScript 6中新定义的这些数据结构可以把对象的引用当作键。
`Set`类似于数组，但是成员的值都是唯一的，没有重复的值。
`WeakSet`结构与`Set`类似，也是不重复的值得集合。但是`WeakSet`的成员只能是对象，而不能是其它类型的值。`WeakSet`中的对象都是弱引用，垃圾回收机制不考虑`WeakSet`对该对象的引用，如果其它对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象是否还存在`WeakSet`之中。这意味着无法引用`WeakSet`的成员，因此`WeakSet`是不可遍历的
`Map`类似于对象，也是键值对的集合，但是键的范围不限于字符串，可以是各种类型的值（包括对象）。是一种更完善的Hash结构实现。
`WeakMap`结构与`Map`结构基本类似，唯一的区别是它只接受对象作为键名（`null`除外），不接受其它类型的值作为键名，而且键名所指向的对象，都是弱引用。

##### 结构化数据：JSON
JSON是一种轻量级的数据交换格式，来源于javascript同时也被多种语言所使用。JSON用于构建通用的数据结构。


### 使用 typeof 操作符判断对象类型
`typeof`运算符可以帮助你查询变量的类型。