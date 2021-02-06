/* Javascript Basic Examples */

/* 输出
window.alert("")       写入内容到弹出警告框
console.log("")        写入内容到浏览器的控制台(用于调试)
document.write("")     写入内容到HTML文档(!!!如果在文档加载后执行，会导致文档覆盖)
innerHTML=""           写入内容到HTML元素
*/

/* HTML事件
onchange	      HTML元素改变
onclick	          用户点击HTML元素
onmouseover	      用户在一个HTML元素上移动鼠标
onmouseout	      用户从一个HTML元素上移开鼠标
onkeydown	      用户按下键盘按键
onload	          浏览器已完成页面的加载
*/

/* 语句
var	                声明一个变量
function	        定义一个函数
while	            当条件语句为 true 时，执行语句块
do ... while	    执行一个语句块，在条件语句为 true 时继续执行该语句块(至少执行一次)
for	                在条件语句为 true 时，可以将代码块执行指定的次数
for ... in	        用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）
switch	            用于基于不同的条件来执行不同的动作
continue	        跳过循环中的一个迭代
break	            用于跳出循环
if ... else	        用于基于不同的条件来执行不同的动作
return	            退出函数
try	                实现错误处理，与 catch 一同使用
catch	            语句块，在 try 语句块执行出错时执行 catch 语句块
throw	            抛出（生成）错误
*/

/* 数据类型
六种不同的数据类型：string、number、boolean、object、function、symbol(新的数据类型，表示独一无二的值)
三种对象类型：Object、Date、Array
两个不包含任何值的数据类型：null、undefined
*/

/* 使用typeof查看数据类型
1. NaN 的数据类型是 number
2. 数组(Array)的数据类型是 object
3. 日期(Date)的数据类型为 object
4. null 的数据类型是 object
5. 未定义变量的数据类型为 undefined
*/

/* this关键字的多种指向
1. 在对象方法中， this 指向调用它所在方法的对象。
2. 单独使用 this，它指向全局(Global)对象。
3. 函数使用中，this 指向函数的所属者。
4. 严格模式下函数是没有绑定到 this 上，这时候 this 是 undefined。
5. 在 HTML 事件句柄中，this 指向了接收事件的 HTML 元素。
6. apply 和 call 允许切换函数执行的上下文环境（context），即 this 绑定的对象，可以将 this 引用到任何对象。
*/

/* 三种不同的变量定义规则：var、let、const
使用var关键字声明的全局作用域变量【属于window对象】
使用let关键字声明的全局作用域变量【不属于window对象】
使用var关键字声明的变量在【任何地方都可以修改】

在相同的作用域或块级作用域中，不能使用【let关键字】来重置var关键字声明的变量
在相同的作用域或块级作用域中，不能使用【let关键字】来重置let关键字声明的变量
【let关键字】在不同作用域，或不用块级作用域中是可以重新声明赋值的

在相同的作用域或块级作用域中，不能使用【const关键字】来重置var和let关键字声明的变量
在相同的作用域或块级作用域中，不能使用【const关键字】来重置const关键字声明的变量
【const关键字】在不同作用域，或不同块级作用域中是可以重新声明赋值的

var关键字定义的变量可以【先使用后声明】
let关键字定义的变量需要【先声明再使用】
const关键字定义的常量，【声明时必须进行初始化】，【且初始化后不可再修改】
*/