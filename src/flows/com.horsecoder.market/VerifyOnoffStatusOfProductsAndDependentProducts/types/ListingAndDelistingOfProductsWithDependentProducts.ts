import type { DependencyOnProductListingAndDelisting } from '@/flows/com.horsecoder.market/VerifyOnoffStatusOfProductsAndDependentProducts/types/DependencyOnProductListingAndDelisting';

/**
 * 产品及其依赖产品的上架下架
 */
export type ListingAndDelistingOfProductsWithDependentProducts = {

  /**
   * 产品ID
   */
  productId: string;

  /**
   * 依赖产品的上架下架
   */
  dependencyOnProductsIfListed: DependencyOnProductListingAndDelisting[];

  /**
   * 产品名称
   */
  productName: string;

  /**
   * 是否上下架
   */
  ifListed: number;

}
