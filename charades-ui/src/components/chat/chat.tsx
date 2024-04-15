import { chatAtom } from '@atoms/chat/chat-atom';
import { useAtomValue, useSetAtom } from 'jotai';
import { KeyboardEvent, useRef } from 'react';

const USERNAMES = ['Robot', 'Kubica', 'Bumblebee'];

export default function Chat() {
  const { messages } = useAtomValue(chatAtom);

  const setMessages = useSetAtom(chatAtom);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' && inputRef.current) {
      setMessages((chat) => {
        if (chat.messages) {
          chat.messages.push(event.currentTarget.value);
        } else {
          chat.messages = [event.currentTarget.value];
        }
        return { ...chat };
      });
      inputRef.current.value = '';
    }
  };

  return (
    <section className="flex h-full flex-col justify-between rounded-lg bg-black-400 p-4">
      <div>Chat</div>
      {messages && !!messages.length && (
        <div className="max-h-[420px] overflow-y-auto rounded-tl-lg rounded-tr-lg bg-black-500 p-4 text-white">
          {messages.map((message, index) => {
            return (
              <div key={`${message}-${index}`} className="">
                <span>{USERNAMES[index % USERNAMES.length]}: </span>
                <span>{message}</span>
              </div>
            );
          })}
        </div>
      )}
      <div>
        <input ref={inputRef} placeholder="Text..." onKeyDown={inputHandler}></input>
      </div>
    </section>
  );
}
