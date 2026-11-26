import React from 'react';
import styles from './index.module.css';
import type { CollaborativeFlowProps } from './types';

/**
 * 组件布局: 协作流程
 * 纯展示组件，所有状态和回调由 wrapper 注入
 */
const CollaborativeFlowComponent: React.FC<CollaborativeFlowProps> = ({
  scenarios,
  agents,
  scenarioIdx,
  stepIdx,
  playing,
  activeAgentKeys,
  canvasRef,
  onSelectScenario,
  onSelectStep,
  onPlay,
  onReset,
}) => {
  const sc = scenarios[scenarioIdx];

  return (
    <div className={styles.div}>
      {/* ── 左侧面板 ── */}
      <div className={styles.divDiv0}>
        {/* Header */}
        <div className={styles.divDiv0Div0}>
          <h1 className={styles.panelTitle}>🔮 智能体协作任务</h1>
          <p className={styles.panelSubtitle}>多智能体协作过程可视化引擎</p>
        </div>

        {/* Body */}
        <div className={styles.divDiv0Div1}>
          {/* 场景选择 */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              {/* <span className={styles.sectionTitleDot} /> */}
              {/* 场景选择 */}
            </div>
            <div className={styles.scenarioList}>
              {scenarios.map((s, i) => (
                <button
                  key={i}
                  className={i === scenarioIdx ? styles.scenarioActive : styles.scenario}
                  onClick={() => onSelectScenario(i)}
                >
                  <div className={styles.scenarioName}>{s.name}</div>
                  <div className={styles.scenarioDesc}>{s.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 参与智能体 */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <span className={styles.sectionTitleDot} />
              参与智能体
            </div>
            <div className={styles.agentList}>
              {sc.agents.map((key) => {
                const a = agents[key];
                const isActive = activeAgentKeys.has(key);
                return (
                  <div key={key} className={isActive ? styles.agentItemActive : styles.agentItem}>
                    <span className={styles.agentDot} style={{ background: a.color }}>
                      {isActive && (
                        <span className={styles.agentDotPing} style={{ background: a.color }} />
                      )}
                    </span>
                    <span className={styles.agentName}>
                      {a.emoji} {a.name}
                    </span>
                    <span className={isActive ? styles.agentStatusActive : styles.agentStatus}>
                      {isActive ? '● 活跃' : '○ 待命'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 协作步骤 */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <span className={styles.sectionTitleDot} />
              协作步骤
            </div>
            <div className={styles.stepList}>
              {sc.steps.map((s, i) => {
                const isDone = i < stepIdx;
                const isActive = i === stepIdx;
                return (
                  <button key={i} className={styles.step} onClick={() => onSelectStep(i)}>
                    <div className={styles.stepLine}>
                      <div
                        className={
                          isActive
                            ? styles.stepDotActive
                            : isDone
                            ? styles.stepDotDone
                            : styles.stepDot
                        }
                      />
                      {i < sc.steps.length - 1 && <div className={styles.stepConnector} />}
                    </div>
                    <div className={styles.stepContent}>
                      <div
                        className={
                          isActive
                            ? styles.stepTitleActive
                            : isDone
                            ? styles.stepTitleDone
                            : styles.stepTitle
                        }
                      >
                        {agents[s.from].emoji} → {agents[s.to].emoji} {s.label}
                      </div>
                      <div className={styles.stepDesc}>{s.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 推荐库
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <span className={styles.sectionTitleDot} />
              推荐 React 库
            </div>
            <div className={styles.libGrid}>
              {[
                { name: 'React Flow', rec: true },
                { name: 'AntV G6', rec: true },
                { name: 'Framer Motion', rec: true },
                { name: 'D3.js', rec: false },
                { name: 'R3F (Three)', rec: false },
                { name: 'Cytoscape', rec: false },
              ].map((lib) => (
                <span key={lib.name} className={lib.rec ? styles.libBadgeRec : styles.libBadge}>
                  {lib.rec && <span className={styles.libStar}>★</span>}
                  {lib.name}
                </span>
              ))}
            </div>
          </div> */}
        </div>

        {/* Footer: Controls */}
        <div className={styles.panelFooter}>
          <button className={styles.btnReset} onClick={onReset}>
            ↺ 重置
          </button>
          <button className={styles.btnPlay} onClick={onPlay}>
            {playing ? '⏸ 暂停' : '▶ 播放协作流程'}
          </button>
        </div>
      </div>

      {/* ── 右侧画布 ── */}
      <div className={styles.divDiv1}>
        <canvas ref={canvasRef} className={styles.canvas} />

        {/* 底部统计 */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{sc.stats.agents}</span>
            <span className={styles.statLabel}>参与智能体</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{sc.stats.steps}</span>
            <span className={styles.statLabel}>协作步骤</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {stepIdx >= 0 ? Math.min(stepIdx + 1, sc.stats.messages) : 0}
            </span>
            <span className={styles.statLabel}>消息传递</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{sc.stats.time}</span>
            <span className={styles.statLabel}>预估耗时</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborativeFlowComponent;
