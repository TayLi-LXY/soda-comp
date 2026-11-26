import { BulbOutlined, InfoCircleOutlined, RocketOutlined, SmileOutlined, WarningOutlined } from '@ant-design/icons';
import type { PromptQuestion } from '@/flows/com.horsecoder.platform.mall.dialogue/InitializeResultsBasedOnQueryResultsAndDisplaym/types/PromptQuestion';

/**
 * 入参明细:
 * promptQuestionList 提示问题列表
 */
export interface FlowCodeTheConversionResultDisplaysParametersParams {
  promptQuestionList: PromptQuestion[];
}

/**
 * 出参明细:
 * items 提示词列表
 */
export interface FlowCodeTheConversionResultDisplaysParametersResults {
  items: any;
}

const promptIcons = [
  <BulbOutlined style={{ color: '#FFD700' }} />,
  <InfoCircleOutlined style={{ color: '#1890FF' }} />,
  <RocketOutlined style={{ color: '#722ED1' }} />,
  <SmileOutlined style={{ color: '#52C41A' }} />,
  <WarningOutlined style={{ color: '#FF4D4F' }} />,
];

/**
 * 转化结果展示出参
 * FLOW_NODE_THE_CONVERSION_RESULT_DISPLAYS_PARAMETERS
 * 唯一id: QueryResultDisplayComponent/FLOW_CODE_THE_CONVERSION_RESULT_DISPLAYS_PARAMETERS
 */
export const flowCodeTheConversionResultDisplaysParameters = async (params: FlowCodeTheConversionResultDisplaysParametersParams): Promise<FlowCodeTheConversionResultDisplaysParametersResults> => {
  // 初始化流程出参
  let items;
  // 开始流程
  const { promptQuestionList } = params;
  items = (promptQuestionList ?? []).map((promptQuestion, index) => ({
    key: `${index + 1}`,
    icon: promptIcons[index % promptIcons.length],
    label: promptQuestion.label,
    description: promptQuestion.description,
  }));

  // 结束流程
  return {
    items,
  }
};
