
import { BulbOutlined, InfoCircleOutlined, RocketOutlined, SmileOutlined, WarningOutlined } from '@ant-design/icons';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowCodeOnInitializePromptWordSetParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnInitializePromptWordSetResults {
}

/**
 * 初始化提示词集
 * FLOW_NODE_ON_INITIALIZE_PROMPT_WORD_SET
 * 唯一id: PromptWordsBasedOnQueryResults/FLOW_CODE_ON_INITIALIZE_PROMPT_WORD_SET
 */
export const flowCodeOnInitializePromptWordSet = async (params: FlowCodeOnInitializePromptWordSetParams): Promise<FlowCodeOnInitializePromptWordSetResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;

  // setter.setTitle('🤔 接下来你可能还想:');
  // setter.setItems([
  //   {
  //     key: '1',
  //     icon: <BulbOutlined style={{ color: '#FFD700' }} />,
  //     label: '激发创意',
  //     description: '有什么新项目的灵感吗？',
  //   },
  //   {
  //     key: '2',
  //     icon: <InfoCircleOutlined style={{ color: '#1890FF' }} />,
  //     label: '了解背景信息',
  //     description: '帮我理解这个话题的背景。',
  //   },
  //   {
  //     key: '3',
  //     icon: <RocketOutlined style={{ color: '#722ED1' }} />,
  //     label: '效率提升',
  //     description: '如何更高效地工作？',
  //   },
  //   {
  //     key: '4',
  //     icon: <SmileOutlined style={{ color: '#52C41A' }} />,
  //     label: '讲个笑话',
  //     description: '为什么蚂蚁不会生病？因为它们有小小的抗体！',
  //   },
  //   {
  //     key: '5',
  //     icon: <WarningOutlined style={{ color: '#FF4D4F' }} />,
  //     label: '常见问题解决',
  //     description: '如何解决常见问题？分享一些技巧！',
  //   },
  // ]);

  // 结束流程
  return {}
};
