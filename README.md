## 什么是 rxjs？
rxjs 是一个 JavaScript 库，它提供了一种函数式编程的方法来处理异步数据流。它基于观察者模式，允许我们以声明性方式处理异步事件流，并且提供了许多操作符来处理这些事件流。

## rxjs 中的观察者模式是什么？
在 rxjs 中，观察者模式指的是一种模式，其中一个可观察对象（observable）发出一些值，然后通知其订阅者（observer）这些值已经可用。订阅者可以响应这些值，也可以在接收到错误或完成信号时执行某些操作。这种模式使我们能够以一种可预测的方式处理异步事件流。

## 核心概念
### Observable
Observable 是 rxjs 中的关键概念，它是一个可观察的序列，它可以发出零个或多个值，并在完成后发送完成通知或错误。

简单来说，Observable 表示一个异步数据流。它将数据流看作是一个序列，可以通过订阅来监听并在序列中进行操作。

Observable 可以被认为是一个生产者，它可以发出任意数量的值，这些值可以是任何数据类型，如数字、字符串、对象等。当 Observable 完成时，它可以发出完成或错误信号。

Observable 可以使用一些操作符来转换、过滤和合并序列，这些操作符返回新的 Observable，使它们可以与其他 Observable 进行组合。

在 rxjs 中，Observable 通常是惰性的，这意味着只有在有订阅时才会开始发出值。当有订阅时，Observable 开始执行并发出值，直到完成或发生错误。

### Observer
订阅接口，回调函数(next, error, complete), 能够获取到 Observable 的通知。可以认为是一个观察者。


### Subscriber
创建 Observable 实例时传入的的函数(subscribe)会接收一个 subscriber 参数, 可以处理 next、error 和 complete 事件。 它其实是由执行 subscribe(订阅 observable) 时传入的 observerOrNext 构造而来，一旦 subscribe 执行，subscribe 也同步执行。

### Subscription
表示一次 Observable 执行, 主要作用是取消订阅(unsubscribe), 可以通过 add 和 remove 方法进行天添加和删除其他 subscription, 当某个节点 unsubscribe 时， 那么以当前节点为根节点的所有节点都会 unsubscribe。

### Subject
Subject 既是 Observable 又是 Observer，作为 Observable 可以将值多播到多个 Observers， 即向多个观察者发送新的数据， 类似事件派发器，作为 Observer 可以被 observable.subscribe。

### Scheduler
控制 Observable 的发射时间和消费时间， RxJS 中提供了几个内置的 Scheduler，也可以自定义 Scheduler，定制化特殊的需求。


## 参考链接
https://rxjs.dev/

https://zhuanlan.zhihu.com/p/274469124

https://juejin.cn/post/6844903498002202637

https://www.w3cschool.cn/rxjs/rxjs-gfc63chm.html

动画的方式演示了大部分Rxjs的Operator的执行过程
https://reactive.how/rxjs/

https://rxviz.com/