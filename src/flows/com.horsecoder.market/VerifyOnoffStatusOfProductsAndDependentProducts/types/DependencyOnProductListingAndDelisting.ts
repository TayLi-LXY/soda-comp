
/**
 * 依赖产品的上架下架
 */
export type DependencyOnProductListingAndDelisting = {

  /**
   * 依赖的产品ID
   */
  dependentProductId: string;

  /**
   * 上架下架
   */
  ifListed: number;

  /**
   * 依赖的产品名称
   */
  dependentProductName: string;

}
