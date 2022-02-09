# 使用jasypt实现数据脱敏

## 先导入依赖

```xml
<!--配置文件加密-->
<dependency>
   <groupId>com.github.ulisesbocchio</groupId>
   <artifactId>jasypt-spring-boot-starter</artifactId>
   <version>3.0.4</version>
</dependency>
```

## 添加相关配置 
密钥是必填，解密数据格式可不设置，不配置默认为ENC(加密后的数据)
```yaml
jasypt:
  encryptor:
    # 秘钥，加密解密所需要的密钥
    password: yml_encryptor
    # 加密算法
    algorithm: PBEWithMD5AndDES
    # 需要解密格式前后缀,默认为ENC()
#    property:
#      prefix: "encryption["
#      suffix: "]"
```

**注意：jasypt.encryptor.password密钥的配置有三种方式**

``` java
// a、配置文件的方式：如上
// b、通过在启动服务上增加参数
java -jar -Djasypt.encryptor.password=密钥  springboot-jasypt-2.3.3.RELEASE.jar
// c、在启动类上增加
/** 配置加解密秘钥，与配置文件的密文分开放 */
System.setProperty("jasypt.encryptor.password", "密钥");
```
3.0.2版本开始更改了默认的加密算法为PBEWITHHMACSHA512ANDAES_256，使用此加密算法JDK版本1.9以上，或者在JDK中添加 JCE

## 使用JasyptUtils工具类生成密文

* 包路径 `org.jeecg.common.util.JasyptUtils` ，在main方法中，输入你要加密的数据，直接运行main方法即可
* 这里有几个注意的点，此工具类只是用于生成你需要的密文，所以密钥一定要与你配置文件中的一致，加密算法这里暂时定为 `PBEWithMD5AndDES`

```java
private static SimpleStringPBEConfig getSimpleStringPBEConfig(String secretKey) {
        SimpleStringPBEConfig config = new SimpleStringPBEConfig();
        // 密钥
        config.setPassword(secretKey);
        config.setPoolSize("1");
        // jasypt在版本3.0.2加密算法默认为 PBEWITHHMACSHA512ANDAES_256
        // PBEWITHHMACSHA512ANDAES_256，该加密算法，支持JDK1.9以上，
        // 解决方案：1、下载JCE，2、降低版本，3、更换加密算法（推荐此方式，也是当前再用的方式）
        // 设置加密算法
        config.setAlgorithm("PBEWithMD5AndDES");
        config.setKeyObtentionIterations("1000");
        config.setProviderName("SunJCE");
        config.setSaltGeneratorClassName("org.jasypt.salt.RandomSaltGenerator");
        config.setIvGeneratorClassName("org.jasypt.iv.RandomIvGenerator");
        config.setStringOutputType("base64");
        return config;
    }

    public static void main(String[] args) throws Exception {
        // 要加密的数据
        String message = "明文";

        // 此密钥必须要与配置文件中的密钥一致
        String password = "加密密钥";

        //一个同样的密码和秘钥，每次执行加密，密文都是不一样的。但是解密是没问题的。
        String jasyptEncrypt = stringEncryptor(password, message, true);
        System.out.println("加密后的值：" + jasyptEncrypt);

        String jasyptEncrypt1 = stringEncryptor(password, jasyptEncrypt, false);
        System.out.println("解密后的值：" + jasyptEncrypt1);
    }
```
