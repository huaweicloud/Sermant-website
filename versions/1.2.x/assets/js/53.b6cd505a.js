(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{499:function(e,t,a){"use strict";a.r(t);var r=a(26),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"springboot-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot-registry"}},[e._v("#")]),e._v(" SpringBoot Registry")]),e._v(" "),t("p",[e._v("This article describes how to use the "),t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/tree/develop/sermant-plugins/sermant-springboot-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("SpringBoot registry plugin"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[e._v("#")]),e._v(" Function")]),e._v(" "),t("p",[e._v("This plugin provides service registration and discovery abilities for pure SpringBoot applications. Users can quickly access the registration center(Currently only Zookeeper is supported) without modifying code. In addition, the plugin also provides the service timeout retry ability, achieving high availability of service invocation.")]),e._v(" "),t("p",[e._v("The plug-in will resolve the downstream service according to the Url called by the originating client, select the preferred instance according to the load balance, dynamically replace the Url, and complete the service call.")]),e._v(" "),t("p",[e._v("Currently, URL formats are supported.：http://${domainName}/${serviceName}/${apiPath}")]),e._v(" "),t("p",[e._v("Just like the URL above, "),t("code",[e._v("domainName")]),e._v(" indicates the domain name, "),t("code",[e._v("serviceName")]),e._v(" indicates the downstream service name, and "),t("code",[e._v("apiPath")]),e._v(" indicates the downstream request interface path.")]),e._v(" "),t("h2",{attrs:{id:"plugin-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugin-configuration"}},[e._v("#")]),e._v(" Plugin configuration")]),e._v(" "),t("p",[e._v("SpringBoot Registry plugin requires modification of the plugin configuration file on demand, which can be found in the path "),t("code",[e._v("${path}/agent/pluginPackage/springboot-registry/config/config.yaml")]),e._v(". The configuration file for the plugin is shown below:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("sermant.springboot.registry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enableRegistry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("false")]),e._v("                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Whether to enable the boot registration capability")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("realmName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" www.domain.com             "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Match the domain name, the current version only takes effect for the scene where the url is http://${realmName}/serviceName/api/xx")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enableRequestCount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("false")]),e._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Whether to enable traffic statistics. After enabling, the traffic entering the plug-in will be counted every time")]),e._v("\n     \n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("sermant.springboot.registry.lb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("     \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("lbType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" RoundRobin                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Load balancing type, currently supports round robin (RoundRobin), random (Random), response time weight (WeightedResponseTime), minimum concurrency (BestAvailable)")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("registryAddress")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 127.0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2181")]),e._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Registration center address")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("instanceCacheExpireTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Instance expiration time, in seconds, if <=0, it will never expire")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("instanceRefreshInterval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Instance refresh time, in seconds, must be less than instanceCacheExpireTime")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("refreshTimerInterval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Instance timing check interval to determine whether the instance is expired, if it is greater than instanceRefreshInterval, then the value is set to instanceRefreshInterval")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enableSocketReadTimeoutRetry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Whether to retry for {@link java.net.SocketTimeoutException}: read timed out, enabled by default")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enableSocketConnectTimeoutRetry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Same as above, mainly for connect timed out, usually thrown when the connection is not upstream or downstream")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enableTimeoutExRetry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Retry scenario, for {@link java.util.concurrent.TimeoutException}, whether retry is required, enabled by default, this timeout is mostly used in asynchronous scenarios, such as Future, MinimalHttpAsyncClient")]),e._v("\n")])])]),t("p",[e._v("The configuration items are described as follows:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Parameter Key")]),e._v(" "),t("th",[e._v("Description")]),e._v(" "),t("th",[e._v("Default Value")]),e._v(" "),t("th",[e._v("Required")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("sermant.springboot.registry.enableRegistry")]),e._v(" "),t("td",[e._v("Whether to enable springboot registration capability (true/false)")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td",[e._v("Yes")])]),e._v(" "),t("tr",[t("td",[e._v("sermant.springboot.registry.realmName")]),e._v(" "),t("td",[e._v("Matching domain name, current version only works for "),t("strong",[e._v("http://${realmName}/serviceName/api/xx")]),e._v(" scenario")]),e._v(" "),t("td",[e._v("www.domain.com")]),e._v(" "),t("td",[e._v("Yes")])]),e._v(" "),t("tr",[t("td",[e._v("sermant.springboot.registry.enableRequestCount")]),e._v(" "),t("td",[e._v("Whether to enable traffic statistics. After enabling, the traffic entering the plug-in will be counted every time (true/false)")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td",[e._v("Yes")])]),e._v(" "),t("tr",[t("td",[e._v("sermant.springboot.registry.lb.lbType")]),e._v(" "),t("td",[e._v("Load balancing type, currently supports RoundRobin, Random, WeightedResponseTime, BestAvailable")]),e._v(" "),t("td",[e._v("RoundRobin")]),e._v(" "),t("td",[e._v("Yes")])]),e._v(" "),t("tr",[t("td",[e._v("sermant.springboot.registry.lb.registryAddress")]),e._v(" "),t("td",[e._v("Registration Center Address")]),e._v(" "),t("td",[e._v("127.0.0.1:2181")]),e._v(" "),t("td",[e._v("Yes")])]),e._v(" "),t("tr",[t("td",[e._v("sermant.springboot.registry.lb.instanceCacheExpireTime")]),e._v(" "),t("td",[e._v("Instance expiration time, in seconds, if <= 0 then never expires")]),e._v(" "),t("td",[e._v("0")]),e._v(" "),t("td",[e._v("Yes")])]),e._v(" "),t("tr",[t("td",[e._v("sermant.springboot.registry.lb.instanceRefreshInterval")]),e._v(" "),t("td",[e._v("Instance refresh time, in seconds, must be less than instanceCacheExpireTime")]),e._v(" "),t("td",[e._v("0")]),e._v(" "),t("td",[e._v("Yes")])]),e._v(" "),t("tr",[t("td",[e._v("sermant.springboot.registry.lb.refreshTimerInterval")]),e._v(" "),t("td",[e._v("Instance timing check interval, determine whether the instance is expired, if it is greater than instanceRefreshInterval, then the value is set to instanceRefreshInterval")]),e._v(" "),t("td",[e._v("5")]),e._v(" "),t("td",[e._v("Yes")])]),e._v(" "),t("tr",[t("td",[e._v("sermant.springboot.registry.lb.enableSocketReadTimeoutRetry")]),e._v(" "),t("td",[e._v("For "),t("strong",[e._v("java.net.SocketTimeoutException: read timed out")]),e._v(" whether to retry (true/false)")]),e._v(" "),t("td",[e._v("true")]),e._v(" "),t("td",[e._v("Yes")])]),e._v(" "),t("tr",[t("td",[e._v("sermant.springboot.registry.lb.enableSocketConnectTimeoutRetry")]),e._v(" "),t("td",[e._v("For "),t("strong",[e._v("java.net.SocketTimeoutException: connect timed out")]),e._v(" whether to retry (true/false)")]),e._v(" "),t("td",[e._v("true")]),e._v(" "),t("td",[e._v("Yes")])]),e._v(" "),t("tr",[t("td",[e._v("sermant.springboot.registry.lb.enableTimeoutExRetry")]),e._v(" "),t("td",[e._v("For "),t("strong",[e._v("java.util.concurrent.TimeoutException")]),e._v(" whether to retry (true/false)")]),e._v(" "),t("td",[e._v("true")]),e._v(" "),t("td",[e._v("Yes")])])])]),e._v(" "),t("p",[e._v("Ensure that the values of"),t("code",[e._v("realName")]),e._v(" and "),t("code",[e._v("registryAddress")]),e._v(" are correct. Otherwise, the plugin does not take effect.")]),e._v(" "),t("h2",{attrs:{id:"detailed-governance-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#detailed-governance-rules"}},[e._v("#")]),e._v(" Detailed Governance Rules")]),e._v(" "),t("p",[e._v("The SpringBoot registration plug-in needs to judge whether it needs to proxy the request according to the specified service name, and replace the url address. Effective service need to publish whitelist based on dynamic configuration center, publishing configuration can refer to "),t("RouterLink",{attrs:{to:"/en/document/user-guide/configuration-center.html#sermant-dynamic-configuration-center-model"}},[e._v("Configuration Center User's Manual")]),e._v(".")],1),e._v(" "),t("p",[e._v("The key value is "),t("strong",[e._v("sermant.plugin.registry")]),e._v(".")]),e._v(" "),t("p",[e._v("It is recommended to configure the group to microservice level, i.e. "),t("strong",[e._v("app=${service.meta.application}&environment=${service.meta.environment}&service={spring.application.name}")]),e._v(", for the configuration of service.meta.application and service.meta.environment, please refer to the "),t("RouterLink",{attrs:{to:"/en/document/user-guide/sermant-agent.html#sermant-agent-parameter-configuration"}},[e._v("Sermant-agent User Manual")]),e._v(", spring.application.name is the microservice name (i.e. the name of the service configured in the spring application).")],1),e._v(" "),t("p",[e._v("Content is the specific configuration content of the whitelist, which is detailed as follows:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("strategy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" all "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# whitelist type , all (all effective)/none (all not effective)/white (only those configured in the value value take effect)")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("c "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Whitelist service collection, only effective when strategy is configured as white, multiple service names separated by English commas")]),e._v("\n")])])]),t("blockquote",[t("p",[e._v("Note: When adding a new configuration, please remove the comment, otherwise it will cause the addition to fail.")])]),e._v(" "),t("h2",{attrs:{id:"supported-versions-and-limitations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions-and-limitations"}},[e._v("#")]),e._v(" Supported Versions and Limitations")]),e._v(" "),t("p",[e._v("Framework Supported:")]),e._v(" "),t("ul",[t("li",[e._v("SpringBoot 1.5.10.Release and above")])]),e._v(" "),t("p",[e._v("Registry Center Supported:")]),e._v(" "),t("ul",[t("li",[e._v("Zookeeper 3.4.x and above")])]),e._v(" "),t("p",[e._v("Client Supported：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("HttpClient: 4.x")])]),e._v(" "),t("li",[t("p",[e._v("HttpAsyncClient: 4.1.4")])]),e._v(" "),t("li",[t("p",[e._v("OkhttpClient: 2.x, 3.x, 4.x")])]),e._v(" "),t("li",[t("p",[e._v("Feign(springcloud-openfeign-core): 2.1.x, 3.0.x")])]),e._v(" "),t("li",[t("p",[e._v("RestTemplate(Spring-web): 5.1.x, 5.3.x")])])]),e._v(" "),t("h2",{attrs:{id:"operation-and-result-verification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#operation-and-result-verification"}},[e._v("#")]),e._v(" Operation and Result Verification")]),e._v(" "),t("p",[e._v("The following SpringBoot scenario is an example to demonstrate how the SpringBoot project is connected to Zookeeper.")]),e._v(" "),t("h4",{attrs:{id:"preparations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparations"}},[e._v("#")]),e._v(" Preparations")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),t("OutboundLink")],1),e._v("/Compile the sermant package")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/huaweicloud/Sermant-examples/tree/main/registry-demo/springboot-registry-demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),t("OutboundLink")],1),e._v(" springboot-registry-demo source code")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://zookeeper.apache.org/releases.html#download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),t("OutboundLink")],1),e._v(" Zookeeper, and start")])])]),e._v(" "),t("h3",{attrs:{id:"step-1-compile-and-package-the-springboot-registry-demo-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-compile-and-package-the-springboot-registry-demo-application"}},[e._v("#")]),e._v(" Step 1: Compile and package the springboot-registry-demo application")]),e._v(" "),t("p",[e._v("Execute the following command in the "),t("code",[e._v("${path}/Sermant-examples/registry-demo/springboot-registry-demo")]),e._v(" directory:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# windows")]),e._v("\nmvn clean package\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# mac, linux")]),e._v("\nmvn clean package\n")])])]),t("p",[e._v("After successful packaging, you can get "),t("code",[e._v("service-a.jar")]),e._v(" in "),t("code",[e._v("${path}/Sermant-examples/registry-demo/springboot-registry-demo/service-a/target")]),e._v(" , get "),t("code",[e._v("service-b.jar")]),e._v(" in "),t("code",[e._v("${path}/Sermant-examples/registry-demo/springboot-registry-demo/service-b/target")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("Note: path is the path where the springboot-registry-demo application is downloaded.")])]),e._v(" "),t("h3",{attrs:{id:"step-2-deploy-the-applications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-deploy-the-applications"}},[e._v("#")]),e._v(" Step 2: Deploy the applications")]),e._v(" "),t("p",[e._v("(1) Start application service-a:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# windows")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8989")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dsermant.springboot.registry.enableRegistry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true -javaagent:"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent-x.x.x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("agent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent.jar"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" service-a.jar\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# mac, linux")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8989")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dsermant.springboot.registry.enableRegistry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true -javaagent:"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),e._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" service-a.jar\n")])])]),t("p",[e._v("(2) start application service-b:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# windows")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9999")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dsermant.springboot.registry.enableRegistry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true -javaagent:"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent-x.x.x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("agent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent.jar"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" service-b.jar\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# mac, linux")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9999")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dsermant.springboot.registry.enableRegistry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true -javaagent:"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),e._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" service-b.jar\n")])])]),t("blockquote",[t("p",[e._v("Description:")]),e._v(" "),t("ul",[t("li",[e._v("where path needs to be replaced with the actual installation path of Sermant.")]),e._v(" "),t("li",[e._v("x.x.x represents a Sermant version number.")])])]),e._v(" "),t("blockquote",[t("p",[e._v("Note: At this time, the configured domain name (www.domain.com) is not a real domain name. It can be called normally only after the white list is configured.")])]),e._v(" "),t("h3",{attrs:{id:"step-3-configure-white-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-configure-white-list"}},[e._v("#")]),e._v(" Step 3: Configure white list")]),e._v(" "),t("p",[e._v("Configure white list, please refer to "),t("a",{attrs:{href:"#detailed-governance-rules"}},[e._v("Detailed governance rules")]),e._v(".")]),e._v(" "),t("p",[e._v("The key is "),t("strong",[e._v("sermant.plugin.registry")]),e._v(", group is "),t("strong",[e._v("app=default&environment=&service=service-a")]),e._v("，content is "),t("strong",[e._v("strategy: all")]),e._v(".")]),e._v(" "),t("p",[e._v("Take Zookeeper as an example, and use the command line tools provided by Zookeeper for configuration publishing.")]),e._v(" "),t("ol",[t("li",[e._v("Execute the following command in the "),t("code",[e._v("${path}/bin/")]),e._v(" directory to create the node "),t("code",[e._v("/app=default&environment=")])])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# linux mac")]),e._v("\n./zkCli.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-server")]),e._v(" localhost:2181 create /app"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("environment")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("service")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("service-a\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# windows")]),e._v("\nzkCli.cmd "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-server")]),e._v(" localhost:2181 create /app"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("environment")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("service")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("service-a\n")])])]),t("blockquote",[t("p",[e._v("Note: "),t("code",[e._v("${path}")]),e._v(" is the installation directory of zookeeper")])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Execute the following command in the "),t("code",[e._v("${path}/bin/")]),e._v(" directory to create nodes "),t("code",[e._v("/app=default&environment=&service=service-a/server.plugin.registry")]),e._v(" and data "),t("code",[e._v("strategy: all")]),e._v(".")])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# linux mac")]),e._v("\n./zkCli.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-server")]),e._v(" localhost:2181 create /app"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("environment")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("service")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("service-a/sermant.plugin.registry "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"strategy: all"')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# windows")]),e._v("\nzkCli.cmd "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-server")]),e._v(" localhost:2181 create /app"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("environment")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("service")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("service-a/sermant.plugin.registry "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"strategy: all"')]),e._v("\n")])])]),t("h3",{attrs:{id:"validation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[e._v("#")]),e._v(" Validation")]),e._v(" "),t("p",[e._v("Invoke the"),t("code",[e._v("localhost:8989/httpClientGet")]),e._v(" interface to check whether the interface is successfully returned. If yes, the plugin has taken effect.")]),e._v(" "),t("p",[e._v("Success Rendering:")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/springboot-registry.png"}}),e._v(" "),t("p",[e._v("Failure rendering:")]),e._v(" "),t("MyImage",{attrs:{src:"/docs-img/springboot-registry-error.png"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);