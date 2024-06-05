import { chatAtom } from '@atoms/chat/chat-atom';
import { userAtom } from '@atoms/user/user-atom';
import { useWebsocket } from '@hooks/use-websocket';
import Button from '@ui/button/button';
import { useAtomValue, useSetAtom } from 'jotai';
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

const USERNAMES = ['Robot', 'Kubica', 'Bumblebee'];

export default function Chat() {
  const { messages } = useAtomValue(chatAtom);
  const { uuid } = useAtomValue(userAtom);
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

    socket.send({ user: uuid, message: inputValue });
    setInputValue('');

    event.preventDefault();
  };

  useEffect(() => {
    socket.on('data', (data) => {
      setMessages((chat) => {
        if (chat.messages) {
          chat.messages.push(data.message);
        } else {
          chat.messages = [data.message];
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
          {messages.map((message, index) => (
            <div key={`${message}-${index}`} className="">
              <span>{USERNAMES[index % USERNAMES.length]}: </span>
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
