import type { DefaultOptionType } from 'rc-select/lib/Select';


export type Setter = {
  // 输入框大模型选择组件选项设置
  setInputBoxLargeModelSelectComponentOptions: React.Dispatch<React.SetStateAction<DefaultOptionType[]>>;
};