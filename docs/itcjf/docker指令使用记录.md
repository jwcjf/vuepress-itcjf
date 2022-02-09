# docker指令使用记录

* **Portainer**是Docker的图形化管理工具，提供状态显示面板、应用模板快速部署、容器镜像网络数据卷的基本操作（包括上传下载镜像，创建容器等操作）、事件日志显示、容器控制台操作、Swarm集群和服务等集中管理和操作、登录用户管理和控制等功能。功能十分全面，基本能满足中小型单位对容器管理的全部需求。
* [http://docker.baoshu.red/dashboard/intro.html](http://docker.baoshu.red/dashboard/intro.html)

## 容器生命周期管理

* **run**

   ```shell
   docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
   ```
  **实例**
   ``` shell
   docker run -p 9528:8080 -v /tmp:/data/applogs --name xxl-job-admin  -d xuxueli/xxl-job-admin:2.3.0
   ```
  **OPTIONS说明**
  ``` shell
   - -a stdin # 指定标准输入输出内容类型，可选 STDIN/STDOUT/STDERR 三项；
   -d # 后台运行容器，并返回容器ID；
   -i # 以交互模式运行容器，通常与 -t 同时使用；
   -P # 随机端口映射，容器内部端口**随机**映射到主机的端口
   -p # 指定端口映射，格式为：**主机(宿主)端口:容器端口**
   -t # 为容器重新分配一个伪输入终端，通常与 -i 同时使用；
   --name="nginx-lb" # 为容器指定一个名称；
   --dns 8.8.8.8 # 指定容器使用的DNS服务器，默认和宿主一致；
   --dns-search example.com # 指定容器DNS搜索域名，默认和宿主一致；
   -h "mars" # 指定容器的hostname；
   -e username="ritchie" # 设置环境变量；
   --env-file=[] # 从指定文件读入环境变量；
   --cpuset="0-2" or --cpuset="0,1,2" # 绑定容器到指定CPU运行；
   -m  #设置容器使用内存最大值；
   --net="bridge" # 指定容器的网络连接类型，支持 bridge/host/none/container: 四种类型；
   --link=[] # 添加链接到另一个容器；
   --expose=[] # 开放一个端口或一组端口；
   --volume , -v # 绑定一个卷
   ```

* **start/stop/restart**
  ``` shell
  docker start `容器ID或容器名` # 启动一个或多个已经被停止的容器
  docker stop `容器ID或容器名` # 停止一个运行中的容器
  docker restart `容器ID或容器名` # 重启容器
  ```

* **rm**
  ``` shell
  docker rm `容器ID或容器名` # 删除一个或多个容器

  ```

## 容器操作

* **ps**

 **docker ps，列出容器**

```shell
docker ps [OPTIONS]
```
**OPTIONS说明**
``` shell
-a # 显示所有的容器，包括未运行的。
-f # 根据条件过滤显示的内容。
--format # 指定返回值的模板文件。
-l # 显示最近创建的容器。
-n # 列出最近创建的n个容器。
--no-trunc # 不截断输出。
-q # 静默模式，只显示容器编号。
-s # 显示总的文件大小。
```

* **logs**

  **docker logs，获取容器的日志**

  ```shell
  docker logs [OPTIONS] CONTAINER
  ```

  **OPTIONS说明**
  ``` shell
  -f # 跟踪日志输出
  --since # 显示某个开始时间的所有日志
  -t # 显示时间戳
  --tail # 仅列出最新N条容器日志
  ```
  **实例**
  ```shell
  docker logs --since="2016-07-01" --tail=10 mynginx
  ```


## 镜像仓库

* **pull**

**docker pull，从镜像仓库中拉取或者更新指定镜像**

  ```shell
  docker pull [OPTIONS] NAME[:TAG|@DIGEST]
  ```

  **实例**

  ```shell
  #版本后不填默认，默认拉去latest版本，也就是最新版本，前提是该镜像存在latest版本，不存在不加版本号会提示找不到镜像
  docker pull xuxueli/xxl-job-admin:2.3.0
  ```

  **OPTIONS说明**
  ```shell
  -a # 拉取所有 tagged 镜像
  --disable-content-trust # 忽略镜像的校验,默认开启
  ```

## 本地镜像管理

* **images**

  **docker images，列出本地镜像**

  ```shell
  docker images [OPTIONS] [REPOSITORY[:TAG]]
  ```

  **OPTIONS说明**
  ``` shell
   -a #列出本地所有的镜像（含中间映像层，默认情况下，过滤掉中间映像层）
   --digests #显示镜像的摘要信息；
   -f #显示满足条件的镜像；
   --format #指定返回值的模板文件；
   --no-trunc #显示完整的镜像信息；
   -q #只显示镜像ID。
   ```