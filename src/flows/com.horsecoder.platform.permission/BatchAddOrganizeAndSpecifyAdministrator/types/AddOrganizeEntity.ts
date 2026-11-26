import type { OrganizeTO } from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList/types/OrganizeTO';

/**
 * 新增组织实体
 */
export type AddOrganizeEntity = {

  /**
   * 组织
   */
  organize: OrganizeTO;

  /**
   * 分配人账户ID
   */
  assignAccountId: string;

  /**
   * 目标组织ID
   */
  targetOrganizeId: string;

  /**
   * 模板参数字典
   */
  templateParameterMap?: any;

}
