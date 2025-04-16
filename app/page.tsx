"use client";

import { ChatForm } from "@/components/chat-form";
import { ChatMessages } from "@/components/chat-messages";
import { MessageArea } from "@/components/message-area";
import { useChat } from "@ai-sdk/react";
import { Suspense } from "react";
import dynamic from "next/dynamic";
const EventListenerTest = dynamic(
  () =>
    import("@/components/event-listener-test").then(
      (mod) => mod.EventListenerTest
    ),
  { ssr: false }
);
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    api: "/api/chat",
  });

  return (
    <main
      className={`
  min-h-screen p-12
  flex flex-col items-stretch justify-center 
  prose max-w-none prose-sm prose-p:my-0
`}
    >
      <Suspense>
        <EventListenerTest />
      </Suspense>
      {messages.length === 0 && (
        <div className="mb-2 flex flex-col items-center">
          <h2 className="text-3xl font-bold">How Can I help you??</h2>
        </div>
      )}
      {messages.length > 0 && (
        <MessageArea status={status} messages={messages} className="flex-1">
          <ChatMessages messages={messages} />
        </MessageArea>
      )}
      <ChatForm
        inputValue={input}
        onInputChange={handleInputChange}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit");
          handleSubmit(e);
        }}
      />
    </main>
  );
}
