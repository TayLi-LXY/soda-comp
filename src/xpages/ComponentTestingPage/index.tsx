import React from 'react';
import CodeHighlightingWrapper from '@/components/CodeHighlighting/wrapper';
import FileCardComponentWrapper from '@/components/FileCardComponent/wrapper';
import BubbleComponentWrapper from '@/components/BubbleComponent/wrapper';
import FolderComponentWrapper from '@/components/FolderComponent/wrapper';
import ThinkComponentWrapper from '@/components/ThinkComponent/wrapper';
import DroppedUploadInputWrapper from '@/components/DroppedUploadInput/wrapper';
import styles from './index.module.css';
import type { ComponentTestingPageProps } from './types';

/**
 * 组件布局: 组件测试页面
 */
const ComponentTestingPagePage: React.FC<ComponentTestingPageProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <p
          className={styles.divP0}
        >
          {`代码高亮`}
        </p>
        <CodeHighlightingWrapper
          lang={props.lang}
          code={props.code}
        />
        <div
          className={styles.divDiv2}
        >
          <p
            className={styles.divDiv2P0}
          >
            {`文件卡片`}
          </p>
          <FileCardComponentWrapper
            name={props.name}
            byte={props.byte}
            description={props.description}
          />
        </div>
        <div
          className={styles.divDiv3}
        >
          <p
            className={styles.divDiv3P0}
          >
            {`气泡卡片`}
          </p>
          <BubbleComponentWrapper
            content={props.content}
            editable={props.editable}
            typing={props.typing}
            header={props.header}
            footer={props.footer}
            avatar={props.avatar}
          />
        </div>
        <div
          className={styles.divDiv4}
        >
          <p
            className={styles.divDiv4P0}
          >
            {`文件夹组件`}
          </p>
          <FolderComponentWrapper
            treeData={props.treeData}
            selectable={props.selectable}
            emptyRender={props.emptyRender}
          />
        </div>
        <div
          className={styles.divDiv5}
        >
          <p
            className={styles.divDiv5P0}
          >
            {`思考过程Think`}
          </p>
          <ThinkComponentWrapper
            children={props.children}
            title={props.title}
            blink={props.blink}
          />
        </div>
        <div
          className={styles.divDiv6}
        >
          <p
            className={styles.divDiv6P0}
          >
            {`拖拽附件输入框`}
          </p>
          <dragAndDropAttachmentInputBox
            className={styles.divDiv6DragAndDropAttachmentInputBox1}
          />
        </div>
        <div
          className={styles.divDiv7}
        >
          <p
            className={styles.divDiv7P0}
          >
            {`新拖拽测试`}
          </p>
          <DroppedUploadInputWrapper
            value={props.inputBoxValue}
            placeholder="请输入内容..."
            disabled={false}
            readOnly={false}
            loading={false}
            autoSize={{ maxRows: 8 }}
            accept={undefined}
            maxCount={undefined}
            maxSize={undefined}
            onInputChange={props.setInputBoxValue}
            onSubmit={props.onSubmit}
            onCancel={() => {}}
            onAttachmentsChange={props.onAttachmentsChange}
          />
        </div>
      </div>
    </>
  );
};

export default ComponentTestingPagePage;
