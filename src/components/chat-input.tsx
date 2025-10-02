"use client";

import { ReactNode, useRef } from "react";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (input: string) => Promise<void>;
}

export function ChatInput({ input, setInput, onSubmit }: ChatInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const isDisabled = input.trim() === "";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isDisabled) {
      await onSubmit(input);
    }
  };

  return (
    <form
      className="flex flex-col gap-2 relative items-center border-1 border-neutral-400 rounded-lg overflow-hidden"
      onSubmit={handleSubmit}
    >
      <div className="bg-[#FEFEFE] w-full -p-12 flex flex-row">
        <input
          ref={inputRef}
          className="bg-[#FFF] px-2 py-1.5 w-full outline-none text-zinc-800"
          placeholder="Send a message..."
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          autoFocus
        />
        <button className={`bg-neutral-700 px-2 py-1.5 outline-none text-white ${isDisabled ? "opacity-70" : ""}`} disabled={isDisabled}>→</button>
      </div>
    </form>
  );
}
