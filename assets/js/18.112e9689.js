(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{500:function(t,v,_){"use strict";_.r(v);var s=_(10),e=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("blockquote",[_("p",[t._v("目前，前端必须要了解的知识中HTTP必不可少，而自己也在学习当中，我主要是通过阅读《图解HTTP进行学习 若有错误请大家指出。")])]),t._v(" "),_("h1",{attrs:{id:"http-基础网络"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-基础网络"}},[t._v("#")]),t._v(" http 基础网络")]),t._v(" "),_("blockquote",[_("p",[t._v("为了理解 HTTP，我们有必要事先了解一下 TCP/IP 协议族。 通常使用的网络（包括互联网）是在 TCP/IP 协议族的基础上运作 的。而 HTTP 属于它内部的一个子集。")])]),t._v(" "),_("p",[t._v("应用层：为不同的网络应用提供所需的服务。")]),t._v(" "),_("p",[t._v("传输层：为应用层实体提供端到端的通信/传输功能，确保数据包的按顺序传送及数据的完整性。")]),t._v(" "),_("p",[t._v("网络层：处理网络上流动的数据包，它所包含的协议涉及到数据包在整个网络上的逻辑传输。")]),t._v(" "),_("p",[t._v("链路层：监控数据交换，处理网络连接的硬件部分。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/11/16d1e5e5d6106217?w=909&h=675&f=png&s=165844",alt:""}})]),t._v(" "),_("ul",[_("li",[t._v("利用 TCP/IP 协议族进行网络通信时，会通过分层顺序与对方进行通 信。发送端从应用层往下走，接收端则往应用层往上走。")]),t._v(" "),_("li",[t._v("我们用 HTTP 举例来说明，首先作为发送端的客户端在应用层 （HTTP 协议）发出一个想看某个 Web 页面的 HTTP 请求。 接着，为了传输方便，在传输层（TCP 协议）把从应用层处收到的数 据（HTTP 请求报文）进行分割，并在各个报文上打上标记序号及端 口号后转发给网络层。")]),t._v(" "),_("li",[t._v("在网络层（IP 协议），增加作为通信目的地的 MAC 地址后转发给链 路层。这样一来，发往网络的通信请求就准备齐全了。")]),t._v(" "),_("li",[t._v("接收端的服务器在链路层接收到数据，按序往上层发送，一直到应用 层。当传输到应用层，才能算真正接收到由客户端发送过来的 HTTP 请求。\n"),_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/11/16d1e70eca220d94?w=616&h=850&f=png&s=310271",alt:""}})])]),t._v(" "),_("h2",{attrs:{id:"与http协议密切相关的协议-服务-ip-tcp-dns"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#与http协议密切相关的协议-服务-ip-tcp-dns"}},[t._v("#")]),t._v(" 与HTTP协议密切相关的协议/服务：IP，TCP，DNS")]),t._v(" "),_("p",[t._v("IP协议负责数据包的传送，当然，这需要配合IP地址和MAC地址，IP间的通信依赖MAC地址，这就涉及到用以解析地址的ARP协议了。")]),t._v(" "),_("p",[t._v("TCP提供了可靠的字节流服务，对要发送的大块数据进行分割成小数据包以易于传输，并且该协议可确认数据包是否送达到目的方。")]),t._v(" "),_("p",[t._v("DNS服务负责解析域名")]),t._v(" "),_("p",[t._v("URI(统一资源标识符)和URL(统一资源定位符)")]),t._v(" "),_("p",[t._v("URI：一个用于标识某一互联网资源名称的字符串。组成：主机名(含端口号)+相对路径+标识符\n"),_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/11/16d1e73a1f475f4a?w=813&h=194&f=png&s=80269",alt:""}}),t._v("\nURL：对可以从互联网上得到的资源的位置和访问方法的一种简洁的表示，是互联网上标准资源的地址。组成：协议+主机名(含端口号)+相对路径")]),t._v(" "),_("p",[t._v("区别：URI表示请求资源在互联网上存在的位置，URL在表示请求资源的位置同时还要说明如何访问到这个资源，URL是URI的一个子集。")]),t._v(" "),_("h2",{attrs:{id:"简单的-http-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简单的-http-协议"}},[t._v("#")]),t._v(" 简单的 HTTP 协议")]),t._v(" "),_("blockquote",[_("p",[t._v("HTTP 协议用于客户端和服务器端之间的通信")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/11/16d1f1b09981106e?w=862&h=563&f=png&s=223910",alt:""}})]),t._v(" "),_("blockquote",[_("p",[t._v("请求报文：是由请求方法、请求 URI、协议版本、可选的请求首部字段和内容实体构成的。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/11/16d1f30c28e4d951?w=827&h=405&f=png&s=152391",alt:""}})]),t._v(" "),_("blockquote",[_("p",[t._v("响应报文：基本上由协议版本、状态码（表示请求成功或失败的数字代码）、用以解释状态码的原因短语、可选的响应首部字段以及实体主体构成。稍后我们会对这些内容进行详细说明。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/11/16d1f341581ba63f?w=757&h=420&f=png&s=111913",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"http无状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http无状态"}},[t._v("#")]),t._v(" http无状态")]),t._v(" "),_("p",[t._v("HTTP 是一种不保存状态，即无状态（stateless）协议。HTTP 协议自 身不对请求和响应之间的通信状态进行保存。也就是说在 HTTP 这个 级别，协议对于发送过的请求或响应都不做持久化处理。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/11/16d1f43c2b531d88?w=854&h=349&f=png&s=164058",alt:""}}),t._v("\n虽然是无状态协议，但为了实现期望的保持状态功能，于 是引入了 Cookie 技术。有了 Cookie 再用 HTTP 协议通信，就可以管 理状态了。有关 Cookie 的详细内容稍后讲解")]),t._v(" "),_("ul",[_("li",[t._v("保留无状态协议这个特征的同时又要解决类似的矛盾问题，于是引入 了 Cookie 技术。Cookie 技术通过在请求和响应报文中写入 Cookie 信 息来控制客户端的状态。")]),t._v(" "),_("li",[t._v("Cookie 会根据从服务器端发送的响应报文内的一个叫做 Set-Cookie 的 首部字段信息，通知客户端保存 Cookie。当下次客户端再往该服务器 发送请求时，客户端会自动在请求报文中加入 Cookie 值后发送出 去。")]),t._v(" "),_("li",[t._v("服务器端发现客户端发送过来的 Cookie 后，会去检查究竟是从哪一 个客户端发来的连接请求，然后对比服务器上的记录，最后得到之前 的状态信息。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/11/16d1f5ce8a2db572?w=819&h=438&f=png&s=147474",alt:""}}),t._v(" "),_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/11/16d1f5d6ab19922f?w=807&h=416&f=png&s=123189",alt:""}}),t._v(" "),_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/11/16d1f60299e8f28e?w=871&h=682&f=png&s=98799",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"get-和post-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get-和post-的区别"}},[t._v("#")]),t._v(" get 和post 的区别")]),t._v(" "),_("ol",[_("li",[t._v("Get 请求能缓存，Post 不能")]),t._v(" "),_("li",[t._v("Post 相对 Get 安全一点点，因为Get 请求都包含在 URL 里，且会被浏览器保存历史纪录，Post 不会，但是在抓包的情况下都是一样的。")]),t._v(" "),_("li",[t._v("Post 可以通过 request body来传输比 Get 更多的数据，Get 没有这个技术")]),t._v(" "),_("li",[t._v("URL有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的")]),t._v(" "),_("li",[t._v("Post 支持更多的编码类型且不对数据类型限制")])]),t._v(" "),_("h2",{attrs:{id:"各个区间的code的语义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#各个区间的code的语义"}},[t._v("#")]),t._v(" 各个区间的CODE的语义")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("100 - 199  接收的请求正在处理")])]),t._v(" "),_("li",[_("p",[t._v("200 - 299  操作成功")]),t._v(" "),_("ul",[_("li",[t._v("200 OK，表示从客户端发来的请求在服务器端被正确处理")]),t._v(" "),_("li",[t._v("204 No content，表示请求成功，但响应报文不含实体的主体部分")]),t._v(" "),_("li",[t._v("206 Partial Content，进行范围请求")])])]),t._v(" "),_("li",[_("p",[t._v("300 - 399  操作需要重定向，需要用别的方式来获取数据")]),t._v(" "),_("ul",[_("li",[t._v("301 moved permanently，永久性重定向，表示资源已被分配了新的 URL")]),t._v(" "),_("li",[t._v("302 found，临时性重定向，表示资源临时被分配了新的 URL")]),t._v(" "),_("li",[t._v("303 see other，表示资 源存在着另一个 URL，应使用 GET 方法获取资源")]),t._v(" "),_("li",[t._v("304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况")]),t._v(" "),_("li",[t._v("307 temporary redirect，临时重定向，和302含义相同")])])]),t._v(" "),_("li",[_("p",[t._v("400 - 499  发送的请求有问题")]),t._v(" "),_("ul",[_("li",[t._v("400 bad request，请求报文存在语法错误")]),t._v(" "),_("li",[t._v("401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息")]),t._v(" "),_("li",[t._v("403 forbidden，表示对请求资源的访问被服务器拒绝")]),t._v(" "),_("li",[t._v("404 not found，表示在服务器上没有找到请求的资源")])])]),t._v(" "),_("li",[_("p",[t._v("500 - 599  服务器出现了问题")])])]),t._v(" "),_("h2",{attrs:{id:"缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),_("p",[t._v("缓存是代理服务器或客户端本地磁盘内保存的资源副本，利用缓存来减少对源服务器的访问以便于节省通信流量和通信时间，也可以达到更好的交互体验。")]),t._v(" "),_("p",[t._v("请求的资源如果已经被缓存则直接由缓存服务器返回给客户端，或者客户端直接从本地磁盘读取。缓存可以设置有效时间，当判断缓存过期后，客户端/缓存服务器可像源服务器重新请求新资源。")]),t._v(" "),_("blockquote",[_("p",[t._v("通用首部\n指请求报文和响应报文都可以使用的字段")])]),t._v(" "),_("ul",[_("li",[t._v("Cache-Control\n"),_("ul",[_("li",[t._v("no-cache 指客户端不缓存过期资源")]),t._v(" "),_("li",[t._v("no-store 指不进行缓存")]),t._v(" "),_("li",[t._v("max-age 指缓存资源的缓存时间比指定的值小，那么客户端就接受缓存资源，且缓存服务器不对资源有效性进行再次确认")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/11/16d1f83aae4007d4?w=838&h=534&f=png&s=180259",alt:""}})]),t._v(" "),_("ul",[_("li",[t._v("Connection 指控制不再转发给代理的首部字段（Hop-by-hop），管理持久连接\n"),_("ul",[_("li",[t._v("close 指服务器像明确断开连接")]),t._v(" "),_("li",[t._v("Keep-Alive 指保存持久连接，HTTP/1.1前默认连接是非持久性的，如需要保存持久连接，需要增加此字段")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/11/16d1f84b1371b26c?w=794&h=500&f=png&s=198337",alt:""}})]),t._v(" "),_("ul",[_("li",[t._v("Upgrade 可以用来指定一个完全不同的通信协议，对于这个字段，服务器可以返回101状态码")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/11/16d1f854faab4768?w=823&h=458&f=png&s=240957",alt:""}})]),t._v(" "),_("blockquote",[_("p",[t._v("请求首部字段")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("Accept 指用户代理能够处理的媒体类型及媒体类型的相对优先级")])]),t._v(" "),_("li",[_("p",[t._v("Accept-Encoding 指用来告知服务器用户代理支持的内容编码及内容编码的优先级顺序")])]),t._v(" "),_("li",[_("p",[t._v("Authorization 指用来告知服务器，用户代理的认证信息")])]),t._v(" "),_("li",[_("p",[t._v("Host 当一个 IP 下存在多个域名时，帮助服务器知道要请求的具体主机")])]),t._v(" "),_("li",[_("p",[t._v("User-Agent 会讲创建请求的浏览器和用户代理名称等信息传达给服务器")])]),t._v(" "),_("li",[_("p",[t._v("最后")])])]),t._v(" "),_("blockquote",[_("p",[t._v("想要《图解HTTP》电子档的 和http视频的  评论私信我")])])])}),[],!1,null,null,null);v.default=e.exports}}]);