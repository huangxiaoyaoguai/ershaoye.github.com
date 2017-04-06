
[链接](https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651552038&idx=1&sn=ff2424f6a61d478a4f950364c566402c&chksm=8025aee7b75227f11c545ceba0c7500f92ba9f5cfc43dbefe920c174f60ef97055fe15378dd3&scene=0&key=2667644cef38f89f9fa917c117ff1fda3d179cda584fbb462a8d9e3e8246568f5f347f06ce8e9587588f27a908f363945aa9baa42c9f9895032c495e02493a41ca75c4dd470fbb9fd6d3505dbc2f255b&ascene=0&uin=NjE5MDY1&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.3+build(16D32)&version=12020010&nettype=WIFI&fontScale=100&pass_ticket=FpTzxoRZcyi9htCyqNGRjahBhbot3t5D%2FQbxux2xlr4%3D)




1、this是啥？

简言之，this是JavaScript语言中定义的众多关键字之一，它的特殊在于它自动定义于每一个函数域内，但是this倒地指引啥东西却让很多人张二摸不着头脑。这里我们留个小悬念，希望看完这篇文章了你能回答出来this到底指引个甚。

2、this有啥用？

那边观众又该问了，既然this这么难以理解，那么为个甚还要用它呢？我们来看个例子：

function identify() {
    return this.name.toUpperCase();
}
function sayHello() {
    var greeting = "Hello, I'm " + identify.call( this );
    console.log( greeting );
}
var person1= {
    name: "Kyle"
};
var person2= {
    name: "Reader"
};
identify.call( person1); // KYLE
identify.call( person2); // READER
sayHello.call( person1); // Hello, I'm KYLE
sayHello.call( person2); // Hello, I'm READER

这段代码很简单，我们定义了两个函数，分别为identify和sayHello。并且在不同的对象环境下执行了它们，达到了复用的效果，而不用为了在不同的对象环境下执行而必须针对不同的对象环境写对应的函数了。简言之，this给函数带来了复用。那边客官又问了，我不用this一样可以实现，如：

function identify(context) {
    return context.name.toUpperCase();
}
function sayHello(context) {
    var greeting = "Hello, I'm " + identify( context);
    console.log( greeting );
}
var person1= {
    name: "Kyle"
};
var person2= {
    name: "Reader"
};
identify( person1); // KYLE
identify( person2); // READER
sayHello( person1); // Hello, I'm KYLE
sayHello( person2); // Hello, I'm READER

仔细一看，这位客官给出的解决方法的确也达到了类似的效果。赞一个！我想说的是，随着代码的增加，函数嵌套、各级调用等变得越来越复杂，那么传递一个对象的引用将变得越来越不明智，它会把你的代码弄得非常乱，甚至你自己都无法理解清楚。而this机制提供了一个更加优雅而灵便的方案，传递一个隐式的对象引用让代码变得更加简洁和复用。好了，知道了this的用处，那么再看看我们对它的误解。

3、关于this的误解

相信很多童鞋是学过其它语言的，在很多编程语言中都有this的机制，惯性思维把其它语言里对它的理解带到了JavaScript中。同时，由于this这个单词的理解导致了我们产生了对它各种各样的误解。所以，开始前，我们先澄清下对它的误解。

3.1 误解一：this引用function本身

我们都知道，在函数里引用函数可以达到递归和给函数属性赋值的效果。而这在很多应用场景下显得非常有用。所以，很多人都误以为this就是指引function本身。例如：

function fn(num) {
    console.log( "fn: " + num );
    // count用于记录fn的被调用次数
    this.count++;
}
fn.count = 0;
var i;
for (i=0; i<10; i++) {
    if (i > 5) {
        fn( i );
    }
}
// fn: 6
// fn: 7
// fn: 8
// fn: 9
 
console.log( fn.count ); // 0 -- 耶？咋不是4捏？

上面我们想要记录fn被调用的次数，可是明显fn被调用了四次但count仍然为0。咋回事捏？这里简单解释下，fn里第4行的自增隐式的创建了一个全局变量count，由于初始值为undefined，所以每一次自增其实依然不是一个数字，你在全局环境下打印count（window.count）输出的应该是NaN。而第6行定义的函数熟悉变量count依然没变，还是0。如果对这个执行结果不清楚的，欢迎去看我前些天的那篇博文（聊一下JS中的作用域scope和闭包closure scope和closure），在这里你只需要知道，this引用的是function这种理解是错误的就行。

这边就会又有人问了，既然this不是引用function，那么我要实现递归函数，该咋引用呢?这里简单回答下介个问题，两种方法：①函数体内用函数名来引用函数本身②函数体内使用arguments.callee来引用函数（不推荐）。那么既然第二种方法不推荐，匿名函数咋引用呢？用第一种，并且给匿名函数一个函数名即可（推荐）。

3.2 误解二：this引用的是function的词法作用域

这种误解欺骗的人可能更多一些。首先，澄清一下，this并没有引用function的词法作用域。的确JS的引擎内对词法作用域的实现的确像是一个对象，拥有属性和函数，但是这仅仅是JS引擎的一种实现，对代码来说是不可见的，也就是说词法作用域“对象”在JS代码中取不到。（关于词法作用域，如果不理解，可以参考之前的一篇博文《聊一下JS中的作用域scope和闭包closure scope和closure》）。看个错误的例子：

function fn1() {
    var a = 2;
    this.fn2();//以为this引用的是fn1的词法作用域
}
function fn2() {
    console.log( this.a );
}
fn1(); //ReferenceError

上面的代码明显没有执行出想要的结果，从而可以看到this并没有引用函数的词法作用域。甚至，可以肯定的说，这个例子里fn2可以在fn1里正确执行都是偶然的（理解了词法作用域你就知道为什么这里执行不报错了）。

4、this到底跟啥有关？

好了，扯了那么多都没上干货，有的观众都开始关闭当前页开始离席了。这里，我们郑重声明：this跟函数在哪里定义没有半毛钱关系，函数在哪里调用才决定了this到底引用的是啥。也就是说this跟函数的定义没关系，跟函数的执行有大大的关系。所以，记住，“函数在哪里调用才决定了this到底引用的是啥”。

5、this机制的四种规则

this到底绑定或者引用的是哪个对象环境决定于函数被调用的地方。而函数的调用有不同的方式，在不同的方式中调用决定this引用的是哪个对象是由四种规则确定的。我们一个个来看。

5.1 默认绑定全局变量

这条规则是最常见的，也是默认的。当函数被单独定义和调用的时候，应用的规则就是绑定全局变量。如下：

function fn() {
    console.log( this.a );
}
var a = 2;
fn(); // 2 -- fn单独调用，this引用window

5.2 隐式绑定

隐式调用的意思是，函数调用时拥有一个上下文对象，就好像这个函数是属于该对象的一样。例如：

function fn() {
    console.log( this.a );
}
var obj = {
    a: 2,
    fn: fn
};
obj.fn(); // 2 -- this引用obj。

需要说明的一点是，最后一个调用该函数的对象是传到函数的上下文对象（绕懵了）。如：

function fn() {
    console.log( this.a );
}
var obj2 = {
    a: 42,
    fn: fn
};
var obj1 = {
    a: 2,
    obj2: obj2
};
obj1.obj2.fn(); // 42 -- this引用的是obj2.

还有一点要说明的是，失去隐式绑定的情况，如下：

function fn() {
    console.log( this.a );
}
var obj = {
    a: 2,
    fn: fn
};
var bar = obj.fn; // 函数引用传递
var a = "全局"; // 定义全局变量
bar(); // "全局"

如上，第8行虽然有隐式绑定，但是它执行的效果明显是把fn赋给bar。这样bar执行的时候，依然是默认绑定全局变量，所以输出结果如上。

5.3 显示绑定

学过bind()\apply()\call()函数的都应该知道，它接收的第一个参数即是上下文对象并将其赋给this。看下面的例子：

function fn() {
    console.log( this.a );
}
var obj = {
    a: 2
};
fn.call( obj ); // 2

如果我们传递第一个值为简单值，那么后台会自动转换为对应的封装对象。如果传递为null，那么结果就是在绑定默认全局变量，如：

function fn() {
     console.log( this.a );
}
var obj = {
     a: 2
};
var a = 10;
fn.call( null); // 10

5.4 new新对象绑定

如果是一个构造函数，那么用new来调用，那么绑定的将是新创建的对象。如：

function fn(a) {
    this.a = a;
}
var bar = new fn( 2 );
console.log( bar.a );// 2

注意，一般构造函数名首字母大写，这里没有大写的原因是想提醒读者，构造函数也是一般的函数而已。

6、结束语

读到现在，1中问的问题你该自己能回答上来了。上面介绍的四种关于this绑定的4中情况和规则，现实写代码的过程中肯定比这要多和复杂，但是无论多复杂多乱，它们都是混合应用上面的几个规则和情况而已。只要你的思路和理解是清晰的，那肯定没问题的。