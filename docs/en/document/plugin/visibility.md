# Service Visibility

This document is mainly used for the instructions of [Visibility Module](https://github.com/huaweicloud/Sermant/tree/develop/sermant-plugins/sermant-service-visibility)

## Function

The service visibility module is mainly used to collect the contract information and blood relationship information of dubbo service and Spring Cloud service

## Catalog Description

- `config`: configuration file directory
- `service-visibility-plugin`: a service visibility plugin used to intercept the host service to collect contract information and blood relationship information
- `service-visibility-service`: service visibility service, which collects contract information and blood relationship information and sends the information to the backend through the message sending function of agentCore

## Configuration file content description
```yaml
visibility.config:
  StartFlag: false  #Service visibility collection switch
```

## Description of the sermant service visibility plug-in


**Use Background**

This service includes the collection of contract information and blood relationship information

- Contract information: Include the request path, the class and method to which the requested path belongs, and the parameter type and return type of the method.
- Blood relationship information: service provider information of the service (IP and port information of the service provider).

**Instructions**

- Modify the serial agentcore config monitoring configuration -- config.properties. Modify the version number, group name, switch and other information corresponding to the service

```yaml
agent.config.serviceBlackList=com.huaweicloud.sermant.implement.service.tracing.TracingServiceImpl # Modify the blacklist configuration to enable heartbeat and message sending
service.meta.application=default            # grouping information
service.meta.version=1.0.0                  # version number
service.meta.project=default                # namespace
service.meta.environment=                   # environment
service.meta.zone=                          # area information
visibility.service.flag=false               # Modify the service visibility reconnection switch (used to send all information to backend when reconnecting)
```

- Modify the configuration file -- config.properties of the service visibility.

```yaml
visibility.config:
  StartFlag: false # Service visibility collection switch. Collect information when it is true
```

- The host application mounts the java agent.
- Start the backend. After that, you can click <http://127.0.0.1:8900/#/consanguinity> To view blood relationship information, you can click <http://127.0.0.1:8900/#/contract> View contract information.