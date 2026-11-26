'use client';
import React, { useMemo, useState } from 'react';
import type { WeChatLoginWrapperProps } from './types';
import { eventsReturnAccountLoginButton } from './actions';
import type { Setter } from './setter';
import WeChatLoginComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 微信登录
 */
const WeChatLoginWrapper: React.FC<WeChatLoginWrapperProps> = () => {
  /*
   * 前置代码数据区域
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  const dispatch = useDispatch();
  // 内部可变数据: 二维码展示组件二维码扫描内容(qRCodeDisplayComponentCodeContent)
  const [qRCodeDisplayComponentCodeContent, setQRCodeDisplayComponentCodeContent] = useState<string>('');
  // 内部可变数据: 二维码展示组件二维码生成级别(qRCodeDisplayComponentLevel)
  const [qRCodeDisplayComponentLevel, setQRCodeDisplayComponentLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  // 内部可变数据: 二维码展示组件logo图片(qRCodeDisplayComponentLogoImage)
  const [qRCodeDisplayComponentLogoImage, setQRCodeDisplayComponentLogoImage] = useState<string | undefined>(undefined);
  // 内部可变数据: 二维码展示组件logo宽度(qRCodeDisplayComponentLogoWidth)
  const [qRCodeDisplayComponentLogoWidth, setQRCodeDisplayComponentLogoWidth] = useState<number | undefined>(30);
  // 内部可变数据: 二维码展示组件logo高度(qRCodeDisplayComponentLogoHeight)
  const [qRCodeDisplayComponentLogoHeight, setQRCodeDisplayComponentLogoHeight] = useState<number | undefined>(30);
  // 内部可变数据: 二维码展示组件二维码尺寸(qRCodeDisplayComponentQrCodeSize)
  const [qRCodeDisplayComponentQrCodeSize, setQRCodeDisplayComponentQrCodeSize] = useState<number | undefined>(120);
  // 内部可变数据: 二维码展示组件二维码密度(qRCodeDisplayComponentQRCodeDensity)
  const [qRCodeDisplayComponentQRCodeDensity, setQRCodeDisplayComponentQRCodeDensity] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  // 内部可变数据: 二维码展示组件logo透明度(qRCodeDisplayComponentLogoOpacity)
  const [qRCodeDisplayComponentLogoOpacity, setQRCodeDisplayComponentLogoOpacity] = useState<number | undefined>(1);
  // 内部可变数据: 二维码展示组件是否移除logo遮挡部分二维码(qRCodeDisplayComponentRemoveQrCodeBehindLogo)
  const [qRCodeDisplayComponentRemoveQrCodeBehindLogo, setQRCodeDisplayComponentRemoveQrCodeBehindLogo] = useState<boolean | undefined>(true);
  const setter: Setter = useMemo(() => { return { setQRCodeDisplayComponentCodeContent, setQRCodeDisplayComponentLevel, setQRCodeDisplayComponentLogoImage, setQRCodeDisplayComponentLogoWidth, setQRCodeDisplayComponentLogoHeight, setQRCodeDisplayComponentQrCodeSize, setQRCodeDisplayComponentQRCodeDensity, setQRCodeDisplayComponentLogoOpacity, setQRCodeDisplayComponentRemoveQrCodeBehindLogo };}, []);
  const actions = {
    // 组件returnAccountLoginButton事件响应触发的交互入口
    eventsReturnAccountLoginButton: useMemo(() => eventsReturnAccountLoginButton(setter, dispatch), [setter, dispatch]),
  };

  /*
   * end
   */

  /*
   * 获取父组件传值
   * 定义当前组件数据
   * 定义静态变量
   * 获取组件redux数据
   * 获取组件挂载模型数据
   * 获取组件挂载流程数据
   * 装配子组件数据
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  return (
    <WeChatLoginComponent 
      qRCodeDisplayComponentCodeContent={qRCodeDisplayComponentCodeContent}
      setQRCodeDisplayComponentCodeContent={setQRCodeDisplayComponentCodeContent}
      qRCodeDisplayComponentLevel={qRCodeDisplayComponentLevel}
      setQRCodeDisplayComponentLevel={setQRCodeDisplayComponentLevel}
      qRCodeDisplayComponentLogoImage={qRCodeDisplayComponentLogoImage}
      setQRCodeDisplayComponentLogoImage={setQRCodeDisplayComponentLogoImage}
      qRCodeDisplayComponentLogoWidth={qRCodeDisplayComponentLogoWidth}
      setQRCodeDisplayComponentLogoWidth={setQRCodeDisplayComponentLogoWidth}
      qRCodeDisplayComponentLogoHeight={qRCodeDisplayComponentLogoHeight}
      setQRCodeDisplayComponentLogoHeight={setQRCodeDisplayComponentLogoHeight}
      qRCodeDisplayComponentQrCodeSize={qRCodeDisplayComponentQrCodeSize}
      setQRCodeDisplayComponentQrCodeSize={setQRCodeDisplayComponentQrCodeSize}
      qRCodeDisplayComponentQRCodeDensity={qRCodeDisplayComponentQRCodeDensity}
      setQRCodeDisplayComponentQRCodeDensity={setQRCodeDisplayComponentQRCodeDensity}
      qRCodeDisplayComponentLogoOpacity={qRCodeDisplayComponentLogoOpacity}
      setQRCodeDisplayComponentLogoOpacity={setQRCodeDisplayComponentLogoOpacity}
      qRCodeDisplayComponentRemoveQrCodeBehindLogo={qRCodeDisplayComponentRemoveQrCodeBehindLogo}
      setQRCodeDisplayComponentRemoveQrCodeBehindLogo={setQRCodeDisplayComponentRemoveQrCodeBehindLogo}
      actions={actions}
    />
  );
};

export default WeChatLoginWrapper;
