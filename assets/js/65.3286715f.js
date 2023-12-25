(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{512:function(a,t,r){"use strict";r.r(t);var e=r(26),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),t("h2",{attrs:{id:"sermant是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sermant是什么"}},[a._v("#")]),a._v(" Sermant是什么")]),a._v(" "),t("p",[t("strong",[a._v("Sermant")]),a._v("（也称之为Java-mesh）是基于Java字节码增强技术的无代理的服务网格，其利用Java字节码增强技术为宿主应用程序提供服务治理功能，以解决大规模微服务场景中的服务治理问题。Sermant构建了非侵入、高性能、插件化核心框架，并在框架中提供了对接动态配置中心、事件上报、链路标记、心跳等服务治理通用能力。当前开源仓库中提供的插件涵盖了服务注册、标签路由、流量控制、服务监控等常见的服务治理场景，在金融、政企、互联网等领域有着广泛的应用。\n"),t("MyImage",{attrs:{src:"/docs-img/sermant-introduction.png"}})],1),a._v(" "),t("h2",{attrs:{id:"架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[a._v("#")]),a._v(" 架构")]),a._v(" "),t("p",[a._v("Sermant的愿景还包括构建插件开发生态系统，以帮助开发人员更容易地开发服务治理功能，同时不干扰业务代码。Sermant架构描述如下。")]),a._v(" "),t("MyImage",{attrs:{src:"/docs-img/sermant-product-arch.png"}}),a._v(" "),t("p",[a._v("根据上图，Sermant中JavaAgent包含两层功能。")]),a._v(" "),t("ul",[t("li",[a._v("框架核心层。核心层提供Sermant的基本框架功能，以简化插件开发。该层的功能包括心跳、数据传输、动态配置等。")]),a._v(" "),t("li",[a._v("插件服务层。插件为宿主应用提供实际的治理服务。开发者可以直接利用框架核心服务开发简单插件，也可以开发插件自身的复杂服务治理功能来开发复杂插件。")])]),a._v(" "),t("p",[a._v("Sermant中的JavaAgent广泛采用类隔离技术，以消除框架代码、插件代码和宿主应用程序代码之间的类加载冲突。")]),a._v(" "),t("p",[a._v("使用Sermant的微服务架构具有以下三个组件，如下图所示。")]),a._v(" "),t("MyImage",{attrs:{src:"/docs-img/sermant-rt-arch.png"}}),a._v(" "),t("ul",[t("li",[a._v("Sermant JavaAgent：动态地为宿主应用程序提供服务治理能力。")]),a._v(" "),t("li",[a._v("Sermant Backend：为JavaAgent的上传数据提供连接和预处理服务。")]),a._v(" "),t("li",[a._v("Dynamic configuration center：通过动态更新监听的JavaAgent的配置来提供指令。Sermant项目不直接提供动态配置中心。这些项目目前支持servicecomb-kie等。")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);