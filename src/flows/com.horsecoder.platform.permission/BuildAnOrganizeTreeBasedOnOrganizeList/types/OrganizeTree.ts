import type { OrganizeTO } from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList/types/OrganizeTO';

/**
 * 组织树
 */
export type OrganizeTree = {

  /**
   * 组织
   */
  organize: OrganizeTO;

  /**
   * 下级组织树
   */
  children: OrganizeTree[];

}
