import React from 'react';
import SchemeCardSingleComponentWrapper from '@/components/SchemeCardSingleComponent/wrapper';
import VoiceBarComponentWrapper from '@/components/VoiceBarComponent/wrapper';
import styles from './index.module.css';
import type { LargeModelReplyComponentProps } from './types';

/**
 * 组件布局: 大模型回复组件
 */
const LargeModelReplyComponentComponent: React.FC<LargeModelReplyComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        { props.visibleControlOfReplyText && (<div
          className={styles.divDiv0}
        >
          <p
            className={styles.divDiv0P0}
          >
            {`正文段落`}
          </p>
        </div>)}
        { props.recommendedSolutionReplyVisibleControl && (<div
          className={styles.divDiv1}
        >
          <div
            className={styles.divDiv1Div0}
          >
            <p
              className={styles.divDiv1Div0P0}
            >
              {`基于您的需求,我为您构思了2个创作方案:`}
            </p>
          </div>
          <div
            className={styles.divDiv1Div1}
          >
            <SchemeCardSingleComponentWrapper/>
            { props.listOfIndividualItemsOnPlanCard.map((entity, index) => (<SchemeCardSingleComponentWrapper
              entity={entity}
              index={index}
            />))}
          </div>
          <div
            className={styles.divDiv1Div2}
          >
            <p
              className={styles.divDiv1Div2P0}
            >
              {`请选择一个您最感兴趣的方案,或者提出您的修改意见。我们可以在此基础上进行迭代优化。`}
            </p>
          </div>
        </div>)}
        { props.voiceBarComponentVisibleControl && (<div
          className={styles.divDiv2}
        >
          <VoiceBarComponentWrapper/>
        </div>)}
      </div>
    </>
  );
};

export default LargeModelReplyComponentComponent;
