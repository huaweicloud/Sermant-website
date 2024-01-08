# 版本升级兼容性1

本文档主要介绍Sermant各版本之间的兼容性（API）、JAVA版本兼容性、低版本向高版本升级中可能会影响正常运行的差异点及影响，并标明变更方式。

## 字节码增强API兼容性

基于Sermant进行服务治理能力开发所涉及的字节码增强 API 包括类匹配(ClassMatcher)、方法匹配(MethodMatcher)、拦截器(Interceptor)、拦截声明(InterceptDeclarer)、字节码增强(ExecuteContext)等，上述 API保持**向前兼容（在升级 Sermant 框架时无需修改原有插件代码）**，当前最新版本对以往版本开发插件兼容情况：

| LATEST版本（1.3.0） | 类匹配 | 方法匹配 | 拦截器 |        拦截声明         | 字节码增强 |
| :-----------------: | :----: | :------: | :----: | :---------------------: | :--------: |
|        1.2.1        |   ✅    |    ✅     |   ✅    | ✅ **部分 API 标注废弃** |     ✅      |
|        1.2.0        |   ✅    |    ✅     |   ✅    | ✅ **部分 API 标注废弃** |     ✅      |
|        1.1.0        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|     1.1.0-beta      |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        1.0.7        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        1.0.6        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        1.0.5        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        1.0.4        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        1.0.3        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        1.0.2        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        1.0.1        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        1.0.0        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        0.0.9        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        0.0.8        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        0.0.7        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        0.0.6        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        0.0.5        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        0.0.4        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        0.0.3        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        0.0.2        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |
|        0.0.1        |   ✅    |    ✅     |   ✅    |            ✅            |     ✅      |

## 核心服务及其他API兼容性

基于Sermant进行服务治理能力开发所涉及的关键 API 包括配置管理、核心服务管理、动态配置服务、心跳服务、日志等，上述 API保持**向前兼容（在升级 Sermant 框架时无需修改原有插件代码）**，当前最新版本对以往版本开发插件兼容情况：

| LATEST版本（1.2.1） | 配置管理 | 服务管理 | 动态配置 | 心跳服务 | 日志 |
| :-----------------: | :------: | :------: | :------: | :------: | :--: |
|        1.2.0        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        1.1.0        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|     1.1.0-beta      |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        1.0.6        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        1.0.5        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        1.0.4        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        1.0.3        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        1.0.2        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        1.0.1        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        1.0.0        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        0.0.9        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        0.0.8        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        0.0.7        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        0.0.6        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        0.0.5        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        0.0.4        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        0.0.3        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        0.0.2        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |
|        0.0.1        |    ✅     |    ✅     |    ✅     |    ✅     |  ✅   |

## JAVA版本兼容性

| JAVA版本（LTS） |   框架兼容性   |    插件兼容性    |
| :-------------: | :------------: | :--------------: |
|      JAVA8      |       ✅        |        ✅         |
|     JAVA11      |       ✅        |        ✅         |
|     JAVA17      |       ✅        |        ✅         |
|     JAVA19      | **（未验证）** |  **（未验证）**  |
|     JAVA21      | **（未验证）** |  **（未验证）**  |

- **在JAVA17版本启动Sermant时需附加额外JVM命令：**
```shell
--add-opens java.base/java.lang=ALL-UNNAMED
--add-opens java.base/java.net=ALL-UNNAMED
--add-opens java.base/java.math=ALL-UNNAMED
--add-opens java.base/sun.net.www=ALL-UNNAMED
--add-opens java.base/sun.net.www.protocol.http=ALL-UNNAMED
```

## 1.2.x版本 向 1.3.x版本升级

1.3.x版本相对1.2.x版本使用方式无变化，无需做任何配置的修改。建议您使用最新版本的Sermant Agent以及Sermant Backend、Sermant Injector以获得更好的体验。

## 1.1.x版本 向 1.2.x版本升级

### 一、Backend使用变化

#### 差异

**1.2.x**不再维护Backend-Lite，相关能力已在Backend中完全支持并且有效果更佳的UI。

#### 影响

使用新版的Sermant Agent时，继续使用Sermant Backend-Lite可能会导致无法上报心跳以及事件数据。

#### 变更

使用**1.2.x**版本时需要使用对应的Sermant Backend。

### 二、构建产物新增目录

#### 差异

- **1.1.x**版本目录如下

```shell
.
├── agent
│   ├── common
│   ├── config
│   ├── core
│   ├── implement
│   ├── pluginPackage
│   └── sermant-agent.jar
```

- **1.2.x**版本目录如下，其中god包中为Sermant的核心接口所在目录，提取到god包中用于通过BootstrapClassloader加载，从而具有全局视角

```shell
.
├── agent
│   ├── common
│   ├── config
│   ├── core
│   ├── god # 新增目录
│   ├── implement
│   ├── pluginPackage
│   └── sermant-agent.jar
```

#### 影响

通过Sermant Release产物获取完整产物则无影响，升级新版本时在如自行拷贝，会导致无法运行，出现如下错误：

```shell
"God directory is not exist or is not directory."
```

#### 变更

> 注：升级新版本时在目录拷贝过程，避免丢失god目录！

如出现上述问题，检查运行目录中是否缺少 ` agent/god `，并确认目录是否为空，如果缺失目录或目录为空，则需要从源码构建产物或Release产物中获取。

## 1.0.x版本 向 1.1.x版本升级

### 一、核心服务开关控制配置变化

#### 差异

- **1.0.x**版本核心服务控制配置，通过黑名单机制控制核心服务加载，来达到开启和关闭核心服务的目的。

- **1.1.x**版本核心服务控制配置，针对各核心服务新增开关（默认为关），更易于控制。

```properties
agent.service.heartbeat.enable=false
agent.service.gateway.enable=false
agent.service.tracing.enable=false
agent.service.visibility.enable=false
agent.service.inject.enable=true
agent.service.dynamic.config.enable=true
```

#### 影响

版本升级后，不进行配置更新，会导致核心服务无法正常开启，例如默认关闭的动态配置服务，心跳服务等。

#### 变更

需要将 `agent.config.serviceBlackList`配置替换为针对各核心服务的独立配置，按照 `差异` 中**1.1.x**版本进行配置，如需开启某一核心服务，则配置为`true`。

### 二、Bytebuddy日志&字节码输出配置变化

#### 差异

- **1.0.x**版本中的Bytebuddy日志输出控制配置 ` agent.config.isShowEnhanceLogEnable` ，字节码输出配置 ` agent.config.enhancedClassOutputPath`，此配置为空则关闭字节码输出，如果配置路径则开启字节码输出到指定路径。
- **1.1.x**版本中的Bytebuddy日志输出控制配置` agent.config.isShowEnhanceLog`，通过` agent.config.isOutputEnhancedClasses`控制字节码输出配置开启和关闭，默认输出到` agent/enhancedClasses`目录下，以时间戳区分不同批次的字节码增强结果，如果需要指定自定义输出路径，则通过` agent.config.enhancedClassesOutputPath`来配置。

#### 影响

版本升级后，不进行配置更新，会导致Bytebuddy日志无法正常输出，增强后的字节码无法正常输出。

#### 变更

- 需要将 ` agent.config.isShowEnhanceLogEnable` 配置修改为` agent.config.isShowEnhanceLog`，并且配置其值为` true`来正常开启Bytebuddy日志输出。
- 需要将 ` agent.config.enhancedClassOutputPath`配置修改为` agent.config.isOutputEnhancedClasses`，并且配置其值为` true`来正常开启增强后的字节码输出。如需指定自定义目录，还需添加配置` agent.config.enhancedClassesOutputPath`，其值为自定义路径。

### 三、连接Backend配置变化

#### 差异

- **1.0.x**版本中针对连接Backend时的配置

    ```properties
    # backend config
    backend.nettyIp=127.0.0.1
    backend.nettyPort=6888
    ```

- **1.1.x**版本中针对连接**Backend**时的配置，变更配置前缀为 ` gateway`，更贴合实现逻辑，避免被理解为通过该配置项来控制Backend组件，并且针对该能力提供了更多的可配置项

    ```properties
    # gateway config
    gateway.nettyIp=127.0.0.1
    gateway.nettyPort=6888
    gateway.nettyConnectTimeout=5000
    gateway.nettyWriteAndReadWaitTime=60000
    gateway.sendInternalTime=10
    gateway.initReconnectInternalTime=5
    gateway.maxReconnectInternalTime=180
    ```


#### 影响

版本升级后，不进行配置更新，会导致无法连接Backend。

#### 变更

需要将**1.0.x**版本中的Backend配置修改为**1.1.x**版本中的Gateway配置

### 四、标签路由配置模型变化

#### 差异

- **1.0.x**版本仅支持基于流量的路由规则配置

- **1.1.x**版本中新增了路由规则的类型标识（**flow**、**tag**、**lane**），可单独配置也可同时配置，其中**flow**类型为**1.0.x**版本中的机遇流量的路由规则配置模型

#### 影响

**1.1.x**版本中，针对标签路由进行了配置模型的重构，提升了配置的灵活性和丰富度，版本升级后将，无法解析低版本的配置

#### 变更

参照[标签路由](../plugin/router.md)使用手册进行变更，本文不再赘述。

