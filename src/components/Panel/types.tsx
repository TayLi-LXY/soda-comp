import { VisualToolbarConfig } from '@horsecoder/visual-core';
import type { SchemaEntity } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/SchemaEntity';


export type PanelWrapperProps =  {
};

export type PanelProps = {
  activeSubpanel: string | undefined;
  diagramRef: any;
  toolbarConfig: VisualToolbarConfig;
  dialogueDataSchemaList: SchemaEntity[];
  canvasVisible: boolean;
  setCanvasVisible: (canvasVisible: boolean) => void;
  previewUrlOfSelectedSchema: string | undefined;
  tableVisualizationVisible: boolean;
  setTableVisualizationVisible: (tableVisualizationVisible: boolean) => void;
  collaborativeFlowVisible: boolean;
  setCollaborativeFlowVisible: (collaborativeFlowVisible: boolean) => void;
};

