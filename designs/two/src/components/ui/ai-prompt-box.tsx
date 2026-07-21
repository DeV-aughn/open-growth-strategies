"use client";

import { useRef, useState } from "react";
import { ArrowUp, Paperclip, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * AI prompt box — native recreation of easemize/ai-prompt-box (21st.dev).
 * Auto-growing textarea with attach / voice affordances and a send button.
 * Enter sends, Shift+Enter makes a newline. Styled to the Linear tokens.
 */
export function AIPromptBox({
  onSend,
  placeholder = "Message the booking agent…",
  disabled,
  className,
}: {
  onSend?: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}) {
  const [value, setValue] = useState("");
  const taRef = useRef<HTMLTextAreaElement>(null);

  const grow = () => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  const submit = () => {
    const text = value.trim();
    if (!text || disabled) return;
    onSend?.(text);
    setValue("");
    requestAnimationFrame(grow);
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-hairline bg-surface-2 p-2.5 transition-colors focus-within:border-hairline-strong",
        className
      )}
    >
      <textarea
        ref={taRef}
        rows={1}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          grow();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            submit();
          }
        }}
        placeholder={placeholder}
        className="max-h-40 w-full resize-none bg-transparent px-2 pt-1.5 text-[0.95rem] leading-relaxed text-ink outline-none placeholder:text-ink-3"
      />
      <div className="mt-1 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-lg text-ink-subtle transition-colors hover:bg-surface-3 hover:text-ink"
            aria-label="Attach a file"
          >
            <Paperclip size={16} />
          </button>
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-lg text-ink-subtle transition-colors hover:bg-surface-3 hover:text-ink"
            aria-label="Use voice"
          >
            <Mic size={16} />
          </button>
        </div>
        <button
          type="button"
          onClick={submit}
          disabled={!value.trim() || disabled}
          className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-white transition enabled:hover:bg-accent-hover disabled:opacity-40"
          aria-label="Send message"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </div>
  );
}
