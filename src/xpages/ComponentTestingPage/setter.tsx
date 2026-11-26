

export type Setter = {
  // 语言设置
  setLang: React.Dispatch<React.SetStateAction<string | undefined>>;
  // code设置
  setCode: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 名称设置
  setName: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 文件大小设置
  setByte: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 描述设置
  setDescription: React.Dispatch<React.SetStateAction<React.ReactNode | ((info: { size: string, icon: React.ReactNode, namePrefix?: string, nameSuffix?: string, name?: string, src?: string, type?: string }) => React.ReactNode)>>;
};