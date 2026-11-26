import React from 'react';
import { Input, Button } from 'antd';
import CreateAGroupChatMemberItemWrapper from '@/components/CreateAGroupChatMemberItem/wrapper';
import styles from './index.module.css';
import type { NewGroupChatConversationModalProps } from './types';

/**
 * 组件布局: 新建群聊对话弹窗
 */
const NewGroupChatConversationModalComponent: React.FC<NewGroupChatConversationModalProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          <p
            className={styles.divDiv0P0}
          >
            {`名称（选填）`}
          </p>
          <Input
            className={styles.divDiv0Input1}
            placeholder="不填则自动生成"
          />
        </div>
        <div
          className={styles.divDiv1}
        >
          <p
            className={styles.divDiv1P0}
          >
            {`选择成员`}
          </p>
          <div
            className={styles.divDiv1Div1}
          >
            { props.createAListOfGroupChatMembers.map((entity, index) => (<CreateAGroupChatMemberItemWrapper
              entity={entity}
              index={index}
            />))}
          </div>
        </div>
        <div
          className={styles.divDiv2}
        >
          <Button
            className={styles.divDiv2Button0}
            type="default"
          >
            {`取消`}
          </Button>
          <Button
            className={styles.divDiv2Button1}
            type="primary"
          >
            {`创建`}
          </Button>
        </div>
      </div>
    </>
  );
};

export default NewGroupChatConversationModalComponent;
