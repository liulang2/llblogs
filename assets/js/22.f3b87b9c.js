(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{468:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是我们遇到的第一个生命周期函数，表示实例完全被创建出来之前，会执行它")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(this.msg)")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this.show()")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意： 在 beforeCreate 生命周期函数执行的时候，data 和 methods 中的 数据都还没有没初始化")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是遇到的第二个生命周期函数")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(this.msg)")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this.show()")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  在 created 中，data 和 methods 都已经被初始化好了！")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果要调用 methods 中的方法，或者操作 data 中的数据，最早，只能在 created 中操作")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeMount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是遇到的第3个生命周期函数，表示 模板已经在内存中编辑完成了，但是尚未把 模板渲染到 页面中")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(document.getElementById('h3').innerText)")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 beforeMount 执行的时候，页面中的元素，还没有被真正替换过来，只是之前写的一些模板字符串")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是遇到的第4个生命周期函数，表示，内存中的模板，已经真实的挂载到了页面中，用户已经可以看到渲染好的页面了")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(document.getElementById('h3').innerText)")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意： mounted 是 实例创建期间的最后一个生命周期函数，当执行完 mounted 就表示，实例已经被完全创建好了，此时，如果没有其它操作的话，这个实例，就静静的 躺在我们的内存中，一动不动")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接下来的是运行中的两个事件")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这时候，表示 我们的界面还没有被更新【数据被更新了吗？  数据肯定被更新了】")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* console.log('界面上元素的内容：' + document.getElementById('h3').innerText)\n        console.log('data 中的 msg 数据是：' + this.msg) */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 得出结论： 当执行 beforeUpdate 的时候，页面中的显示的数据，还是旧的，此时 data 数据是最新的，页面尚未和 最新的数据保持同步")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'界面上元素的内容：'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data 中的 msg 数据是：'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// updated 事件执行的时候，页面和 data 数据已经保持同步了，都是最新的")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h1",{attrs:{id:"动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画"}},[t._v("#")]),t._v(" 动画")]),t._v(" "),a("ol",[a("li",[t._v("修改 v-前缀动画和类名动画")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* v-enter 【这是一个时间点】 是进入之前，元素的起始状态，此时还没有开始进入 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* v-leave-to 【这是一个时间点】 是动画离开之后，离开的终止状态，此时，元素 动画已经结束了 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("enter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("leave"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("to "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      opacity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      transform"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),t._v("px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* v-enter-active 【入场动画的时间段】 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* v-leave-active 【离场动画的时间段】 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("enter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("leave"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      transition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" all "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),t._v("s ease"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*my 代替v-  指定动画 */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("enter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("leave"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("to "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      opacity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      transform"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),t._v("px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("enter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("leave"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      transition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" all "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),t._v("s ease"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"toggle"')]),t._v(" @click"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flag=!flag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 需求： 点击按钮，让 h3 显示，再点击，让 h3 隐藏 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 使用 transition 元素，把 需要被动画控制的元素，包裹起来 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" transition 元素，是 Vue 官方提供的 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("transition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h3 v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("这是一个"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("transition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"toggle2"')]),t._v(" @click"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flag2=!flag2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//起一个名字  就可以吧v-代替")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("transition name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h6 v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flag2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("这是一个"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h6"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("transition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建 Vue 实例，得到 ViewModel")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        flag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        flag2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h1",{attrs:{id:"vue的脚手架工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的脚手架工具"}},[t._v("#")]),t._v(" vue的脚手架工具")]),t._v(" "),a("blockquote",[a("p",[t._v("vetur")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("npm install -g vue-cli")]),t._v("安装全局的vue-cli")]),t._v(" "),a("li",[a("code",[t._v("vue init webpack 项目名字")]),t._v(" 使用脚手架初始化一个webpack的vue项目")]),t._v(" "),a("li",[a("code",[t._v("npm run dev")]),t._v("项目根目录运行此命令，然后就可以在浏览器上"),a("code",[t._v("localhost:8080")])]),t._v(" "),a("li",[t._v("配置项目中·"),a("code",[t._v(".sass/.scss")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("cnpm i node-sass sass-loader -D")]),t._v("不需要任何的配置")]),t._v(" "),a("li",[a("code",[t._v("项目目录/config/index.js")]),t._v("中有一个dev的配置对象"),a("code",[t._v("autoOpenBrowser: true")]),t._v("自动在浏览器中打开")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);