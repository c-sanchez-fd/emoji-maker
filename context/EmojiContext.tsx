"use client";

import React, { createContext, useState, useContext } from "react";

type Emoji = {
  id: string;
  url: string;
  liked: boolean;
};

type EmojiContextType = {
  emojis: Emoji[];
  addEmoji: (url: string) => void;
  toggleLike: (id: string) => void;
};

const EmojiContext = createContext<EmojiContextType | undefined>(undefined);

export function EmojiProvider({ children }: { children: React.ReactNode }) {
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  const addEmoji = (url: string) => {
    setEmojis((prev) => [
      ...prev,
      { id: Date.now().toString(), url, liked: false },
    ]);
  };

  const toggleLike = (id: string) => {
    setEmojis((prev) =>
      prev.map((emoji) =>
        emoji.id === id ? { ...emoji, liked: !emoji.liked } : emoji
      )
    );
  };

  return (
    <EmojiContext.Provider value={{ emojis, addEmoji, toggleLike }}>
      {children}
    </EmojiContext.Provider>
  );
}

export function useEmoji() {
  const context = useContext(EmojiContext);
  if (context === undefined) {
    throw new Error("useEmoji must be used within an EmojiProvider");
  }
  return context;
}
