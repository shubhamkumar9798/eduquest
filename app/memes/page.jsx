"use client";
import Navbar from "@/components/NavBar";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"; // 👈 import dialog

const initialMemes = [
  {
    id: 1,
    username: "Alice",
    avatar: "https://i.pravatar.cc/100?u=alice",
    caption: "When recursion explains itself...",
    image: "/meme1.jpg",
    likes: 12,
    comments: [
      { id: 1, username: "Bob", text: "😂 this is gold" },
      { id: 2, username: "Charlie", text: "Recursive cat approved" },
    ],
  },
  {
    id: 2,
    username: "Eve",
    avatar: "https://i.pravatar.cc/100?u=eve",
    caption: "Pointers be like...",
    image: "/meme2.jpg",
    likes: 8,
    comments: [],
  },
  {
    id: 3,
    username: "Mallory",
    avatar: "https://i.pravatar.cc/100?u=mallory",
    caption: "AI debugging humans soon 🤯",
    image: "/meme3.jpg",
    likes: 20,
    comments: [{ id: 1, username: "Trent", text: "Bruh, too real 😅" }],
  },
];

export default function MemeCommunity() {
  const [memes, setMemes] = useState(initialMemes);
  const [commentInputs, setCommentInputs] = useState({});
  const [newMeme, setNewMeme] = useState({ caption: "", image: "" });
  const [chatOpen, setChatOpen] = useState(false); // 👈 state for dialog

  const memeOfTheDay = memes.reduce(
    (max, m) => (m.likes > max.likes ? m : max),
    memes[0]
  );

  const toggleLike = (id) => {
    setMemes((prev) =>
      prev.map((m) =>
        m.id === id
          ? { ...m, likes: m.likes + (m.liked ? -1 : 1), liked: !m.liked }
          : m
      )
    );
  };

  const addComment = (id) => {
    if (!commentInputs[id]) return;
    setMemes((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              comments: [
                ...m.comments,
                {
                  id: m.comments.length + 1,
                  username: "You",
                  text: commentInputs[id],
                },
              ],
            }
          : m
      )
    );
    setCommentInputs((c) => ({ ...c, [id]: "" }));
  };

  const postMeme = () => {
    if (!newMeme.caption || !newMeme.image) return;
    const newEntry = {
      id: memes.length + 1,
      username: "You",
      avatar: "https://i.pravatar.cc/100?u=you",
      caption: newMeme.caption,
      image: newMeme.image,
      likes: 0,
      comments: [],
    };
    setMemes([newEntry, ...memes]);
    setNewMeme({ caption: "", image: "" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 pt-20 px-6 py-12 relative overflow-hidden">
      <Navbar />
      {/* Floating Glow Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-700/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-pink-600/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-10">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          Meme Community 🎭
        </h1>

        {/* Meme of the Day */}
        <Card className="bg-purple-800/30 backdrop-blur-xl border border-purple-600/40 rounded-3xl shadow-2xl">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center text-purple-200">
              🌟 Meme of the Day
            </h2>
          </CardHeader>
          <CardContent className="text-center space-y-3">
            <img
              src={memeOfTheDay.image}
              alt="meme of the day"
              className="max-h-80 w-auto rounded-xl shadow-md mx-auto transition-transform hover:scale-[1.02] object-contain"
            />
            <p className="font-medium text-lg text-gray-200">
              {memeOfTheDay.caption}
            </p>
            <p className="text-sm text-purple-300 font-semibold">
              ❤️ {memeOfTheDay.likes} Likes
            </p>
          </CardContent>
        </Card>

        {/* Post New Meme */}
        <Card className="bg-purple-800/30 backdrop-blur-xl border border-purple-600/40 rounded-3xl shadow-lg">
          <CardHeader>
            <h2 className="text-xl font-semibold text-purple-200">📤 Post a Meme</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Caption..."
              value={newMeme.caption}
              onChange={(e) =>
                setNewMeme((m) => ({ ...m, caption: e.target.value }))
              }
              className="bg-purple-900/40 border-purple-600/40 text-white placeholder-gray-400"
            />
            <Input
              placeholder="Image URL..."
              value={newMeme.image}
              onChange={(e) =>
                setNewMeme((m) => ({ ...m, image: e.target.value }))
              }
              className="bg-purple-900/40 border-purple-600/40 text-white placeholder-gray-400"
            />
            <Button
              onClick={postMeme}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white rounded-2xl font-semibold shadow-lg transition"
            >
              🚀 Post Meme
            </Button>
          </CardContent>
        </Card>

        {/* Meme Feed */}
        <div className="space-y-6">
          {memes.map((meme) => (
            <Card
              key={meme.id}
              className="bg-purple-800/30 backdrop-blur-xl border border-purple-600/40 rounded-3xl shadow-lg hover:shadow-xl transition"
            >
              <CardHeader className="flex flex-row items-center gap-3">
                <Avatar className="border-2 border-purple-400">
                  <AvatarImage src={meme.avatar} />
                  <AvatarFallback>{meme.username[0]}</AvatarFallback>
                </Avatar>
                <span className="font-semibold text-gray-200">
                  {meme.username}
                </span>
              </CardHeader>
              <CardContent>
                <img
                  src={meme.image}
                  alt="meme"
                  className="max-h-80 w-full rounded-xl mb-3 shadow-md transition-transform hover:scale-[1.01] object-contain"
                />
                <p className="text-gray-300">{meme.caption}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4">
                {/* Like Button */}
                <div className="flex gap-2 items-center">
                  <Button
                    variant={meme.liked ? "secondary" : "outline"}
                    onClick={() => toggleLike(meme.id)}
                    className={`rounded-full px-4 ${
                      meme.liked
                        ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                        : "border-purple-500 text-purple-300"
                    }`}
                  >
                    👍 {meme.likes}
                  </Button>
                </div>

                {/* Comments */}
                <div className="w-full space-y-2">
                  {meme.comments.map((c) => (
                    <div
                      key={c.id}
                      className="text-sm bg-purple-900/40 border border-purple-700 rounded-lg px-3 py-1 text-purple-200"
                    >
                      <span className="font-semibold text-purple-300">
                        {c.username}:{" "}
                      </span>
                      {c.text}
                    </div>
                  ))}

                  <div className="flex gap-2 mt-2">
                    <Input
                      placeholder="Add a comment..."
                      value={commentInputs[meme.id] || ""}
                      onChange={(e) =>
                        setCommentInputs((ci) => ({
                          ...ci,
                          [meme.id]: e.target.value,
                        }))
                      }
                      className="bg-purple-900/40 border-purple-600/40 text-white placeholder-gray-400"
                    />
                    <Button
                      onClick={() => addComment(meme.id)}
                      className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl"
                    >
                      Post
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Floating Chat Button */}
      <Button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg hover:opacity-90 text-white text-xl"
      >
        💬
      </Button>

      {/* Chat Dialog */}
      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden rounded-2xl">
          <DialogHeader className="p-4 border-b border-purple-700 bg-purple-900">
            <DialogTitle className="text-purple-200">
              🤖 AI Meme Chat
            </DialogTitle>
          </DialogHeader>
          <iframe
            src="/aichat"
            className="w-full h-[500px] border-0"
            title="AI Chat"
          />
        </DialogContent>
      </Dialog>
    </main>
  );
}
