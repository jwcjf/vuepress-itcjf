# xxl-job使用文档

## 启动调度中心

1. 拉取代码`https://github.com/xuxueli/xxl-job.git`，执行初始胡脚本`doc/db/tables_xxl_job.sql`

2. 启动调度中心有两种

   * 一是通过源代码SpringBoot方式启动，修改数据库配置信息，运行`XxlJobAdminApplication.java`类

   * 二是通过Docker启动（推荐）

     * 拉取镜像`docker pull xuxueli/xxl-job-admin:2.3.0`

     * 启动容器，`-e PARAMS` 后面为实际使用得MySQL

       ```shell
       docker run -e PARAMS="--spring.datasource.url=jdbc:mysql://127.0.0.1:3306/xxl_job?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&serverTimezone=Asia/Shanghai --spring.datasource.username=root --spring.datasource.password=123456" -p 9527:8080 -v /tmp:/data/applogs --name xxl-job-admin  -d xuxueli/xxl-job-admin:2.3.0
       ```

       

## 执行器启动

1. 在需要添加定时任务得服务中增加`xxl-job-core`依赖，增加如下配置

    **依赖**

     ```xml
     <!-- https://mvnrepository.com/artifact/com.xuxueli/xxl-job-core -->
     <dependency>
         <groupId>com.xuxueli</groupId>
         <artifactId>xxl-job-core</artifactId>
         <version>2.3.0</version>
     </dependency>
     ```

   **配置信息**

     ```yaml
     # xxl-job配置
     xxl:
       job:
         accessToken: ''
         admin:
           addresses: http://localhost:8080/xxl-job-admin # 调度中心地址
         executor:
           address: ''
           appname: srbmp-job # 执行器名
           ip: '' # 执行器IP地址，为空默认拿当前服务IP地址
           logpath: /data/applogs/xxl-job/jobhandler # 日志存放地址
           logretentiondays: 30 # 日志存放时间
           port: 9999 # 对调度中心暴露端口
     ```

   **增加配置类**

     ```java
     package org.jeecg.modules.job.config;
     
     import com.xxl.job.core.executor.impl.XxlJobSpringExecutor;
     import org.slf4j.Logger;
     import org.slf4j.LoggerFactory;
     import org.springframework.beans.factory.annotation.Value;
     import org.springframework.context.annotation.Bean;
     import org.springframework.context.annotation.Configuration;
     
     /**
      * xxl-job config
      *
      * @author xuxueli 2017-04-28
      */
     @Configuration
     public class XxlJobConfig {
         private Logger logger = LoggerFactory.getLogger(XxlJobConfig.class);
     
         @Value("${xxl.job.admin.addresses}")
         private String adminAddresses;
     
         @Value("${xxl.job.accessToken}")
         private String accessToken;
     
         @Value("${xxl.job.executor.appname}")
         private String appname;
     
         @Value("${xxl.job.executor.address}")
         private String address;
     
         @Value("${xxl.job.executor.ip}")
         private String ip;
     
         @Value("${xxl.job.executor.port}")
         private int port;
     
         @Value("${xxl.job.executor.logpath}")
         private String logPath;
     
         @Value("${xxl.job.executor.logretentiondays}")
         private int logRetentionDays;
     
         @Bean
         public XxlJobSpringExecutor xxlJobExecutor() {
             logger.info(">>>>>>>>>>> xxl-job config init.");
             XxlJobSpringExecutor xxlJobSpringExecutor = new XxlJobSpringExecutor();
             xxlJobSpringExecutor.setAdminAddresses(adminAddresses);
             xxlJobSpringExecutor.setAppname(appname);
             xxlJobSpringExecutor.setAddress(address);
             xxlJobSpringExecutor.setIp(ip);
             xxlJobSpringExecutor.setPort(port);
             xxlJobSpringExecutor.setAccessToken(accessToken);
             xxlJobSpringExecutor.setLogPath(logPath);
             xxlJobSpringExecutor.setLogRetentionDays(logRetentionDays);
     
             return xxlJobSpringExecutor;
         }
     
     }
     ```

2. 添加定时任务

   这里暂时只写`Java`方式，有两种

   **BEAN模式（类形式）**

     ```java
     // 1、开发一个继承自"com.xxl.job.core.handler.IJobHandler"的JobHandler类，实现其中任务方法。
     // 2、手动通过如下方式注入到执行器容器。
     XxlJobExecutor.registJobHandler("demoJobHandler", new DemoJobHandler());
     ```

   **BEAN模式（方法形式）**
    ``` java
     Bean模式任务，支持基于方法的开发方式，每个任务对应一个方法。
     每个任务只需要开发一个方法，并添加`@XxlJob`注解即可，更加方便、快速。支持自动扫描任务并注入到执行器容器。
     可参考Sample示例执行器中的 "com.xxl.job.executor.service.jobhandler.SampleXxlJob"
     ```

## srbmp项目中使用xxl-job

### 跨平台HTTP任务

* 运行模式为BEAN，`JobHandler`为 `httpJobHandler`，目前`httpJobHandler`任务只支持GET、POST请求

* 任务参数格式

  ```shell
  url: http://127.0.0.1:8080/test/sayHello # 接口完整得URL
  method: get # GET方式：参数 `?key=value` 拼接到URL后面，POST方式（JSON格式）：data: {"name":"jiang","key":"name"}
  data: content # post请求才需要
  ```

![](/img/srbmp/xxl-job使用文档-srbmp-http任务.png)

### MySQL函数Job任务

1. 无参MySQL函数，运行模式为BEAN，`JobHandler`为 `mysqlCallFunctionJobHandler`

   **参数格式**

     ```shell
     method:testCall # testCall 为实际的MySQL函数
     ```

     ![](/img/srbmp/xxl-job使用文档-srbmp-MySQL无参任务.png)

2. 有参MySQL函数，运行模式为BEAN，`JobHandler`为 `mysqlCallFunctionAndParamsJobHandler`

   **参数格式**

     ```shell
     method:testCall # testCall为实际的MySQL函数名
     params: 10, "jiang" # 多个参数以逗号隔开，特别需要注意的是，参数顺序一定要与定义的MySQL函数参数顺序一致，且为字符串数据要用双引号包裹
     ```

     ![](/img/srbmp/xxl-job使用文档-srbmp-MySQL有参任务.png)