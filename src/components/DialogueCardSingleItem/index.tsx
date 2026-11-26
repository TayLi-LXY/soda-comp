import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { Badge } from 'antd';
import styles from './index.module.css';
import type { DialogueCardSingleItemProps } from './types';

/**
 * 组件布局: 对话卡片单项
 */
const DialogueCardSingleItemComponent: React.FC<DialogueCardSingleItemProps> = (props) => {

  return (
    <>
      <div
        className={styles.dialogueCardSingleItemDiv}
        {...props.actions.eventsDialogueCardSingleItemDiv}
      >
        <div
          className={clsx(styles.dialogueCardSingleItem, {
            [styles.dialogueCardSingleItemDialogueCardWithNoBackgroundColorSelected]: props.selectChangePackageDataInDialogueCard === 'dialogueCardWithNoBackgroundColorSelected',
            [styles.dialogueCardSingleItemSelectBackgroundColorForDialogueCard]: props.selectChangePackageDataInDialogueCard === 'selectBackgroundColorForDialogueCard',
          })}
        >
          <div
            className={styles.dialogueCardSingleItemDiv0}
          >
            <div
              className={styles.dialogueCardSingleItemDiv0Div0}
            >
              <Image
                className={styles.dialogueCardSingleItemDiv0Div0Image0}
                src={props.avatarUrl}
                alt=""
                width="40"
                height="40"
              />
            </div>
          </div>
          <div
            className={styles.dialogueCardSingleItemDiv1}
          >
            <div
              className={styles.dialogueCardSingleItemDiv1Div0}
            >
              <p
                className={styles.dialogueCardSingleItemDiv1Div0P0}
              >
                {props.entity?.name}
              </p>
              <p
                className={styles.timeInformation}
              >
                {props.dialogueCardTimeDisplay}
              </p>
            </div>
            <div
              className={styles.dialogueCardSingleItemDiv1Div1}
            >
              <p
                className={styles.recentMessageAbbreviationParagraph}
              >
                {props.recentMessageAbbreviation}
              </p>
              <div
                className={styles.dialogueCardSingleItemDiv1Div1Div1}
              >
                <Badge
                  className={styles.dialogueCardSingleItemDiv1Div1Div1Badge0}
                  count={props.entity?.unreadMessageCount}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogueCardSingleItemComponent;
