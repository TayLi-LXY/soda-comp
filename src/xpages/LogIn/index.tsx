import React from 'react';
import { Button, Form, Input } from 'antd';
import Image from 'next/image';
import weChat from '@/assets/weChat.png';
import google from '@/assets/google.png';
import lark from '@/assets/lark.png';
import weCom from '@/assets/weCom.png';
import dingTalk from '@/assets/dingTalk.png';
import WeChatLoginWrapper from '@/components/WeChatLogin/wrapper';
import GoogleLoginWrapper from '@/components/GoogleLogin/wrapper';
import styles from './index.module.css';
import type { LogInProps } from './types';

/**
 * 组件布局: 登录
 */
const LogInPage: React.FC<LogInProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          { props.visibleControlInLoginPanel && (<div
            className={styles.divDiv0Div0}
          >
            <div
              className={styles.divDiv0Div0Div0}
            >
              <h3
                className={styles.divDiv0Div0Div0H30}
              >
                {`欢迎回来`}
              </h3>
              <p
                className={styles.divDiv0Div0Div0P1}
              >
                {`登录以继续使用倚码 HorseCoder`}
              </p>
            </div>
            <div
              className={styles.divDiv0Div0Div1}
            >
              <div
                className={styles.divDiv0Div0Div1Div0}
              >
                <Button
                  className={styles.accountLoginButton}
                  {...props.actions.eventsAccountLoginButton}
                  type="primary"
                >
                  {`账号登录`}
                </Button>
                <Button
                  className={styles.verificationCodeLoginSwitchButton}
                  {...props.actions.eventsVerificationCodeLoginSwitchButton}
                  type="primary"
                >
                  {`验证码登录`}
                </Button>
              </div>
              <div
                className={styles.divDiv0Div0Div1Div1}
              >
                { props.accountLoginVisibleControl && (<div
                  className={styles.divDiv0Div0Div1Div1Div0}
                >
                  <Form
                    className={styles.loginForm}
                    form={props.loginForm}
                    layout="vertical"
                  >
                    <Form.Item
                      className={styles.account}
                      key="account"
                      name="account"
                      label="用户名"
                      rules={[{ required: false, message: "请输入用户名" }]}
                    >
                      <Input
                        className={styles.accountInput0}
                        placeholder="请输入用户名"
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.password}
                      key="password"
                      name="password"
                      label="密码"
                      rules={[{ required: false, message: "请输入密码" }]}
                    >
                      <Input.Password
                        className={styles.passwordInputPassword0}
                        placeholder="请输入密码"
                      />
                    </Form.Item>
                    <div
                      className={styles.loginFormDiv2}
                    >
                      <Form.Item
                        className={styles.verifyCode}
                        key="verifyCode"
                        name="verifyCode"
                        label="验证码"
                        rules={[{ required: false, message: "请输入验证码" }]}
                      >
                        <Input
                          className={styles.verifyCodeInput0}
                          placeholder="请输入验证码"
                        />
                      </Form.Item>
                      <div
                        className={styles.imageCaptchaButton}
                        {...props.actions.eventsImageCaptchaButton}
                      >
                        <Image
                          className={styles.imageCaptchaButtonImage0}
                          width={10}
                          height={10}
                          src={props.graphicCaptchaBaseImage}
                        />
                      </div>
                    </div>
                  </Form>
                  <div
                    className={styles.divDiv0Div0Div1Div1Div0Div1}
                  >
                    <Button
                      className={styles.accountLogin}
                      {...props.actions.eventsAccountLogin}
                      type="primary"
                    >
                      {`登录`}
                    </Button>
                  </div>
                </div>)}
                { props.verificationCodeLoginVisibleControl && (<div
                  className={styles.divDiv0Div0Div1Div1Div1}
                >
                  <Form
                    className={styles.verificationCodeLoginForm}
                    form={props.verificationCodeLoginForm}
                    layout="vertical"
                  >
                    <Form.Item
                      className={styles.mobilePhoneNumber}
                      key="mobilePhoneNumber"
                      name="mobilePhoneNumber"
                      label="手机号"
                      rules={[{ required: false, message: "请输入手机号" }]}
                    >
                      <Input
                        className={styles.mobilePhoneNumberInput0}
                        placeholder="请输入手机号"
                      />
                    </Form.Item>
                    <div
                      className={styles.verificationCodeLoginFormDiv1}
                    >
                      <Form.Item
                        className={styles.sMSVerificationCode}
                        key="sMSVerificationCode"
                        name="sMSVerificationCode"
                        label="短信验证码"
                        rules={[{ required: false, message: "请输入短信验证码" }]}
                      >
                        <Input
                          className={styles.sMSVerificationCodeInput0}
                          placeholder="请输入短信验证码"
                        />
                      </Form.Item>
                      <div
                        className={styles.verificationCodeLoginFormDiv1Div1}
                      >
                        <Button
                          className={styles.getSMSButton}
                          {...props.actions.eventsGetSMSButton}
                          type="primary"
                          disabled={props.buttonDisable}
                        >
                          {props.countdownData}
                        </Button>
                      </div>
                    </div>
                  </Form>
                  <div
                    className={styles.divDiv0Div0Div1Div1Div1Div1}
                  >
                    <Button
                      className={styles.verificationCodeLoginButton}
                      {...props.actions.eventsVerificationCodeLoginButton}
                      type="primary"
                    >
                      {`登录`}
                    </Button>
                  </div>
                </div>)}
                <div
                  className={styles.divDiv0Div0Div1Div1Div2}
                >
                  <Button
                    className={styles.divDiv0Div0Div1Div1Div2Button0}
                    type="link"
                  >
                    {`忘记密码？`}
                  </Button>
                  <Button
                    className={styles.registrationJumpButton}
                    {...props.actions.eventsRegistrationJumpButton}
                    type="link"
                  >
                    {`立即注册`}
                  </Button>
                </div>
                <div
                  className={styles.divDiv0Div0Div1Div1Div3}
                >
                  <p
                    className={styles.divDiv0Div0Div1Div1Div3P0}
                  >
                    {`其他登录方式`}
                  </p>
                </div>
                <div
                  className={styles.divDiv0Div0Div1Div1Div4}
                >
                  <div
                    className={styles.weChatLoginButton}
                    {...props.actions.eventsWeChatLoginButton}
                  >
                    <Image
                      className={styles.weChatLoginButtonImage0}
                      src={weChat}
                      alt=""
                      width="28"
                      height="28"
                    />
                  </div>
                  <div
                    className={styles.googleLoginButton}
                    {...props.actions.eventsGoogleLoginButton}
                  >
                    <Image
                      className={styles.googleLoginButtonImage0}
                      src={google}
                      alt=""
                      width="28"
                      height="28"
                    />
                  </div>
                  <div
                    className={styles.divDiv0Div0Div1Div1Div4Div2}
                  >
                    <Image
                      className={styles.divDiv0Div0Div1Div1Div4Div2Image0}
                      src={lark}
                      alt=""
                      width="28"
                      height="28"
                    />
                  </div>
                  <div
                    className={styles.divDiv0Div0Div1Div1Div4Div3}
                  >
                    <Image
                      className={styles.divDiv0Div0Div1Div1Div4Div3Image0}
                      src={weCom}
                      alt=""
                      width="28"
                      height="28"
                    />
                  </div>
                  <div
                    className={styles.divDiv0Div0Div1Div1Div4Div4}
                  >
                    <Image
                      className={styles.divDiv0Div0Div1Div1Div4Div4Image0}
                      src={dingTalk}
                      alt=""
                      width="28"
                      height="28"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>)}
          <div
            className={styles.divDiv0Div1}
          >
            { props.weChatLoginPanelVisibleControl && (<WeChatLoginWrapper/>)}
            { props.googleLoginPanelVisibleControls && (<GoogleLoginWrapper/>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
