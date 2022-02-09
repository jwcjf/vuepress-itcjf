(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{522:function(s,t,a){"use strict";a.r(t);var n=a(83),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker指令使用记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker指令使用记录"}},[s._v("#")]),s._v(" docker指令使用记录")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("Portainer")]),s._v("是Docker的图形化管理工具，提供状态显示面板、应用模板快速部署、容器镜像网络数据卷的基本操作（包括上传下载镜像，创建容器等操作）、事件日志显示、容器控制台操作、Swarm集群和服务等集中管理和操作、登录用户管理和控制等功能。功能十分全面，基本能满足中小型单位对容器管理的全部需求。")]),s._v(" "),a("li",[a("a",{attrs:{href:"http://docker.baoshu.red/dashboard/intro.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://docker.baoshu.red/dashboard/intro.html"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"容器生命周期管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器生命周期管理"}},[s._v("#")]),s._v(" 容器生命周期管理")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("run")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" IMAGE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("COMMAND"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ARG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[a("strong",[s._v("实例")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9528")]),s._v(":8080 -v /tmp:/data/applogs --name xxl-job-admin  -d xuxueli/xxl-job-admin:2.3.0\n")])])]),a("p",[a("strong",[s._v("OPTIONS说明")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" - -a stdin "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定标准输入输出内容类型，可选 STDIN/STDOUT/STDERR 三项；")]),s._v("\n -d "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后台运行容器，并返回容器ID；")]),s._v("\n -i "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以交互模式运行容器，通常与 -t 同时使用；")]),s._v("\n -P "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随机端口映射，容器内部端口**随机**映射到主机的端口")]),s._v("\n -p "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定端口映射，格式为：**主机(宿主)端口:容器端口**")]),s._v("\n -t "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为容器重新分配一个伪输入终端，通常与 -i 同时使用；")]),s._v("\n --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-lb"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为容器指定一个名称；")]),s._v("\n --dns "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定容器使用的DNS服务器，默认和宿主一致；")]),s._v("\n --dns-search example.com "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定容器DNS搜索域名，默认和宿主一致；")]),s._v("\n -h "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mars"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定容器的hostname；")]),s._v("\n -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ritchie"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置环境变量；")]),s._v("\n --env-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从指定文件读入环境变量；")]),s._v("\n --cpuset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0-2"')]),s._v(" or --cpuset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0,1,2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定容器到指定CPU运行；")]),s._v("\n -m  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置容器使用内存最大值；")]),s._v("\n --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bridge"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定容器的网络连接类型，支持 bridge/host/none/container: 四种类型；")]),s._v("\n --link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加链接到另一个容器；")]),s._v("\n --expose"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开放一个端口或一组端口；")]),s._v("\n --volume , -v "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定一个卷")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("start/stop/restart")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" start "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("容器ID或容器名"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动一个或多个已经被停止的容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("容器ID或容器名"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止一个运行中的容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("容器ID或容器名"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启容器")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("rm")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("容器ID或容器名"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除一个或多个容器")]),s._v("\n\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"容器操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器操作"}},[s._v("#")]),s._v(" 容器操作")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("ps")])])]),s._v(" "),a("p",[a("strong",[s._v("docker ps，列出容器")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[a("strong",[s._v("OPTIONS说明")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-a "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有的容器，包括未运行的。")]),s._v("\n-f "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据条件过滤显示的内容。")]),s._v("\n--format "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定返回值的模板文件。")]),s._v("\n-l "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示最近创建的容器。")]),s._v("\n-n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出最近创建的n个容器。")]),s._v("\n--no-trunc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不截断输出。")]),s._v("\n-q "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 静默模式，只显示容器编号。")]),s._v("\n-s "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示总的文件大小。")]),s._v("\n")])])]),a("ul",[a("li",[a("p",[a("strong",[s._v("logs")])]),s._v(" "),a("p",[a("strong",[s._v("docker logs，获取容器的日志")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" CONTAINER\n")])])]),a("p",[a("strong",[s._v("OPTIONS说明")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-f "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跟踪日志输出")]),s._v("\n--since "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示某个开始时间的所有日志")]),s._v("\n-t "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示时间戳")]),s._v("\n--tail "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅列出最新N条容器日志")]),s._v("\n")])])]),a("p",[a("strong",[s._v("实例")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs --since"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2016-07-01"')]),s._v(" --tail"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" mynginx\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"镜像仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像仓库"}},[s._v("#")]),s._v(" 镜像仓库")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("pull")])])]),s._v(" "),a("p",[a("strong",[s._v("docker pull，从镜像仓库中拉取或者更新指定镜像")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":TAG"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("@DIGEST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[a("strong",[s._v("实例")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#版本后不填默认，默认拉去latest版本，也就是最新版本，前提是该镜像存在latest版本，不存在不加版本号会提示找不到镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull xuxueli/xxl-job-admin:2.3.0\n")])])]),a("p",[a("strong",[s._v("OPTIONS说明")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-a "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取所有 tagged 镜像")]),s._v("\n--disable-content-trust "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略镜像的校验,默认开启")]),s._v("\n")])])]),a("h2",{attrs:{id:"本地镜像管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地镜像管理"}},[s._v("#")]),s._v(" 本地镜像管理")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("images")])]),s._v(" "),a("p",[a("strong",[s._v("docker images，列出本地镜像")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("REPOSITORY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[a("strong",[s._v("OPTIONS说明")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" -a "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#列出本地所有的镜像（含中间映像层，默认情况下，过滤掉中间映像层）")]),s._v("\n --digests "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示镜像的摘要信息；")]),s._v("\n -f "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示满足条件的镜像；")]),s._v("\n --format "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定返回值的模板文件；")]),s._v("\n --no-trunc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示完整的镜像信息；")]),s._v("\n -q "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只显示镜像ID。")]),s._v("\n")])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);