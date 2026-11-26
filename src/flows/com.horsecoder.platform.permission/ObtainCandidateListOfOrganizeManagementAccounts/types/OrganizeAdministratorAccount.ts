import type { AccountEntity } from '@/flows/com.horsecoder.platform.permission/FilterAccountsListCanBoundToOrganize/types/AccountEntity';

/**
 * 组织管理员账户
 */
export type OrganizeAdministratorAccount = {

  /**
   * 组织账户Id
   */
  id?: string;

  /**
   * 账户Id
   */
  accountId?: string;

  /**
   * 组织Id
   */
  organizeId?: string;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

  /**
   * 组织账户实体
   */
  accountEntity: AccountEntity;

}
