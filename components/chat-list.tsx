"use client"
import { Message } from 'ai'

import { Separator } from '@/components/ui/separator'
import { ChatMessage } from '@/components/chat-message'

export interface ChatList {
  messages: Message[];
  setMessages?: (messages: Message[]) => void;
}

export function ChatList({ messages, setMessages }: ChatList) {
  function updateMessage(newMessage: Message) {
    if(!setMessages){
      return;
    }
    let prevMessages = structuredClone(messages);
    prevMessages = prevMessages.map((m) => (m.id === newMessage.id ? newMessage : m));
    setMessages(prevMessages);
  }
  if (!messages.length) {
    return null
  }

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} updateMessage={updateMessage} />
          {index < messages.length - 1 && (
            <Separator className="my-4 md:my-8" />
          )}
        </div>
      ))}
    </div>
  )
}