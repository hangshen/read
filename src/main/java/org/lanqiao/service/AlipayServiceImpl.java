package org.lanqiao.service;

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.domain.AlipayTradeRefundModel;
import com.alipay.api.domain.AlipayTradeWapPayModel;
import com.alipay.api.internal.util.AlipaySignature;
import com.alipay.api.request.AlipayTradeRefundRequest;
import com.alipay.api.request.AlipayTradeWapPayRequest;
import org.lanqiao.config.AlipayConfig;
import org.lanqiao.service.AlipayService;
//import com.imooc.utils.JsonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * @Author Sakura
 * @Date 9/9/2019
 **/
@Service
public class AlipayServiceImpl implements AlipayService {

    @Autowired
    private AlipayConfig alipayConfig;

    //订单名称
    private static final String ORDER_NAME = "自定义订单名称";

    //和支付宝签约的产品码 固定值
    private static final String PRODUCTCODE = "QUICK_WAP_WAY";

    //支付成功标识(可退款的签约是TRADE_SUCCESS，不可退款的签约是TRADE_FINISHED)
    private static final String TRADE_SUCCESS = "TRADE_SUCCESS";

    @Override
    public String create(String orderId, String returnUrl) {


        AlipayClient client = new DefaultAlipayClient(alipayConfig.notify_url, alipayConfig.app_id, alipayConfig.merchant_private_key, alipayConfig.gatewayUrl, alipayConfig.charset, alipayConfig.alipay_public_key,alipayConfig.sign_type);
        AlipayTradeWapPayRequest alipay_request=new AlipayTradeWapPayRequest();
        // 封装请求支付信息
        AlipayTradeWapPayModel model= new AlipayTradeWapPayModel();
        //订单编号，不可重复
        model.setOutTradeNo(orderId);
        //订单名称
        model.setSubject(ORDER_NAME);
        //订单金额
        model.setTotalAmount("0.01");
        //产品吗
        model.setProductCode(PRODUCTCODE);
        alipay_request.setBizModel(model);
        //支付成功后跳转的地址
        alipay_request.setReturnUrl(returnUrl);
        //异步通知地址
        alipay_request.setNotifyUrl(alipayConfig.notify_url);
        // form表单生产
        String result = "";
        try {
            // 调用SDK生成表单
            result = client.pageExecute(alipay_request).getBody();
        } catch (AlipayApiException e) {
//            log.info("【支付宝支付】支付失败 error={}", e);
        }
        return result;
    }

    @Override
    public void notify(HttpServletRequest request) {

        Map<String, String> map = new HashMap<>();
        Map<String, String[]> requestParams = request.getParameterMap();
        for (Iterator<String> iter = requestParams.keySet().iterator(); iter.hasNext(); ) {
            String name = iter.next();
            String[] values = requestParams.get(name);
            String valueStr = "";
            for (int i = 0; i < values.length; i++) {
                valueStr = (i == values.length - 1) ? valueStr + values[i] : valueStr + values[i] + ",";
            }
            map.put(name, valueStr);
        }
        //验证签名
        boolean signVerified = false;
        try {
            signVerified = AlipaySignature.rsaCheckV1(map, alipayConfig.alipay_public_key, alipayConfig.charset, alipayConfig.sign_type);
        } catch (com.alipay.api.AlipayApiException e) {
//            log.info("[支付验证] 异常={}", JsonUtil.toJson(e));
            return;
        }
        if (signVerified) {
            //处理自己的业务逻辑
        }

//        log.info("[支付验证] 验证结果={}", signVerified);
        return;

    }

    @Override
    public void refund(String orderId) {
        AlipayClient client = new DefaultAlipayClient(alipayConfig.notify_url, alipayConfig.app_id, alipayConfig.merchant_private_key, alipayConfig.gatewayUrl, alipayConfig.charset, alipayConfig.alipay_public_key,alipayConfig.sign_type);
        AlipayTradeRefundRequest alipay_request = new AlipayTradeRefundRequest();

        AlipayTradeRefundModel model=new AlipayTradeRefundModel();
        //退款的订单Id，也可以设置流水号
        model.setOutTradeNo(orderId);
        //退款金额
        model.setRefundAmount("0.01");
        alipay_request.setBizModel(model);
        String alipay_response = "";
        try {
            alipay_response = client.execute(alipay_request).getBody();
        } catch (AlipayApiException e) {
//            log.info("【支付宝支付】退款失败 error={}", e);
        }
//        log.info("[支付退款] response={}", alipay_response);
    }
}