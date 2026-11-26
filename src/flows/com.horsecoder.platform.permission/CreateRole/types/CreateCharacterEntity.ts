import type { PermissionModel } from '@/flows/com.horsecoder.platform.permission/NewOrganizationPermissions/types/PermissionModel';

/**
 * 创建角色实体
 */
export type CreateCharacterEntity = {

  /**
   * 角色ID
   */
  id?: string;

  /**
   * 组织Id
   */
  organizeId: string;

  /**
   * 角色标题
   */
  title: string;

  /**
   * 父角色ID
   */
  parentRoleId?: string;

  /**
   * 关键字
   */
  keyword: string;

  /**
   * 权限列表
   */
  permissionList?: PermissionModel[];

  /**
   * 账户ID
   */
  accountId: string;

}
