import type { Actions } from './actions';
import { VisualCanvasConfig, VisualToolbarConfig } from '@horsecoder/visual-core';


export type DataModeWrapperProps =  {
};

export type DataModeProps = {
  // actions: Actions;
  diagramRef: any;
  canvasConfig: VisualCanvasConfig;
  toolbarConfig: VisualToolbarConfig;
};

