import { Messages } from "./types";

import { menuMessages } from "./messages/menu";
import { gameMessages } from "./messages/game";
import { quizMessages } from "./messages/quiz";
import { playersMessages } from "./messages/players";
import { curiosityMessages } from "./messages/curiosity";

export const allMessages = {
  ...menuMessages,
  ...gameMessages,
  ...quizMessages,
  ...playersMessages,
  ...curiosityMessages,
} as Messages;
