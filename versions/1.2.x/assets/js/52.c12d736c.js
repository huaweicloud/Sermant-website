(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{498:function(t,e,a){"use strict";a.r(e);var r=a(26),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tag-router"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tag-router"}},[t._v("#")]),t._v(" Tag Router")]),t._v(" "),e("p",[t._v("This document is used to introduce the usage of "),e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/tree/develop/sermant-plugins/sermant-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("tag router"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[t._v("#")]),t._v(" Function")]),t._v(" "),e("p",[t._v("The tag routing plug-in implements the configuration and management of routing rules between microservices in a non-intrusive way. In the case of multiple versions and instances of microservices, the label routing plug-in can manage the routing between services by configuring routing rules to achieve lossless upgrade, application dial test and other business purposes.")]),t._v(" "),e("h2",{attrs:{id:"parameter-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameter-configuration"}},[t._v("#")]),t._v(" Parameter Configuration")]),t._v(" "),e("h3",{attrs:{id:"sermant-agent-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sermant-agent-configuration"}},[t._v("#")]),t._v(" Sermant-agent Configuration")]),t._v(" "),e("p",[t._v("The routing plugin requires service metadata (version number, other metadata) to be configured in the Sermant-agent, refer to "),e("RouterLink",{attrs:{to:"/en/document/user-guide/sermant-agent.html#sermant-agent-parameter-configuration"}},[t._v("Sermant-agent User Manual")]),t._v(".")],1),t._v(" "),e("ul",[e("li",[e("p",[t._v("service.meta.version: version, used to identify the current version of the microservice.")])]),t._v(" "),e("li",[e("p",[t._v("service.meta.parameters: other metadata, used to tag the current microservice, like k1:v1,k2:v2.")])])]),t._v(" "),e("h2",{attrs:{id:"detailed-routing-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#detailed-routing-rules"}},[t._v("#")]),t._v(" Detailed Routing Rules")]),t._v(" "),e("p",[t._v("Router plugin based on dynamic configuration center for configuration release, configuration release can refer to "),e("RouterLink",{attrs:{to:"/en/document/user-guide/configuration-center.html#publish-configuration"}},[t._v("Configuration Center User's Manual")]),t._v(".")],1),t._v(" "),e("p",[t._v("The key value needs to be "),e("strong",[t._v("servicecomb.routeRule.${yourServiceName}")]),t._v(", ${yourServiceName} is the microservice name (i.e. the value of spring.application.name/dubbo.application.name configuration) of the target application.")]),t._v(" "),e("p",[t._v("The group needs to be configured to application level, i.e. "),e("strong",[t._v("app=${service.meta.application}&environment=${service.meta.environment}")]),t._v(", for the configuration of service.meta.application and service.meta.environment, please refer to "),e("RouterLink",{attrs:{to:"/en/document/user-guide/sermant-agent.html#sermant-agent-parameter-configuration"}},[t._v("Sermant-agent User Manual")]),t._v(".")],1),t._v(" "),e("p",[t._v("The content is the specific routing rule.")]),t._v(" "),e("h3",{attrs:{id:"examples-of-tag-routing-rules-and-descriptions-are-as-follows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-of-tag-routing-rules-and-descriptions-are-as-follows"}},[t._v("#")]),t._v(" Examples of tag routing rules and descriptions are as follows:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("precedence")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Priority, the higher the number, the higher the priority.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("match")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Request match rule. 0..N, not configured to indicate a match. Only one attachments/headers/args are allowed per match rule.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("attachments")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dubbo attachment matches. If it is an http header match, you need to configure it as headers.")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The attribute name is modified to a specific key when used. If multiple keys are configured, all key rules must match the request.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Configuration policy, The attribute value of key is equal to 1, detailed configuration policy refer to the configuration policy table.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("caseInsensitive")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# false: case-insensitive (default), true: case-sensitive. When configured to false, it will be converted to uppercase uniformly for comparison.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Routing Rules")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("weight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Weight")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.0.0 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Instance tagging. Instances that meet the tagging criteria are placed in this group.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("weight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Weight")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.0.1 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Instance tagging. Instances that meet the tagging criteria are placed in this group.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("precedence")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1 2 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Priority, the higher the number, the higher the priority.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("weight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Weight")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Instance tagging. Instances that meet the tagging criteria are placed in this group.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("weight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Weight")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Instance tagging. Instances that meet the tagging criteria are placed in this group.")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Parameter key")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Default value")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("priority")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("priority, the higher the number, the higher the priority.")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Empty")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("match")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Matching rules, support attachments (attachments parameter of the dubbo application)/headers (request header)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Empty")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("no")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("exact")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Configuration policy. For detailed configuration policy, refer to "),e("a",{attrs:{href:"#configuration-policy-table"}},[t._v("Configuration Policy Table")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Empty")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("no")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("route")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("routing rule, Including weight configuration and label information configuration")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Empty")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("weight")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("weight value")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Empty")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("tags")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Tag information. The instances that meet the tag conditions are placed in this group")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Empty")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")])])])]),t._v(" "),e("p",[e("strong",[t._v("Label routing rule interpretation")])]),t._v(" "),e("ul",[e("li",[t._v("80% of the requests with the id attribute value of 1 in the attachments information will be routed to the service instance with the version number of 1.0.1, and 20% will be routed to the service instance with the version number of 1.0.0. 80% of other requests will be routed to the service instance with the group name green, and 20% will be routed to the service instance with the group name red.")])]),t._v(" "),e("blockquote",[e("p",[t._v("Note: When adding a new configuration, please remove the comment, otherwise it will cause the addition to fail.")])]),t._v(" "),e("h3",{attrs:{id:"configuration-policy-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-policy-table"}},[t._v("#")]),t._v(" Configuration Policy Table")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Strategy Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Strategy Value")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Matching Rules")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Exact Match")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("exact")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("The parameter value is equal to the configured value")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Regex Match")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("regex")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Parameter values match regex expressions, Since some regex expressions (such as \\w and \\W, etc.) are case-sensitive, please choose caseInsensitive (case-sensitive or not) carefully when using regex match")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Not Equal Match")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("noEqu")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("The parameter value is not equal to the configuration value")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Not Less Match")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("noLess")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("The parameter value is not less than the configured value")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Not Greater Match")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("noGreater")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("The parameter value is not greater than the configured value")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Greater Match")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("greater")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("The parameter value is greater than the configured value")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Less Match")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("less")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("The parameter value is less than the configured value")])])])]),t._v(" "),e("h2",{attrs:{id:"supported-versions-and-limitations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions-and-limitations"}},[t._v("#")]),t._v(" Supported Versions and Limitations")]),t._v(" "),e("p",[t._v("Framework Supported:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("SpringCloud Edgware.SR2 - 2021.0.0")])]),t._v(" "),e("li",[e("p",[t._v("Dubbo 2.6.x - 2.7.x")])])]),t._v(" "),e("p",[t._v("Limitations:")]),t._v(" "),e("ul",[e("li",[t._v("Asynchronous invocation is not supported")])]),t._v(" "),e("h2",{attrs:{id:"operation-and-result-verification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#operation-and-result-verification"}},[t._v("#")]),t._v(" Operation and Result Verification")]),t._v(" "),e("p",[t._v("Take the Spring Cloud scenario as an example to demonstrate the use of label routing plug-ins.")]),t._v(" "),e("h3",{attrs:{id:"preparations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preparations"}},[t._v("#")]),t._v(" Preparations")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1),t._v("/Compile the sermant package")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://github.com/huaweicloud/Sermant-examples/tree/main/router-demo/spring-cloud-router-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1),t._v(" spring-cloud-router-demo source code")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://github.com/apache/servicecomb-service-center",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1),t._v(" ServiceComb, and start")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://zookeeper.apache.org/releases.html#download",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1),t._v(" Zookeeper, and start")])])]),t._v(" "),e("h3",{attrs:{id:"step-1-compile-and-package-the-spring-cloud-router-demo-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-compile-and-package-the-spring-cloud-router-demo-application"}},[t._v("#")]),t._v(" Step 1: Compile and package the spring-cloud-router-demo application")]),t._v(" "),e("p",[t._v("Execute the following command in the "),e("code",[t._v("${path}/Sermant-examples/router-demo/spring-cloud-router-demo")]),t._v(" directory:")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\nmvn clean package\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mac, linux")]),t._v("\nmvn clean package\n")])])]),e("p",[t._v("After successful packaging, you can get "),e("code",[t._v("spring-cloud-router-consumer.jar")]),t._v(" in "),e("code",[t._v("${path}/Sermant-examples/router-demo/spring-cloud-router-demo/spring-cloud-router-consumer/target")]),t._v(" , get "),e("code",[t._v("spring-cloud-router-provider.jar")]),t._v(" in "),e("code",[t._v("${path}/Sermant-examples/router-demo/spring-cloud-router-demo/spring-cloud-router-provider/target")]),t._v(" , get "),e("code",[t._v("spring-cloud-router-zuul.jar")]),t._v(" in "),e("code",[t._v("${path}/Sermant-examples/router-demo/spring-cloud-router-demo/spring-cloud-router-zuul/target")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[t._v("Note: path is the path where the spring-cloud-router-demo application is downloaded.")])]),t._v(" "),e("h3",{attrs:{id:"step-2-deploying-the-applications"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-deploying-the-applications"}},[t._v("#")]),t._v(" Step 2: Deploying the applications")]),t._v(" "),e("p",[t._v("(1) Start the zuul gateway")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb_service_enableSpringRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-cloud-router-zuul.jar\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mac, linux")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb_service_enableSpringRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-cloud-router-zuul.jar\n")])])]),e("p",[t._v("(2) Start the consumer")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb_service_enableSpringRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-cloud-router-consumer.jar\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mac, linux")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb_service_enableSpringRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-cloud-router-consumer.jar\n")])])]),e("p",[t._v("(3) Start the provider")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb_service_enableSpringRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-cloud-router-provider.jar\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mac, linux")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb_service_enableSpringRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-cloud-router-provider.jar\n")])])]),e("p",[t._v("(4) Start the provider with tag (version is 1.0.1, tag is group:gray.)")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb_service_enableSpringRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservice_meta_version")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".1 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservice_meta_parameters")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("group:gray "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dserver.port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8163")]),t._v(" -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-cloud-router-provider.jar\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mac, linux")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservicecomb_service_enableSpringRegister")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservice_meta_version")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".1 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dservice_meta_parameters")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("group:gray "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dserver.port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8163")]),t._v(" -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" spring-cloud-router-provider.jar\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("Description")]),t._v(":\nwhere path needs to be replaced with the actual installation path of Sermant.\nx.x.x represents a Sermant version number.")])]),t._v(" "),e("h3",{attrs:{id:"step-3-view-service-registration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-view-service-registration"}},[t._v("#")]),t._v(" Step 3: View service registration")]),t._v(" "),e("p",[t._v("Login "),e("a",{attrs:{href:"http://127.0.0.1:30103/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ServiceComb"),e("OutboundLink")],1),t._v(" In the background, check whether the service is registered successfully.")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/router-registry.png"}}),t._v(" "),e("h3",{attrs:{id:"step-4-publish-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-4-publish-configuration"}},[t._v("#")]),t._v(" Step 4: Publish configuration")]),t._v(" "),e("p",[t._v("Configure routing rules. Refer to the "),e("RouterLink",{attrs:{to:"/en/document/user-guide/configuration-center.html#publish-configuration"}},[t._v("Dynamic Configuration Center User Manual")]),t._v(" for configuration publishing.")],1),t._v(" "),e("p",[t._v("The key value is "),e("strong",[t._v("servicecomb.routeRule.spring-cloud-router-provider")]),t._v(", the group is "),e("strong",[t._v("app=default&environment=")]),t._v(", and the content is the specific routing rule, as follows.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("precedence")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("match")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("headers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("caseInsensitive")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gray\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("weight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("precedence")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("match")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("headers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exact")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("caseInsensitive")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.0.1\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("weight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Label routing rule interpretation")])]),t._v(" "),e("ul",[e("li",[t._v("The request with the id attribute value of 1 in the request header information will be routed to the service instance with the group name of gray, and the request with the id attribute value of 2 will be routed to the service instance with the version number of 1.0.1.")])]),t._v(" "),e("p",[t._v("Take Zookeeper as an example, and use the command line tools provided by Zookeeper for configuration publishing.")]),t._v(" "),e("ol",[e("li",[t._v("Execute the following command in the "),e("code",[t._v("${path}/bin/")]),t._v(" directory to create the node "),e("code",[t._v("/app=default&environment=")])])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# linux mac")]),t._v("\n./zkCli.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-server")]),t._v(" localhost:2181 create /app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\nzkCli.cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-server")]),t._v(" localhost:2181 create /app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Note: "),e("code",[t._v("${path}")]),t._v(" is the installation directory of zookeeper")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Execute the following command in the "),e("code",[t._v("${path}/bin/")]),t._v(" directory to create the node "),e("code",[t._v("/app=default&environment=/servicecomb.routeRule.spring-cloud-router-provider")]),t._v(" and set the data.")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# linux mac")]),t._v("\n./zkCli.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-server")]),t._v(" localhost:2181 create /app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/servicecomb.routeRule.spring-cloud-router-provider "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"---\n- precedence: 1\n  match:\n    headers:\n      id:\n        exact: '1'\n        caseInsensitive: false\n  route:\n    - tags:\n        group: gray\n      weight: 100\n- precedence: 2\n  match:\n    headers:\n      id:\n        exact: '2'\n        caseInsensitive: false\n  route:\n    - tags:\n        version: 1.0.1\n      weight: 100\"")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\nzkCli.cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-server")]),t._v(" localhost:2181 create /app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/servicecomb.routeRule.spring-cloud-router-provider "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"---\n- precedence: 1\n  match:\n    headers:\n      id:\n        exact: '1'\n        caseInsensitive: false\n  route:\n    - tags:\n        group: gray\n      weight: 100\n- precedence: 2\n  match:\n    headers:\n      id:\n        exact: '2'\n        caseInsensitive: false\n  route:\n    - tags:\n        version: 1.0.1\n      weight: 100\"")]),t._v("\n")])])]),e("h3",{attrs:{id:"verification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verification"}},[t._v("#")]),t._v(" Verification")]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/router-result.png"}}),t._v(" "),e("p",[t._v("After starting the above 4 applications and configuring the routing rules correctly, when accessing "),e("code",[t._v("http://127.0.0.1:8170/consumer/hello/rest")]),t._v(" through the http client tool, we can find that when the request header is id: 1 or id: 2, it will be routed to the provider of version 1.0.1, and when the above conditions are not met When the above condition is not met, it will visit the provider with version 1.0.0.")])],1)}),[],!1,null,null,null);e.default=s.exports}}]);