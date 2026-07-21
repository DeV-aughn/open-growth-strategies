"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { AIPromptBox } from "./ai-prompt-box";
import { brand } from "../../content";

type Msg = { role: "agent" | "user"; text: string };

/** Scripted booking flow — stands in for a live LLM until it's wired to a backend. */
const scriptedReplies = [
  "Great — what trade are you in, and which city or ZIP do you serve?",
  "Perfect. What's the best name and number for Alex to reach you on?",
  `Got it — you're pencilled in for a 20-minute fit call. Alex will text to confirm the exact time within a few hours. Talk soon! 👋`,
];

export function AIBookingAgent() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "agent",
      text: `Hi! I'm the ${brand.short} booking agent. Tell me a little about your business and I'll get you on Alex's calendar.`,
    },
  ]);
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, typing]);

  const send = (text: string) => {
    setMessages((m) => [...m, { role: "user", text }]);
    setTyping(true);
    const reply = scriptedReplies[Math.min(step, scriptedReplies.length - 1)];
    window.setTimeout(() => {
      setMessages((m) => [...m, { role: "agent", text: reply }]);
      setTyping(false);
      setStep((s) => s + 1);
    }, 750);
  };

  return (
    <div className="w-full text-left">
      <div className="card edge-lit rounded-2xl! p-3">
        <div className="flex items-center gap-2 px-1 pb-3">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-accent/15 text-accent">
            <Sparkles size={14} />
          </span>
          <span className="text-[0.85rem] font-medium">AI booking agent</span>
          <span className="ml-auto flex items-center gap-1.5 text-[0.72rem] text-ink-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            online
          </span>
        </div>

        <div className="max-h-56 space-y-2 overflow-y-auto px-1">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn(
                "flex",
                m.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-3.5 py-2 text-[0.88rem] leading-relaxed",
                  m.role === "user"
                    ? "bg-accent text-white"
                    : "bg-surface-3 text-ink-muted"
                )}
              >
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="flex gap-1 rounded-2xl bg-surface-3 px-3.5 py-3">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-subtle [animation-delay:-0.2s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-subtle [animation-delay:-0.1s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-subtle" />
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div className="pt-3">
          <AIPromptBox onSend={send} placeholder="Type your trade, city, name…" />
        </div>
      </div>
      <p className="mt-2 text-center text-[0.72rem] text-ink-3">
        Demo agent · ready to connect to live scheduling
      </p>
    </div>
  );
}
