import { MessageKey } from "../constants";

export type Option = {
  text: string;
  next: MessageKey;
};

export type Message = {
  text: string;
  next?: MessageKey;
  image?: string;
  options?: Option[];
  correctAnswer?: string;
};

export type Messages = {
  [key in MessageKey]: Message;
};
