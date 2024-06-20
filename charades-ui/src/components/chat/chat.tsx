import { chatAtom } from '@atoms/chat/chat-atom';
import { Message } from '@atoms/chat/chat.types';
import { userAtom } from '@atoms/user/user-atom';
import { useWebsocket } from '@hooks/use-websocket';
import Button from '@ui/button/button';
import { useAtomValue, useSetAtom } from 'jotai';
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

export default function Chat() {
  const { messages } = useAtomValue(chatAtom);
  const { username, uuid } = useAtomValue(userAtom);
  const [inputValue, setInputValue] = useState('');
  const { socket } = useWebsocket();

  const setMessages = useSetAtom(chatAtom);
  const formRef = useRef<HTMLFormElement>(null);

  const inputHandler = (event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      onSubmitHandler(event);
    }
  };

  const onSubmitHandler = (event: FormEvent) => {
    if (!inputValue) {
      return;
    }

    socket.send({ user: uuid, username: username, message: inputValue });
    setInputValue('');

    event.preventDefault();
  };

  useEffect(() => {
    socket.on('data', (data: Message) => {
      setMessages((chat) => {
        if (chat.messages) {
          chat.messages.push(data);
        } else {
          chat.messages = [data];
        }
        return { ...chat };
      });
    });
  }, [setMessages, socket]);

  return (
    <section className="flex h-full flex-col justify-between rounded-lg bg-black-400 p-4">
      <div>Chat</div>
      {messages && !!messages.length && (
        <div className="max-h-[420px] overflow-y-auto rounded-tl-lg rounded-tr-lg bg-black-500 p-4 text-white">
          {messages.map(({ username, message }, index) => (
            <div key={`${message}-${index}`} className="">
              <span>{username}: </span>
              <span>{message}</span>
            </div>
          ))}
        </div>
      )}
      <form ref={formRef} onSubmit={onSubmitHandler}>
        <input
          placeholder="Text..."
          onKeyDown={inputHandler}
          value={inputValue}
          onInput={(newValue) => setInputValue(newValue.currentTarget.value)}
        ></input>
        <Button role="submit" variant="primary">
          Send
        </Button>
      </form>
    </section>
  );
}
