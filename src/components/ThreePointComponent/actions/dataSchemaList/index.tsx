import { onSelectDataSchemaPreview } from './onSelectDataSchemaPreview';
import type { SchemaEntity } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/SchemaEntity';
import type { Dispatch } from 'redux';

export type EventsDataSchemaList = {
  selectSchemaCallback: (
    entity: SchemaEntity,
  ) => void;
};

export const eventsDataSchemaList = (
  dispatch: Dispatch,
): EventsDataSchemaList => {
  return {
    selectSchemaCallback: (entity) => onSelectDataSchemaPreview(entity, dispatch),
  };
};
