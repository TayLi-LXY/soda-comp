import type { PermissionModel } from '@/flows/com.horsecoder.platform.permission/NewOrganizationPermissions/types/PermissionModel';

/**
 * 正负权限
 */
export type PositiveNegativePermission = {

  /**
   * 权限模型
   */
  permissionModel: PermissionModel;

  /**
   * 授权时间
   */
  authorizationTime: number;

}
