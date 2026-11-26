import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

import request from 'axios';
export async function getModelData(filePath: string): Promise<any> {
  return request.get(`/horsecoder-storage/api/sys/storage/file/download?fileName=${filePath}&user=agent`,{
    responseType: 'blob', // 确保返回的是 Blob 数据
  });
}


/**
 * 监听Url
 * 唯一id: tableVisualization-onMonitorURL
 */
export const onMonitorURL = (
  setter: Setter,
  dispatch: Dispatch,
  previewUrlOfSelectedSchema: string | undefined,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */

  getModelData(previewUrlOfSelectedSchema || "").then((response) => {
    console.log('Model data fetched successfully:', response.data);
    const file = new File([response.data], 'data.csv', { type: 'csv' });
    setter.setFileList([file]);
  }).catch((error) => {
    console.error('Error fetching model data:', error);
  });

  /*
   * [END OF YOUR CODE]
   */
};
