import type { Actions } from './actions';
import type { DefaultOptionType } from 'rc-select/lib/Select';


export type InputBoxLargeModelSelectWrapperProps =  {
  largeModelSelectCallback: ((model: string) => void) | undefined;
};

export type InputBoxLargeModelSelectProps = {
  actions: Actions;
  largeModelSelectCallback: ((model: string) => void) | undefined;
  inputBoxLargeModelSelectComponentOptions: DefaultOptionType[];
  setInputBoxLargeModelSelectComponentOptions: (inputBoxLargeModelSelectComponentOptions: DefaultOptionType[]) => void;
};

