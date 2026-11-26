import type { Actions } from './actions';
import type { SchemaEntity } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/SchemaEntity';


export type DataSchemaSingleItemWrapperProps =  {
  entity: SchemaEntity | undefined;
  index: number;
  selectSchemaCallback: ((entity: SchemaEntity) => void) | undefined;
};

export type DataSchemaSingleItemProps = {
  actions: Actions;
  entity: SchemaEntity | undefined;
  index: number;
  selectSchemaCallback: ((entity: SchemaEntity) => void) | undefined;
  schemaFieldList: any[];
  setSchemaFieldList: (schemaFieldList: any[]) => void;
};

