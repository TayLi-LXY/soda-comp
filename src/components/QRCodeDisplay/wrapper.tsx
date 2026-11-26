import React, { useEffect, useState } from 'react';
import type { QRCodeDisplayWrapperProps } from './types';
import QRCodeDisplayComponent from './index';
import { Spin } from 'antd';


/**
 * 组件逻辑: 二维码展示组件
 */
const QRCodeDisplayWrapper: React.FC<QRCodeDisplayWrapperProps> = (props) => {
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
  // 内部数据: 二维码扫描内容(codeContent)
  const { codeContent } = props;
  // 内部数据: 二维码生成级别(level)
  const { level } = props;
  // 内部数据: logo图片(logoImage)
  const { logoImage } = props;
  // 内部数据: logo宽度(logoWidth)
  const { logoWidth } = props;
  // 内部数据: logo高度(logoHeight)
  const { logoHeight } = props;
  // 内部数据: 二维码尺寸(qrCodeSize)
  const { qrCodeSize } = props;
  // 内部数据: 二维码密度(qRCodeDensity)
  const { qRCodeDensity } = props;
  // 内部数据: logo透明度(logoOpacity)
  const { logoOpacity } = props;
  // 内部数据: 是否移除logo遮挡部分二维码(removeQrCodeBehindLogo)
  const { removeQrCodeBehindLogo } = props;

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

  // 加载状态：初始为 true，等 codeContent 有值后变为 false
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (codeContent) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [codeContent]);

  // 加载中显示动画
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
        <Spin size="large" tip="生成二维码中..." />
      </div>
    );
  }

  // 如果没有二维码内容，不显示组件
  if (!codeContent) {
    return null;
  }
  /*
   * [END OF YOUR CODE]
   */
  return (
    <QRCodeDisplayComponent
      codeContent={codeContent}
      level={level}
      logoImage={logoImage}
      logoWidth={logoWidth}
      logoHeight={logoHeight}
      qrCodeSize={qrCodeSize}
      qRCodeDensity={qRCodeDensity}
      logoOpacity={logoOpacity}
      removeQrCodeBehindLogo={removeQrCodeBehindLogo}
    />
  );
};

export default QRCodeDisplayWrapper;
