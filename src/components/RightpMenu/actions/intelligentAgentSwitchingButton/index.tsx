import { onClickOpenIntelligentAgentPanel } from './onClickOpenIntelligentAgentPanel';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsIntelligentAgentSwitchingButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsIntelligentAgentSwitchingButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsIntelligentAgentSwitchingButton => {
  return {
    onClick: (event) => onClickOpenIntelligentAgentPanel(event, setter, dispatch),
  };
};
