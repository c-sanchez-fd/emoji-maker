"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEmoji } from "@/context/EmojiContext";

export default function EmojiForm() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { addEmoji } = useEmoji();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const response = await fetch("/api/generate-emoji", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      if (data.success) {
        addEmoji(data.output[0]); // Assuming the API returns an array of image URLs
        setPrompt(""); // Clear the input after successful generation
      } else {
        console.error("Failed to generate emoji:", data.error);
      }
    } catch (error) {
      console.error("Error generating emoji:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <Input
        type="text"
        placeholder="Enter prompt to generate an emoji"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit" disabled={isGenerating}>
        {isGenerating ? "Generating..." : "Generate"}
      </Button>
    </form>
  );
}
