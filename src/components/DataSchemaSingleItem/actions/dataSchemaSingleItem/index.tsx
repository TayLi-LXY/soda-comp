import { onClickOnSchemaPreview } from './onClickOnSchemaPreview';
import React from 'react';
import type { Dispatch } from 'redux';
import type { SchemaEntity } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/SchemaEntity';
import type { Setter } from '../../setter';

export type EventsDataSchemaSingleItem = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsDataSchemaSingleItem = (
  setter: Setter,
  dispatch: Dispatch,
  entity: SchemaEntity | undefined,
  selectSchemaCallback: ((entity: SchemaEntity) => void) | undefined,
): EventsDataSchemaSingleItem => {
  return {
    onClick: (event) => onClickOnSchemaPreview(event, setter, dispatch, entity, selectSchemaCallback),
  };
};
