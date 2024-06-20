export interface Chat {
  messages?: Message[];
}

export interface Message {
  message: string;
  username: string;
}
