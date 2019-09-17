package org.lanqiao.config;

import org.springframework.stereotype.Repository;

import java.io.FileWriter;
import java.io.IOException;

/* *
 *类名：AlipayConfig
 *功能：基础配置类
 *详细：设置帐户有关信息及返回路径
 *修改日期：2017-04-05
 *说明：
 *以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己网站的需要，按照技术文档编写,并非一定要使用该代码。
 *该代码仅供学习和研究支付宝接口使用，只是提供一个参考。
 */
@Repository
public class AlipayConfig {

//↓↓↓↓↓↓↓↓↓↓请在这里配置您的基本信息↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    // 应用ID,您的APPID，收款账号既是您的APPID对应支付宝账号
    public static String app_id = "2016101400680627";

    // 商户私钥，您的PKCS8格式RSA2私钥
    public static String merchant_private_key = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDakyDQhmi8jW46pI8xC3N5LFeHHTw0EYVRnlQj5UtghGH/cv0FLlvakTNWq7s3G9PAtPE4RJYno/MJH5sZ1q6cJXyjvg2ReDqq/8p1nn2tC6Eh2xpE6KO3kn6BlIAt04HuqdpjT3v6WXfqNyR8BRVOBuSy+sd6t2JAsxRKxZXcI6xDMEt2LTQfuC5SnU4jKxhM4JUXwiw+BDfkV6+mDGkU/gXwybNHoB4ap/hnpULrMzRsgwI0ru144HvxLrNQ3+Ci2qX+JX292JpM/MRfA3w/7nr5N/Z5yk57CQB73kYgelJKKnvvhPZyrQKmBPtmxHGhzXU9NQHMFVCWlJZqZIa7AgMBAAECggEAPUbEC1GzKTEpNu2Naz1/mPfybeGnUB2dV51gj1OoBx3170yIXJx7idHtJ54rdS6q9bqEabbotaJD70naDKtf9kyYHbuZSDABmpDtbH4LU6kP+lLXkXv68ery5lcAfFhwc71QiUjuQ+gzMwlUhCRUrbRHB1pA9ElXFTZfOPsdoUImVhwEC/ygVQHMaV1i8QQpN68TN42AcfZAES68g8gz7ryREqtPEB2BcMycW1QlYAmiq9imtTdj/z+CMdf3KsUFQxGZv7eUyjKVNJEm4XgoCvD5PInPivuk5MihCE8aaU+uOBAssOs6yIONB0B+fVz5vNnzmAL8btQTw0/5uEH8UQKBgQDssP7E1URdzF1gvgPdC98WLZaVEupCHrqCbgiiUBiQSuKhPTtEhPd9irU76hUKlNBRczwboWvo7aOra+8wzg3DhMQPTCcyPPFnLtYGWcbln6WGKo0Q3/qUsbbchReYilZLVXK58X8Lb5YDvFRGSlceMuBytTlzI5HU9lz2X9RrIwKBgQDsZ8n4U2buS9tOSCYt/uJOOqZ98OiUOs+RRVXXiAT9L0HWqP1OH0tnhz0x1tQGSSnKjjix2k6pxbIH4yTFc4FXQr/JGitga7gSLUrEncQcv58FXfkMdtX0qdLqljOApSx2pn1drwyYp6Aw9vYrZPjlcdsuyNIuupB174Ci3dObiQKBgQCVFedjk/G8Iz2t8gH8+b1K+uweeguUGkbgYO6PTmQqfwDBDxCF2DsLmJMPaiJWx+VvaGY0ATk3PngZQaMn2qJQxQ+5kv4dZsWneJjW5zWg7S4VlDfGqU3s2wOTY0G5k2lHikr5VGPxkBetwrJSlADLxMAbgIrvOzhgK83iYfoqgQKBgFow4qodz5g8UofUGNTVeCtWTuyfe2wJ3+TRagWXfCfH3rtxr2odoFv4CY25IxzeztXbWp/n5Lj6lohRzVaTUZYj/h1QIZpgnlI4+1x1wDsjlBytFHX/5HK6U6Bx+2YqHgOKUyvpu8mFsiTcI2C83gRTYsa/kQiI3tJPtGjubmvZAoGAYwnyu3fAE4nLtmSSIW5/aU7HrPKgLmAmjVhq3lUuni2BJ5IrVGeawhSiEA3schN9IDoGSVgUrqvESiEbfcWYnjL4tZPRVjH4XbSnCh+w5MaJYTnG01e2lZIuJtce6H5U0T5AttC4CFJTtq0pK9MCFSzvpZaxrse4U3jqUb7P53E=";

    // 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
    public static String alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhZ2XEsvyaAZZak6LSG/l+Y3WvRsWRF/T+EAs3IJb4gCjBhxiQUnapblGpggFDaxKHP/jzdqLER0zOroYA7TliTBKXU7zEUuPbF8D3KtTCGoNGLmqaEOrqLyeKjrhsF7f1IOEikafYoWxa2wQr6/gO63PT6cRrv2W2l0wdkupGNeOfNewukgD689Kjp8PoCkAdx3rRnjyRbOBmDG1RYyQvx6rPMd9DfK2QehzBgPZ+oIUvxVl4pll/HVdhXXwjmSqdRusgPWda56MwWlrTLETKEibpnt+2yyMbjFLFKq+MsweZLUnUDM3J7GZE3PrwyXhbRcE+/jnSbKjlwBaNwnB8QIDAQAB";

    // 服务器异步通知页面路径  需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
    public static String notify_url = "http://localhost:8080/notify_url";

    // 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
    public static String return_url = "http://localhost:8080/return_url";

    // 签名方式
    public static String sign_type = "RSA2";

    // 字符编码格式
    public static String charset = "utf-8";

    // 支付宝网关
    public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";

    // 支付宝网关
    public static String log_path = "E:\\";


//↑↑↑↑↑↑↑↑↑↑请在这里配置您的基本信息↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    /**
     * 写日志，方便测试（看网站需求，也可以改成把记录存入数据库）
     *
     * @param sWord 要写入日志里的文本内容
     */
    public static void logResult(String sWord) {
        FileWriter writer = null;
        try {
            writer = new FileWriter(log_path + "alipay_log_" + System.currentTimeMillis() + ".txt");
            writer.write(sWord);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (writer != null) {
                try {
                    writer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}

