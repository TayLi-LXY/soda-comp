import type { OrganizeTypeResult } from '@/flows/com.horsecoder.platform.permission/FilterOrganizeTypeListBasedOnOrganizeTypeIdList/types/OrganizeTypeResult';
import type { OrganizeTO } from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList/types/OrganizeTO';
import type { AccountEntity } from '@/flows/com.horsecoder.platform.permission/FilterAccountsListCanBoundToOrganize/types/AccountEntity';

/**
 * 组织详情
 */
export type OrganizeDetail = {

  /**
   * 组织类型
   */
  organizeType: OrganizeTypeResult;

  /**
   * 组织
   */
  organize: OrganizeTO;

  /**
   * 父级组织
   */
  parentOrganize?: OrganizeTO;

  /**
   * 管理员账户
   */
  adminAccount: AccountEntity;

  /**
   * 组织人数
   */
  organizePersonNumber: number;

}
