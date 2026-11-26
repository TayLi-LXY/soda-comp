import { flowOnRefreshGraphicCaptcha } from '../../flows/OnRefreshGraphicCaptcha';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

/**
 * 刷新图形验证码
 * 唯一id: logIn-onRefreshGraphicCaptcha
 */
export const onRefreshGraphicCaptcha = (
  setter: Setter,
  dispatch: Dispatch,
  graphicCaptchaRefreshSignal: string | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnRefreshGraphicCaptcha({ setter, dispatch, graphicCaptchaRefreshSignal }).then((result) => {
    // console.log(result);
  }).catch((err) => {
    console.error(err);
  });
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
};
