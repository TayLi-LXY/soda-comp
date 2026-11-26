import type { Actions } from './actions';
import { VisualCanvasConfig, VisualToolbarConfig } from '@horsecoder/visual-core';


export type ModelCanvasWrapperProps =  {
  diagramRef: any;
  toolbarConfig: VisualToolbarConfig;
};

export type ModelCanvasProps = {
  actions: Actions;
  diagramRef: any;
  canvasConfig: VisualCanvasConfig;
  toolbarConfig: VisualToolbarConfig;
};

