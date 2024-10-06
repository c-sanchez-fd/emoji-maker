import EmojiForm from "@/components/emoji-form";
import EmojiGrid from "@/components/emoji-grid";
import { EmojiProvider } from "@/context/EmojiContext";

export default function Home() {
  return (
    <EmojiProvider>
      <div className="flex flex-col items-center min-h-screen p-8 gap-12">
        <h1 className="text-3xl font-bold">Emoji maker</h1>
        <EmojiForm />
        <EmojiGrid />
      </div>
    </EmojiProvider>
  );
}
