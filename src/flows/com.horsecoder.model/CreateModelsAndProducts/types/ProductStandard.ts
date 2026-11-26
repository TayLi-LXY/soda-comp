import type { RouteStandard } from '@/flows/com.horsecoder.model/CreateModelsAndProducts/types/RouteStandard';

/**
 * 产品标准
 */
export type ProductStandard = {

  /**
   * ID
   */
  id: string;

  /**
   * 标题
   */
  title: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 平台
   */
  platform: string;

  /**
   * 框架
   */
  framework: string;

  /**
   * 路由列表
   */
  routes: RouteStandard[];

}
