"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { clsx } from "clsx";
import type { FaqItem } from "@/lib/faq";

export function FAQAccordion({
  items,
  defaultOpenIndex = 0,
}: {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="divide-y divide-border-soft">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="py-5">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 text-left"
            >
              <span className="text-base font-bold text-ink sm:text-lg">{item.question}</span>
              <span
                className={clsx(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors",
                  isOpen ? "border-brand-300 text-brand-600" : "border-border-soft text-muted-2"
                )}
              >
                {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              </span>
            </button>
            <div
              className={clsx(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
