# Sermant Agent使用手册

Sermant Agent是提供字节码增强基础能力及各类服务治理能力的核心组件。[Sermant使用介绍](readme.md)中描述的产品目录`sermant-agent-x.x.x/agent`目录下内容即为Sermant Agent组件的各模块。Sermant Agent的主体为Sermant提供了字节码增强基础能力及开发框架，同时支持心跳功能、动态配置功能、日志功能、事件上报等公共基础能力，当前已支持`premain`和`agentmain`两种方式启动。

Sermant Agent插件目录中则由各插件提供了标签路由、限流降级、双注册等服务治理能力，当前已支持在宿主服务运行时动态安装和卸载服务治理插件（需要插件支持动态安装和卸载）。

## 支持版本

Sermant Agent支持Linux、Windows，基于JDK 1.8开发，建议使用JDK 1.8版本及以上版本。

- [HuaweiJDK 1.8](https://gitee.com/openeuler/bishengjdk-8) / [OpenJDK 1.8](https://github.com/openjdk/jdk) / [OracleJDK 1.8](https://www.oracle.com/java/technologies/downloads/)

## Agent启动

#### premain方式

通过为宿主服务配置`-javaagent`指令来利用`premain`方式启动Sermant Agent ，基于[快速开始](../QuickStart.md)所构建环境，执行以下命令启动Sermant Agent:

```shell
# linux mac
java -javaagent:${path}/sermant-agent-x.x.x/agent/sermant-agent.jar -jar spring-provider.jar

# windows
java -javaagent:${path}\sermant-agent-x.x.x\agent\sermant-agent.jar -jar spring-provider.jar
```

查看`spring-provider.jar`的日志开头是否包含以下内容：

```shell
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Loading god library into BootstrapClassLoader.
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Building argument map by agent arguments.
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Loading core library into SermantClassLoader.
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Loading sermant agent, artifact is: default
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Load sermant done, artifact is: default
```

若日志如上正常输出，则说明Sermant Agent启动成功，打开浏览器并导航到`http://localhost:8900`，可以看到已经有Sermant Agent实例，如下图所示效果：

<MyImage src="/docs-img/backend_sermant_info.jpg"></MyImage>

#### agentmain方式

- 基于[快速开始](../QuickStart.md)所构建环境，首先启动宿主服务`spring-provider.jar`

```shell
java -jar spring-provider.jar
```

- 通过`agentmain`方式启动，需要借助`Attach API`来完成，首先通过[附件 AgentLoader.java](#附件)创建一个Java文件，通过javac编译：

```shell
# Linux、MacOS
javac -cp ./:$JAVA_HOME/lib/tools.jar AgentLoader.java

# Windows 已正确配置JAVA所需环境变量
javac -cp "%JAVA_HOME%\lib\tools.jar" AgentLoader.java -encoding utf-8
```

- 编译完成后，将在目录下生成`AgentLoader.class`文件，使用如下指令运行`AgentLoader`


```shell
# Linux、MacOS
java -cp ./:$JAVA_HOME/lib/tools.jar AgentLoader

# Windows 已正确配置JAVA所需环境变量
java AgentLoader
```

```shell
# 运行指令根据所使用操作系统进行选择，此处以Linux、MacOS指令编写
$ java -cp ./:$JAVA_HOME/lib/tools.jar AgentLoader
请选择需要使用Sermant Agent的Java进程：
0: xxxxx AgentLoader # xxxxx为进程号，此处模糊
1: xxxxx spring-provider.jar # xxxxx为进程号，此处模糊
2: xxxxx sermant-backend-1.2.0.jar # xxxxx为进程号，此处模糊
请输入需要使用Sermant Agent的Java进程序号：1 # 选择spring-provider的进程序号
您选择的进程 ID 是：xxxxx # xxxxx为进程号，此处模糊
请输入Sermant Agent所在目录（默认采用该目录下sermant-agent.jar为入口）：${path}/sermant-agent-x.x.x/agent # 填充Sermant Agent所在目录
请输入向Sermant Agent传入的参数(可为空，默认配置参数agentPath)： # 配置Sermant Agent参数，此处可为空
```

按照指引填充完成后在`spring-provider.jar`日志中可以看到以下内容：

```shell
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Loading god library into BootstrapClassLoader.
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Building argument map by agent arguments.
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Loading core library into SermantClassLoader.
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Loading sermant agent, artifact is: default
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Load sermant done, artifact is: default
```

若日志如上正常输出，则说明Sermant Agent读取启动指令成功并开始执行安装，打开浏览器并导航到`http://localhost:8900`，可以看到已经有Sermant Agent实例，如下图所示效果：

<MyImage src="/docs-img/sermant-agent-agentmain-start.png"></MyImage>

## Agent卸载

> 注：为避免部分基于premain启动方式开发的服务治理能力在卸载时引发不可预知的异常，Sermant Agent对卸载进行限制，通过agentmain方式启动的Sermant Agent才支持卸载，通过premain方式启动的Sermant Agent不支持。

在通过[agentmain方式](#agentmain方式)启动后，可以对Sermant Agent进行卸载，再次运行`AgentLoader`，并通过传入参数下发卸载Sermant Agent的指令`command=UNINSTALL-AGENT`：

```shell
# 运行指令根据所使用操作系统进行选择，此处以Linux、MacOS指令编写
$ java -cp ./:$JAVA_HOME/lib/tools.jar AgentLoader
请选择需要使用Sermant Agent的Java进程：
0: xxxxx AgentLoader # xxxxx为进程号，此处模糊
1: xxxxx spring-provider.jar # xxxxx为进程号，此处模糊
2: xxxxx sermant-backend-1.2.0.jar # xxxxx为进程号，此处模糊
请输入需要使用Sermant Agent的Java进程序号：1 # 选择spring-provider的进程序号
您选择的进程 ID 是：xxxxx # xxxxx为进程号，此处模糊
请输入Sermant Agent所在目录（默认采用该目录下sermant-agent.jar为入口）：${path}/sermant-agent-x.x.x/agent # 填充Sermant Agent所在目录
请输入向Sermant Agent传入的参数(可为空，默认配置参数agentPath)：command=UNINSTALL-AGENT # 此处通过传入参数下发卸载指令
```

按照指引填充完成后在`spring-provider.jar`日志中可以看到以下内容：

```shell
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Building argument map by agent arguments.
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Sermant for artifact is running, artifact is: default
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Execute command: UNINSTALL-AGENT
```

若日志如上正常输出，打开浏览器并导航到`http://localhost:8900`，可以看到已经有Sermant Agent实例已经下线（**状态为灰色**），则说明Sermant Agent卸载成功，如下图所示效果：

<MyImage src="/docs-img/sermant-agent-agentmain-uninstall-success.png"></MyImage>

> 注：该能力可以在开发态通过调用sermant-agentcore-core所提供 [AgentCoreEntrance](https://github.com/huaweicloud/Sermant/blob/develop/sermant-agentcore/sermant-agentcore-core/src/main/java/com/huaweicloud/sermant/core/AgentCoreEntrance.java)::uninstall()接口来实现

## 动态安装插件

在通过[agentmain方式](#agentmain方式)启动后，可以动态的安装服务治理插件（需要插件支持动态安装和卸载），再次运行`AgentLoader`，并通过传入参数下发动态安装插件的指令`command=INSTALL-PLUGINS:pluginA/pluginB`：

> 注：可以一次安装多个插件，插件名通过 '/' 进行分隔，pluginA、pluginB为插件名，需要按照实际实际填写，本示例使用[monitor](../plugin/monitor.md)插件

```shell
# 运行指令根据所使用操作系统进行选择，此处以Linux、MacOS指令编写
$ java -cp ./:$JAVA_HOME/lib/tools.jar AgentLoader
请选择需要使用Sermant Agent的Java进程：
0: xxxxx AgentLoader # xxxxx为进程号，此处模糊
1: xxxxx spring-provider.jar # xxxxx为进程号，此处模糊
2: xxxxx sermant-backend-1.2.0.jar # xxxxx为进程号，此处模糊
请输入需要使用Sermant Agent的Java进程序号：1 # 选择spring-provider的进程序号
您选择的进程 ID 是：xxxxx # xxxxx为进程号，此处模糊
请输入Sermant Agent所在目录（默认采用该目录下sermant-agent.jar为入口）：${path}/sermant-agent-x.x.x/agent # 填充Sermant Agent所在目录
请输入向Sermant Agent传入的参数(可为空，默认配置参数agentPath)：command=INSTALL-PLUGINS:monitor # 此处通过传入参数下发安装插件指令 本示例以monitor进行演示
```

按照指引填充完成后在`spring-provider.jar`日志中可以看到以下内容：

```shell
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Building argument map by agent arguments.
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Sermant for artifact is running, artifact is: default
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Execute command: INSTALL-PLUGINS:monitor # 本示例以monitor进行演示
```

若日志如上正常输出，则说明插件安装成功，打开浏览器并导航到`http://localhost:8900`，可以看到插件已被成功安装，插件列可以看到当前安装的插件，如下图所示效果：

**动态安装插件前**

<MyImage src="/docs-img/sermant-agent-dynamic-install-plugin-before.png"></MyImage>

**动态安装插件后**

<MyImage src="/docs-img/sermant-agent-dynamic-install-plugin-success.png"></MyImage>

> 注：该能力可以在开发态通过调用sermant-agentcore-core所提供[PluginManager](https://github.com/huaweicloud/Sermant/blob/develop/sermant-agentcore/sermant-agentcore-core/src/main/java/com/huaweicloud/sermant/core/plugin/PluginManager.java)::install(Set pluginNames)方法来实现

### 重复安装插件
该能力的推出主要因为在一些场景中，插件的生效范围有动态扩展的诉求，主要是扩展增强的类和方法，并且需要保证已经生效的部分不会受到影响，在这种情况下，就不能通过卸载插件，调整配置后重新安装来解决此类场景的问题。例如故障注入场景中，针对不同的故障可能需要对不同的类进行字节码增强，并且需要按照测试方案中的编排逐渐注入各式各样的故障场景，在这种情况下，我们就不能通过卸载再重新安装的方式来完成这项工作，只能将负责故障注入的插件安装多次来解决这个问题，这就要用到重复安装插件的能力，重复安装插件将会复用静态资源，Sermant内部通过插件管理来隔离重复安装的插件。

#### 如何实施插件的重复安装？
如需重复安装插件，在执行动态插件安装时需要将插件名后通过`#`号为本次安装的插件添加一个编码，如：
```shell
command=INSTALL-PLUGINS:pluginA#FIRST
```
通过这种方式，插件就可以重复安装。

> 注：当卸载插件时，如果想卸载通过携带编码安装的插件，在卸载指令中也需要配置携带编码的插件名。


## 动态卸载插件

在通过[agentmain方式](#agentmain方式)启动并[动态安装插件](#动态安装插件)后，可以动态的卸载服务治理插件（需要插件支持动态安装和卸载），再次运行`AgentLoader`，并通过传入参数下发动态卸载插件的指令`command=UNINSTALL-PLUGINS:pluginA/pluginB`：

> 注：可以一次卸载多个插件，插件名通过 '/' 进行分隔，pluginA、pluginB为插件名，需要按照实际实际填写，本示例使用[monitor](../plugin/monitor.md)插件

```shell
# 运行指令根据所使用操作系统进行选择，此处以Linux、MacOS指令编写
$ java -cp ./:$JAVA_HOME/lib/tools.jar AgentLoader
请选择需要使用Sermant Agent的Java进程：
0: xxxxx AgentLoader # xxxxx为进程号，此处模糊
1: xxxxx spring-provider.jar # xxxxx为进程号，此处模糊
2: xxxxx sermant-backend-1.2.0.jar # xxxxx为进程号，此处模糊
请输入需要使用Sermant Agent的Java进程序号：1 # 选择spring-provider的进程序号
您选择的进程 ID 是：xxxxx # xxxxx为进程号，此处模糊
请输入Sermant Agent所在目录（默认采用该目录下sermant-agent.jar为入口）：${path}/sermant-agent-x.x.x/agent # 填充Sermant Agent所在目录
请输入向Sermant Agent传入的参数(可为空，默认配置参数agentPath)：command=UNINSTALL-PLUGINS:monitor # 此处通过传入参数下发安装插件指令
```

按照指引填充完成后在`spring-provider.jar`日志中可以看到以下内容：

```shell
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Building argument map by agent arguments.
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Sermant for artifact is running, artifact is: default
[xxxx-xx-xxTxx:xx:xx.xxx] [INFO] Execute command: UNINSTALL-PLUGINS:monitor #本示例以monitor进行演示
# 该日志会展示本次卸载中恢复了多少被字节码增强过的类
[Byte Buddy] REDEFINE BATCH #0 [1 of 1 type(s)]
[Byte Buddy] REDEFINE COMPLETE 1 batch(es) containing 1 types [0 failed batch(es)]
[Byte Buddy] REDEFINE COMPLETE 1 batch(es) containing 0 types [0 failed batch(es)]
```

若日志如上正常输出，打开浏览器并导航到`http://localhost:8900`，可以看到插件已被成功卸载，插件列可以看到当前安装的插件，如下图所示效果：

**动态卸载插件前**

<MyImage src="/docs-img/sermant-agent-dynamic-uninstall-plugin-before.png"></MyImage>

**动态卸载插件后**

<MyImage src="/docs-img/sermant-agent-dynamic-uninstall-plugin-success.png"></MyImage>

> 注：该能力可以在开发态通过调用sermant-agentcore-core所提供[PluginManager](https://github.com/huaweicloud/Sermant/blob/develop/sermant-agentcore/sermant-agentcore-core/src/main/java/com/huaweicloud/sermant/core/plugin/PluginManager.java)::uninstall(Set pluginNames)方法来实现

## 增强信息查询
在sermant通过任意方式启动成功后，可以通过运行`AgentLoader`，并通过传入参数下发查询增强信息的指令`command=CHECK_ENHANCEMENT`：

> 注：增强信息查询将以**INFO级别**打印到log中，如使用该功能，请事先配置日志级别，修改方式见[日志配置](../developer-guide/log-func.md#配置)

```shell
# 运行指令根据所使用操作系统进行选择，此处以Linux、MacOS指令编写
$ java -cp ./:$JAVA_HOME/lib/tools.jar AgentLoader
请选择需要使用Sermant Agent的Java进程：
0: xxxxx AgentLoader # xxxxx为进程号，此处模糊
1: xxxxx spring-provider.jar # xxxxx为进程号，此处模糊
2: xxxxx sermant-backend-1.2.0.jar # xxxxx为进程号，此处模糊
请输入需要使用Sermant Agent的Java进程序号：1 # 选择spring-provider的进程序号
您选择的进程 ID 是：xxxxx # xxxxx为进程号，此处模糊
请输入Sermant Agent所在目录（默认采用该目录下sermant-agent.jar为入口）：${path}/sermant-agent-x.x.x/agent # 填充Sermant Agent所在目录
请输入向Sermant Agent传入的参数(可为空，默认配置参数agentPath)：command=CHECK_ENHANCEMENT # 此处通过传入参数下发查询增强信息指令
```

按照指引填充完成后在sermant日志中可以看到以下内容：
```shell
xxxx-xx-xx xx:xx:xx.xxx [INFO] [com.huaweicloud.sermant.core.command.CheckEnhancementsCommandExecutor] [execute:42] [Attach Listener] ---------- PLUGINS ----------
xxxx-xx-xx xx:xx:xx.xxx [INFO] [com.huaweicloud.sermant.core.command.CheckEnhancementsCommandExecutor] [execute:44] [Attach Listener] test-plugin-A:1.0.0
xxxx-xx-xx xx:xx:xx.xxx [INFO] [com.huaweicloud.sermant.core.command.CheckEnhancementsCommandExecutor] [execute:44] [Attach Listener] test-plugin-B:1.0.0
xxxx-xx-xx xx:xx:xx.xxx [INFO] [com.huaweicloud.sermant.core.command.CheckEnhancementsCommandExecutor] [execute:46] [Attach Listener] ---------- ENHANCEMENT ----------
xxxx-xx-xx xx:xx:xx.xxx [INFO] [com.huaweicloud.sermant.core.command.CheckEnhancementsCommandExecutor] [execute:58] [Attach Listener] test-plugin-A:1.0.0
xxxx-xx-xx xx:xx:xx.xxx [INFO] [com.huaweicloud.sermant.core.command.CheckEnhancementsCommandExecutor] [execute:65] [Attach Listener] xxxxx.xxxx.TestClassA#testFunctionA(boolean,java.lang.String,java.lang.String,java.lang.String)@sun.misc.Launcher$AppClassLoader@5c647e05 [xxxx.xxxx.TestInterceptorA]
xxxx-xx-xx xx:xx:xx.xxx [INFO] [com.huaweicloud.sermant.core.command.CheckEnhancementsCommandExecutor] [execute:65] [Attach Listener] xxxxx.xxxx.TestClassB#testFunctionB(boolean,java.lang.String,java.lang.String,java.lang.String)@sun.misc.Launcher$AppClassLoader@5c647e05 [xxxx.xxxx.TestInterceptorB,xxxx.xxxx.TestInterceptorC]
```

打印的内容格式为：
```shell
---------- PLUGINS ----------
\\ 已安装的插件列表，格式为 插件名名:插件版本
test-plugin-A:1.0.0
test-plugin-B:1.0.0
---------- ENHANCEMENT ----------
\\ 成功完成增强处理的插件，格式为 插件名:插件版本
test-plugin-A:1.0.0
\\ 该插件成功完成增强处理的信息
\\ 格式为 增强的类全限定名#增强的方法名(入参类型)@类加载器信息 [拦截器列表]
xxxxx.xxxx.TestClassA#testFunctionA(boolean,java.lang.String,java.lang.String,java.lang.String)@sun.misc.Launcher$AppClassLoader@5c647e05 [xxxx.xxxx.TestInterceptorA]
xxxxx.xxxx.TestClassB#testFunctionB(boolean,java.lang.String,java.lang.String,java.lang.String)@sun.misc.Launcher$AppClassLoader@5c647e05 [xxxx.xxxx.TestInterceptorB,xxxx.xxxx.TestInterceptorC]
```

## 配置规范

Sermant项目properties配置文件和各插件的中yaml配置文件都支持下列几种参数配置方式，以配置文件中的`gateway.nettyIp=127.0.0.1`为例：

1. 直接修改配置文件，即在配置文件中修改`gateway.nettyIp=127.0.0.1`
2. 通过应用启动时的-D参数配置，即`-Dgateway.nettyIp=127.0.0.1`
3. 通过环境变量配置，即在环境变量中新增`gateway.nettyIp=127.0.0.1`
4. 通过Sermant Agent启动参数配置，即`-javaagent:sermant-agent.jar=gateway.nettyIp=127.0.0.1`

以上四种方式，配置生效的优先级从高到低排列为：4 > 3 > 2 > 1。

其中，后三种参数配置值的获取方式支持多种格式，以配置文件中的`gateway.nettyIp=127.0.0.1`为例，下列配置格式都可识别：

```properties
gateway.nettyIp=127.0.0.1
gateway_nettyIp=127.0.0.1
gateway-nettyIp=127.0.0.1
GATEWAY.NETTYIP=127.0.0.1
GATEWAY_NETTYIP=127.0.0.1
GATEWAY-NETTYIP=127.0.0.1
gateway.nettyip=127.0.0.1
gateway_nettyip=127.0.0.1
gateway-nettyip=127.0.0.1
gateway.netty.ip=127.0.0.1
gateway_netty_ip=127.0.0.1
gateway-netty-ip=127.0.0.1
GATEWAY.NETTY.IP=127.0.0.1
GATEWAY_NETTY_IP=127.0.0.1
GATEWAY-NETTY-IP=127.0.0.1
```

Sermant Agent将从上至下依次检索各项配置值是否通过启动参数、环境变量、-D参数来配置。

> **注意：** 通过容器场景的env修改配置，请将点（.）可用下划线（_）替代！！！
> 
> 原因：因为一些OS镜像无法识别带 . 的env

举个例子：如需想通过pod的env修改配置文件中的`gateway.nettyIp=127.0.0.1`则

``` yaml
  env:
  - name: "gateway_nettyIp"
    value: "127.0.0.2"
```

### 附件

#### AgentLoader.java

```java
import com.sun.tools.attach.AgentInitializationException;
import com.sun.tools.attach.AgentLoadException;
import com.sun.tools.attach.AttachNotSupportedException;
import com.sun.tools.attach.VirtualMachine;
import com.sun.tools.attach.VirtualMachineDescriptor;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;

public class AgentLoader {
    private AgentLoader() {
    }

    /**
     * AgentLoader 的main方法
     */
    public static void main(String[] args)
        throws IOException, AttachNotSupportedException, AgentLoadException, AgentInitializationException {
        List<VirtualMachineDescriptor> vmDescriptors = VirtualMachine.list();

        if (vmDescriptors.isEmpty()) {
            System.out.println("没有找到 Java 进程");
            return;
        }

        System.out.println("请选择需要使用Sermant Agent的Java进程：");
        for (int i = 0; i < vmDescriptors.size(); i++) {
            VirtualMachineDescriptor descriptor = vmDescriptors.get(i);
            System.out.println(i + ": " + descriptor.id() + " " + descriptor.displayName());
        }

        // 读取用户输入的序号
        BufferedReader userInputReader = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("请输入需要使用Sermant Agent的Java进程序号：");
        int selectedProcessIndex = Integer.parseInt(userInputReader.readLine());

        if (selectedProcessIndex < 0 || selectedProcessIndex >= vmDescriptors.size()) {
            System.out.println("无效的进程序号");
            return;
        }

        // 连接到选定的虚拟机
        VirtualMachineDescriptor selectedDescriptor = vmDescriptors.get(selectedProcessIndex);
        System.out.println("您选择的进程 ID 是：" + selectedDescriptor.id());

        VirtualMachine vm = VirtualMachine.attach(selectedDescriptor);

        // 获取Sermant Agent目录
        System.out.print("请输入Sermant Agent所在目录（默认采用该目录下sermant-agent.jar为入口）：");
        String agentPath = userInputReader.readLine();

        // 获取传入Sermant Agent的参数
        System.out.print("请输入向Sermant Agent传入的参数(可为空，默认配置参数agentPath)：");
        String agentArgs = "agentPath=" + agentPath + "," + userInputReader.readLine();

        // 关闭资源
        userInputReader.close();

        // 启动Sermant Agent
        vm.loadAgent(agentPath + "/sermant-agent.jar", agentArgs);
        vm.detach();
    }
}
```

