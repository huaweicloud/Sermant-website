(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{519:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"日志功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志功能"}},[t._v("#")]),t._v(" 日志功能")]),t._v(" "),a("p",[t._v("本文介绍如何在开发中使用Sermant提供的日志系统。")]),t._v(" "),a("h2",{attrs:{id:"功能介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[t._v("#")]),t._v(" 功能介绍")]),t._v(" "),a("p",[t._v("日志是在程序开发中不可或缺的能力，通过日志可以快速找出程序运行时的状态及遇到的问题，"),a("strong",[t._v("Sermant")]),t._v("日志系统基于"),a("strong",[t._v("JUL")]),t._v("&"),a("strong",[t._v("logback")]),t._v("构建，为插件开发提供了完整的、配置灵活的避免类冲突的日志工具。")]),t._v(" "),a("blockquote",[a("p",[t._v("注：基于Sermant的类隔离策略，日志系统通过JUL接口来构造日志并通过logback引擎输出日志的方式，这得益于"),a("a",{attrs:{href:"https://github.com/qos-ch/slf4j/tree/master/jul-to-slf4j",target:"_blank",rel:"noopener noreferrer"}},[t._v("jul-to-slf4j"),a("OutboundLink")],1),t._v("的桥接能力，基于该操作，用户无需担心日志配置及输出和被增强应用冲突的情况。")])]),t._v(" "),a("h2",{attrs:{id:"开发示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发示例"}},[t._v("#")]),t._v(" 开发示例")]),t._v(" "),a("p",[t._v("本开发示例基于"),a("RouterLink",{attrs:{to:"/zh/document/developer-guide/"}},[t._v("创建首个插件")]),t._v("文档中创建的工程。")],1),t._v(" "),a("p",[t._v("找到工程中"),a("code",[t._v("template\\template-plugin")]),t._v("下的"),a("code",[t._v("com.huaweicloud.sermant.template.TemplateDeclarer")]),t._v("类，在其中定义一个私有静态常量"),a("code",[t._v("LOGGER")]),t._v("，用于该类下的日志构造：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Logger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("接着我们在针对"),a("code",[t._v("main")]),t._v("方法的"),a("RouterLink",{attrs:{to:"/zh/document/developer-guide/bytecode-enhancement.html#拦截器"}},[t._v("拦截器")]),t._v("的"),a("code",[t._v("before")]),t._v("及"),a("code",[t._v("after")]),t._v("方法中通过"),a("code",[t._v("java.util.logging.Logger::info")]),t._v("接口补充"),a("code",[t._v("INFO")]),t._v("级别的执行日志，这可以让我们在日志中看到拦截器的执行过程：")],1),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Say good morning before good afternoon!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Good morning!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Say good night after good afternoon!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Good night!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("开发完成后，可参照创建首个插件时的"),a("RouterLink",{attrs:{to:"/zh/document/developer-guide/#打包构建"}},[t._v("打包构建")]),t._v("流程，在工程根目录下执行 "),a("strong",[t._v("mvn package")]),t._v("，执行完成后在根目录执行 "),a("code",[t._v("cd agent/")]),t._v("，并在其中携带"),a("strong",[t._v("Sermant")]),t._v("运行测试应用，执行如下命令 "),a("strong",[t._v("java -javaagent:sermant-agent.jar -jar Application.jar")])],1),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" -javaagent:sermant-agent.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" Application.jar\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xxxx-xx-xxTxx:xx:xx.xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Loading god library into BootstrapClassLoader.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xxxx-xx-xxTxx:xx:xx.xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Building argument map by agent arguments.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xxxx-xx-xxTxx:xx:xx.xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Loading core library into SermantClassLoader.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xxxx-xx-xxTxx:xx:xx.xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Loading sermant agent, artifact is: default\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xxxx-xx-xxTxx:xx:xx.xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Load sermant done, artifact is: default\nGood morning"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nGood afternoon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nGood night"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),a("p",[t._v("在插件中定义的执行逻辑已被增强到测试应用中。接下来，查看程序运行时产生的日志：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("执行如下命令 "),a("code",[t._v("cd logs/sermant/core/app/${yyyy-mm-dd}/")]),t._v("进入运行日志存放目录，其中 "),a("code",[t._v("${yyyy-mm-dd}")]),t._v("指代运行时基于日期生成的目录名。")])]),t._v(" "),a("li",[a("p",[t._v("打开日志文件"),a("code",[t._v("sermant-0.log")]),t._v("检查日志内容，在其中可以看到我们构造的日志已经生效了，可以在其中看到日志的触发时间、日志级别、类、方法、代码行、线程等信息，便于了解程序的运行状态。")])])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("xxxx-xx-xx xx:xx:xx.xxx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("com.huaweicloud.sermant.template.TemplateDeclarer"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("before:33"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Say good morning before good afternoon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nxxxx-xx-xx xx:xx:xx.xxx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("com.huaweicloud.sermant.template.TemplateDeclarer"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("after:40"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Say good night after good afternoon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),a("h2",{attrs:{id:"api-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-配置"}},[t._v("#")]),t._v(" API&配置")]),t._v(" "),a("h3",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h4",{attrs:{id:"获取日志工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取日志工具"}},[t._v("#")]),t._v(" 获取日志工具")]),t._v(" "),a("ul",[a("li",[t._v("获取日志工具对象，用于在开发中构造日志，该日志实例为"),a("code",[t._v("java.util.logging.Logger")]),t._v("实例，在"),a("strong",[t._v("Sermant")]),t._v("框架中，已将其初始化并桥接到logback日志引擎。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Logger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"记录日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记录日志"}},[t._v("#")]),t._v(" 记录日志")]),t._v(" "),a("p",[t._v("开发者可通过如下日志接口记录各级别（"),a("code",[t._v("TRACE")]),t._v("、"),a("code",[t._v("DEBUG")]),t._v("、"),a("code",[t._v("INFO")]),t._v("、"),a("code",[t._v("WARN")]),t._v("、"),a("code",[t._v("ERROR")]),t._v("）日志来达到对程序运行不同程度的监控。")]),t._v(" "),a("ul",[a("li",[t._v("记录"),a("strong",[t._v("TRACE")]),t._v("级别日志，用于追踪详细的程序运行流。默认关闭该级别，如需开启需配置。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Logger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("finest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TRACE MESSAGE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("记录"),a("strong",[t._v("DEBUG")]),t._v("级别日志，用于在程序关键位置记录详细信息，可能包含方法参数或返回值，用于在调试过程，了解更多程序运行信息。默认关闭该级别，如需开启需配置。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Logger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DEBUG MESSAGE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("记录"),a("strong",[t._v("INFO")]),t._v("级别日志，用于记录程序运行的一些关键信息，常常用来表示程序运行进入了哪一位置或执行到哪一状态，往往不记录类似于"),a("strong",[t._v("DEBUG")]),t._v("级别日志中所记录的详细信息。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Logger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INFO MESSAGE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("记录"),a("strong",[t._v("WARN")]),t._v("级别日志，用于记录一些警告信息。该日志记录程序运行过程中进入了一些特殊状态，虽不会影响程序运行，但值得注意。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Logger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("warning")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WARN MESSAGE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("记录"),a("strong",[t._v("ERROR")]),t._v("级别日志，用于记录程序运行中产生的错误，用于提供信息便于开发及维护人员了解错误产生的原因。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Logger")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("severe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERROR MESSAGE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[a("strong",[t._v("Sermant")]),t._v("提供的日志系统是基于logback日志引擎，并且沿用了logback的日志配置方式，基于创建首个插件中的"),a("RouterLink",{attrs:{to:"/zh/document/developer-guide/#工程结构"}},[t._v("工程结构")]),t._v("，通过修改"),a("code",[t._v("config/logback.xml")]),t._v("来自定义日志逻辑。")],1),t._v(" "),a("h4",{attrs:{id:"日志输出配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志输出配置"}},[t._v("#")]),t._v(" 日志输出配置")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("配置项")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("配置示例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("log.home_dir")]),t._v(" "),a("td",[t._v("用于指定日志最终输出路径。")]),t._v(" "),a("td",[a("code",[t._v("${sermant_log_dir:-./logs/sermant/core}")])])]),t._v(" "),a("tr",[a("td",[t._v("log.app_name")]),t._v(" "),a("td",[t._v("用于指定日志文件的文件名前缀。")]),t._v(" "),a("td",[a("code",[t._v("{sermant_app_name:-sermant}")])])]),t._v(" "),a("tr",[a("td",[t._v("log.maxHistory")]),t._v(" "),a("td",[t._v("用于指定日志文件的最长存放时间（单位：天）。")]),t._v(" "),a("td",[a("code",[t._v("${sermant_log_max_history:-30}")])])]),t._v(" "),a("tr",[a("td",[t._v("log.level")]),t._v(" "),a("td",[t._v("用于指定日志输出的最小级别，可配置"),a("code",[t._v("trace")]),t._v("、"),a("code",[t._v("debug")]),t._v("、"),a("code",[t._v("info")]),t._v("、"),a("code",[t._v("warn")]),t._v("、"),a("code",[t._v("error")]),t._v("。")]),t._v(" "),a("td",[a("code",[t._v("${sermant_log_level:-trace}")])])]),t._v(" "),a("tr",[a("td",[t._v("log.maxSize")]),t._v(" "),a("td",[t._v("用于指定单个日志文件的最大容量。")]),t._v(" "),a("td",[a("code",[t._v("${sermant_log_max_size:-5MB}")])])]),t._v(" "),a("tr",[a("td",[t._v("log.totalSize")]),t._v(" "),a("td",[t._v("用于指定日志文件的最大总容量。")]),t._v(" "),a("td",[a("code",[t._v("${sermant_log_total_size:-20GB}")])])]),t._v(" "),a("tr",[a("td",[t._v("log.pattern")]),t._v(" "),a("td",[t._v("用于指定输出日志的格式。")]),t._v(" "),a("td",[a("code",[t._v("%d{yyyy-MM-dd HH:mm:ss.SSS} [%le] [%C] [%M:%L] [%thread] %m%n")])])])])]),t._v(" "),a("blockquote",[a("p",[t._v("注：所有配置项的值支持从环境变量读取配置，只需将其配置为"),a("code",[t._v("${环境变量名:-默认值}")]),t._v("。输出日志的格式，其配置参考"),a("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E6%A0%BC%E5%BC%8F%E9%85%8D%E7%BD%AE"}},[t._v("日志格式配置")])])]),t._v(" "),a("h4",{attrs:{id:"日志格式配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志格式配置"}},[t._v("#")]),t._v(" 日志格式配置")]),t._v(" "),a("p",[t._v("日志的默认配置为"),a("code",[t._v("%d{yyyy-MM-dd HH:mm:ss.SSS} [%le] [%C] [%M:%L] [%thread] %m%n")]),t._v("，其中可配置标识含义如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("配置标识")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("%d")]),t._v(" "),a("td",[t._v("用于指定日志输出时的日期格式。")])]),t._v(" "),a("tr",[a("td",[t._v("%C")]),t._v(" "),a("td",[t._v("用于指定日志输出该日志发生的类的完整类名。")])]),t._v(" "),a("tr",[a("td",[t._v("%F")]),t._v(" "),a("td",[t._v("用于指定日志输出该日志发生的类的文件名。")])]),t._v(" "),a("tr",[a("td",[t._v("%M")]),t._v(" "),a("td",[t._v("用于指定日志输出该日志发生的方法的方法名。")])]),t._v(" "),a("tr",[a("td",[t._v("%L")]),t._v(" "),a("td",[t._v("用于指定日志输出该日志发生位置在类中的行号。")])]),t._v(" "),a("tr",[a("td",[t._v("%thread")]),t._v(" "),a("td",[t._v("用于指定日志输出该日志发生的线程。")])]),t._v(" "),a("tr",[a("td",[t._v("%m")]),t._v(" "),a("td",[t._v("用于指定日志输出该日志构造时指定的信息。")])]),t._v(" "),a("tr",[a("td",[t._v("%n")]),t._v(" "),a("td",[t._v("换行符。")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);