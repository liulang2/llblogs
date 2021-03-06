---
title: "算法"
date: "2019-11-23"
---
## 简介

作为一名前端，虽然在平常开发中很少写算法，但当我们需要深入前端框架、开发语言、开源库时，懂算法将大大提高我们看源码的能力。例如 react 的 diff 算法、webpack 中利用 tree-shaking 优化、v8 中的调用栈、消息队列等，这些就大量使用了算法，看懂了就能更好的了解它们的性能，更高效的解决问题，进阶到更高 Level，赚更多钱。
也是进大厂的必备条件
## 复杂度
### 复杂是什么
 复杂度是一个关于输入数据量 n 的函数。
 
 + 假设你的代码复杂度是 f(n)，
 那么就用个大写字母 O 和括号，把 f(n) 括起来就可以了，即 O(f(n))。
 + 例如，O(n) 表示的是，复杂度与计算实例的个数 n 线性相关；
 + O(logn) 表示的是，复杂度与计算实例的个数 n 对数相关。
 ### 复杂度的计算方法遵循的原则
 + 首先，复杂度与具体的常系数无关，例如 O(n) 和 O(2n) 表示的是同样的复杂度。我们详细分析下，O(2n) 等于 O(n+n)，也等于 O(n) + O(n)。也就是说，一段 O(n) 复杂度的代码只是先后执行两遍 O(n)，其复杂度是一致的。
 +  其次，多项式级的复杂度相加的时候，选择高者作为结果，例如 O(n²)+O(n) 和 O(n²) 表示的是同样的复杂度。具体分析一下就是，O(n²)+O(n) = O(n²+n)。随着 n 越来越大，二阶多项式的变化率是要比一阶多项式更大的。因此，只需要通过更大变化率的二阶多项式来表征复杂度就可以了。
+ O(1) 也是表示一个特殊复杂度，含义为某个任务通过有限可数的资源即可完成。此处有限可数的具体意义是，与输入数据量 n 无关。
+ 例如，你的代码处理 10 条数据需要消耗 5 个单位的时间资源，3 个单位的空间资源。处理 1000 条数据，还是只需要消耗 5 个单位的时间资源，3 个单位的空间资源。那么就能发现资源消耗与输入数据量无关，就是 O(1) 的复杂度。
### 时间复杂度与代码结构的关系
+ 一个顺序结构的代码，时间复杂度是 O(1)。

+ 二分查找，或者更通用地说是采用分而治之的二分策略，时间复杂度都是 O(logn)。这个我们会在后续课程讲到。

+ 一个简单的 for 循环，时间复杂度是 O(n)。

+ 两个顺序执行的 for 循环，时间复杂度是 O(n)+O(n)=O(2n)，其实也是 O(n)。

+ 两个嵌套的 for 循环，时间复杂度是 O(n²)。
### 降低时间复杂度的必要性

假设某个计算任务需要处理 10 万 条数据。你编写的代码：

+ 如果是 O(n²) 的时间复杂度，那么计算的次数就大概是 100 亿次左右。

+ 如果是 O(n)，那么计算的次数就是 10 万 次左右。

+ 如果这个工程师再厉害一些，能在 O(log n) 的复杂度下完成任务，那么计算的次数就是 17 次左右（log 100000 = 16.61，计算机通常是二分法，这里的对数可以以 2 为底去估计）。