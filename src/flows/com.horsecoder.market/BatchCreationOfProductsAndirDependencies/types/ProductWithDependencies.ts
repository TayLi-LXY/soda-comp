import type { ProductOpen } from '@/flows/com.horsecoder.market/BatchCreationOfProductsAndirDependencies/types/ProductOpen';

/**
 * 产品及其依赖列表
 */
export type ProductWithDependencies = {

  /**
   * 产品开放
   */
  productOpen: ProductOpen;

  /**
   * 依赖的产品编码列表
   */
  listOfDependentProductNumber: string[];

}
