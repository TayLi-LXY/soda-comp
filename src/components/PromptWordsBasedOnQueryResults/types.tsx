import type { Actions } from './actions';


export type PromptWordsBasedOnQueryResultsWrapperProps =  {
  items: any[] | undefined;
};

export type PromptWordsBasedOnQueryResultsProps = {
  actions: Actions;
  title: string | undefined;
  setTitle: (title: string | undefined) => void;
  items: any[] | undefined;
  onItemClick: (info: { data: PromptProps }) => void;
  setOnItemClick: (onItemClick: (info: { data: PromptProps }) => void) => void;
  styles: Record<SemanticType, React.CSSProperties> | undefined;
  setStyles: (styles: Record<SemanticType, React.CSSProperties> | undefined) => void;
  vertical: boolean;
  setVertical: (vertical: boolean) => void;
  wrap: boolean;
  setWrap: (wrap: boolean) => void;
  fadeIn: boolean;
  setFadeIn: (fadeIn: boolean) => void;
};

