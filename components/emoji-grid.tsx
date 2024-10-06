"use client";

import Image from "next/image";
import { Download, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { useEmoji } from "@/context/EmojiContext";

export default function EmojiGrid() {
  const { emojis, toggleLike } = useEmoji();

  const handleDownload = (url: string) => {
    // Implement download functionality
    console.log("Downloading:", url);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {emojis.map((emoji) => (
        <Card key={emoji.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="relative aspect-square">
              <Image
                src={emoji.url}
                alt="Generated Emoji"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </CardContent>
          <CardFooter className="p-4 flex justify-between">
            <Button
              size="default"
              variant="ghost"
              onClick={() => handleDownload(emoji.url)}
            >
              <Download size={24} />
            </Button>
            <Button
              size="default"
              variant="ghost"
              onClick={() => toggleLike(emoji.id)}
              className={emoji.liked ? "text-red-500" : ""}
            >
              <Heart size={24} fill={emoji.liked ? "currentColor" : "none"} />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
