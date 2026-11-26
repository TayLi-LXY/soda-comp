import React from 'react';
import { Spin, Form, Input, Button } from 'antd';
import styles from './index.module.css';
import type { ScanedProps } from './types';

/**
 * 组件布局: 微信扫码后页面
 */
const ScanedPage: React.FC<ScanedProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.weChatCallbackPage}
        >
          <Spin
            className={styles.weChatCallbackPageSpin0}
            spinning={props.loading}
          >
            { props.visibleControlInLoginPanel && (<div
              className={styles.weChatCallbackPageSpin0Div0}
            >
              <div
                className={styles.weChatCallbackPageSpin0Div0Div0}
              >
                <h3
                  className={styles.weChatCallbackPageSpin0Div0Div0H30}
                >
                  {`绑定手机号`}
                </h3>
              </div>
              <div
                className={styles.weChatCallbackPageSpin0Div0Div1}
              >
                <div
                  className={styles.weChatCallbackPageSpin0Div0Div1Div0}
                >
                  { props.mobileVerificationFormVisibleControl && (<div
                    className={styles.weChatCallbackPageSpin0Div0Div1Div0Div0}
                  >
                    <Form
                      className={styles.weChatCallbackPageSpin0Div0Div1Div0Div0Form0}
                      form={props.registrationMobileVerificationForm}
                      layout="vertical"
                    >
                      <Form.Item
                        className={styles.weChatCallbackPageSpin0Div0Div1Div0Div0Form0FormItem0}
                        key="mobilePhoneNumber"
                        name="mobilePhoneNumber"
                        label="手机号"
                        rules={[{ required: true, message: "请输入手机号" }]}
                      >
                        <Input
                          className={styles.weChatCallbackPageSpin0Div0Div1Div0Div0Form0FormItem0Input0}
                          placeholder="请输入手机号"
                        />
                      </Form.Item>
                      <div
                        className={styles.weChatCallbackPageSpin0Div0Div1Div0Div0Form0Div1}
                      >
                        <Form.Item
                          className={styles.weChatCallbackPageSpin0Div0Div1Div0Div0Form0Div1FormItem0}
                          key="verifyCode"
                          name="verifyCode"
                          label="验证码"
                          rules={[{ required: true, message: "请输入验证码" }]}
                        >
                          <Input
                            className={styles.weChatCallbackPageSpin0Div0Div1Div0Div0Form0Div1FormItem0Input0}
                            placeholder="请输入验证码"
                          />
                        </Form.Item>
                        <div
                          className={styles.getVerificationCodeButton}
                          {...props.actions.eventsGetVerificationCodeButton}
                        >
                          <Button
                            className={styles.getVerificationCodeButtonButton0}
                            type="primary"
                            disabled={props.buttonDisable}
                          >
                            {props.countdownData}
                          </Button>
                        </div>
                      </div>
                    </Form>
                    <div
                      className={styles.weChatCallbackPageSpin0Div0Div1Div0Div0Div1}
                    >
                      <Button
                        className={styles.bindPhoneNumberButton}
                        {...props.actions.eventsBindPhoneNumberButton}
                        type="primary"
                      >
                        {`验证`}
                      </Button>
                    </div>
                  </div>)}
                </div>
              </div>
            </div>)}
          </Spin>
        </div>
      </div>
    </>
  );
};

export default ScanedPage;
