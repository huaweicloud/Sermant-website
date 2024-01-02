(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{543:function(t,a,s){"use strict";s.r(a);var e=s(26),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"服务可见性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务可见性"}},[t._v("#")]),t._v(" 服务可见性")]),t._v(" "),a("p",[t._v("本文介绍如何使用"),a("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/tree/develop/sermant-plugins/sermant-service-visibility",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务可见性插件"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"术语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#术语"}},[t._v("#")]),t._v(" 术语")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("术语")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("契约信息")]),t._v(" "),a("td",[t._v("服务对外提供的接口信息，包括接口所属类、请求路径、方法名、参数列表、返回类型")])]),t._v(" "),a("tr",[a("td",[t._v("调用依赖关系信息")]),t._v(" "),a("td",[t._v("服务之间的调用关系信息，包括服务提供者和服务消费者的IP、端口信息")])])])]),t._v(" "),a("h2",{attrs:{id:"功能介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[t._v("#")]),t._v(" 功能介绍")]),t._v(" "),a("p",[t._v("服务可见性插件可以采集Spring Cloud和Dubbo应用的契约信息和调用依赖关系，在不修改代码的前提下可以通过Backend查看所有服务对外提供的接口信息以及服务之间的调用关系信息。")]),t._v(" "),a("p",[t._v("本插件基于Spring Cloud和Dubbo应用的服务注册、服务订阅等功能完成服务注册的接口信息以及服务订阅时的提供者信息的采集，以便于用户统一管理。")]),t._v(" "),a("h2",{attrs:{id:"参数配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数配置"}},[t._v("#")]),t._v(" 参数配置")]),t._v(" "),a("h3",{attrs:{id:"sermant-agent配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sermant-agent配置"}},[t._v("#")]),t._v(" Sermant Agent配置")]),t._v(" "),a("p",[t._v("服务可见性插件需要在Sermant Agent的配置文件"),a("code",[t._v("${path}/sermant-agent-x.x.x/agent/config/config.properties")]),t._v("中配置心跳开关（"),a("code",[t._v("agent.service.heartbeat.enable")]),t._v("）、网关开关（"),a("code",[t._v("agent.service.gateway.enable")]),t._v("）、通知开关（"),a("code",[t._v("notification.enable")]),t._v(")以及服务元数据（"),a("code",[t._v("service.meta.*")]),t._v("）。")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("agent.service.heartbeat.enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("false # 心跳开关，控制心跳功能是否开启。可见性插件依赖于心跳功能监听服务是否下线，服务下线时不展示该服务的可见性信息。默认为false：关闭，使用时需要设置为true：开启。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("agent.service.gateway.enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("false   # 网关开关，控制消息发送功能是否开启。可见性插件依赖于消息发送功能插件通过消息发送功能将采集到的信息发送给Backend进行展示。默认为false：关闭，使用时需要设置为true：开启。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("notification.enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("false            # 通知开关，控制Netty链接等通知的开关。可见性插件依赖于Netty链接的通知监听Netty是否重连。Netty重连时可见性插件会把采集的可见性数据给Backend重新发送一份，防止Backend重启导致数据丢失。默认为false：关闭，使用时需要设置为true：开启。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service.meta.application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("default     # 指定应用名称。服务可见性插件采集该信息用于数据展示。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service.meta.version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1.0.0           # 指定服务版本。服务可见性插件采集该信息用于数据展示。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service.meta.project")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("default         # 指定服务命名空间。服务可见性插件采集该信息用于数据展示。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service.meta.environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("# 指定服务所在环境。服务可见性插件采集该信息用于数据展示。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("service.meta.zone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("# 指定服务所在az（可用区）。服务可见性插件采集该信息用于数据展示。")]),t._v("\n")])])]),a("h3",{attrs:{id:"插件配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件配置"}},[t._v("#")]),t._v(" 插件配置")]),t._v(" "),a("p",[t._v("服务可见性插件需要开启采集开关，可在"),a("code",[t._v("${path}/sermant-agent-x.x.x/agent/pluginPackage/service-visibility/config/config.yaml")]),t._v("找到该插件的配置文件，配置如下所示：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("visibility.config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("startFlag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务可见性采集开关。控制是否需要进行指标采集上报。为true时插件进行数据采集上报，为false时则不进行数据采集上报。")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数键")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否必须")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("visibility.config.startFlag")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务可见性采集开关")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")])])])]),t._v(" "),a("h2",{attrs:{id:"支持版本与限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持版本与限制"}},[t._v("#")]),t._v(" 支持版本与限制")]),t._v(" "),a("p",[t._v("框架支持：")]),t._v(" "),a("ul",[a("li",[t._v("SpringBoot 1.5.10.Release及以上")]),t._v(" "),a("li",[t._v("Dubbo 2.6.x-2.7.x")])]),t._v(" "),a("h2",{attrs:{id:"操作和结果验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作和结果验证"}},[t._v("#")]),t._v(" 操作和结果验证")]),t._v(" "),a("p",[t._v("下面将演示如何使用服务可见性插件，验证采集Dubbo应用的契约和调用依赖关系信息场景。")]),t._v(" "),a("h3",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),a("OutboundLink")],1),t._v("编译Sermant包")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/huaweicloud/Sermant-examples/releases/download/v1.2.1/sermant-examples-visibility-demo-1.2.1.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),a("OutboundLink")],1),t._v(" Demo二进制产物压缩包")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zookeeper.apache.org/releases.html#download",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),a("OutboundLink")],1),t._v("Zookeeper（动态配置中心&注册中心），并启动")])]),t._v(" "),a("h3",{attrs:{id:"步骤一-获取demo二进制产物"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-获取demo二进制产物"}},[t._v("#")]),t._v(" 步骤一：获取Demo二进制产物")]),t._v(" "),a("p",[t._v("解压Demo二进制产物压缩包，即可得到"),a("code",[t._v("dubbo-integration-consumer.jar")]),t._v("和"),a("code",[t._v("dubbo-integration-provider.jar")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"步骤二-修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-修改配置"}},[t._v("#")]),t._v(" 步骤二：修改配置")]),t._v(" "),a("ul",[a("li",[t._v("修改Sermant Agent配置\n在"),a("code",[t._v("${path}/sermant-agent-x.x.x/agent/config/config.properties")]),t._v("找到该配置文件，修改的配置项如下所示：")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("agent.service.heartbeat.enable=true "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 心跳服务开关")]),t._v("\nagent.service.gateway.enable=true   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 统一网关服务开关")]),t._v("\nnotification.enable=true            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 内部事件通知开关")]),t._v("\n")])])]),a("ul",[a("li",[t._v("修改服务可见性插件配置\n在"),a("code",[t._v("${path}/sermant-agent-x.x.x/agent/pluginPackage/service-visibility/config/config.yaml")]),t._v("找到该插件的配置文件， 修改的配置项如下所示：")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("visibility.config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("startFlag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务可见性采集开关。为true时进行数据采集上报。")]),t._v("\n")])])]),a("h3",{attrs:{id:"步骤三-启动应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤三-启动应用"}},[t._v("#")]),t._v(" 步骤三：启动应用")]),t._v(" "),a("ul",[a("li",[t._v("参考如下命令, 启动backend应用。")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run under Linux")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/server/sermant/sermant-backend-x.x.x.jar\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run under Windows")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-backend-x.x.x.jar\n")])])]),a("ul",[a("li",[t._v("参考如下命令, 启动dubbo-2-6-integration-consumer应用。")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run under Linux")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" -javaagent:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("consumer "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v("  dubbo-integration-consumer.jar\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run under Windows")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" -javaagent:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("consumer "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v("  dubbo-integration-consumer.jar\n")])])]),a("ul",[a("li",[t._v("参考如下命令, 启动dubbo-2-6-integration-provider应用。")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run under Linux")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" -javaagent:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("provider "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" dubbo-integration-provider.jar\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run under Windows")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" -javaagent:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("provider "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" dubbo-integration-provider.jar\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("说明：")]),t._v(" ${path}为sermant实际安装路径，x.x.x代表sermant某个版本号。")])]),t._v(" "),a("h3",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),a("p",[t._v("访问可见性信息查询接口"),a("code",[t._v("http://127.0.0.1:8900/visibility/getCollectorInfo")]),t._v("可以看到采集的信息，则说明插件生效。")]),t._v(" "),a("p",[t._v("服务可见性信息的数据结构如下所示：")]),t._v(" "),a("ul",[a("li",[t._v("契约信息的数据结构：")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contractList "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serviceType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dubbo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"interfaceName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.huaweicloud.integration.service.BarService"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serviceKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.huaweicloud.integration.service.BarService"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.huaweicloud.integration.service.BarService"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"methodInfoList"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"paramInfoList"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"paramType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java.lang.String"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"paramName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"returnInfo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"paramType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java.lang.String"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("依赖关系信息的数据结构：")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"consanguinityList"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serviceType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dubbo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"interfaceName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.huaweicloud.integration.service.BarService"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.huaweicloud.integration.service.BarService"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serviceKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.huaweicloud.integration.service.BarService"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"providers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ip"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x.x.x.x"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"28821"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serviceType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dubbo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serviceKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.huaweicloud.integration.service.BarService"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.huaweicloud.integration.service.BarService"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);