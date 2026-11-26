import { flowOnClickOpenPromotionalActivities } from '../../flows/OnClickOpenPromotionalActivities';
import React from 'react';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

/**
 * 点击打开优惠活动
 * 唯一id: leftComponent-onClickOpenPromotionalActivities
 */
export const onClickOpenPromotionalActivities = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setter: Setter,
  dispatch: Dispatch,
  loggedinUser: User | undefined,
  memberType: string | undefined,
): Promise<void> => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  flowOnClickOpenPromotionalActivities({ setter, dispatch, loggedinUser, memberType }).then((result) => {
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
