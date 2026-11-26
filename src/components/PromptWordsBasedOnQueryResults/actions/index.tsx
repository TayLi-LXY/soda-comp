import { onInitializePromptWordSet } from './promptWordSetDisplayContainer/onInitializePromptWordSet';
import { eventsClickPromptQuestions } from './clickPromptQuestions';
import type { EventsClickPromptQuestions } from './clickPromptQuestions';

export type Actions = {
  eventsClickPromptQuestions: EventsClickPromptQuestions;
};

export {
  onInitializePromptWordSet,
  eventsClickPromptQuestions,
};
