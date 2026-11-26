import React from 'react';
import Image from 'next/image';
import peanutDAvatar from '@/assets/peanutDAvatar.png';
import { Tag } from 'antd';
import BubbleComponentWrapper from '@/components/BubbleComponent/wrapper';
import IntelligentAgentSelectComponentWrapper from '@/components/IntelligentAgentSelectComponent/wrapper';
import QueryResultDisplayComponentWrapper from '@/components/QueryResultDisplayComponent/wrapper';
import LargeModelReplyComponentWrapper from '@/components/LargeModelReplyComponent/wrapper';
import ReadUnreadComponentWrapper from '@/components/ReadUnreadComponent/wrapper';
import InformationOperationComponentWrapper from '@/components/InformationOperationComponent/wrapper';
import styles from './index.module.css';
import type { ReplyIndividualComponentProps } from './types';

/**
 * 组件布局: 回复单项组件
 */
const ReplyIndividualComponentComponent: React.FC<ReplyIndividualComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.replyIndividualComponent}
      >
        <div
          className={styles.replyIndividualComponentDiv0}
        >
          <Image
            className={styles.replyIndividualComponentDiv0Image0}
            src={peanutDAvatar}
            alt=""
            width="36"
            height="36"
          />
        </div>
        <div
          className={styles.replyIndividualComponentDiv1}
        >
          { props.intelligentAgentNicknameVisibleControl && (<div
            className={styles.replyIndividualComponentDiv1Div0}
          >
            <p
              className={styles.replyIndividualComponentDiv1Div0P0}
            >
              {props.entity.senderName}
            </p>
            { props.characterVisibilityControl && (<Tag
              className={styles.replyIndividualComponentDiv1Div0Tag1}
              color="magenta"
            >
              {`品红色`}
            </Tag>)}
            <p
              className={styles.replyIndividualComponentDiv1Div0P2}
            >
              {props.entity?.showTime}
            </p>
          </div>)}
          <div
            className={styles.replyBubbleContainer}
          >
            <div
              className={styles.replyBubbleSubContainer}
              {...props.actions.eventsReplyBubbleSubContainer}
            >
              <BubbleComponentWrapper
                content={props.messageContent}
                streaming
                placement="start"
                typing={props.ifTypewriter}
              />
            </div>
          </div>
          <div
            className={styles.replyIndividualComponentDiv1Div2}
          >
            <IntelligentAgentSelectComponentWrapper/>
          </div>
          { props.queryResultsDisplayVisibleControls && (<div
            className={styles.replyIndividualComponentDiv1Div3}
          >
            <QueryResultDisplayComponentWrapper
              entity={props.entity}
              resultRefreshSignal={props.resultRefreshSignal}
            />
          </div>)}
          { props.customLargeModelReplyVisibleControl && (<div
            className={styles.replyIndividualComponentDiv1Div4}
          >
            <div
              className={styles.replyIndividualComponentDiv1Div4Div0}
            >
              <div
                className={styles.replyIndividualComponentDiv1Div4Div0Div0}
              >
                { props.largeModelReplyComponentVisibleControl && (<LargeModelReplyComponentWrapper/>)}
                <p
                  className={styles.replyIndividualComponentDiv1Div4Div0Div0P1}
                >
                  {props.messageContent}
                </p>
              </div>
            </div>
            <div
              className={styles.replyIndividualComponentDiv1Div4Div1}
            >
              { props.replyReadUnreadVisibleControl && (<ReadUnreadComponentWrapper/>)}
            </div>
          </div>)}
          <div
            className={styles.replyIndividualComponentDiv1Div5}
          >
            { props.responseMessageOperationVisibleControl && (<InformationOperationComponentWrapper/>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReplyIndividualComponentComponent;
