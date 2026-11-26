import React from 'react';
import DisplayCardItemsAfterFileUploadWrapper from '@/components/DisplayCardItemsAfterFileUpload/wrapper';
import { Input, Button } from 'antd';
import LeftolbarBelowInputBoxWrapper from '@/components/LeftolbarBelowInputBox/wrapper';
import styles from './index.module.css';
import type { InputBoxProps } from './types';
import { SendOutlined } from '@ant-design/icons';

/**
 * 组件布局: 输入框
 */
const InputBoxComponent: React.FC<InputBoxProps> = (props) => {

  return (
    <>
      <div
        className={styles.inputBox}
      >
        <div
          className={styles.inputBoxDiv0}
        >
          { props.userUploadedFileList.map((entity, index) => (<DisplayCardItemsAfterFileUploadWrapper
            {...props.actions.eventsFileUploadList}
            entity={entity}
            index={index}
          />))}
        </div>
        <div
          className={styles.inputBoxDiv1}
        >
          <Input.TextArea
            className={styles.inputArea}
            {...props.actions.eventsInputArea}
            placeholder="描述你想创建的应用，例如：做一个带客户跟进、销售漏斗和数据报表的 CRM"
            autoSize={false}
            value={props.inputContent}
          />
        </div>
        <div
          className={styles.inputBoxDiv2}
        >
          <div
            className={styles.inputBoxDiv2Div0}
          >
            <LeftolbarBelowInputBoxWrapper/>
          </div>
          <div
            className={styles.inputBoxDiv2Div1}
          >
            <div
              className={styles.inputBoxDiv2Div1Div0}
            />
            <Button
              className={styles.sendMessageButton}
              {...props.actions.eventsSendMessageButton}
              type="primary"
              icon={<SendOutlined />}
            >
              {`发送`}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputBoxComponent;
