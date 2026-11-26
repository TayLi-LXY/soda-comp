import React from 'react';
import styles from './index.module.css';
import type { DroppedUploadInputProps } from './types';
import { Attachments, Sender } from '@ant-design/x';
import { Badge, Button } from 'antd';
import { CloudUploadOutlined, LinkOutlined } from '@ant-design/icons';

/**
 * 组件布局: 附件可拖拽上传输入框
 */
const DroppedUploadInputComponent: React.FC<DroppedUploadInputProps> = (props) => {

  const senderHeader = (
    <>
      <Sender.Header
        title="文件上传"
        open={props.open}
        onOpenChange={props.onOpenChange}
        styles={{
          content: {
            padding: 0,
          },
        }}
      />
      <div
        className={`${styles.attachmentsWrapper} ${!props.open ? styles.attachmentsWrapperHidden : ''}`}
      >
        <Attachments
          beforeUpload={() => false}
          items={props.attachmentsItems}
          onChange={({ file, fileList }) => {
            props.onAttachmentChange(file, fileList);
          }}
          accept={props.accept}
          maxCount={props.maxCount}
          getDropContainer={() => document.body}
          placeholder={(type) =>
            type === 'drop'
              ? {
                title: '拖拽上传文件区域',
              }
              : {
                icon: <CloudUploadOutlined />,
                title: '拖拽到此区域',
                description: '点击或拖拽到此区域可以上传文件',
              }
          }
        />
      </div>
    </>
  );

  return (
    <>
      <div
        className={styles.div}
      >
        <Sender
          header={senderHeader}
          prefix={
            <Badge dot={((props.attachmentsItems ?? []).length > 0) && !props.open}>
              <Button onClick={() => props.onOpenChange(!props.open)} icon={<LinkOutlined />} />
            </Badge>
          }
          value={props.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readOnly={props.readOnly}
          loading={props.loading}
          autoSize={props.autoSize}
          onChange={props.onInputChange}
          onSubmit={props.value ? props.onSubmit : undefined}
          onCancel={props.onCancel}
        />
      </div>
    </>
  );
};

export default DroppedUploadInputComponent;
