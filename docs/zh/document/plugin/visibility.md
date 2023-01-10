# 服务可见性

本文档主要用于[Visibility模块](https://github.com/huaweicloud/Sermant/tree/develop/sermant-plugins/sermant-service-visibility)的使用说明

## 功能

服务可见性模块主要用于采集dubbo服务以及Spring Cloud服务的契约信息以及血缘关系信息

## 目录说明

- `config`: 配置文件目录
- `service-visibility-plugin`: 服务可见性插件，用于拦截宿主服务采集契约信息以及血缘关系信息
- `service-visibility-service`: 服务可见性服务，将采集契约信息以及血缘关系信息通过agentCore的消息发送功能，将信息发送给backend

## 配置文件内容说明

```yaml
visibility.config:
  startFlag: false        # 服务可见性采集开关
```

## sermant-service-visibility插件说明

**使用背景**

本服务包含契约信息以及血缘关系信息的采集服务

- 契约信息：包含请求路径、已经请求路径所属的类、方法以及方法的参数类型、返回类型。
- 血缘关系信息：服务的服务提供者信息（服务提供者的IP、端口信息）。

**使用说明**

- 修改sermant-agentcore-config监控配置--config.properties。修改服务对应的版本号、组名、开关等信息
```yaml
agent.config.serviceBlackList=com.huaweicloud.sermant.implement.service.tracing.TracingServiceImpl # 修改黑名单配置,开启心跳和消息发送
service.meta.application=default            # 实例分组信息
service.meta.version=1.0.0                  # 实例版本号
service.meta.project=default                # 实例命名空间
service.meta.environment=                   # 实例环境
service.meta.zone=                          # 实例区域信息
visibility.service.flag=false               # 修改服务可见性重连开关（用于backend重连时将全部信息发送给backend）
```

- 修改sermant-service-visibility的配置文件--config.properties。
```yaml
visibility.config:
  startFlag: false        # 服务可见性采集开关。为true时采集信息
```

- 宿主应用挂载java agent。
- 启动backend。之后可以通过<http://127.0.0.1:8900/#/consanguinity>查看血缘关系信息，可以通过<http://127.0.0.1:8900/#/contract>查看契约信息。