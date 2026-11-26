import React from 'react';
import DialogueModeSwitchingComponentWrapper from '@/components/DialogueModeSwitchingComponent/wrapper';
import { Tooltip, Drawer } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import QAComponentWrapper from '@/components/QAComponent/wrapper';
import DroppedUploadInputWrapper from '@/components/DroppedUploadInput/wrapper';
import ThreePointComponentWrapper from '@/components/ThreePointComponent/wrapper';
import styles from './index.module.css';
import type { DialogueProps } from './types';

/**
 * 组件布局: 对话
 */
const DialogueComponent: React.FC<DialogueProps> = (props) => {

  return (
    <>
      <div
        className={styles.dialogueContainer}
      >
        <div
          className={styles.dialogueContainerDiv0}
        >
          <div
            className={styles.dialogueContainerDiv0Div0}
          >
            <div
              className={styles.dialogueContainerDiv0Div0Div0}
            >
              <div
                className={styles.dialogueContainerDiv0Div0Div0Div0}
              >
                <p
                  className={styles.dialogueContainerDiv0Div0Div0Div0P0}
                >
                  {`AI`}
                </p>
              </div>
              <p
                className={styles.dialogueContainerDiv0Div0Div0P1}
              >
                {props.chatTitleContent}
              </p>
            </div>
            <div
              className={styles.dialogueContainerDiv0Div0Div1}
            >
              { props.dialogueModeSwitchingVisibleControl && (<DialogueModeSwitchingComponentWrapper/>)}
              <div
                className={styles.groupChatSettingsButton}
                {...props.actions.eventsGroupChatSettingsButton}
              >
                <Tooltip
                  className={styles.groupChatSettingsButtonTooltip0}
                  title="聊天信息"
                >
                  <EllipsisOutlined
                    className={styles.groupChatSettingsButtonTooltip0EllipsisOutlined0}
                  />
                </Tooltip>
              </div>
            </div>
          </div>
          <div
            className={styles.dialogueContainerDiv0Div1}
            id="messageSending"
          >
            { props.chatRecordListControl.map((entity, index) => (<QAComponentWrapper
              entity={entity}
              index={index}
            />))}
          </div>
          { props.leftSideDialogVisibleControl && (<div
            className={styles.dialogueContainerDiv0Div2}
          >
            <DroppedUploadInputWrapper
              {...props.actions.eventsDialogueContainerDiv0Div2Div0}
              value={props.inputBoxValue}
              placeholder={props.placeholder}
              disabled={props.disabled}
              readOnly={props.readOnly}
              loading={props.loading}
              autoSize={props.autoSize}
              maxCount={props.maxCount}
              maxSize={props.maxSize}
            />
          </div>)}
          <Drawer
            className={styles.groupChatSettingsDrawer}
            {...props.actions.eventsGroupChatSettingsDrawer}
            title="群聊设置抽屉"
            footer={false}
            closable
            open={props.groupChatSettingsDrawerVisible}
            getContainer={false}
          >
            <ThreePointComponentWrapper
              loggedinUser={props.loggedinUser}
              conversationId={props.conversationId}
              dialogueDataSchemaList={props.dialogueDataSchemaList}
              previewUrlOfSelectedSchema={props.previewUrlOfSelectedSchema}
              dialogueFileList={props.dialogueFileList}
            />
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default DialogueComponent;
