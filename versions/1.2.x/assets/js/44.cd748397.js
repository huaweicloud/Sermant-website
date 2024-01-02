(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{490:function(t,e,i){"use strict";i.r(e);var n=i(26),r=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[t._v("#")]),t._v(" Plugin")]),t._v(" "),e("p",[t._v("This article mainly introduces the plugins currently supported by Sermant.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/en/document/plugin/dynamic-config.html"}},[t._v("Dynamic Configuration Plugin")]),t._v(" is based on the Sermant configuration center capability. During running, the configuration can be updated to the host application. The priority of the plugin is higher than that of the environment variable configuration.")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/en/document/plugin/flowcontrol.html"}},[t._v("FlowControl Plugin")]),t._v(" is based on the "),e("a",{attrs:{href:"(https://github.com/resilience4j)"}},[t._v("resilience4j")]),t._v(' framework and implements non-intrusive flow control based on the "traffic" entry point. Currently, '),e("strong",[t._v("Traffic Limiting, Circuit Breaker, Bulkhead, Error Injection, and Retry")]),t._v(" are supported. In addition, rules can be dynamically configured in the configuration center and take effect in real time.")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/en/document/plugin/graceful.html"}},[t._v("Graceful Online/Offline Plugin")]),t._v(" provides "),e("strong",[t._v("warm-up")]),t._v(" and "),e("strong",[t._v("graceful offline")]),t._v(" capabilities to solve the problem that instances that have just been launched are accessed by a large amount of traffic during initialization, resulting in request blocking, and even downtime and instance offline, due to registration discovery delays Refresh problem, unable to notify upstream in time, resulting in two problems of traffic loss or error.")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/en/document/plugin/loadbalancer.html"}},[t._v("Loadbalancer Plugin")]),t._v(" is based on the configuration in the configuration center, the loadbalance rules of the host application can be dynamically modified without intrusion.")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/en/document/plugin/monitor.html"}},[t._v("Monitor Plugin")]),t._v(" can monitor the usage of hardware resources such as CPU, memory, disk IO and network IO of the server where the host application is located, as well as the usage of the host application Java virtual machine and the Druid database connection pool used by it.")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/en/document/plugin/router.html"}},[t._v("Tag Router Plugin")]),t._v(" can manage the routing between services by configuring routing rules when there are multiple versions and instances of microservices, so as to achieve business purposes such as non-destructive upgrades and application dialing tests.")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/en/document/plugin/service-registry.html"}},[t._v("Registry Plugin")]),t._v(" allows microservices that have been registered with popular registration centers, such as Eureka, Nacos, ZooKeeper, and Consul, to be registered with "),e("a",{attrs:{href:"https://github.com/apache/servicecomb-service-center",target:"_blank",rel:"noopener noreferrer"}},[t._v("ServiceComb"),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"https://nacos.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nacos"),e("OutboundLink")],1),t._v(" in a non-intrusive manner. It also supports Dubbo and SpringCloud frameworks.")],1),t._v(" "),e("h3",{attrs:{id:"compatibility-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-list"}},[t._v("#")]),t._v(" Compatibility List")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Plugin")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Microservice Framework Supported")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Configuration Center Supported")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Registration Center Supported")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/en/document/plugin/dynamic-config.html"}},[t._v("Dynamic Configuration Plugin")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SpringBoot 1.5.x - 2.6.2"),e("br"),t._v("spring-cloud-starter-alibaba-nacos-config 1.5.0.RELEASE+"),e("br"),t._v("spring-cloud-starter-zookeeper-config 1.2.0.RELEASE+")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("servicecomb-kie"),e("br"),t._v("ZooKeeper")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/en/document/plugin/flowcontrol.html"}},[t._v("FlowControl Plugin")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SpringBoot 1.2.x - 2.6.x "),e("br"),t._v(" SpringWebMvc 4.1.3.RELEASE - 5.3.x"),e("br"),t._v("Dubbo 2.6.x-2.7.x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("servicecomb-kie"),e("br"),t._v("ZooKeeper")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/en/document/plugin/graceful.html"}},[t._v("Graceful Online/Offline Plugin")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SpringBoot 1.5.x - 2.6.2 "),e("br"),t._v(" SpringCloud Edgware.SR2 - 2021.0.0")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("servicecomb-kie"),e("br"),t._v("ZooKeeper")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/en/document/plugin/loadbalancer.html"}},[t._v("Loadbalancer Plugin")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SpringBoot 1.5.x - 2.6.2 "),e("br"),t._v(" SpringCloud Edgware.SR2 - 2021.0.0")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("servicecomb-kie"),e("br"),t._v("ZooKeeper")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/en/document/plugin/monitor.html"}},[t._v("Monitor Plugin")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("ALL")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/en/document/plugin/router.html"}},[t._v("Tag Router Plugin")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SpringBoot 1.5.x - 2.6.2 "),e("br"),t._v("SpringCloud Edgware.SR2 - 2021.0.0"),e("br"),t._v("Dubbo 2.6.x-2.7.x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("servicecomb-kie")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("servicecomb-service-center")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/en/document/plugin/service-registry.html"}},[t._v("Registry Plugin")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SpringBoot 1.5.x - 2.6.2 "),e("br"),t._v(" SpringCloud Edgware.SR2 - 2021.0.0"),e("br"),t._v("Dubbo 2.6.x-2.7.x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("servicecomb-service-center")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/en/document/plugin/springboot-registry.html"}},[t._v("SpringBoot Registration Plugin")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SpringBoot 1.5.10.Release+")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("servicecomb-kie"),e("br"),t._v("ZooKeeper")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Zookeeper 3.4.x+")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/en/document/plugin/visibility.html"}},[t._v("Service visibility Plugin")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SpringBoot 1.5.10+"),e("br"),t._v("Dubbo 2.6.x-2.7.x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ZooKeeper")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);