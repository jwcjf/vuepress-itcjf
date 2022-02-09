# APIJSON使用

## 环境准备

1. **[下载项目](https://github.com/APIJSON/APIJSON-Demo)，可下载压缩包或者克隆项目**

   ![](/img/srbmp/APIJSON使用-环境备注-下载项目.png)

2. **导入项目，`/APIJSON-Java-Server`该目录下的为Java版本**  
   [APIJSONDemo](https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-Java-Server/APIJSONDemo) 为 `APIJSON + SpringBoot `的最简单的初级使用 Demo  
   [APIJSONBoot](https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-Java-Server/APIJSONBoot) 为 `APIJSON + SpringBoot` 的接近生产环境成品的 Demo  
   [APIJSONFinal](https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-Java-Server/APIJSONFinal) 为 `APIJSON + JFinal` 的接近生产环境成品的 Demo  
   [APIJSONDemo-Druid](https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-Java-Server/APIJSONDemo-Druid) 为 `APIJSON + SpringBoot + Druid `的简单初级使用 Demo  
   [APIJSONDemo-HikariCP](https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-Java-Server/APIJSONDemo-HikariCP) 为 `APIJSON + SpringBoot + HikariCP `的简单初级使用 Demo  
   [APIJSONBoot-MultiDataSource](https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-Java-Server/APIJSONBoot-MultiDataSource) 为` APIJSON + SpringBoot + Druid + HikariCP` 的接近生产环境成品的多数据源 Demo，
   并且把[APIAuto](https://github.com/TommyLemon/APIAuto) 的源码放到了 [src/main/resources/static](https://github.com/APIJSON/APIJSON-Demo/tree/master/APIJSON-Java-Server/APIJSONBoot-MultiDataSource/src/main/resources/static) 目录，
   可以用浏览器打开本地主页 [http://localhost:8080](http://localhost:8080/) 来调试

3. **导入配置表**

   创建一个新的数据库或者与现有系统数据库耦合到一起（个人推荐前者，与现有系统数据库耦合会导致表过多），执行`MySQL`目录下的`sys.sql`脚本即可，`single` 目录下的`SQL`脚本是为单个表的

## 启动项目
* **APIJSONDemo基础项目**
1. 找到`DemoSQLConfig` 配置类，修改`MySQL`连接配置，`DEFAULT_SCHEMA` 连接数据库名，这个连接的数据库必须包含`APIJSON` 所需表，下面的连接URL不需要带数据库名

   ![](/img/srbmp/APIJSON使用-启动项目-基础项目.png)

2. 找到`DemoApplication` 启动类，运行，看到如下日志表示启动成功，也可以通过测试[`http://localhost:8080/get/{}`](http://localhost:8080/get/{})接口测试，返回code为200表示连接成功，如果是404请注意关闭防火墙

   ![](/img/srbmp/APIJSON使用-启动项目-启动成功.png)

   ```json
   {
       "ok": true,
       "code": 200,
       "msg": "success",
       "sql:generate|cache|execute|maxExecute": "0|0|0|200",
       "depth:count|max": "1|5",
       "time:start|duration|end": "1638241166455|1|1638241166456"
   }
   ```

3. 启动后默认端口为8080，如需修改可在`DemoApplication` 中 `customize` 方法中修改

* **APIJSONBoot，接近正式使用环境**

​	与基础本启动流程一致

* **APIJSONBoot-MultiDataSource， 多数据源版**

1. **启动流程与基础版一致**

2. **该版本可能存在存在依赖问题，有两种方式解决。一是将同目录下的`lib`目录下的`jar`添加到`Build Path`中，二是将`pom` 文件中相关依赖放开，注意使用`maven` 方式可能存在版本与实际代码不一致问题，需要注意`DemoController` ,版本不一致此类需要做一些调整，依据错误提示该即可**

   ![](/img/srbmp/APIJSON使用-启动项目-maven依赖.png)

3. **多数据源使用方式**

   * `application.yml`中添加多数据源配置，注意连接URL不要加数据库名

   * `DemoDataSourceConfig` 中添加与`application.yml`对应的数据源

   * 接口查询动态切换数据源

     1. 多个数据库在同一服务器下，只需要在查询参数中添加`@schema`字段即可，该字段是在表名前面增加数据库前缀
   
        ```json
        {
            "SouCampaignMain": {
                "id": "1434695625865207810",
                "@schema":"sou_module"
            }
        }
        ```
   
     2. 跨服务器使用多数据源，使用`@datasource`字段，指名使用那个数据源连接，在配合 `@schema` 使用，就能实现跨服务的动态数据源切换
   
        ```json
        {
            "SouCampaignMain": {
                "id": "1434695625865207810",
                "@schema":"sou_module",
                "@datasource": "druid"
            }
        }
        ```
      **注意：`@schema` 和 `@datasource` 都是在表名层级下**

## 使用

* 调式接口时建议使用`Postman`，数据库建议开启忽略大小写，`APIJSON`启动会去校验`access`表权限信息，连接`MySQL`时 `access` 会变成首字母大写`Access`，如果`MySQL`没有开启忽略大小写，则是提示找不到表
* 需要在`APIJSON`中增加一张表控制，就需要在`access`表添加一个权限数据，否则会提示无权访问，`access` 中 `name` 为表的实际名字， `alias`为别名，查询某个表数据时，使用别名，别名命名规则和Java的一致，驼峰规则（强制性的），`APIJSON`对命名风格这块限制的很死，如果没有设置别名，那实际的表名就必须按照驼峰规则命名，其余`get`、`post`等接口权限可以按照默认值设置或者根据实际项目需求来去设置



