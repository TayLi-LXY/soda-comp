import React from 'react';
import TeamMembersOnlineStatusWrapper from '@/components/TeamMembersOnlineStatus/wrapper';
import { Tag } from 'antd';
import styles from './index.module.css';
import type { CreateAGroupChatMemberItemProps } from './types';

/**
 * 组件布局: 创建群聊成员单项
 */
const CreateAGroupChatMemberItemComponent: React.FC<CreateAGroupChatMemberItemProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          <div
            className={styles.divDiv0Div0}
          >
            <p
              className={styles.divDiv0Div0P0}
            >
              {`张`}
            </p>
            <TeamMembersOnlineStatusWrapper/>
          </div>
          <div
            className={styles.divDiv0Div1}
          >
            <p
              className={styles.divDiv0Div1P0}
            >
              {`姓名`}
            </p>
            <p
              className={styles.divDiv0Div1P1}
            >
              {`部门`}
            </p>
          </div>
        </div>
        <div
          className={styles.divDiv1}
        >
          <Tag
            className={styles.divDiv1Tag0}
            color="magenta"
          >
            {`开发`}
          </Tag>
        </div>
      </div>
    </>
  );
};

export default CreateAGroupChatMemberItemComponent;
